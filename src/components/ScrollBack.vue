<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const showButton = ref(false);

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const checkScroll = () => {
  showButton.value = window.scrollY > 200;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log;
};
</script>

<template>
  <div class="button-container">
    <svg
      v-if="showButton"
      @click="scrollToTop"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="scroll-button-svg"
      :class="{ 'white-theme': !isBlackTheme, 'black-theme': isBlackTheme }"
    >
      <path
        d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z"
      ></path>
    </svg>
  </div>
</template>

<style scoped>
.scroll-button-svg {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 100px;
  height: 100px;
  padding: 10px 20px;
  background-color: #0d1421;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.black-theme .scroll-button-svg:hover {
  background-color: #131e31;
}

.white-theme .scroll-button-svg:hover {
  background-color: #969696;
}
.white-theme .scroll-button-svg {
  background-color: azure;
  fill: #0d1421;
}

.black-theme .scroll-button-svg {
  background-color: #0d1421;
  fill: white;
}

button:hover {
  background-color: #1a2330;
}

button:focus {
  outline: none;
}
</style>
