import React from "react";
import styles from "./JoinUs.module.css";
import homeImageForth1 from "../../images/home-forth-1.jpeg";
import homeImageForth2 from "../../images/home-forth-2.jpeg";

const JoinUs = () => {
  return (
    <>
      <section className={`${styles["container-top"]}`}>
        <h2 className={"title--alpha fadeInUp animated"}>MEMBROS PT-TRAINING</h2>
        <svg className={`${styles["container-bottom__blue-bar-svg"]}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className={`${styles["container-bottom__blue-bar-path"]}`} d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </section>

      <section className={`${styles["container-top-title"]}`}>
        <h2>OTIMIZA OS TEUS TREINOS, RENTABILIZA O TEU GINÁSIO</h2>
      </section>

      <section className={`${styles["pt-training-parceiro"]}`}>
        <h2 className={"title--negative"}>Escolhe a tua Subscrição</h2>
        <div className={"container"}>
          <div className={`${styles["pt-training-parceiro__ginasio-personal"]}`}>
            <span>GRATUITO*</span>
            <img src={homeImageForth1} alt="Ginásio com iluminação natural e equipamentos"/>
            <h4>SOU UM GINÁSIO/ESTÚDIO</h4>
            <p>Rentabiliza e otimiza o teu espaço.<br/>* Grátis até 31/12/2022.</p>
            <a href="/gymnasium-studium-registration">REGISTAR</a>
          </div>
          <div className={`${styles["pt-training-parceiro__ginasio-personal"]}`}>
            <span>GRATUITO*</span>
            <img src={homeImageForth2} alt="Senho idoso sendo assessorado pelo personal trainer"/>
            <h4>SOU UM PERSONAL TRAINER</h4>
            <p>Rentabiliza a gestão dos teus treinos.<br/>* Todas as funcionalidades gratuitamente.</p>
            <a href="/personal-registration">REGISTAR</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default JoinUs;
