import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <>
      <section className={styles["newsletter"]}>
        <div className={`container`}>
          <h2>Fica Atento!</h2>
          <h3>Com a nossa newsletter semanal não perderás nenhuma novidade do PT TRAINING.</h3>
          <input type="text" placeholder="Nome"/>
          <input type="text" placeholder="O teu melhor email"/>
          <select name="form_fields[message]" id="form-field-message">
            <option value="Aveiro">Aveiro</option>
            <option value="Beja">Beja</option>
            <option value="Braga">Braga</option>
            <option value="Bragança">Bragança</option>
            <option value="Castelo Branco">Castelo Branco</option>
            <option value="Coimbra">Coimbra</option>
            <option value="Évora">Évora</option>
            <option value="Faro">Faro</option>
            <option value="Guarda">Guarda</option>
            <option value="Leiria">Leiria</option>
            <option value="Lisboa">Lisboa</option>
            <option value="Porto">Porto</option>
            <option value="Portalegre">Portalegre</option>
            <option value="Santarém">Santarém</option>
            <option value="Setúbal">Setúbal</option>
            <option value="Vila Real">Vila Real</option>
            <option value="Viseu">Viseu</option>
            <option value="Viana do Castelo">Viana do Castelo</option>
          </select>
          <div>
            <input type="radio" value="Ginásio/Estúdio" id="newsletter-form__ginasio-estudio" name="newsletter-form__ginasio-estudio"/>
            <label htmlFor="newsletter-form__ginasio-estudio">Ginásio/Estúdio</label>
            <input type="radio" value="Personal Trainer" id="newsletter-form__personal-trainer" name="newsletter-form__personal-trainer"/>
            <label htmlFor="newsletter-form__personal-trainer">Personal Trainer</label>
          </div>
          <div>
            <input type="checkbox" value="Li e Aceito a Politica de Privacidade." id="newsletter-form__politica-privacidade" name="newsletter-form__politica-privacidade"></input>
            <label htmlFor="newsletter-form__politica-privacidade">Li e Aceito a Politica de Privacidade.</label>
          </div>
          <button type="submit">SUBSCREVER</button>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
