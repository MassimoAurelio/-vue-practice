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
        'black-theme': isBlackTheme,
        'white-theme-select': !isBlackTheme,
      }"
    >
      <div class="logo">
        <img class="svg-fill" loading="lazy" src="../assets/img/google.svg" alt="" />
      </div>
      <span>Continue with Google</span>
    </button>
    <button
      class="apple"
      :class="{
        'black-theme': isBlackTheme,
        'white-theme-select': !isBlackTheme,
      }"
    >
      <div class="logo">
        <img class="svg-fill" loading="lazy" src="../assets/img/apple.svg" alt="" />
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

.black-theme .google:hover,
.black-theme .apple:hover {
  background-color: #202020;
}

.white-theme .google:hover,
.white-theme .apple:hover {
  background-color: #d8d8d8;
}

.white-theme .apple,
.white-theme .google {
  background-color: white;
  color: #333;
  border: 1px solid rgb(194, 196, 204);
}

.white-theme .svg-fill,
.white-theme .svg-fill {
  fill: black;
}

.black-theme .svg-fill,
.black-theme .svg-fill {
  fill: #fff;
}
.logo {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.logo-svg {
  fill: rgba(255, 255, 255, 1);
}
</style>
