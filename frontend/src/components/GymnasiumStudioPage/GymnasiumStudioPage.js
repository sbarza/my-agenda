import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import GymnasiumStudioImage from '../../images/personal-gymnasium/absolute-health-club.png';
import styles from "./GymnasiumStudioPage.module.css";

const PersonalPage = () => {
  return (
    <>
      <section className={`container directory-container ${styles["gymnasium-studio-container"]}`}>
        <h1>Absolute Health Club</h1>
        <figure>
          <img src={GymnasiumStudioImage} alt="Absolute Health Club"/>
          <figcaption>Absolute Health Club</figcaption>
          <p>
            O Absolute Health Club nasce da paixão pela área do fitness e pelo desejo de criar 
            um conceito totalmente direcionado para o sócio, fugindo de tudo aquilo que se 
            perdeu com os conceitos low-cost.<br/>
            Aqui, a prioridade é o sócio e os seus objetivos.<br/>
            Venha treinar connosco num ambiente diferenciado e restrito.
          </p>
          <h2>Materiais existente no Espaço</h2>
          <p>Step, corda, caixa, zona de cardio, zona de musculação.</p>
          <h2>Termos e Condições de Utilização do Espaço</h2>
          <p>Toalha, ténis lavados e roupa de treino</p>
          <p className={styles["gymnasium-studio-location"]}><FontAwesomeIcon icon={faLocationDot}/> Porto<br/></p>
          <p className={styles["gymnasium-studio-social-media"]}>
            <FontAwesomeIcon icon={faFacebookF}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faEnvelope}/>
          </p>
          <p className={styles["gymnasium-studio-stars"]}>
            {(() => {
              let icons = [];
              for (let i = 1; i <= 5; i++) {
                icons.push(<FontAwesomeIcon key={`instagram-estrelas-${i}`} icon={faStar}/>);
              }
              return icons;
            })()}
          </p>
        </figure>
      </section>
    </>
  );
};

export default PersonalPage;
