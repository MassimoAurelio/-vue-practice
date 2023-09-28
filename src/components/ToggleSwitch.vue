<script setup>
import { onMounted, ref, defineEmits } from "vue";
const isBlackTheme = ref(false);
const emits = defineEmits(["update:isBlackTheme"]);

const lightThemeImg = "/src/assets/img/sun.svg";
const darkThemeImg = "/src/assets/img/moon.svg";

function toggleTheme() {
  isBlackTheme.value = !isBlackTheme.value;
  localStorage.setItem("selectedTheme", isBlackTheme.value ? "black" : "white");
  emits("update:isBlackTheme", isBlackTheme.value);
  if (isBlackTheme.value) {
    document.body.classList.add("black-theme");
    document.body.classList.remove("white-theme");
  } else {
    document.body.classList.add("white-theme");
    document.body.classList.remove("black-theme");
  }
}

onMounted(() => {
  toggleTheme();
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme) {
    isBlackTheme.value = selectedTheme === "black";
  }
});
</script>

<template>
  <div class="them-container">
    <button
      class="button-switch-theme"
      :class="{ 'black-theme': isBlackTheme, 'white-theme': !isBlackTheme }"
      @click="toggleTheme"
    >
      <img
        class="sun-icon"
        :src="isBlackTheme ? lightThemeImg : darkThemeImg"
        :style="{ filter: isBlackTheme ? 'invert(100%)' : '' }"
        alt="theme toggle"
      />
    </button>
  </div>
</template>

<style scoped>
.them-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 168px;
  height: 29px;
}
.black-theme {
  background-color: #0d1421;
  color: white;
}

.white-theme {
  background-color: white;
  color: #0d1421;
}

.sun-icon {
  width: 26px;
  height: 26px;
  margin-left: 130px;
  margin-bottom: -5px;
}
</style>
