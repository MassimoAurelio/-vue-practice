<script setup>
import { ref, computed } from "vue";
import Search from "./Search.vue";
import DropdownMenuItem from "./DropdownMenuItem.vue";

const isBlackTheme = ref(false);

const headerClasses = computed(() => ({
  "global-header": true,
  "black-theme": isBlackTheme.value,
}));
</script>

<template>
  <div :class="headerClasses">
    <div class="global-header">
      <div class="header-left">
        <div class="logo-container">
          <router-link to="/">
            <img
              class="cmc-logo-img"
              src="../assets/img/logo.svg"
              alt=""
              :class="{
                'black-theme': isBlackTheme,
                'white-theme': !isBlackTheme,
              }"
            />
          </router-link>
          <span>
            <router-link to="/" class="home"></router-link>
          </span>
        </div>
        <div class="header-menu">
          <DropdownMenuItem>
            Cryptocurrencies
            <template #menu>
              <router-link to="/" class="ranking">Ranking</router-link>
              <router-link to="/reference" class="reference"
                >Reference currencies</router-link
              >
              <router-link to="cryptocurrencies/ru/categories" class="categories"
                >Categories</router-link
              >
              <router-link to="cryptocurrencies/ru/spotlight" class="spotlight"
                >Spotlight</router-link
              >
            </template>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Exchanges
            <template #menu>
              <router-link to="/exchanges/ru/spot" class="spot">Spot</router-link>
              <router-link to="/exchanges/ru/derivatives" class="derivatives"
                >Derivatives</router-link
              >
              <router-link to="/exchanges/ru/spot" class="spot">Spot</router-link>
            </template>
          </DropdownMenuItem>

          <DropdownMenuItem>
            Community
            <template #menu>
              <router-link to="/community/ru/feeds" class="feeds">Feeds</router-link>
              <router-link to="/community/ru/topics" class="topics">Topics</router-link>
              <router-link to="/community/ru/lives" class="lives">Lives</router-link>
            </template>
          </DropdownMenuItem>

          <DropdownMenuItem>
            Products
            <template #menu>
              <router-link to="/products/ru/converter" class="converter"
                >Converter</router-link
              >
              <router-link to="/products/ru/bot" class="bot">Telegram Bot</router-link>
              <router-link to="/products/ru/air" class="air">Air</router-link>
            </template>
          </DropdownMenuItem>

          <div class="learn" data-role="menu-item"></div>
        </div>
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
  align-items: center;
  font-weight: bold;
}

.logo-container {
  padding: 0 26px;
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
  color: #333;
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
