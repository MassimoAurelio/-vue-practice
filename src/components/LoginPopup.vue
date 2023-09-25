<script setup>
import { defineProps} from "vue";

const props = defineProps({
  isBlackTheme: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="overlay" id="reg-overlay">
    <div
      class="popup"
      id="reg-popup"
      :class="{ 'white-theme-select': !isBlackTheme }"
    >
      <h2 class="popup-title">Log In</h2>
      <a class="popup-close" @click="$emit('close-login')">&times;</a>
      <form class="reg-form" method="post" action="#">
        <div class="label">Email</div>
        <input
          class="email-input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email address"
          required
          :class="{ 'white-theme-select': !isBlackTheme }"
        />

        <div class="label">Password</div>
        <input
          class="password-input"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
          required
          :class="{ 'white-theme-select': !isBlackTheme }"
        />
        <button type="submit" class="reg-btn">Log In</button>
        <div class="divider-container">
          <hr class="divider" />
          <span class="divider-text">OR</span>
          <hr class="divider" />
        </div>
        <div class="auth-buttons">
          <button class="google">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :class="{ 'white-theme-select': !isBlackTheme }"
                class="logo-svg"
              >
                <path
                  d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                ></path>
              </svg>
            </div>
            <span>Continue with Google</span>
          </button>
          <button class="apple">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :class="{ 'white-theme-select': !isBlackTheme }"
                class="logo-svg"
              >
                <path
                  d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"
                ></path>
              </svg>
            </div>
            <span>Continue with Apple</span>
          </button>
          <button class="binance">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :class="{ 'white-theme-select': !isBlackTheme }"
                class="logo-svg"
              >
                <path
                  d="m11.953 8.819-.547 2.19c.619.154 2.529.784 2.838-.456.322-1.291-1.673-1.579-2.291-1.734zm-.822 3.296-.603 2.415c.743.185 3.037.921 3.376-.441.355-1.422-2.029-1.789-2.773-1.974z"
                ></path>
                <path
                  d="M14.421 2.299C9.064.964 3.641 4.224 2.306 9.581.97 14.936 4.23 20.361 9.583 21.697c5.357 1.335 10.783-1.924 12.117-7.281 1.336-5.356-1.924-10.781-7.279-12.117zm1.991 8.275c-.145.974-.686 1.445-1.402 1.611.985.512 1.485 1.298 1.009 2.661-.592 1.691-1.998 1.834-3.87 1.48l-.454 1.82-1.096-.273.447-1.794a44.624 44.624 0 0 1-.875-.228l-.449 1.804-1.095-.275.454-1.823c-.257-.066-.517-.136-.782-.202L6.87 15l.546-1.256s.808.215.797.199c.311.077.448-.125.502-.261l.719-2.875.115.029a.864.864 0 0 0-.114-.037l.512-2.053c.013-.234-.066-.528-.511-.639.018-.011-.797-.198-.797-.198l.291-1.172 1.514.378-.001.005c.227.057.461.111.7.165l.449-1.802 1.097.273-.44 1.766c.294.067.591.135.879.207l.438-1.755 1.097.273-.449 1.802c1.384.479 2.396 1.195 2.198 2.525z"
                ></path>
              </svg>
            </div>
            <span>Continue with Binance</span>
          </button>
          <button class="wallet">
            <div class="logo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                :class="{ 'white-theme-select': !isBlackTheme }"
                class="logo-svg"
              >
                <path d="M16 12h2v4h-2z"></path>
                <path
                  d="M20 7V5c0-1.103-.897-2-2-2H5C3.346 3 2 4.346 2 6v12c0 2.201 1.794 3 3 3h15c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM5 5h13v2H5a1.001 1.001 0 0 1 0-2zm15 14H5.012C4.55 18.988 4 18.805 4 18V8.815c.314.113.647.185 1 .185h15v10z"
                ></path>
              </svg>
            </div>
            <span>Continue with Wallet</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: #222531;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  height: 650px;
  padding: 24px 32px 36px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.white-theme .popup {
  background-color: white;
  color: #333;
}

.popup-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;
  font-size: 35px;
}

.reg-form {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  font-weight: bold;
  margin: 10px 0 5px;
}

.input-group {
  margin-bottom: 15px;
}

.reg-form input {
  position: relative;
  background-color: rgb(23, 25, 36);
  border: 1px solid rgb(64, 66, 78);
  border-radius: 8px;
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  max-width: 100%;
  outline: 0px;
  padding: 0px 16px;
  width: 100%;
  font-size: 14px;
  height: 48px;
  line-height: 21px;
}

.white-theme .email-input,
.white-theme .password-input {
  background-color: white;
  color: #333;
  border: 1px solid rgb(154, 155, 160);
}

.reg-form input:focus {
  outline: none;
  border-color: #3c8ce7;
  box-shadow: 0 0 5px #3c8ce7;
}

.reg-form button.reg-btn {
  font-size: 16px;
  font-weight: bold;
  background-color: #3c8ce7;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
}

.auth-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.google,
.apple,
.binance,
.wallet {
  font-size: 16px;
  font-weight: bold;
  background-color: #0d1421;
  color: #fff;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  width: 100%;
  text-align: center;
}

.white-theme .google,
.white-theme .apple,
.white-theme .binance,
.white-theme .wallet {
  background-color: white;
  color: #333;
  border: 1px solid rgb(194, 196, 204);
}

.reg-form button.reg-btn:hover {
  background-color: #2d6bb7;
}

.logo {
  display: inline-block;
  margin-right: 8px;
  vertical-align: middle;
}

.white-theme .divider-text {
  color: #333;
}

.auth-buttons button {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgb(64, 66, 78);
}

.logo-svg {
  fill: rgba(255, 255, 255, 1);
}

.white-theme-select .logo-svg {
  fill: #000;
}

.black-theme .logo-svg {
  fill: #fff;
}

.divider-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 10px;
}

.divider {
  flex-grow: 1;
  border: none;
  border-top: 1px solid #2f3142;
  margin: 15px;
}

.white-theme .divider {
  border-top: 1px solid #fff;
}

.divider-text {
  font-size: 14px;
  color: #ddd;
  font-weight: bold;
}
</style>
