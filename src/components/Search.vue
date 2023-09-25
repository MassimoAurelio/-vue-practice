<script setup>
import { ref, watch, defineProps } from "vue";
import { debounce } from "lodash-es";
import { API_KEY, BASE_URL } from "../store/api";

const coins = ref("");
const items = ref([]);
const menuIsVisible = ref(false);

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const fetchCoins = async (query) => {
  try {
    const response = await fetch(
      `${BASE_URL}search-suggestions?query=${query}`,
      {
        headers: {
          "X-CoinAPI-Key": API_KEY,
        },
      }
    );

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
      <input type="text" placeholder="Search" v-model="coins" />
      <span
        class="krest"
        v-if="menuIsVisible"
        v-click-outside="closeSearchAndClearInput"
        @click.stop="closeSearchAndClearInput"
        :class="{ 'black-theme': isBlackTheme, 'white-theme': !isBlackTheme }"
        ><svg
          class="svg-crestik"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.207 12.793-1.414 1.414L12 13.414l-2.793 2.793-1.414-1.414L10.586 12 7.793 9.207l1.414-1.414L12 10.586l2.793-2.793 1.414 1.414L13.414 12l2.793 2.793z"
          ></path></svg
      ></span>
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
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  padding: 0 26px;
}

.input-wrapper {
  position: relative;
}

input {
  font-size: 16px;
  padding: 10px 16px;
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
}

input:focus {
  outline: none;
  border-color: #1976d2;
}

.krest {
  position: absolute;
  cursor: pointer;
  height: 30px;
  width: 30px;
  right: 5px;
  top: 48%;
  transform: translateY(-50%);
  font-size: 12px;
  font-weight: bold;
  color: #888;
}

.black-theme .krest {
  fill: white;
  background-color: #2d3748;
}

.white-theme .krest {
  fill: #d0d7e5;
  background-color: white;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: inline-block;
  position: absolute;
  left: 10;
  top: calc(90% + 11px);
  width: calc(100% - 52px);
  box-sizing: border-box;
  z-index: 10;
}

li {
  padding: 10px 16px;
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
  background-color: #2d3748;
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
