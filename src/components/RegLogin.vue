<script setup>
import { defineProps } from "vue";
import ToggleSwitch from "./ToggleSwitch.vue";
const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="button-container">
    <ToggleSwitch />
    <button
      class="login-button"
      @click="$emit('open-login')"
      :class="{ 'black-theme': isBlackTheme }"
    >
      <span> Log In </span>
    </button>
    <button class="reg-button" @click="$emit('open-registration')">
      <span> Sign Up </span>
    </button>
  </div>
</template>

<style scoped>
.button-container {
  gap: 10px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
  padding: 0 2%;
  padding-top: 1%;
}

.reg-button,
.login-button {
  background-color: #3861fb;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 52px;
  background-color: 0.3s;
}

.black-theme .login-button {
  background: #0d1421;
  border: 1px solid #3861fb;
  color: #3861fb;
}

.white-theme .login-button {
  background: white;
  border: 1px solid #3861fb;
  color: #3861fb;
}
</style>
