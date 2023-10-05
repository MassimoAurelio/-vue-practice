<script setup>
import { ref, defineProps, onMounted } from "vue";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const openText = ref(false);
const bestCoin = ref([]);

async function bestCoins() {
  try {
    const response = await fetch("https://api.coinranking.com/v2/stats");
    const result = await response.json();
    bestCoin.value = result.data.bestCoins;
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

onMounted(() => {
  bestCoins();
});
</script>

<template>
  <div class="referenceCrypto">
    <div class="title-container" :class="{ 'black-theme': isBlackTheme }">
      <h1>Best Coins</h1>
      <div class="open-text">
        <p class="text" v-if="openText">
          These global statistics tell about the data available on coinranking.
        </p>
        <div class="read-more" @click="openText = !openText">
          <span class="text-button">{{ openText ? "Read Less" : "Read More" }}</span>
        </div>
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Name</th>
          <th>symbol</th>
          <th>uuid</th>
        </tr>
      </thead>
      <tbody id="crypto-container">
        <tr
          class="left"
          v-for="(currencies, index) in bestCoin"
          :key="index"
          :class="{ 'black-theme': isBlackTheme }"
        >
          <td></td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ index + 1 }}
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            <img loading="lazy" :src="currencies.iconUrl" alt="Currency Icon" />
            {{ currencies?.name }}
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currencies?.symbol }}
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">
            {{ currencies?.uuid }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

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

.referenceCrypto {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 1300px;
  margin: 4rem auto;
}

.title-container {
  text-align: left;
  width: 90%;
}

.black-theme .title-container {
  color: #f0f0f0;
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

.text,
.text-button {
  color: #858ca2;
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

.black-theme .left:hover {
  background-color: #323546;
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
