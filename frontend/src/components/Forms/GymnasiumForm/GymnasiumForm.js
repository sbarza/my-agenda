import { useState, CSSProperties } from "react";
import useInput from "../../../hooks/use-input";
import Password from "../Password/Password";
import styles from "./GymnasiumForm.module.css";
import imageForm from "../../../images/personal-gymnasium-main.jpeg";
import FadeLoader from "react-spinners/FadeLoader";

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.match(emailRegex);
const isPasswordConfirmed = (value1, value2) => value1 === value2;
const MAX_FILES = 5;

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  zIndex: 1,
  top: "60%",
};

const GymnasiumForm = () => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
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

  let formIsValid = true;
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const [fileLimit, setFileLimit] = useState(false);

  if (
    nameIsValid &&
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

  const uploadFilesHandler = (event) => {
    const chosenFiles = Array.prototype.slice.call(event.target.files);
    const uploaded = [...files];
    let limitExceeded = false;
    chosenFiles.some((file) => {
      if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_FILES) setFileLimit(true);
        if (uploaded.length > MAX_FILES) {
          alert(`You can only add a maximum of ${MAX_FILES} files`);
          setFileLimit(false);
          limitExceeded = true;
          return true;
        }
      }
    });
    if (!limitExceeded) setFiles(uploaded);
    console.log(uploaded);
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    if (!formIsValid) {
      return;
    }

    const formData = new FormData();

    files.map((file) => {
      formData.append("photos[]", file, file.name);
    });

    const personalTrainerData = {
      name: nameValue,
      address: addressValue,
      city: cityValue,
      state: stateValue,
      country: "portugal",
      zipCode: zipCodeValue,
      nif: nifValue,
      email: emailValue,
      password: passwordValue,
    };

    formData.append("data", JSON.stringify(personalTrainerData));

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const response = await fetch(
      "http://localhost:8000/api/registerPersonalTrainer",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );
    const responseData = await response.json();
    setIsLoading(false);
    console.log(responseData);

    resetName();
    resetAddress();
    resetCity();
    resetZipCode();
    resetNIF();
    resetEmail();
    resetState();
    resetPassword();
    resetPasswordConfirmation();
  };

  return (
    <>
      {isLoading && <FadeLoader color="#36d7b7" cssOverride={override} />}
      <section className={"container-top-image-text"}>
        <h2 className={"title--alpha fadeInUp animated"}>
          Os Melhores Ginásios e Estúdios
        </h2>
        <img src={imageForm} alt="Ginásio" />
      </section>

      <section className={"subscription-login"}>
        <h2 className={"title--negative"}>
          Subscrição - Membro Ginásio/Estúdio
        </h2>
        <form onSubmit={submitHandler}>
          <p>Preço: Grátis</p>
          <label
            className={`form-control ${nameHasError ? "invalid" : ""}`}
            htmlFor="name"
          >
            Nome:*
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              disabled={isLoading}
            />
            {nameHasError && <p className={`error-text`}>Nome é necessário.</p>}
          </label>

          <label
            className={`form-control ${addressHasError ? "invalid" : ""}`}
            htmlFor="address"
          >
            Morada:*
            <input
              type="text"
              id="address"
              value={addressValue}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              disabled={isLoading}
            />
            {addressHasError && (
              <p className={`error-text`}>Morada é necessário.</p>
            )}
          </label>

          <label
            className={`form-control ${cityHasError ? "invalid" : ""}`}
            htmlFor="city"
          >
            Cidade:*
            <input
              type="text"
              id="city"
              value={cityValue}
              onChange={cityChangeHandler}
              onBlur={cityBlurHandler}
              disabled={isLoading}
            />
            {cityHasError && (
              <p className={`error-text`}>Cidade é necessário.</p>
            )}
          </label>

          <label
            className={`form-control ${zipCodeHasError ? "invalid" : ""}`}
            htmlFor="zipCode"
          >
            Código Postal:*
            <input
              type="text"
              id="zipCode"
              value={zipCodeValue}
              onChange={zipCodeChangeHandler}
              onBlur={zipCodeBlurHandler}
              disabled={isLoading}
            />
            {zipCodeHasError && (
              <p className={`error-text`}>Código Postal é necessário.</p>
            )}
          </label>

          <label
            className={`form-control ${stateHasError ? "invalid" : ""}`}
            htmlFor="state"
          >
            Região:*
            <select
              id="state"
              value={stateValue}
              onChange={stateChangeHandler}
              onBlur={stateBlurHandler}
              disabled={isLoading}
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
          </label>

          <label
            className={`form-control ${nifHasError ? "invalid" : ""}`}
            htmlFor="nif"
          >
            NIF Contribuinte:*
            <input
              type="text"
              id="nif"
              value={nifValue}
              onChange={nifChangeHandler}
              onBlur={nifBlurHandler}
              disabled={isLoading}
            />
            {nifHasError && (
              <p className={`error-text`}>NIF Contribuinte é necessário.</p>
            )}
          </label>

          <label
            className={`form-control ${emailHasError ? "invalid" : ""}`}
            htmlFor="email"
          >
            E-Mail:*
            <input
              type="text"
              id="email"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              disabled={isLoading}
            />
            {emailHasError && (
              <p className={`error-text`}>E-Mail é necessário.</p>
            )}
          </label>

          <Password
            label="Password:*"
            error={passwordHasError}
            htmlFor="password"
            id="password"
            value={passwordValue}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            disabled={isLoading}
          >
            {passwordHasError && (
              <p className={`error-text`}>Password é necessário.</p>
            )}
          </Password>

          <Password
            label="Confirme Nova Password*"
            error={passwordConfirmationHasError}
            htmlFor="passwordConfirmation"
            id="passwordConfirmation"
            value={passwordConfirmationValue}
            onChange={passwordConfirmationChangeHandler}
            onBlur={passwordConfirmationBlurHandler}
            disabled={isLoading}
          >
            {passwordConfirmationHasError && (
              <p className={`error-text`}>
                A confirmação da Password não corresponde.
              </p>
            )}
          </Password>

          <input
            id="fileUpload"
            className={"uploaded-files"}
            type="file"
            multiple
            accept="image/*"
            onChange={uploadFilesHandler}
            disabled={fileLimit}
          />
          <div className={"uploaded-files-list"}>
            {files.map((file, index) => (
              <div key={index}><button>X</button> {file.name}</div>
            ))}
          </div>

          <label className={"form-control__checkbox"}>
            <input type="checkbox" disabled={isLoading} />
            <a href="#">Li e concordo com os Termos e Condições</a>*
          </label>

          <label className={"form-control__checkbox"}>
            <input type="checkbox" disabled={isLoading} />A PT TRAINING recolhe
            dados informativos do usuário. Li e Concordo com a nossa
            <a href="#"> Política de Privacidade</a>
          </label>

          <button
            className={"submit-button"}
            disabled={!formIsValid || isLoading}
          >
            Subscrever
          </button>
        </form>
      </section>
    </>
  );
};

export default GymnasiumForm;
