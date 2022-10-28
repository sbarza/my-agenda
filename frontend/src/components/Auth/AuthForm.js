import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import useInput from "../../hooks/use-input";
import Password from "../Forms/Password/Password";
import styles from "./AuthForm.module.css";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.match(emailRegex);

const AuthForm = (props) => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    // optional: Add validation

    const loginData = {
      username: emailValue,
      password: passwordValue,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    setIsLoading(true);
    fetch("http://localhost:8000/api/login_check", requestOptions)
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }

            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date((new Date().getTime() + 3600000));
        authCtx.login(data.token, expirationTime.toISOString());
        history.replace("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const emailClasses = emailHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const passwordClasses = passwordHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={emailClasses}>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
        </div>
        <div className={passwordClasses}>
          <Password
            label="Password:"
            htmlFor="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        <button className={styles["submit-button"]} disabled={!formIsValid}>
          Log In
        </button>
      </form>
    </>
  );
};

export default AuthForm;
