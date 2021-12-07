class registerValidation {
  //regex for email, password and name
  reEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  rePassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  reDisplayName = /^([^0-9]*)$/;

  checkRegCred(credentials) {
    const mailRes = this.reEmail.test(String(credentials.email).toLowerCase());
    const passRes = this.rePassword.test(String(credentials.password));
    const nameRes = !this.reDisplayName.test(String(credentials.name));

    if (!nameRes && mailRes && passRes) {
      return 1;
    } else if (nameRes) {
      return 2;
    } else if (!mailRes) {
      return 3;
    } else if (!passRes) {
      return 4;
    }
  }

  checkEmail(email) {
    return this.reEmail.test(String(email).toLowerCase()) ? 1 : 0;
  }
}
const rVal = new registerValidation();
export default rVal;
