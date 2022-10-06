import useInput from "../../../hooks/use-input";
import Password from "../Password/Password";
import styles from "./Login.module.css";

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.match(emailRegex);

const Login = (props) => {
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

  const submitHandler = async (event) => {
    event.preventDefault();
    props.onLogin(emailValue, passwordValue, () => {
      resetEmail();
      resetPassword();
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

export default Login;
