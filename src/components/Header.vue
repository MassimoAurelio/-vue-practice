<script setup>
import { ref, computed } from "vue";
import Search from "./Search.vue";
import DropdownMenuItem from "./DropdownMenuItem.vue";

const isBlackTheme = ref(false);

const headerClasses = computed(() => ({
  "black-theme": isBlackTheme.value,
}));
</script>

<template>
  <div :class="headerClasses">
    <div class="global-header">
      <div class="header-left">
        <div class="logo-container">
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="logo"
              width="30"
              height="30"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2zm4-3h2v14h-2zm4-3h2v17h-2z"
              ></path>
            </svg>
          </router-link>
          <span>
            <router-link to="/" class="home">CryptoMassimo</router-link>
          </span>
        </div>
        <nav class="header-menu">
          <DropdownMenuItem>
            <div class="item" role="button" aria-haspopup="true" aria-expanded="false">
              <span>Cryptocurrencies</span>
            </div>
            <template #menu>
              <router-link to="/" class="ranking">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"
                    loading="lazy"
                  />Ranking
                </div>
              </router-link>

              <router-link to="/reference" class="reference">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuRecentlyAddedIcon.svg"
                    loading="lazy"
                  />Reference currencies
                </div></router-link
              >
              <router-link to="/bestcoins" class="bestcoins">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuSpotlightIcon.svg"
                    loading="lazy"
                  />Best Coins
                </div></router-link
              >
              <router-link to="/newcoins" class="newcoin">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGainersLosersIcon.svg"
                    loading="lazy"
                  />New Coins
                </div></router-link
              >
            </template>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div class="item" role="button" aria-haspopup="true" aria-expanded="false">
              Exchanges
            </div>
            <template #menu>
              <router-link to="/exchanges/ru/spot" class="spot">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuGlobalChartsIcon.svg"
                    loading="lazy"
                  />Spot
                </div></router-link
              >
              <router-link to="/exchanges/ru/derivatives" class="derivatives"
                ><div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg"
                    loading="lazy"
                  />Derivatives
                </div></router-link
              >
              <router-link to="/exchanges/ru/spot" class="spot">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuFiatsIcon.svg"
                    loading="lazy"
                  />Spot
                </div></router-link
              >
            </template>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <div class="item" role="button" aria-haspopup="true" aria-expanded="false">
              Community
            </div>
            <template #menu>
              <router-link to="/community/ru/feeds" class="feeds">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"
                    loading="lazy"
                  />Feeds
                </div></router-link
              >
              <router-link to="/community/ru/topics" class="topics">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"
                    loading="lazy"
                  />Topics
                </div></router-link
              >
              <router-link to="/community/ru/lives" class="lives">
                <div class="router-link-content">
                  <img
                    size="32"
                    src="https://s2.coinmarketcap.com/static/cloud/img/menu/MenuCmcIcon.svg"
                    loading="lazy"
                  />Lives
                </div></router-link
              >
            </template>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <div class="item" role="button" aria-haspopup="true" aria-expanded="false">
              Products
            </div>
            <template #menu>
              <router-link to="/products/ru/converter" class="converter"
                >Converter</router-link
              >
              <router-link to="/products/ru/bot" class="bot">Telegram Bot</router-link>
              <router-link to="/products/ru/air" class="air">Air</router-link>
            </template>
          </DropdownMenuItem>

          <div class="learn" data-role="menu-item"></div>
        </nav>
      </div>
      <div class="header-right">
        <ToggleSwitch v-model="isBlackTheme" />
        <Search class="search" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo-container,
.header-menu,
.header-right,
.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
}

.item {
  color: #ffffff;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 24px 16px;
  min-height: 71px;
}

.item:hover {
  color: #6188ff !important;
}

img {
  height: 25px;
  width: 25px;
  margin-right: 10px;
}

.router-link-content {
  display: flex;
  align-items: center;
}

.white-theme .item {
  color: #222531;
}

.black-theme .item {
  color: #fff;
}

.logo-container {
  padding: 0 26px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.black-theme .logo {
  fill: rgb(255, 255, 255);
}

.home {
  font-size: 20px;
}

.black-theme .home {
  text-decoration: none;
  color: #ccc;
}

.white-theme .home {
  text-decoration: none;
  color: #222531;
}

* {
  box-sizing: border-box;
  font-family: Inter, -apple-system, BlinkMacSystemFont, segoe ui, Roboto, Helvetica,
    Arial, sans-serif;
}

.cryptocurrencies,
.exchanges,
.community,
.products {
  position: relative;
}

.global-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
  position: relative;
  padding: 0px 16px;
  border-top: 1px solid #555555;
  border-bottom: 1px solid #555555;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  padding: 10px;
  border: 1px solid #ccc;
  z-index: 10;
  border-radius: 10px;
}

.cryptocurrencies:hover .dropdown-menu,
.exchanges:hover .dropdown-menu,
.community:hover .dropdown-menu,
.products:hover .dropdown-menu {
  display: block;
}
.divider {
  flex-grow: 1;
  border: none;
  border-top: 1px solid #2f3142;
  margin: 15px;
}
.dropdown-menu a {
  display: block;
  padding: 5px;
  color: #222531;
  text-decoration: none;
}

.dropdown-menu a:hover {
  background-color: #f0f0f0;
}
.header-menu {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 50px;
}

.header-left {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.header-menu > div {
  margin-right: 50px;
}

.header-input {
  display: flex;
  align-items: center;
}

.header-right {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.black-theme .dropdown-menu {
  background-color: #0d1421;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.black-theme .dropdown-menu a {
  color: rgba(240, 240, 240, 0.8);
}

.black-theme .dropdown-menu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.black-theme .cmc-logo-img {
  background: #0d1421;
  color: #fff;
}
</style>
