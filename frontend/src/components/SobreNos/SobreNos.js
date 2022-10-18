import React from "react";
import styles from "./SobreNos.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView, faUserCheck, faUsers } from "@fortawesome/free-solid-svg-icons";
import sobreNosImagem1 from "../../images/quem-somos__inicio.jpeg";
import sobreNosImagem2 from "../../images/quem-somos__ginasios-e-estudios.jpeg";

const SobreNos = () => {
  return (
    <>
      <section className={styles["container-top-image"]}>
        <a href="#como-funciona">
          <img src={sobreNosImagem1} alt="Personal Trainer"/>
          <h2 className={"title--alpha fadeInUp animated"}>SOBRE NÓS</h2>
          <h3>OTIMIZA OS TEUS TREINOS, RENTABILIZA O TEU GINÁSIO</h3>
        </a>
      </section>

      <section className={`container ${styles["como-funciona"]}`}>
        <h2>A NOSSA MISSÃO</h2>
        <p>Mais do que uma marca, a <strong>PT TRAINING </strong> apresenta-se como a plataforma digital 
          que liga os <em>ginásios</em> e os <em>personal trainers</em>, a <strong>PT TRAINING </strong> 
          apresenta-se como uma solução para rentabilizar os <em>estúdios/ginásios</em>, bem como 
          otimizar os treinos e a gestão do <em>personal trainer</em>. A <strong>PT TRAINING </strong>
          é o parceiro que ajuda o <em>personal trainer</em> a otimizar a sua gestão e rentabilidade, 
          na procura do melhor espaço e acessórios, oferecendo uma maior variedade de 
          <em>estúdios/ginásios</em> numa única plataforma, bem como oferecer mais um canal de 
          divulgação e comunicação do <em>personal trainer</em><br/>
          A <strong>PT TRAINING</strong>, apresenta a sua plataforma como uma ferramenta de 
          rentabilidade e otimização de recursos do <em>estúdio/ginásio</em>, oferecendo gratuitamente 
          um perfil a cada espaço para que possam servir todos os <em>personal trainers</em>.</p>
          <div className={styles["como-funciona__item"]}>
          <FontAwesomeIcon icon={faStreetView}/>
          <h3 className={"title--beta"}>Descobrir</h3>
          <p>Descobre na nossa plataforma as vantagens para um Ginásio/Estúdio ou um Personal Trainer.</p>
        </div>
        <div className={styles["como-funciona__item"]}>
          <FontAwesomeIcon icon={faUserCheck}/>
          <h3 className={"title--beta"}>Registar</h3>
          <p>Regista-te como Personal Trainer ou Ginásio/Estúdio de forma gratuita.</p>
        </div>
        <div className={styles["como-funciona__item"]}>
          <FontAwesomeIcon icon={faUsers}/>
          <h3 className={"title--beta"}>Acesso</h3>
          <p>Tem acesso a todas as ferramentas e vantagens do PT Training 
            enquanto Personal Trainer ou Ginásio/Estúdio.</p>
        </div>
      </section>

      <section className={styles["fica-atento"]}>
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
            <input type="radio" value="Ginásio/Estúdio" id="fica-atento-form__ginasio-estudio" name="fica-atento-form__ginasio-estudio"/>
            <label htmlFor="fica-atento-form__ginasio-estudio">Ginásio/Estúdio</label>
            <input type="radio" value="Personal Trainer" id="fica-atento-form__personal-trainer" name="fica-atento-form__personal-trainer"/>
            <label htmlFor="fica-atento-form__personal-trainer">Personal Trainer</label>
          </div>
          <div>
            <input type="checkbox" value="Li e Aceito a Politica de Privacidade." id="fica-atento-form__politica-privacidade" name="fica-atento-form__politica-privacidade"></input>
            <label htmlFor="fica-atento-form__politica-privacidade">Li e Aceito a Politica de Privacidade.</label>
          </div>
          <button type="submit">SUBSCREVER</button>
        </div>
      </section>
    </>
  );
};

export default SobreNos;
