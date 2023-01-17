<template>
  <main>
    <br />

    <div class="container">
      <div class="container header w3-animate-right">
        <div class="typing">
          <h2 class="text-uppercase" id="hd">{{ Title }}</h2>
        </div>
      </div>

      <div class="container card w3-animate-zoom">
        <div class="row">
          <div v-for="(item, index) in WM" :key="index" class="col-sm-6">
            <div class="card">
              <img
                src="../assets/washingMachine.png"
                class="card-img-top img-fluid"
                alt="..."
                id="machine"
              />
              <div class="card-body">
                <h5 class="card-title">
                  เครื่องซักผ้าหมายเลข : {{ item.data.id }}
                </h5>
                <p
                  v-if="item.data.status == 'Available'"
                  class="card-status-available"
                >
                  {{ item.data.status }}
                </p>
                <p
                  v-if="item.data.status == 'Not Available'"
                  class="card-status-not-available w3-animate-zoom"
                >
                  {{ item.data.status }}
                </p>
                <div class="container" v-if="item.data.status == 'Available'">
                  <audio id="song">
                    <source src="../assets/Sound/notification.mp3" />
                  </audio>
                  <p>
                    หยอดแล้ว : {{ item.data.coin }} เหรียญ =
                    {{ (item.data.coin * 300) / 60 }} นาที
                  </p>
                  <button
                    v-if="item.data.coin < 6"
                    v-on:click="dropCoin(index)"
                    type="button"
                    class="btn"
                    @click.prevent="
                      playSound(
                        'https://audio.jukehost.co.uk/x6KUx0I3LQP3yTHtyKX9XVwPlrbCP0KT'
                      )
                    "
                    id="coinbtn"
                  >
                    หยอดเหรียญ
                  </button>

                  <button
                    v-if="!item.data.isHidden && item.data.coin != 0"
                    @click.prevent="
                      ClickUse(index);
                      playSoundStart(
                        'https://audio.jukehost.co.uk/Bgk8wgszxYvF4pcJ8LT7LnCk3fBRjrpX'
                      );
                    "
                    style="margin-left: 10px"
                    href="#"
                    class="btn"
                  >
                    กดใช้งาน
                  </button>
                </div>

                <div
                  v-if="item.data.isHidden == true"
                  class="countdown-timer w3-animate-bottom"
                >
                  <div style="font-size: 1.2rem">
                    <p
                      class="fa fa-spinner w3-spin"
                      style="font-size: 1.5rem"
                    ></p>
                    เหลือเวลาอีก
                    {{
                      parseInt(
                        ($store.state.washing_machine[index].data.countDown /
                          1000 /
                          60) %
                          60
                      ).toString()
                    }}
                    :
                    {{
                      parseInt(
                        ($store.state.washing_machine[index].data.countDown /
                          1000) %
                          60
                      )
                        .toString()
                        .padStart(2, "0")
                    }}

                    นาที
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </main>
</template>

<script>
export default {
  watch: {},
  data() {
    return {
      Title: "EasyWash Maejo",
    };
  },
  computed: {
    WM() {
      return this.$store.state.washing_machine;
    },
  },
  methods: {
    ClickUse(index) {
      this.$store.state.washing_machine[index].data.status = "Not Available";
      this.$store.state.washing_machine[index].data.isHidden = true;
      this.$store.state.washing_machine[index].data.countDown =
        this.$store.state.washing_machine[index].data.coin * 300000;
      this.$store.commit("setCounter", index);
      //setInterval();
    },
    dropCoin(index) {
      this.$store.state.washing_machine[index].data.coin++;
      this.$store.commit("saveData", index);
    },

    playSound(sound) {
      if (sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    },

    playSoundStart(start) {
      if (start) {
        var audio = new Audio(start);
        audio.play();
      }
    },
  },
};
</script>




<style>
@import url("https://fonts.googleapis.com/css2?family=Shadows+Into+Light&display=swap");
* {
  box-sizing: border-box;
  font-family: "Noto Serif Thai", serif;
  font-family: "Sarabun", sans-serif;
}
body {
  margin: 0;
  padding: 0;
}

#coinbtn {
  background: linear-gradient(
    90deg,
    rgba(255, 184, 2, 1) 0%,
    rgba(255, 156, 5, 1) 51%,
    rgba(255, 111, 0, 1) 100%
  );
}
.btn {
  background: rgb(132, 255, 5);
  background: linear-gradient(
    90deg,
    rgba(132, 255, 5, 1) 0%,
    rgba(94, 255, 5, 1) 51%,
    rgba(12, 218, 115, 1) 100%
  );
}
.btn:hover {
  box-shadow: 0 12px 16px 0 rgba(124, 122, 122, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.container.header {
  text-align: center;
  font-size: 2rem;
  padding-bottom: 3rem;
}

.col-sm-6 {
  padding-bottom: 1.5rem;
}

.card-img-top {
  height: 360px;
  width: 320px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.container.card {
  padding-top: 1rem;
  text-align: center;
}

.card-status-available {
  color: rgb(9, 209, 9);
  font-size: 1.25rem;
  font-weight: bold;
}

.card-status-not-available {
  color: red;
  font-size: 1.25rem;
  font-weight: bold;
}

#machine {
  margin-top: 15px;
}

@keyframes cursorBlink {
  0%,
  75% {
    opacity: 1;
  }

  76%,
  100% {
    opacity: 0;
  }
}

@keyframes cursorBlink {
  0%,
  75% {
    opacity: 1;
  }

  76%,
  100% {
    opacity: 0;
  }
}

.typing {
  display: flex;
  justify-content: center;
  position: relative;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #3333);
  margin: 60px;
}

.typing h2 {
  position: relative;
  color: rgb(2, 241, 255);
  letter-spacing: 5px;
  font-size: 3rem;
  overflow: hidden;
  margin-bottom: 0;
  animation: type 5s steps(11) infinite;
  font-family: "Shadows Into Light", cursive;
  text-align: center;
  justify-content: center;
}

@keyframes type {
  0%,
  100% {
    width: 0px;
  }

  30%,
  60% {
    width: 355px;
  }
}

@media (max-width: 460px) {

  .typing{
    margin: 30px;
  }
  .typing h2 {
    font-size: 1.5rem;
    animation: type 5s steps(10) infinite;
  }

  @keyframes type {
    0%,
    100% {
      width: 0px;
    }

    30%,
    60% {
      width: 220px;
    }
  }
}
</style>
