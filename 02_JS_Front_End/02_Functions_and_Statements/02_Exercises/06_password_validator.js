function passwordValidator(password) {
  let validation = [
    (password.length >= 6 && password.length <= 10) ? true : "Password must be between 6 and 10 characters",
    (/^[A-Za-z0-9]*$/.test(password)) ? true : "Password must consist only of letters and digits",
    (/\d{2}/.test(password)) ? true : "Password must have at least 2 digits"
  ];

  if (validation.every(el => el === true)) {
    return "Password is valid"
  }

  return validation
    .filter(x => x != true)
    .join('\n')

}

console.log(
  passwordValidator('logIn')
)

console.log(
  passwordValidator('MyPass123')
)

console.log(
  passwordValidator('Pa$s$s')
)