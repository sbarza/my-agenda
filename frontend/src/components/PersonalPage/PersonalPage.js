import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FotoPersonal from '../../images/personal-gymnasium/thomas-ravera.png';
import styles from "./PersonalPage.module.css";

const PersonalPage = () => {
  return (
    <>
      <section className={`container directory-container ${styles["personal-container"]}`}>
        <h1>Thomas Ravera</h1>
        <figure>
          <img src={FotoPersonal} alt="Thomas Ravera"/>
        </figure>
        <div className={styles["personal-container-info"]}>
          <ul>
            <li>Fisiologista do Exercício que procura a cima de tudo ajudar e ensinar a treinar de acordo os seus objetivos.<br/>
              “A mente que se abre a uma nova ideia jamais voltará ao seu estado original." (Albert Einstein)
            </li>
            <li>Com mais de 20 anos de experiência na área de desporto.</li>
          </ul>
          <h2>Formação</h2>
          <ul>
            <li>Licenciado em Educação Física e Desporto - ULHT</li>
            <li>Mestrando em Treino de Alto Rendimento - FMH</li>
            <li>Personal Training Avançado</li>
          </ul>
          <h2>Especialidades</h2>
          <p>Perda de Peso, Hipertrofia, Alta Performance, Musculação</p>
          <p className={`directory-container__location`}>
            <FontAwesomeIcon icon={faLocationDot}/> Porto<br/>
          </p>
          <p className={`directory-container__social-media`}>
            <FontAwesomeIcon icon={faFacebookF}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faEnvelope}/>
          </p>
          <p className={`directory-container__stars`}>
            {(() => {
              let icons = [];
              for (let i = 1; i <= 5; i++) {
                icons.push(<FontAwesomeIcon key={`instagram-estrelas-${i}`} icon={faStar}/>);
              }
              return icons;
            })()}
          </p>
        </div>
      </section>
    </>
  );
};

export default PersonalPage;
