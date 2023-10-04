<script setup>
import { defineProps, ref } from "vue";
import AuthButtons from "./AuthButtons.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const showPassword = ref(false);
const inputValueEmail = ref("");
const inputValueName = ref("");
const inputValueLastName = ref("");
const inputValueBirth = ref("");
const inputValuePassword = ref("");
const eyeImageUrl = ref("https://stage.stellare.omgp.xyz/icons/eye-closed.svg");

function toggleShowPasswordIcon() {
  showPassword.value = !showPassword.value;

  if (eyeImageUrl.value === "https://stage.stellare.omgp.xyz/icons/eye-closed.svg") {
    eyeImageUrl.value = "https://stage.stellare.omgp.xyz/icons/eye-open.svg";
  } else {
    eyeImageUrl.value = "https://stage.stellare.omgp.xyz/icons/eye-closed.svg";
  }
}

const rules = {
  inputValueEmail: { required },
  inputValueName: { required, minLength: minLength(1) },
  inputValueLastName: { required, minLength: minLength(1) },
  inputValueBirth: { required },
  inputValuePassword: { required, minLength: minLength(6) },
};

function handleSubmit() {
  if (v$.$invalid) {
    return;
  }
  console.log("Form submitted successfully");
}

const v$ = useVuelidate(rules, {
  inputValueEmail,
  inputValueName,
  inputValueLastName,
  inputValueBirth,
  inputValuePassword,
});
</script>

<template>
  <div class="overlay" id="reg-overlay">
    <div class="popup" id="reg-popup" :class="{ 'white-theme-select': !isBlackTheme }">
      <div class="form">
        <div class="head-close-container">
          <div class="container">
            <div class="inner-container">
              <div class="goToLogin" @click="$emit('open-login')">Log-in</div>
            </div>
            <div class="inner-container">
              <div
                class="goToRegistration"
                :class="{
                  'black-theme': isBlackTheme,
                  'white-theme': !isBlackTheme,
                }"
              >
                Sign Up
              </div>
              <div class="block"></div>
            </div>
          </div>
          <a class="popup-close" @click="$emit('close-registration')"> &times; </a>
        </div>
        <form
          class="reg-form"
          method="post"
          action="#"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <div class="fiel-input">
            <input
              class="input-email"
              name="email"
              inputmode="text"
              placeholder="Email"
              maxlength="255"
              type="email"
              v-model="inputValueEmail"
              @blur="v$.inputValueEmail.$touch"
              :class="{
                'error-border': v$.inputValueEmail.$invalid && v$.inputValueEmail.$dirty,
                'white-theme-select': !isBlackTheme,
              }"
            />
            <div
              data-name="error-email"
              class="field__error"
              v-if="v$.inputValueEmail.$invalid && v$.inputValueEmail.$dirty"
            >
              Required
            </div>
          </div>
          <div class="fiel-input">
            <input
              class="input-first-name"
              type="text"
              inputmode="text"
              name="username"
              id="username"
              required
              placeholder="Name"
              v-model="inputValueName"
              @blur="v$.inputValueName.$touch"
              :class="{
                'error-border': v$.inputValueName.$invalid && v$.inputValueName.$dirty,
                'white-theme-select': !isBlackTheme,
              }"
            />
            <div
              data-name="error-first-name"
              class="field__error"
              v-if="v$.inputValueName.$invalid && v$.inputValueName.$dirty"
            >
              Required
            </div>
          </div>
          <div class="fiel-input">
            <input
              class="input-last-name"
              type="text"
              inputmode="text"
              name="userlastname"
              id="userlastname"
              required
              placeholder="Surname"
              v-model="inputValueLastName"
              @blur="v$.inputValueLastName.$touch"
              :class="{
                'error-border':
                  v$.inputValueLastName.$invalid && v$.inputValueLastName.$dirty,
                'white-theme-select': !isBlackTheme,
              }"
            />
            <div
              data-name="error-last-name"
              class="field__error"
              v-if="v$.inputValueLastName.$invalid && v$.inputValueLastName.$dirty"
            >
              Required
            </div>
          </div>
          <div class="fiel-input">
            <input
              class="input-birth-date"
              type="text"
              inputmode="text"
              name="date"
              id="date"
              v-mask="'##/##/####'"
              placeholder="Date of birth (DD/MM/YYYY)"
              required
              v-model="inputValueBirth"
              @blur="v$.inputValueBirth.$touch"
              :class="{
                'error-border': v$.inputValueBirth.$invalid && v$.inputValueBirth.$dirty,
                'white-theme-select': !isBlackTheme,
              }"
            />
            <div
              data-name="error-birth-date"
              class="field__error"
              v-if="v$.inputValueBirth.$invalid && v$.inputValueBirth.$dirty"
            >
              Required
            </div>
          </div>
          <div class="fiel-input">
            <div class="input-wrapper">
              <input
                class="input-password"
                :type="showPassword ? 'text' : 'password'"
                name="password"
                id="password"
                required
                placeholder="Password"
                v-model="inputValuePassword"
                @blur="v$.inputValuePassword.$touch"
                :class="{
                  'error-border':
                    v$.inputValuePassword.$invalid && v$.inputValuePassword.$dirty,
                  'white-theme-select': !isBlackTheme,
                }"
              />
              <img
                class="eye-closed"
                @click="toggleShowPasswordIcon"
                :src="eyeImageUrl"
                alt="field__icon"
              />
            </div>
            <div
              data-name="error-password"
              class="field__error"
              v-if="v$.inputValuePassword.$invalid && v$.inputValuePassword.$dirty"
            >
              Required
            </div>
          </div>
          <button type="submit" class="reg-btn">Sign Up</button>
          <div class="divider-container">
            <hr class="divider" />
            <span class="divider-text" :class="{ 'white-theme-select': !isBlackTheme }"
              >OR</span
            >
            <hr class="divider" />
          </div>
          <AuthButtons />
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  position: relative;
  background: #222531;
  border-radius: 10px;
  max-width: 500px;
  padding: 24px 32px 36px;
  width: 90%;
  min-height: 700px;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.black-theme .head-close-container {
  color: white;
}

