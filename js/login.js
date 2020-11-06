class FormValidator {
    constructor(form, fields) {
      this.form = form;
      this.fields = fields;
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
          const valid = fields.every((item) => item === true);
          valid ? (button.disabled = false) : (button.disabled = true);
        });
      });
    }
  
    validateFields(field) {
      // Check presence of values
      if (field.value.trim() === "") {
        field.status=false
      } else {
        field.status = true;
      }
  
    }
  }
  
  const form = document.querySelector(".form");
  const fields = [
    "email",
    "password",
  ];
  
  const validator = new FormValidator(form, fields);
  validator.initialize();
  