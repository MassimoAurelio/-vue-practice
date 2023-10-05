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
  padding: 0px 16px;
  padding-top: 10px;
}

.reg-button,
.login-button {
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border: 1px solid rgb(50, 53, 70);
  border-radius: 8px;
  display: inline-flex;
  color: rgb(255, 255, 255);
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  font-weight: 600;
  min-width: 70px;
  width: auto;
  height: 32px;
  font-size: 12px;
  line-height: 18px;
}

.reg-button {
  background-color: #2b4fd7;
}
.reg-button:hover {
  background-color: #2b4fd7;
}

.black-theme .login-button:hover {
  background-color: #131d30;
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
