<script setup>
import { onMounted, ref, defineProps, defineEmits } from "vue";
const isBlackTheme = ref(false);
const emits = defineEmits(["update:isBlackTheme"]);

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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          :fill="isBlackTheme ? 'white' : 'black'"
          d="M20.742 13.045a8.088 8.088 0 0 1-2.077.271c-2.135 0-4.14-.83-5.646-2.336a8.025 8.025 0 0 1-2.064-7.723A1 1 0 0 0 9.73 2.034a10.014 10.014 0 0 0-4.489 2.582c-3.898 3.898-3.898 10.243 0 14.143a9.937 9.937 0 0 0 7.072 2.93 9.93 9.93 0 0 0 7.07-2.929 10.007 10.007 0 0 0 2.583-4.491 1.001 1.001 0 0 0-1.224-1.224zm-2.772 4.301a7.947 7.947 0 0 1-5.656 2.343 7.953 7.953 0 0 1-5.658-2.344c-3.118-3.119-3.118-8.195 0-11.314a7.923 7.923 0 0 1 2.06-1.483 10.027 10.027 0 0 0 2.89 7.848 9.972 9.972 0 0 0 7.848 2.891 8.036 8.036 0 0 1-1.484 2.059z"
        ></path>
      </svg>
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

.button-switch-theme {
  width: 30px;
  height: 30px;
  margin-right: -80%;
}
</style>
