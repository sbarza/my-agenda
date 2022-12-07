import React from "react";
import styles from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import Newsletter from "../Forms/Newsletter/Newsletter";

const Contact = () => {
  return (
    <>
      <section className={styles["container-top"]}>
        <h2 className={"title--alpha fadeInUp animated"}>CONTACTA-NOS</h2>
        <svg className={styles["container-bottom__blue-bar-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className={styles["container-bottom__blue-bar-path"]} d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </section>

      <section className={styles["container-contact-form"]}>
        <div className={`container-md ${styles["container-contact-form__internal"]}`}>
          <div>
            <h2>TOMA O PRIMEIRO PASSO.<br/>NÓS FAZEMOS O RESTO.</h2>
            <p>Torna-te um parceiro ou um membro da <strong>PT TRAINING</strong>.<br/>
            Junta-te a esta comunidade.<br/>
            <strong>PT TRAINING</strong> o teu parceiro no Fitness.</p>
          </div>
          <form method="post" name="Contact Form">
            <input type="text" name="contact-form__first-name" id="contact-form__first-name" placeholder="Primeiro Nome" required="required" aria-required="true"/>
          </form>
        </div>
      </section>

      <section className={styles["container-bottom"]}>
        <h2 className={styles["container-bottom__title-top"]}>
          <span>Performance</span><br/>
          NÓS AJUDAMOS-TE A ATINGIRES MELHORES RESULTADOS
        </h2>
        <h2 className={styles["container-bottom__title-middle"]}>
          <span>Comunidade</span><br/>
          <strong>PT TRAINING</strong> O TEU PARCEIRO NO FITNESS
        </h2>
        <svg className={styles["container-bottom__red-bar-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className={styles["container-bottom__red-bar-path"]} d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </section>
    </>
  );
};

export default Contact;
