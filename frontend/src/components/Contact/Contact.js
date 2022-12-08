import React from "react";
import styles from "./Contact.module.css";

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
          <div className={styles["container-contact-form__title-info"]}>
            <h2>TOMA O PRIMEIRO PASSO.<br/>NÓS FAZEMOS O RESTO.</h2>
            <p>Torna-te um parceiro ou um membro da <strong>PT TRAINING</strong>.<br/>
            Junta-te a esta comunidade.<br/>
            <strong>PT TRAINING</strong> o teu parceiro no Fitness.</p>
          </div>
          <form method="post" name="Contact Form" className={styles["container-contact-form__form"]}>
            <input type="text" name="container-contact-form__first-name" id="container-contact-form__first-name" placeholder="Primeiro Nome" required="required" aria-required="true"/>
            <input type="text" name="container-contact-form__last-name" id="container-contact-form__last-name" placeholder="Último Nome" required="required" aria-required="true"/>
            <input type="email" name="container-contact-form__last-name" id="container-contact-form__last-name" placeholder="O teu melhor email" required="required" aria-required="true"/>
            <input type="tel" name="container-contact-form__whatsapp" id="container-contact-form__whatsapp" placeholder="Contacto Whatsapp" required="required" aria-required="true" pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted."/>
            <input type="text" name="container-contact-form__last-name" id="container-contact-form__last-name" placeholder="Assunto" required="required" aria-required="true"/>
            <textarea name="container-contact-form__message" id="container-contact-form__message" rows="4" placeholder="Mensagem" required="required" aria-required="true"></textarea>
            <div>
              <input type="radio" id="container-contact-form__gymnasium-studio" name="container-contact-form__gymnasium-studio" value="Ginásio/Estúdio"/><label for="container-contact-form__gymnasium-studio">Ginásio/Estúdio</label>
              <input type="radio" id="container-contact-form__personal-trainer" name="container-contact-form__personal-trainer" value="Personal Trainer"/><label for="container-contact-form__personal-trainer">Personal Trainer</label>
              <input type="radio" id="container-contact-form__other" name="container-contact-form__other" value="Personal Trainer"/><label for="container-contact-form__other">Outro</label>
            </div>
            <div>
              <input type="checkbox" id="container-contact-form__privacy-policy" name="container-contact-form__privacy-policy" value="Li e Aceito a Politica de Privacidade."/><label for="container-contact-form__privacy-policy">Li e Aceito a Politica de Privacidade.</label>
            </div>
            <div>
              <button className={styles["container-contact-form__submit-button"]}>ENVIAR MENSAGEM</button>
            </div>
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
