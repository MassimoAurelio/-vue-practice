<script setup>
import { defineProps } from "vue";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="overlay" id="reg-overlay">
    <div
      class="popup"
      id="reg-popup"
      :class="{ 'white-theme-select': !isBlackTheme }"
    >
      <h2 class="popup-title">Log In</h2>
      <a class="popup-close" @click="$emit('close-login')">&times;</a>
      <form class="reg-form" method="post" action="#">
        <div class="label">Email</div>
        <input
          class="email-input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          required
          :class="{ 'white-theme-select': !isBlackTheme }"
        />

        <div class="label">Password</div>
        <input
          class="password-input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
          :class="{ 'white-theme-select': !isBlackTheme }"
        />
        <button type="submit" class="reg-btn">Log In</button>
        <div class="divider-container">
          <hr class="divider" />
          <span class="divider-text">OR</span>
          <hr class="divider" />
        </div>
        <div class="auth-buttons">
          <button class="google">
            <div class="logo">
              <img src="../assets/img/google.svg" alt="" />
            </div>
            <span>Continue with Google</span>
          </button>
          <button class="apple">
            <div class="logo">
              <img src="../assets/img/apple.svg" alt="" />
            </div>
            <span>Continue with Apple</span>
          </button>
        </div>
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
  width: 90%;
  height: 650px;
  padding: 24px 32px 36px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.white-theme .popup {
  background-color: white;
  color: #333;
}

.popup-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  font-size: 35px;
}

.reg-form {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 5px;
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
  color: rgb(0, 0, 0);
  max-width: 100%;
  outline: 0px;
  padding: 0px 16px;
  width: 100%;
  font-size: 14px;
  height: 48px;
  line-height: 21px;
}

.white-theme .email-input,
.white-theme .password-input {
  background-color: white;
  color: #333;
  border: 1px solid rgb(154, 155, 160);
}

.reg-form input:focus {
  outline: none;
  border-color: #3c8ce7;
  box-shadow: 0 0 5px #3c8ce7;
}

.reg-form button.reg-btn {
  font-size: 16px;
  font-weight: bold;
  background-color: #3c8ce7;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.google,
.apple,
.binance,
.wallet {
  font-size: 16px;
  font-weight: bold;
  background-color: #0d1421;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.white-theme .google,
.white-theme .apple,
.white-theme .binance,
.white-theme .wallet {
  background-color: white;
  color: #333;
  border: 1px solid rgb(194, 196, 204);
}

.reg-form button.reg-btn:hover {
  background-color: #2d6bb7;
}

.logo {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.white-theme .divider-text {
  color: #333;
}

.auth-buttons button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(64, 66, 78);
}

.logo-svg {
  fill: rgba(255, 255, 255, 1);
}

.white-theme-select .logo-svg {
  fill: #000;
}

.black-theme .logo-svg {
  fill: #fff;
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

.white-theme .divider {
  border-top: 1px solid #fff;
}

.divider-text {
  font-size: 14px;
  color: #ddd;
  font-weight: bold;
}
</style>
