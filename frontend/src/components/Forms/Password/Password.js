import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import styles from "./Password.module.css";

const Password = ({ label, htmlFor, id, value, onChange, onBlur }) => {
  const [toogleShowPass, setToogleShowPass] = useState(true);
  const [passIcon, setPassIcon] = useState(faEye);
  const [buttonPassClass, setButtonPassClass] = useState(`${styles["show-hide-password-displayed"]}`);
  const [passInputType, setPassInputType] = useState("password");

  const toogleShowPasswordHandler = () => {
    setToogleShowPass((prevState) => {
      return !prevState;
    });

    if (toogleShowPass) {
      setPassIcon(faEyeSlash);
      setPassInputType("text");
      setButtonPassClass(`${styles["show-hide-password-hidden"]}`)
    } else {
      setPassIcon(faEye);
      setPassInputType("password");
      setButtonPassClass(`${styles["show-hide-password-displayed"]}`)
    }
  };

  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input
        type={passInputType}
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        autoComplete="off"
      />
      <button type="button" className={buttonPassClass} onClick={toogleShowPasswordHandler}>
        <FontAwesomeIcon icon={passIcon} />
      </button>
    </>
  );
};

export default Password;
