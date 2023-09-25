<template></template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const isBlackTheme = ref(localStorage.getItem("selectedTheme") === "black");

    watchEffect(() => {
      if (isBlackTheme.value) {
        document.body.classList.add("black-theme");
        document.body.classList.remove("white-theme");
      } else {
        document.body.classList.add("white-theme");
        document.body.classList.remove("black-theme");
      }
    });

    return { isBlackTheme };
  },
};
</script>

<style>
body.black-theme {
  background-color: #0d1421;
  color: white;
}

body.white-theme {
  background-color: white;
  color: #0d1421;
}
</style>
