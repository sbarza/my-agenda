import useInput from "../../../hooks/use-input";
import Password from "../Password/Password";
import styles from "./PersonalTrainerForm.module.css";
import imageForm from "../../../images/personal-gymnasium-main.jpeg";

const emailRegex =
/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.match(emailRegex);
const isPasswordConfirmed = (value1, value2) => value1 === value2;

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
    value: addressValue,
    isValid: addressIsValid,
    hasError: addressHasError,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddress,
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
  } = useInput((value) => isPasswordConfirmed(value, passwordValue));

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    addressIsValid &&
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

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const personalTrainerData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      address: addressValue,
      city: cityValue,
      state: stateValue,
      country: 'portugal',
      zipCode: zipCodeValue,
      nif: nifValue,
      email: emailValue,
      password: passwordValue,
    };

    const response = await fetch(
      "http://localhost:8000/api/registerPersonalTrainer",
      {
        method: "POST",
        body: JSON.stringify(personalTrainerData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const responseData = await response.json();
    console.log(responseData);

    resetFirstName();
    resetLastName();
    resetAddress();
    resetCity();
    resetZipCode();
    resetNIF();
    resetEmail();
    resetState();
    resetPassword();
    resetPasswordConfirmation();
  };

  const firstNameClasses = firstNameHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const lastNameClasses = lastNameHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const cityClasses = cityHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const addressClasses = addressHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const zipCodeClasses = zipCodeHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const stateClasses = stateHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const nifClasses = nifHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const emailClasses = emailHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const passwordClasses = passwordHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];
  const passwordConfirmationClasses = passwordConfirmationHasError
    ? `${styles["form-control"]} invalid`
    : styles["form-control"];

  return (
    <>
      <section className={styles["container-top-image"]}>
        <h2 className={"title title--alpha fadeInUp animated"}>
          Os Melhores Ginásios e Estúdios
        </h2>
        <img src={imageForm} alt="Ginásio" />
      </section>

      <section className={styles["form-personal-gymnasium"]}>
        <h2>Subscrição - Membro Personal Trainer</h2>
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
                <p className={`error-text`}>Primeiro Nome é necessário.</p>
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
                <p className={`error-text`}>Último Nome é necessário.</p>
              )}
            </div>
            <div className={addressClasses}>
              <label htmlFor="address">Morada:*</label>
              <input
                type="text"
                id="address"
                value={addressValue}
                onChange={addressChangeHandler}
                onBlur={addressBlurHandler}
              />
              {addressHasError && (
                <p className={`error-text`}>Morada é necessário.</p>
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
                <p className={`error-text`}>Cidade é necessário.</p>
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
                <p className={`error-text`}>Código Postal é necessário.</p>
              )}
            </div>
            <div className={stateClasses}>
              <label htmlFor="state">Região:*</label>
              <select
                id="state"
                value={stateValue}
                onChange={stateChangeHandler}
                onBlur={stateBlurHandler}
              >
                <option value="">-- Selecione a região --</option>
                <option value="norte">Norte</option>
                <option value="centro">Centro</option>
                <option value="lisboa">Lisboa e Vale do Tejo</option>
                <option value="algarve">Algarve</option>
                <option value="alentejo">Alentejo</option>
                <option value="madeira">Madeira</option>
                <option value="açores">Açores</option>
              </select>
              {stateHasError && (
                <p className={`error-text`}>Estado/Região é necessário.</p>
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
                <p className={`error-text`}>NIF Contribuinte é necessário.</p>
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
                <p className={`error-text`}>E-Mail é necessário.</p>
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
                <p className={`error-text`}>Password é necessário.</p>
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
                <p className={`error-text`}>
                  A confirmação da Password não corresponde.
                </p>
              )}
            </div>
            <label className={styles["termos-privacidade"]}>
              <input type="checkbox"/>
              <a href="#">Li e concordo com os Termos e Condições</a>*
            </label>
            <label className={styles["termos-privacidade"]}>
              <input type="checkbox"/>A PT TRAINING recolhe dados informativos do usuário. Li e Concordo com a nossa
              <a href="#"> Política de Privacidade</a>
            </label>
            <button className={styles["submit-button"]} disabled={!formIsValid}>Subscrever</button>
          </div>
        </form>
        <p className={`container ${styles["form-personal-gymnasium__warning"]}`}>
          Acesso válido após, o pagamento efectuado por transferência bancária ou
          depósito directo na nossa conta.<br/>
          IBAN: <strong>PT50 003300004564015394805, LILAS
          ABSTRATO UNIP LDA.</strong> Por favor envie o seu comprovativo para
          geral@pt-training.pt e indique o Primeiro e Ultimo Nome juntamente com o
          nome de utilizador/membro.
        </p>
      </section>
    </>
  );
};

export default PersonalTrainerForm;
