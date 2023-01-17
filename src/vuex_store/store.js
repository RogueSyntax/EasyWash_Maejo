import axios from "axios";

import { createStore } from "vuex";

import { db } from "../../plugins_db/firebaseInit";

let washing_machine = window.localStorage.getItem("Machine");

// Create a new store instance.
export const createMyStore = () => {
  return createStore({
    state: {
      washing_machine: washing_machine ? JSON.parse(washing_machine) : [],
    },
    mutations: {
      setCounter(state, ind) {
        this.commit("saveData", ind);
        if (state.washing_machine[ind].data.status != "Available") {
          let intervalId = setInterval(() => {
            state.washing_machine[ind].data.countDown =
              state.washing_machine[ind].data.countDown - 1000;
            this.commit("saveData", ind);
            if (state.washing_machine[ind].data.countDown == 59000) {
              console.log(
                "ตู้เครื่องที่ : " +
                  state.washing_machine[ind].data.id +
                  " เหลือเวลาอีก 59 วินาที"
              );
              this.commit("sendLineNotify", ind);
            }
            if (state.washing_machine[ind].data.countDown <= 0) {
              state.washing_machine[ind].data.status = "Available";
              state.washing_machine[ind].data.isHidden = false;
              state.washing_machine[ind].data.countDown = 0;
              state.washing_machine[ind].data.coin = 0;
              document.getElementById("song").play();
              clearInterval(intervalId);
              this.commit("saveData", ind);
            }
          }, 1000);
        }
      },
      createMachine(state) {
        window.localStorage.setItem(
          "Machine",
          JSON.stringify(state.washing_machine)
        );
      },

      saveData(state, ind) {
        this.commit("updateDB", ind);
        window.localStorage.setItem(
          "Machine",
          JSON.stringify(state.washing_machine)
        );
      },
      async updateDB(state, ind) {
        const DocRef = db.doc(
          "washing_machine/" + state.washing_machine[ind].id
        );
        await DocRef.update({
          coin: state.washing_machine[ind].data.coin,
          countDown: state.washing_machine[ind].data.countDown,
          isHidden: state.washing_machine[ind].data.isHidden,
          status: state.washing_machine[ind].data.status,
        });
      },

      async sendLineNotify(state, ind) {
        const access_token = "sUmP03LOid7WHXOhKMQED9CR9E6a7aG1KblB7ZQ2iJj";
        const line1 = `เครื่องซักผ้าหมายเลข ${state.washing_machine[ind].data.id}`;
        const line2 = `เหลือเวลาอีก : ${
          state.washing_machine[ind].data.countDown / 1000
        } วินาที`;
        const line3 = `สามารถดูรายละเอียดได้ที่ https://easywash-maejo-b1e7f.web.app/`;
        const message = `${line1}\n${line2}\n${line3}`;
        try {
          const res = await axios.post(
            // "https://cors-anywhere.herokuapp.com/https://notify-api.line.me/api/notify"
            "https://proxy.cors.sh/https://notify-api.line.me/api/notify",
            { message },
            {
              headers: {
                'x-cors-api-key': 'temp_4607a3c894e8f37ad008d7026067e00a', //key temporary will expired in 3 days
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${access_token}`,
              },
            }
          );

          console.log(res);
          return true;
        } catch (error) {
          console.log(error);
          return error;
        }
      },
    },
  });
};
