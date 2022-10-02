import useInput from "../../../hooks/use-input";
import Password from "../Password/Password";
import styles from "./PersonalTrainerForm.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const PersonalTrainerForm = () => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
  const {
    value: cityValue,
    isValid: cityIsValid,
    hasError: cityHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCity,
  } = useInput(isNotEmpty);
  const {
    value: zipCodeValue,
    isValid: zipCodeIsValid,
    hasError: zipCodeHasError,
    valueChangeHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
    reset: resetZipCode,
  } = useInput(isNotEmpty);
  const {
    value: stateValue,
    isValid: stateIsValid,
    hasError: stateHasError,
    valueChangeHandler: stateChangeHandler,
    inputBlurHandler: stateBlurHandler,
    reset: resetState,
  } = useInput(isNotEmpty);
  const {
    value: nifValue,
    isValid: nifIsValid,
    hasError: nifHasError,
    valueChangeHandler: nifChangeHandler,
    inputBlurHandler: nifBlurHandler,
    reset: resetNIF,
  } = useInput(isNotEmpty);
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
  const {
    value: passwordConfirmationValue,
    isValid: passwordConfirmationIsValid,
    hasError: passwordConfirmationHasError,
    valueChangeHandler: passwordConfirmationChangeHandler,
    inputBlurHandler: passwordConfirmationBlurHandler,
    reset: resetPasswordConfirmation,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    cityIsValid &&
    zipCodeIsValid &&
    stateIsValid &&
    nifIsValid &&
    emailIsValid &&
    passwordIsValid &&
    passwordConfirmationIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetCity();
    resetZipCode();
    resetNIF();
    resetEmail();
    resetState();
    resetPassword();
    resetPasswordConfirmation();
  };

  const firstNameClasses = firstNameHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const lastNameClasses = lastNameHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const cityClasses = cityHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const zipCodeClasses = zipCodeHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const stateClasses = stateHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const nifClasses = nifHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const emailClasses = emailHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const passwordClasses = passwordHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];
  const passwordConfirmationClasses = passwordConfirmationHasError
    ? styles[("form-control", "invalid")]
    : styles["form-control"];

  return (
    <form onSubmit={submitHandler}>
      <p>Preço: Grátis</p>
      <div className={styles["control-group"]}>
        <div className={firstNameClasses}>
          <label htmlFor="firstName">Primeiro Nome:*</label>
          <input
            type="text"
            id="firstName"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && (
            <p className={styles["error-text"]}>Primeiro Nome é Necessário.</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lastName">Último Nome:*</label>
          <input
            type="text"
            id="lastName"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && (
            <p className={styles["error-text"]}>Último Nome é Necessário.</p>
          )}
        </div>
        <div className={cityClasses}>
          <label htmlFor="city">Cidade:*</label>
          <input
            type="text"
            id="city"
            value={cityValue}
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
          />
          {cityHasError && (
            <p className={styles["error-text"]}>Cidade é Necessário.</p>
          )}
        </div>
        <div className={zipCodeClasses}>
          <label htmlFor="zipCode">Código Postal:*</label>
          <input
            type="text"
            id="zipCode"
            value={zipCodeValue}
            onChange={zipCodeChangeHandler}
            onBlur={zipCodeBlurHandler}
          />
          {zipCodeHasError && (
            <p className={styles["error-text"]}>Código Postal é Necessário.</p>
          )}
        </div>
        <div className={stateClasses}>
          <label htmlFor="state">Estado/Região:*</label>
          <select
            id="state"
            value={stateValue}
            onChange={stateChangeHandler}
            onBlur={stateBlurHandler}
          >
            <option value="">-- Selecione o Estado --</option>
            <option value="norte">Norte</option>
            <option value="centro">Centro</option>
            <option value="lisboa">Lisboa e Vale do Tejo</option>
            <option value="algarve">Algarve</option>
            <option value="alentejo">Alentejo</option>
            <option value="madeira">Madeira</option>
            <option value="açores">Açores</option>
          </select>
          {stateHasError && (
            <p className={styles["error-text"]}>Estado/Região é Necessário.</p>
          )}
        </div>
        <div className={nifClasses}>
          <label htmlFor="nif">NIF Contribuinte:*</label>
          <input
            type="text"
            id="nif"
            value={nifValue}
            onChange={nifChangeHandler}
            onBlur={nifBlurHandler}
          />
          {nifHasError && (
            <p className={styles["error-text"]}>
              NIF Contribuinte é Necessário.
            </p>
          )}
        </div>
        <div className={emailClasses}>
          <label htmlFor="email">E-Mail:*</label>
          <input
            type="text"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className={styles["error-text"]}>E-Mail é Necessário.</p>
          )}
        </div>
        <div className={passwordClasses}>
          <Password
            label="Password:*"
            htmlFor="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
          {passwordHasError && (
            <p className={styles["error-text"]}>Password é Necessário.</p>
          )}
        </div>
        <div className={passwordConfirmationClasses}>
          <Password
            label="Confirme Nova Password*"
            htmlFor="passwordConfirmation"
            id="passwordConfirmation"
            value={passwordConfirmationValue}
            onChange={passwordConfirmationChangeHandler}
            onBlur={passwordConfirmationBlurHandler}
          />
          {passwordConfirmationHasError && (
            <p className={styles["error-text"]}>A confirmação da Password não corresponde.</p>
          )}
        </div>
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Subscrever</button>
      </div>
      <p>
        Acesso válido após, o pagamento efectuado por transferência bancária ou
        depósito directo na nossa conta. IBAN: PT50 003300004564015394805, LILAS
        ABSTRATO UNIP LDA. Por favor envie o seu comprovativo para
        geral@pt-training.pt e indique o Primeiro e Ultimo Nome juntamente com o
        nome de utilizador/membro.
      </p>
    </form>
  );
};

export default PersonalTrainerForm;
