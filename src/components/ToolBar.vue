<script setup>
import { defineProps } from "vue";
const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="container">
    <a
      ><router-link to="/"
        ><button class="Cryptocurrencies" :class="{ 'black-theme': isBlackTheme }">
          Cryptocurrencies
        </button></router-link
      ></a
    >

    <a
      ><router-link to="/"
        ><button class="Cryptocurrencies">Categories</button></router-link
      ></a
    >
    <button class="Cryptocurrencies">🔥 Telegram Bot</button>

    <a
      ><router-link to="/"
        ><button class="Cryptocurrencies">🔥 Base Ecosystem</button></router-link
      ></a
    >
    <a
      ><router-link to="/"
        ><button class="Cryptocurrencies">🔥 FTX Bankruptcy Estate</button></router-link
      ></a
    >

    <a>
      <router-link to="/"
        ><button class="Cryptocurrencies">🔥 Real World Assets</button></router-link
      ></a
    >
  </div>
</template>

<style scoped>
.Cryptocurrencies {
  -webkit-box-align: center;
  align-items: center;
  background: transparent;
  border: 0px;
  border-radius: 8px;
  display: inline-flex;
  cursor: pointer;
  -webkit-box-pack: center;
  justify-content: center;
  outline: 0px;
  font-weight: 700;
  width: auto;
  height: 32px;
  font-size: 12px;
  padding: 0px 16px;
  line-height: 18px;
  padding: 0px 14px;
  white-space: nowrap !important;
  margin-right: 4px !important;
}

.black-theme .Cryptocurrencies {
  color: aliceblue;
}

.white-theme .Cryptocurrencies {
  color: black;
}
</style>
