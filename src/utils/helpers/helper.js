export const validateInput = (userName, email, password) => {
  const isUseNameValid = /^[a-zA-Z0-9_]{3,16}$/.test(userName);

  const isEmailValid = /^[\w.+-]+@[\w.-]+\.[a-zA-Z]{2,7}$/.test(email);

  const isPassValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  if (!isUseNameValid) return "Enter a valid user name";
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPassValid) return "Password is not valid";

  return null;
};
