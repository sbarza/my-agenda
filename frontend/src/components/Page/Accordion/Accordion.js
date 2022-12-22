import React, { useEffect } from "react";
// import styles from "./Accordion.module.css";

const Accordion = (props) => {
  useEffect(() => {
    const details = document.querySelector('details');
    const parentContainer = details.parentNode;

    if(!parentContainer.classList.contains('.accordion-container')) {
      parentContainer.classList.add('accordion-container');
      parentContainer.addEventListener("click", (targetDetail) => {
        document.querySelectorAll("details").forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    }
  }, []);

  return (
    <>
     <details className={`accordion`}>
        <summary>{props.summary}</summary>
          {props.children}
      </details>
    </>
  );
};

export default Accordion;
