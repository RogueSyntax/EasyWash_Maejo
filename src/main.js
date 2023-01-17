import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "../plugins_db/firebaseInit";

const app = createApp(App);

app.use(router);

app.mount("#app");

import "bootstrap/dist/js/bootstrap.js";

// Install the store instance as a plugin

import { createMyStore } from "./vuex_store/store";

import { db } from "../plugins_db/firebaseInit";

const store = createMyStore();

app.use(store);

// mounted get data from database on firebase when open website
const collectionRef = db.collection("washing_machine").orderBy("id", "asc");

collectionRef.onSnapshot((snapshot) => {
  var machine = [];
  snapshot.forEach((doc) => {
    machine.push({ id: doc.id, data: doc.data() });
    store.state.washing_machine = machine;
    store.commit("createMachine");
  });
});

// mounted continue continue after close tab
store.state.washing_machine.forEach((wm, index) => {
  if (wm.data.status != "Available") {
    store.commit("setCounter", index);
  }
});
