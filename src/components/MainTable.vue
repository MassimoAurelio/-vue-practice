<script setup>
import { ref, onMounted, defineProps, provide } from "vue";
import { getCoins } from "../utils/api";

const selectedCount = ref(10);
const availableCounts = ref([10, 20, 50, 100]);
const cryptos = ref([]);

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

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
    <div class="title">
      <h1>Today's Cryptocurrency Prices by Massimo</h1>
    </div>
    <select
      v-model="selectedCount"
      @change="fetchCoins"
      :class="{
        'black-theme': isBlackTheme,
        'white-theme-option': !isBlackTheme,
      }"
    >
      <option
        v-for="count in availableCounts"
        :value="count"
        :key="count"
        :class="{
          'black-theme': isBlackTheme,
          'white-theme-option': !isBlackTheme,
        }"
      >
        {{ count }}
      </option>
    </select>
    <table class="table">
      <thead>
        <tr>
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
            <img :src="currency.iconUrl" alt="Currency Icon" />
            {{ currency.name }}
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ parseFloat(currency.price).toFixed(2) }} $
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currency ? currency["24hVolume"] : "" }} $
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currency.change }} $
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currency.marketCap }} $
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
323546
<style scoped>
body {
  background-color: #f8f9fa;
  color: black;
  margin: 0;
  padding: 0;
}

h1 {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1rem;
}

.topCrypto {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  max-width: 1300px;
  margin: 4rem auto;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
}

select {
  box-sizing: border-box;
  margin: 0px;
  margin-left: 95%;
  display: inline-flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(50, 53, 70);
  border-radius: 8px;
  outline: 0px;
  font-weight: 600;
  cursor: pointer;
  color: rgb(255, 255, 255);
  padding: 5px 8px;
  font-size: 12px;
  line-height: 22px;
}

select:focus {
  outline: none;
}

.black-theme select,
option {
  background-color: #323546;
  color: #f0f0f0;
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
  background-color: #17171a;
}

.black-theme td,
.black-theme th {
  color: #f0f0f0;
  border-bottom: 1px solid #555;
}

.black-theme tr.left:last-child {
  border-bottom: none;
}

.white-theme-text {
  color: black;
}

.white-theme-select {
  background-color: white;
  color: #333;
  border: 1px solid #0d0d10;
  border: 1px solid rgb(194, 196, 204);
}

.white-theme-option {
  background-color: white;
  color: #333;
  border: 1px solid rgb(194, 196, 204);
}
</style>
