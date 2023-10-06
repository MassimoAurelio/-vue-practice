<script setup>
import { ref, watch, defineProps } from "vue";
import { debounce } from "lodash-es";
import { API_KEY, BASE_URL } from "../utils/api";
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const coins = ref("");
const items = ref([]);
const menuIsVisible = ref(false);
const coinsRef = ref(null);

const fetchCoins = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}search-suggestions?query=${query}`, {
      headers: {
        "X-CoinAPI-Key": API_KEY,
      },
    });

    if (response.status === 429) {
      console.error("Слишком много запросов, пожалуйста, подождите...");
      return [];
    }

    const result = await response.json();

    return result?.data?.coins || [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

const search = debounce(async () => {
  items.value = await fetchCoins(coins.value);
}, 1000);

watch(coins, () => search());

const clearInput = () => (coins.value = "");

const closeSearchAndClearInput = () => {
  clearInput();
  closeSearch();
};

onClickOutside(coinsRef, () => {
  menuIsVisible.value = false;
  coins.value = "";
});

const openSearch = (event) => {
  event.stopPropagation();
  menuIsVisible.value = true;
};
const closeSearch = () => {
  menuIsVisible.value = false;
};
</script>
<template>
  <div class="input-container" @click="openSearch">
    <div class="input-wrapper">
      <input type="text" placeholder=" Search" v-model="coins" />
      <span
        class="krest"
        v-if="menuIsVisible"
        ref="coinsRef"
        @click.stop="closeSearchAndClearInput"
        :class="{ 'black-theme': isBlackTheme, 'white-theme': !isBlackTheme }"
        >&times;
      </span>
    </div>
    <div class="search-result" v-if="menuIsVisible">
      <ul>
        <li v-for="item in items" :key="item.uuid">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.input-container {
  display: flex;
  flex-direction: column;
  width: 210px;
  max-width: 500px;
  position: relative;
}

.input-wrapper {
  position: relative;
}

.input-wrapper input {
  padding: 0;
}

input:focus {
  text-indent: 5px;
}

input {
  font-size: 16px;
  height: 45px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: inline-block;
}

input:focus {
  outline: none;
  border-color: #1976d2;
}

.krest {
  position: absolute;
  top: 45%;
  right: 10px;
  transform: translateY(-50%);
  font-weight: bold;
  color: #888;
}

.black-theme .krest {
  fill: white;
  background-color: #323546;
}

.white-theme .krest {
  fill: #d0d7e5;
  background-color: white;
}

.search-result {
  position: absolute;
  cursor: pointer;
  width: 100%;
  z-index: 20;
  top: 55px;
}

ul {
  margin: 0;
  border: 1px solid #ccc;
  padding-left: 10%;
  border-radius: 4px;
  position: relative;
  z-index: 20;
}

li {
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  color: #333;
}

li:last-child {
  border-bottom: none;
}

.white-theme .input-container input {
  background-color: #ffffff;
  border: 2px solid #ccc;
  color: #333;
}

.white-theme .input-container input::placeholder {
  color: #999;
}

.white-theme .input-container input:focus,
.white-theme .input-container input:hover {
  border-color: #3b82f6;
}

.white-theme .input-container ul {
  background-color: #f9f9f9;
  border: 2px solid #ccc;
}

.white-theme .input-container ul li {
  color: #333;
}

.white-theme .input-container ul li:hover {
  background-color: #ebebeb;
}

.black-theme .input-container input {
  background-color: #323546;
  border: 2px solid #4a5568;
  color: #ffffff;
}

.black-theme .input-container input::placeholder {
  color: #a0aec0;
}

.black-theme .input-container input:focus,
.black-theme .input-container input:hover {
  border-color: #667eea;
}

.black-theme .input-container ul {
  background-color: #2d3748;
  border: 2px solid #4a5568;
}

.black-theme .input-container ul li {
  color: #ffffff;
}

.black-theme .input-container ul li:hover {
  background-color: #4a5568;
}

.input-container ul::-webkit-scrollbar {
  width: 6px;
}

.input-container ul::-webkit-scrollbar-thumb {
  background-color: #718096;
  border-radius: 3px;
}

.input-container ul::-webkit-scrollbar-thumb:hover {
  background-color: #a0aec0;
}

.input-container ul::-webkit-scrollbar-track {
  background-color: #1a202c;
}
</style>
