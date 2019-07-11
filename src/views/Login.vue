<template>
  <div id="login">
    <section>
      <div class="col1"></div>
      <div class="col2">
        <h1 class="text-center">Welcome back...</h1>
        <p class="text-center">Please login or signup below.</p>
        <br>
        <div id="fb-auth"></div>
      </div>
    </section>
  </div>
</template>

<script>
const firebaseui = require("firebaseui");
import { firebase, auth } from "../firebaseConfig.js";
import router from '../router.js'
import store from '../store.js'
const ui = new firebaseui.auth.AuthUI(auth);
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult) {
      store.commit("setCurrentUser", authResult.user);
      router.push("/");
    }
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
};
export default {
  mounted() {
    ui.start("#fb-auth", uiConfig);
  }
};
</script>              