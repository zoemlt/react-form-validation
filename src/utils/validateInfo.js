const validateInfo = values => {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Please enter a username";
  }

  if (!values.email) {
    errors.email = "Please enter an email";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email";
  }

  if (!values.password) {
    errors.password = "Please enter a password";
  } else if (values.password.length < 4) {
    errors.password = "Password must be minimum 4 characters";
  }

  if (!values.password2) {
    errors.password2 = "Please confirm password";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords do not match";
  }

  return errors;
};

export default validateInfo;
