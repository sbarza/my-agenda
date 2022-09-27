import React, { useState } from "react";
import styles from "./Checkbox.module.css";

const Checkbox = (props) => {
  const [termsChecked, setTermsChecked] = useState(false);

  const clickTermsHandler = () => {
    setTermsChecked((prevState) => {
      return !prevState;
    });
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={termsChecked}
        onChange={clickTermsHandler}
      />
      {props.label}
    </label>
  );
};

export default Checkbox;