.popup-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.popup-close {
  cursor: pointer;
  font-size: 35px;
  position: absolute;
  top: 0px;
  right: 10px;
}

.reg-form {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin: 15px 0 5px;
}

.input-group {
  margin-bottom: 15px;
}

.reg-form input {
  position: relative;
  background-color: rgb(23, 25, 36);
  border: 1px solid rgb(64, 66, 78);
  border-radius: 8px;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  max-width: 100%;
  outline: 0px;
  padding: 0px 16px;
  width: 100%;
  font-size: 16px;
  height: 45px;
  line-height: 21px;
  margin-top: 15px;
}

.reg-form input:focus {
  outline: none;
  border-color: #3c8ce7;
  box-shadow: 0 0 5px #3c8ce7;
}

.reg-form button.reg-btn {
  -webkit-box-align: center;
  align-items: center;
  background: rgb(56, 97, 251);
  border: 0px;
  border-radius: 8px;
  margin-top: 5%;
  display: inline-flex;
  color: rgb(255, 255, 255);
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  font-weight: 600;
  width: 100%;
  height: 48px;
  font-size: 16px;
  padding: 0px 24px;
  line-height: 24px;
}

.reg-form button.reg-btn:hover {
  background-color: #2d6bb7;
}

.reg-btn {
  opacity: 1;
}

.reg-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.logo {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.divider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px;
}

.divider {
  flex-grow: 1;
  border: none;
  border-top: 1px solid #2f3142;
  margin: 15px;
}

.divider-text {
  font-size: 14px;
  color: #ddd;
  font-weight: bold;
}

.black-theme .popup {
  background-color: #222531;
}

.white-theme-text {
  color: #333;
}

.white-theme .input-email,
.white-theme .input-first-name,
.white-theme .input-last-name,
.white-theme .input-birth-date,
.white-theme .input-password {
  background-color: white;
  color: #333;
  border: 1px solid rgb(194, 196, 204);
}

.white-theme .divider-text {
  color: black;
}
.white-theme .popup {
  background-color: white;
  color: #333;
  border: 1px solid #0d0d10;
}
.field__error {
  color: #c90726;
  font-size: 14px;
  line-height: 1.05;
  margin-left: 0.1%;
}

.error-border {
  border-color: #c90726 !important;
}

.head-close-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.inner-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.goToLogin {
  position: relative;
  cursor: pointer;
  font-weight: 500;
  font-size: 22px;
  color: #a1a7bb;
}

.goToRegistration {
  position: relative;
  cursor: pointer;
  font-weight: 700;
  font-size: 22px;
  color: #fff;
}

.black-theme .goToRegistration {
  color: #fff;
  background: #222531;
}

.white-theme .goToLogin {
  color: #586b93;
}

.white-theme .goToRegistration {
  color: black;
  background: #fff;
}

.block {
  position: absolute;
  background: #6188ff;
  pointer-events: none;
  bottom: -13px;
  height: 5px;
  width: 28px;
  border-radius: 100px;
  left: 50%;
  transform: translateX(-50%);
}

.container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding-bottom: 20px;
}

.eye-closed {
  position: absolute;
  left: 92%;
  top: 62%;
  transform: translateY(-50%);
  max-width: 20px;
  max-height: 20px;
  cursor: pointer;
}

.form {
  padding: 5px 5px;
  position: relative;
}
.fiel-input {
  position: relative;
}
.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
