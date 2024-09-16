import { ISigninValidate, ISignupValidate } from "@/interfaces/interfaces";

export const validateSignin = (signinValues: ISigninValidate) => {
  let errors = {};

  // Email
  if (!signinValues.email) {
    errors = { ...errors, email: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(signinValues.email)) {
    errors = { ...errors, email: "Email is invalid" };
  }

  // Password
  if (!signinValues.password) {
    errors = { ...errors, password: "Password is required" };
  } else {
    if (signinValues.password.length < 8) {
      errors = {
        ...errors,
        password: "Password must be at least 8 characters long",
      };
    } else if (!/[A-Z]/.test(signinValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one uppercase letter",
      };
    } else if (!/[0-9]/.test(signinValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one number",
      };
    }
  }

  return errors;
};

export const validateSignup = (signupValues: ISignupValidate) => {
  let errors = {};

  // Email
  if (!signupValues.email) {
    errors = { ...errors, email: "Email is required" };
  } else if (!/\S+@\S+\.\S+/.test(signupValues.email)) {
    errors = { ...errors, email: "Email is invalid" };
  }

  // Password
  if (!signupValues.password) {
    errors = { ...errors, password: "Password is required" };
  } else {
    if (signupValues.password.length < 8) {
      errors = {
        ...errors,
        password: "Password must be at least 8 characters long",
      };
    } else if (!/[A-Z]/.test(signupValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one uppercase letter",
      };
    } else if (!/[0-9]/.test(signupValues.password)) {
      errors = {
        ...errors,
        password: "Password must contain at least one number",
      };
    }
  }

  // Names
  if (!signupValues.first_name) {
    errors = { ...errors, first_name: "First name is required" };
  } else if (!/^[A-Za-z]+$/.test(signupValues.first_name)) {
    errors = { ...errors, first_name: "First name is invalid" };
  }

  if (!signupValues.last_name) {
    errors = { ...errors, last_name: "Last name is required" };
  } else if (!/^[A-Za-z]+$/.test(signupValues.last_name)) {
    errors = { ...errors, last_name: "Last name is invalid" };
  }

  // Phone
  if (!signupValues.phone) {
    errors = { ...errors, phone: "Phone number is required" };
  } else if (!/^\+?[0-9]{7,15}$/.test(signupValues.phone)) {
    errors = { ...errors, phone: "Phone number is invalid" };
  }

  // Address
  if (!signupValues.address) {
    errors = { ...errors, address: "Address is required" };
  }

  return errors;
};
