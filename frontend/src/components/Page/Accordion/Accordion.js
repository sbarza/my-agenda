import React from "react";
import styles from "./Accordion.module.css";

const Accordion = () => {
  useEffect(() => {
    const details = document.querySelectorAll("details");

    details.forEach((targetDetail) => {
      targetDetail.addEventListener("click", () => {
        details.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, []);

  return (
    <>
     <details>
        <summary>Como posso aderir ao PT TRAINING ?</summary>
        <p>Para aderir ao PT-TRAINING terá que ser Personal Trainer ou como 
          proprietário de um Ginásio/Estúdio. Neste momento estamos num período 
          de experimentação. A adesão é gratuita, somente com a necessidade de 
          preenchimento de um formulário de registo.</p>
      </details>
    </>
  );
};

export default Accordion;
