const clickOutside = {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.addEventListener("mousedown", el.clickOutsideEvent);
      document.addEventListener("touchstart", el.clickOutsideEvent);
    },
    unmounted(el) {
      document.removeEventListener("mousedown", el.clickOutsideEvent);
      document.removeEventListener("touchstart", el.clickOutsideEvent);
    },
  };
  
  export default clickOutside;