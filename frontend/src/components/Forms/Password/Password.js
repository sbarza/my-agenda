import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import styles from "./Password.module.css";

const Password = (props) => {
  const [toogleShowPass, setToogleShowPass] = useState(true);
  const [passIcon, setPassIcon] = useState(faEye);
  const [passInputType, setPassInputType] = useState("password");

  const toogleShowPasswordHandler = () => {
    setToogleShowPass((prevState) => {
      return !prevState;
    });

    if (toogleShowPass) {
      setPassIcon(faEyeSlash);
      setPassInputType("text");
    } else {
      setPassIcon(faEye);
      setPassInputType("password");
    }
  };

  return (
    <div>
      <label>{props.label}</label>
      <input type={passInputType} />
      <button type="button" onClick={toogleShowPasswordHandler}>
        <FontAwesomeIcon icon={passIcon} />
      </button>
    </div>
  );
};

export default Password;
