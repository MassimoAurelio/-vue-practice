<script setup>
import { ref, onMounted, defineProps, provide } from "vue";
import { getCoins } from "../utils/api";
import ToolBar from "../components/ScrollChild.vue";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const selectedCount = ref(10);
const availableCounts = ref([10, 20, 50, 100]);
const cryptos = ref([]);
const openText = ref(false);

async function fetchCoins() {
  try {
    const coins = await getCoins(selectedCount.value);
    cryptos.value = coins;
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  fetchCoins();
});
provide("fetchCoins", fetchCoins);
</script>

<template>
  <div class="topCrypto">
    <div class="title-container" :class="{ 'black-theme': isBlackTheme }">
      <h1>Today's Cryptocurrency Prices by Massimo</h1>
      <div class="text-container">
        <p v-if="openText" class="text">
          Coins are all the cryptocurrencies listed with us, like Bitcoin, Ethereum,
          Dogecoin, and thousands more. Do you miss a particular coin you’d like to see in
          the API? Submit it via our listing form and we’ll add it within two working
          days.
        </p>
        <div @click="openText = !openText">
          <span class="text-button">{{ openText ? "Read Less" : "Read More" }}</span>
        </div>
      </div>
    </div>

    <div class="scroll-child">
      <div class="left-scroll">
        <ToolBar />
      </div>
      <div class="right-scroll">
        <select
          v-model="selectedCount"
          @change="fetchCoins"
          class="selectCount"
          :class="{
            'white-theme-select': !isBlackTheme,
          }"
        >
          <option
            v-for="count in availableCounts"
            :value="count"
            :key="count"
            :class="{
              'white-theme-option': !isBlackTheme,
              'black-theme-option': isBlackTheme,
            }"
          >
            {{ count }}
          </option>
        </select>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr class="tr">
          <th></th>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Volume(24h)</th>
          <th>Сhange</th>
          <th>MarketCap</th>
        </tr>
      </thead>
      <tbody id="crypto-container">
        <tr
          class="left"
          v-for="(currency, index) in cryptos"
          :key="index"
          :class="{ 'black-theme': isBlackTheme }"
        >
          <td></td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ index + 1 }}
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            <img loading="lazy" :src="currency.iconUrl" alt="Currency Icon" />
            {{ currency.name }}
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ parseFloat(currency.price).toFixed(2) }} $
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currency ? currency["24hVolume"] : "" }} $
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">{{ currency.change }} $</td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currency.marketCap }} $
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
body {
  background-color: #f8f9fa;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1rem;
}

.tr {
  color: #222531;
  border-top: 1px solid #555555;
}

.topCrypto {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  max-width: 1300px;
  margin: 4rem auto;
}

.black-theme .left:hover {
  background-color: #323546;
}

.title-container {
  text-align: left;
  width: 90%;
  margin-bottom: 3%;
  margin-top: -3%;
}

.text,
.text-button {
  color: #858ca2;
}

.text-button {
  cursor: pointer;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
}
.text {
  font-size: 14px;
  font-weight: bold;
}

.scroll-child {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.selectCount {
  border-radius: 8px;
  box-sizing: border-box;
  align-items: center;
  font-weight: 600;
  font-size: 12px;
  line-height: 22px;
  padding: 5px 8px;
}

select:focus {
  outline: none;
}

.black-theme select,
option {
  background-color: #323546;
  color: #f0f0f0;
}

.black-theme .title-container {
  color: #f0f0f0;
}
.white-theme .title-container {
  color: #222531;
}

table {
  border-collapse: collapse;
  width: 100%;
}

table tr {
  padding: 8px;
  background-color: #ffffff;
}

tr.left {
  border-bottom: 1px solid rgb(194, 196, 204);
  font-weight: 500;
}

tr.left:last-child {
  border-bottom: none;
}

img {
  max-width: 40px;
  max-height: 40px;
  display: inline-block;
  vertical-align: middle;
}

th {
  text-align: left;
  padding: 8px;
  vertical-align: middle;
}

.black-theme table tr {
  background-color: #0d1421;
}

.black-theme td,
.black-theme th {
  color: #f0f0f0;
  border-bottom: 1px solid #555;
}

.black-theme tr.left:last-child {
  border-bottom: none;
}

.white-theme-select {
  background-color: white;
  border: 1px solid #0d0d10;
  border: 1px solid rgb(194, 196, 204);
  color: #222531;
}

.white-theme-option {
  background-color: white;
  border: 1px solid rgb(194, 196, 204);
  color: #222531;
}
</style>
