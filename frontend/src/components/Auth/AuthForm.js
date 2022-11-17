import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import useInput from "../../hooks/use-input";
import Password from "../Forms/Password/Password";
import styles from "./AuthForm.module.css";
import React, { CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.match(emailRegex);

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  zIndex: 1,
  top: "56%"
};

const AuthForm = () => {
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

  return (
    <>
      {isLoading && <FadeLoader color="#36d7b7" cssOverride={override}/>}
      <section className={`subscription-login ${styles["auth-container"]}`}>
        <h2 className={`title--alpha`}>Login</h2>
        <form onSubmit={submitHandler}>
          <label
            className={`form-control ${emailHasError ? "invalid" : ""}`}
            htmlFor="email"
          >
            E-Mail:
            <input
              type="text"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              disabled={isLoading}
            />
          </label>

          <Password
            label="Password:"
            htmlFor="password"
            error={passwordHasError}
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            disabled={isLoading}
          />

          <label className={'form-control__checkbox'}>
            <input type="checkbox"/>
            Lembrar-me da Password
          </label>

          <button className={"submit-button"} disabled={!formIsValid || isLoading}>
            Log In
          </button>

          <a className={styles["auth-lost-password"]} href="#">Perdeu a Password ?</a>
        </form>
      </section>
    </>
  );
};

export default AuthForm;
