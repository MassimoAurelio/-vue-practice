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

function toggleShowPasswordIcon() {
  showPassword.value = !showPassword.value;

  if (
    eyeImageUrl.value === "https://stage.stellare.omgp.xyz/icons/eye-closed.svg"
  ) {
    eyeImageUrl.value = "https://stage.stellare.omgp.xyz/icons/eye-open.svg";
  } else {
    eyeImageUrl.value = "https://stage.stellare.omgp.xyz/icons/eye-closed.svg";
  }
}
const eyeImageUrl = ref("https://stage.stellare.omgp.xyz/icons/eye-closed.svg");
const inputValueEmail = ref("");
const inputValueName = ref("");
const inputValueLastName = ref("");
const inputValueBirth = ref("");
const inputValuePassword = ref("");
const showPassword = ref(false);

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
    <div
      class="popup"
      id="reg-popup"
      :class="{ 'white-theme-select': !isBlackTheme }"
    >
      <div class="head-close-container">
        <h2 class="popup-title">Log-in</h2>
        <a class="popup-close" @click="$emit('close-login')"> &times; </a>
      </div>
      <form
        class="reg-form"
        method="post"
        action="#"
        @submit.prevent="handleSubmit"
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
              'error-border':
                v$.inputValueEmail.$invalid && v$.inputValueEmail.$dirty,
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
          <div class="input-wrapper">
            <input
              class="input-password"
              :type="showPassword ? 'text' : 'password'"
              name="password"
              id="password"
              required
              placeholder="Password"
              v-model="inputValuePassword"
              v-mask="'##/##/####'"
              @blur="v$.inputValuePassword.$touch"
              :class="{
                'error-border':
                  v$.inputValuePassword.$invalid &&
                  v$.inputValuePassword.$dirty,
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
            v-if="
              v$.inputValuePassword.$invalid && v$.inputValuePassword.$dirty
            "
          >
            Required
          </div>
        </div>
        <button type="submit" class="reg-btn" :disabled="v$.$invalid">
          Log in
        </button>
        <div class="divider-container">
          <hr class="divider" />
          <span
            class="divider-text"
            :class="{ 'white-theme-select': !isBlackTheme }"
            >OR</span
          >
          <hr class="divider" />
        </div>
        <AuthButtons />
      </form>
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
  background: #222531;
  border-radius: 10px;
  max-width: 500px;
  padding: 24px 32px 36px;
  width: 90%;
  min-height: 500px;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.popup-title {
  font-size: 24px;
  margin-bottom: 10px;
}
.popup-close {
  cursor: pointer;
  font-size: 35px;
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
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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

.fiel-input {
  position: relative;
}
.input-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
</style>
