class FormValidator {
  constructor(form, fields) {
    this.form = form;
    this.fields = fields;
    this.arr = [];
  }

  initialize() {
    this.validateOnEntry();
    this.checkForm();
    this.validateOnSubmit();
  }

  validateOnSubmit() {
    let self = this;

    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      const spinner = document.querySelector(".spinner");
      spinner.classList.add('spinner-border','spinner-border-sm')
      setTimeout(() => {
        spinner.classList.remove('spinner-border','spinner-border-sm')
      }, 2000);
    });
  }

  validateOnEntry() {
    let self = this;
    this.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);
      input.status = false;
      input.addEventListener("input", (event) => {
        self.validateFields(input);
      });
    });
  }

  checkForm() {
    const button = document.querySelector(".button");
    button.disabled = true;
    let self = this;
    this.fields.forEach((field) => {
      const input = document.querySelector(`#${field}`);
      input.addEventListener("input", (event) => {
        const fields = [];
        fields.push(this.form.elements[0].status);
        fields.push(this.form.elements[1].status);
        fields.push(this.form.elements[2].status);
        fields.push(this.form.elements[3].status);
        fields.push(this.form.elements[4].status);
        fields.push(this.form.elements[5].status);
        const valid = fields.every((item) => item === true);
        valid ? (button.disabled = false) : (button.disabled = true);
      });
    });
  }

  validateFields(field) {
    // Check presence of values
    if (field.value.trim() === "") {
      this.setStatus(
        field,
        `${field.previousElementSibling.innerText} cannot be blank`,
        "error"
      );
    } else {
      // check if names contain numbers
      field.status = true;
      if (field.id === "firstname" || field.id === "lastname") {
        const re = /^([^0-9]*)$/;
        if (re.test(field.value)) {
          this.setStatus(field, null, "success");
          field.status = true;
        } else {
          this.setStatus(
            field,
            "Numbers are not allowed in name field",
            "error"
          );
          field.status = false;
        }
      }
    }

    // check for a valid email address
    if (field.type === "email") {
      field.status = false;
      const re = /\S+@\S+\.\S+/;
      if (re.test(field.value)) {
        this.setStatus(field, null, "success");
        field.status = true;
      } else {
        this.setStatus(field, "Please enter valid email address", "error");
      }
    }

    if (field.id === "password") {
      if (field.value.length < 8) {
        this.setStatus(
          field,
          "Password must be up to 8 characters long",
          "error"
        );
        field.status = false;
      } else {
        this.setStatus(field, null, "success");
        field.status = true;
      }
    }

    // Password confirmation edge case
    if (field.id === "password_confirmation") {
      field.status = false;
      const passwordField = this.form.querySelector("#password");

      if (field.value.trim() == "") {
        this.setStatus(field, "Password confirmation required", "error");
      } else if (field.value != passwordField.value) {
        this.setStatus(field, "Password does not match", "error");
      } else {
        this.setStatus(field, null, "success");
        field.status = true;
      }
    }

    if (field.type === "checkbox") {
      if (field.checked) {
        field.status = true;
      } else {
        field.status = false;
      }
    }
  }

  setStatus(field, message, status) {
    const successIcon = field.parentElement.querySelector(".icon-success");
    const errorIcon = field.parentElement.querySelector(".icon-error");
    const errorMessage = field.parentElement.querySelector(".error-message");

    if (status === "success") {
      if (errorIcon) {
        errorIcon.classList.add("hidden");
      }
      if (errorMessage) {
        errorMessage.innerText = "";
      }
      successIcon.classList.remove("hidden");
      field.classList.remove("input-error");
    }

    if (status === "error") {
      if (successIcon) {
        successIcon.classList.add("hidden");
      }
      field.parentElement.querySelector(".error-message").innerText = message;
      errorIcon.classList.remove("hidden");
      field.classList.add("input-error");
    }
  }
}

const form = document.querySelector(".form");
const fields = [
  "firstname",
  "lastname",
  "email",
  "password",
  "password_confirmation",
  "gridCheck",
];

const validator = new FormValidator(form, fields);
validator.initialize();
