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
  <div class="auth-buttons">
    <button
      class="google"
      :class="{
        'white-theme-select': !isBlackTheme,
      }"
    >
      <div class="logo">
        <img src="../assets/img/google.svg" alt="" />
      </div>
      <span>Continue with Google</span>
    </button>
    <button
      class="apple"
      :class="{
        'white-theme-select': !isBlackTheme,
      }"
    >
      <div class="logo">
        <img src="../assets/img/apple.svg" alt="" />
      </div>
      <span>Continue with Apple</span>
    </button>
  </div>
</template>

<style scoped>
.auth-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
}

.google,
.apple {
  font-size: 16px;
  font-weight: bold;
  background-color: #0d1421;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.white-theme .apple,
.white-theme .google {
  background-color: white;
  color: #333;
  border: 1px solid rgb(194, 196, 204);
}

.logo {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
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
</style>
