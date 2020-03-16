class Valid2 extends Valid {
  constructor(email, password, isValid, emailError, passwordError) {
    super(email, password, isValid, emailError, passwordError);
    this.emailError = "";
    this.passwordError = "";
    this.isValid = false;
  }
  validate() {
    if (this.password.length > 6) {
      this.isValid = true;
      this.passwordError = "";
    } else {
      this.isValid = false;
      this.passwordError = "min lingth 6";
    }
    if (this.email == "") {
      this.isValid = false;
      this.emailError = "email empty";
    } else {
      this.isValid = true;
      this.emailError = "";
    }
  }
}
