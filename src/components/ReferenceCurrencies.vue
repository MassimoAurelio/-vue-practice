<script setup>
import { ref, defineProps, onMounted } from "vue";
import { REFERENCE_URL } from "../utils/api";
const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});
const selectedCount = ref(10);
const cryptos = ref([]);
const openText = ref(false);

const referenceCryptos = async (limit = 10) => {
  const url = `${REFERENCE_URL}?coins=${limit}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response error");
    }

    const data = await response.json();
    return data.data.currencies;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const refCrypto = async () => {
  try {
    const coins = await referenceCryptos(selectedCount.value);
    cryptos.value = coins;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  refCrypto(selectedCount.value);
});
</script>

<template>
  <div class="referenceCrypto">
    <div class="title-container" :class="{ 'black-theme': isBlackTheme }">
      <section>
        <h1>Reference currencies</h1>
        <div class="open-text">
          <p class="text" v-if="openText">
            The price of a coin is shown in a reference currency. Currencies include, but
            are not limited to, coins. In contrast to coins, currencies also includes Fiat
            currencies like US Dollar, EURO, YEN and more. Furthermore, currencies also
            comprehends denominators as Satoshi and Wei (these are the atomic units for
            respectively Bitcoin and Ethereum, or - perhaps overly simplified - one could
            compare them with what the cent is to the Dollar.)
          </p>
          <div class="read-more" @click="openText = !openText">
            <span class="text-button">{{ openText ? "Read Less" : "Read More" }}</span>
          </div>
        </div>
      </section>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>#</th>
          <th>Name</th>
          <th>symbol</th>
          <th>type</th>
        </tr>
      </thead>
      <tbody id="crypto-container">
        <tr
          class="left"
          v-for="(currencies, index) in cryptos"
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
            {{ currencies?.symbol }} $
          </td>
          <td :class="{ 'white-theme-text': !isBlackTheme }">{{ currencies?.type }} $</td>
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
  cursor: pointer;
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

.black-theme .left:hover {
  background-color: #323546;
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
