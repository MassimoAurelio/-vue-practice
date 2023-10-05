<script setup>
import { ref, defineProps } from "vue";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});

const menuIsVisible = ref(false);

const menuMouseOver = () => {
  menuIsVisible.value = true;
};

const menuMouseLeave = () => {
  menuIsVisible.value = false;
};
</script>

<template>
  <div
    class="dropdown-menu-item"
    :class="{ 'black-theme': isBlackTheme, 'white-theme': !isBlackTheme }"
    data-role="menu-item"
    @mouseover="menuMouseOver()"
    @mouseleave="menuMouseLeave()"
  >
    <a><slot></slot></a>
    <div v-show="menuIsVisible" class="dropdown-menu">
      <slot name="menu"></slot>
    </div>
  </div>
</template>

<style scoped>
.dropdown-menu-item {
  position: relative;
  display: inline-block;
}

.black-theme .dropdown-menu-item {
  background-color: #0d1421;
  color: #fff;
}

.white-theme .dropdown-menu {
  background-color: #ffffff;
  color: black;
}

.black-theme .dropdown-menu {
  background-color: #222531;
  color: #fff;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding-left: 0;
  min-width: 100px;
  width: auto;
  min-height: 0px;
  height: auto;
  background-color: #222531;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  z-index: 1;
  color: white;
  border-radius: 10px;
}

.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -10px;
  left: 40px;
  border-width: 0 10px 10px 10px;
  border-style: solid;
  border-color: transparent transparent #222531 transparent;
}

.white-theme .dropdown-menu::before {
  border-color: transparent transparent #ffffff transparent;
}

.black-theme .dropdown-menu::before {
  border-color: transparent transparent #222531 transparent;
}
</style>
