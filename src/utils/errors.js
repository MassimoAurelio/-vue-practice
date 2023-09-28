const errorEmail = ref(false);
const errorName = ref(false);
const errorLastName = ref(false);
const errorBirth = ref(false);
const errorPassword = ref(false);

const inputValueEmail = ref("");
const inputValueName = ref("");
const inputValueLastName = ref("");
const inputValueBirth = ref("");
const inputValuePassword = ref("");

export function falseErrorMessageEmail() {
  if (inputValue.value) {
    errorEmail.value = false;
  }
}

export function trueErrorMessageEmail() {
  if (inputValue.value == "") {
    errorEmail.value = true;
  }
}

export function falseErrorMessageName() {
  if (inputValue.value) {
    errorName.value = false;
  }
}

export function trueErrorMessageName() {
  if (inputValue.value == "") {
    errorName.value = true;
  }
}

export function falseErrorMessageLastName() {
  if (inputValue.value) {
    errorLastName.value = false;
  }
}

export function trueErrorMessageLastName() {
  if (inputValue.value == "") {
    errorLastName.value = true;
  }
}

export function falseErrorMessageBirth() {
  if (inputValue.value) {
    errorBirth.value = false;
  }
}

export function trueErrorMessageBirth() {
  if (inputValue.value == "") {
    errorBirth.value = true;
  }
}

export function falseErrorMessagePassword() {
  if (inputValue.value) {
    errorPassword.value = false;
  }
}

export function trueErrorMessagePassword() {
  if (inputValue.value == "") {
    errorPassword.value = true;
  }
}
