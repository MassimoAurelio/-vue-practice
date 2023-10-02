<script setup>
import { ref } from "vue";
import Header from "./components/Header.vue";
import MainTable from "./components/MainTable.vue";
import ScrollBack from "./components/ScrollBack.vue";
import RegLogin from "./components/RegLogin.vue";
import RegistrationPopup from "./components/RegistrationPopup.vue";
import LoginPopup from "./components/LoginPopup.vue";
const isBlackTheme = ref(false);
const isRegistrationPopupOpen = ref(false);
const isLoginPopupOpen = ref(false);

function openRegistrationPopup() {
  isRegistrationPopupOpen.value = true;
}

function closeRegistrationPopup() {
  isRegistrationPopupOpen.value = false;
}
function openLoginPopup() {
  isLoginPopupOpen.value = true;
}

function closeLoginPopup() {
  isLoginPopupOpen.value = false;
}
const switchToRegistrationPopup = () => {
  isLoginPopupOpen.value = false;
  isRegistrationPopupOpen.value = true;
};

const switchToLoginPopup = () => {
  isLoginPopupOpen.value = true;
  isRegistrationPopupOpen.value = false;
};
</script>

<template>
  <div id="app">
    <RegLogin
      @open-registration="openRegistrationPopup"
      @open-login="openLoginPopup"
    />
    <Header :isBlackTheme="isBlackTheme" />
    <RegistrationPopup
      v-if="isRegistrationPopupOpen"
      @close-registration="closeRegistrationPopup"
      @open-login="switchToLoginPopup"
    />
    <LoginPopup
      v-if="isLoginPopupOpen"
      @close-login="closeLoginPopup"
      :is-black-theme="isBlackTheme"
      @open-registration="switchToRegistrationPopup"
    />
    <ScrollBack />
    <MainTable :is-black-theme="isBlackTheme" />
  </div>
</template>

<style></style>
