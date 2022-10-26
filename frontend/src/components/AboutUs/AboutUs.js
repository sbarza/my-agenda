import React from "react";
import styles from "./AboutUs.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEdit } from "@fortawesome/free-regular-svg-icons";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import AboutUsImagem1 from "../../images/quem-somos__inicio.jpeg";
import AboutUsImagem2 from "../../images/quem-somos__ginasios-e-estudios.jpeg";
import Newsletter from "../Forms/Newsletter/Newsletter";

const AboutUs = () => {
  return (
    <>
      <section className={styles["container-top"]}>
        <img src={AboutUsImagem1} alt="Personal Trainer"/>
        <h2 className={"title--alpha fadeInUp animated"}>SOBRE NÓS</h2>
        <svg class={styles["container-bottom__blue-bar-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class={styles["container-bottom__blue-bar-path"]} d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </section>

      <section className={styles["container-top-title"]}>
        <h2>OTIMIZA OS TEUS TREINOS, RENTABILIZA O TEU GINÁSIO</h2>
      </section>

      <section className={styles["our-mission"]}>
        <div className={`container ${styles["our-mission-wrapper"]}`}>
          <h2>A NOSSA MISSÃO</h2>
          <p>Mais do que uma marca, a <strong>PT TRAINING </strong> apresenta-se como a plataforma digital 
            que liga os <em>ginásios</em> e os <em>personal trainers</em>, a <strong>PT TRAINING </strong> 
            apresenta-se como uma solução para rentabilizar os <em>estúdios/ginásios</em>, bem como 
            otimizar os treinos e a gestão do <em>personal trainer</em>.<br/>
            A <strong>PT TRAINING </strong>
            é o parceiro que ajuda o <em>personal trainer</em> a otimizar a sua gestão e rentabilidade, 
            na procura do melhor espaço e acessórios, oferecendo uma maior variedade de 
            <em>estúdios/ginásios</em> numa única plataforma, bem como oferecer mais um canal de 
            divulgação e comunicação do <em>personal trainer</em><br/>
            A <strong>PT TRAINING</strong>, apresenta a sua plataforma como uma ferramenta de 
            rentabilidade e otimização de recursos do <em>estúdio/ginásio</em>, oferecendo gratuitamente 
            um perfil a cada espaço para que possam servir todos os <em>personal trainers</em>.</p>
            <div className={styles["our-mission__item"]}>
            <FontAwesomeIcon icon={faClock}/>
            <h3 className={"title--beta"}>Otimização</h3>
            <p>Ajudamos a otimizar os treinos do Personal Trainer com agendamentos através da nossa plataforma.</p>
          </div>
          <div className={styles["our-mission__item"]}>
            <FontAwesomeIcon icon={faEdit}/>
            <h3 className={"title--beta"}>Gestão</h3>
            <p>Disponibilizamos numa só plataforma as ferramentas necessárias para otimizar os treinos e gestão 
              do Personal Trainer.</p>
          </div>
          <div className={styles["our-mission__item"]}>
            <FontAwesomeIcon icon={faCalculator}/>
            <h3 className={"title--beta"}>Rentabilidade</h3>
            <p>Torna-te parceiro e regista os teus Ginásios/Estúdios. Rentabiliza o teu espaço e acessórios 
              com a <strong>PT TRAINING</strong>.</p>
          </div>
        </div>
      </section>

      <section className={styles["container-bottom"]}>
        <h2 className={styles["container-bottom__title-top"]}>
          <span>Performance</span><br/>
          NÓS AJUDAMOS-TE NA OTIMIZAÇÃO DE RESULTADOS
        </h2>
        <h2 className={styles["container-bottom__title-middle"]}>
          <span>Comunidade</span><br/>
          <strong>PT TRAINING</strong> O TEU PARCEIRO NO FITNESS
        </h2>
        <svg class={styles["container-bottom__red-bar-svg"]} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path class={styles["container-bottom__red-bar-path"]} d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </section>

      <img className={styles["container-bottom-img"]} src={AboutUsImagem2} alt="Ginásio"/>

      <Newsletter />
    </>
  );
};

export default AboutUs;
