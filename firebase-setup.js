import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp } from "firebase/app";

window.firebase = {
  getMessaging,
  getToken,
  onMessage,
  initializeApp,
};

window.firebase.initializeFirebase = function(config) {
  return initializeApp(config);
};
