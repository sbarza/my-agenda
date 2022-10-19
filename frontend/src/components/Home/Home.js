import React from "react";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStreetView, faUserCheck, faUsers, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import homeImageFirst from "../../images/home-first.jpeg";
import homeImageSecond from "../../images/home-second.jpeg";
import homeImageThird from "../../images/home-third.jpeg";
import homeImageInstagramUser from "../../images/home-rodrigogodinho.jpeg";
import homeImageForth1 from "../../images/home-forth-1.jpeg";
import homeImageForth2 from "../../images/home-forth-2.jpeg";
import Newsletter from "../Forms/Newsletter/Newsletter";

const Home = () => {
  React.useEffect(() => {
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
      <section className={styles["container-top-image"]}>
        <a href="#como-funciona">
          <img src={homeImageFirst} alt="Personal Trainer"/>
          <h2>
            OTIMIZA OS TEUS TREINOS, RENTABILIZA O TEU GINÁSIO
          </h2>
          <span>SABER MAIS</span>
        </a>
      </section>

      <section id="como-funciona" className={`container ${styles["como-funciona"]}`}>
        <h2>COMO FUNCIONA ?</h2>
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

      <section className={styles["porque-pt-training"]}>
        <div className={styles["porque-pt-training__image-item"]}>
          <img src={homeImageSecond} alt="Pessoas treinando"/>
        </div>
        <div className={styles["porque-pt-training__text-item"]}>
          <h2>PORQUÊ PT TRAINING ?</h2>
          <h3 className={"title--beta"}>Ginásios/Estúdios</h3>
          <p>Todos os dias procuramos disponibilizar a melhor selecção de ginásios e 
            estúdios em Portugal com os seus serviços e espaço servindo a comunidade dos Personal Trainer.</p>
          <h3 className={"title--beta"}>Personal Trainer</h3>
          <p>Disponibilizamos numa só plataforma as ferramentas necessárias para 
            otimizar os treinos e gestão do Personal Trainer , bem como a gestão 
            de agendamentos com os Membros Ginásios/Estúdios de forma simples.</p>
          <h3 className={"title--beta"}>Divulgação</h3>
          <p>Promovemos e divulgamos em diversos canais de comunicação todos os 
            nossos parceiros e membros PT-Training.</p>
          <h3 className={"title--beta"}>Comunidade</h3>
          <p>Todas os benefícios em pertencer e crescer com a uma comunidade de 
            profissionais da indústria Fitness.</p>
        </div>
      </section>

      <section className={styles["perguntas-frequentes"]}>
        <h2>AS TUAS PERGUNTAS FREQUENTES RESPONDIDAS ?</h2>
        <div className={`container ${styles["perguntas-frequentes__container"]}`}>
          <details>
            <summary>Como posso aderir ao PT TRAINING ?</summary>
            <p>Para aderir ao PT-TRAINING terá que ser Personal Trainer ou como 
              proprietário de um Ginásio/Estúdio. Neste momento estamos num período 
              de experimentação. A adesão é gratuita, somente com a necessidade de 
              preenchimento de um formulário de registo.</p>
          </details>
          <details>
            <summary>Para aderir tenho que pagar alguma mensalidade ?</summary>
            <p>A plataforma PT Training tem 2 planos de Subscrição. Subscrição como 
              Ginásio que é gratuito até 31 de Dezembro de 2022. A Subscrição para 
              Personal Trainer é igualmente gratuito.Não há qualquer pagamento para 
              adesão à PT-Training. O Personal Trainer só irá efectuar pagamentos 
              dos serviços que agendar/comprar dentro da plataforma PT-Training.</p>
          </details>
          <details>
            <summary>Sou Personal Trainer como posso aderir ao PT TRAINING ?</summary>
            <p>Para aderir ao Personal Trainer , basta submeter na escolha de 
              Membros a adesão como Personal Trainer.</p>
          </details>
          <details>
            <summary>Como posso agendar um serviço com qualquer Ginásio/Estúdio?</summary>
            <p>Ser membro PT Training como Personal Trainer. Procurar no directório 
              de Serviços, quais os Serviços disponibilizados por todos os Membros Ginásios/Estúdios.</p>
          </details>
          <details>
            <summary>Como posso registar o meu Ginásio/Estúdio na PT TRAINING ?</summary>
            <p>Ser Membro PT Training como Ginásio/Estúdio. Após adesão, aceder à zona 
              de Membros Ginásio/Estúdio, escolher a opção de Criar Ginásio.</p>
          </details>
          <a href="/perguntas-frequentes" target="_blank" rel="noreferrer">Ver mais <FontAwesomeIcon icon={faSearch}/></a>
        </div>
      </section>

      <section className={styles["dizem-sobre-pt-training"]}>
        <h2>O QUE DIZEM SOBRE O PT-TRAINING</h2>
        <img 
          src={homeImageThird} alt="Mulher a sorrir e descansar do treino"
          className={styles["dizem-sobre-pt-training__imagem-fundo"]}
        />
        <div className={styles["dizem-sobre-pt-training__instagram"]}>
          <a href="https://www.instagram.com/rodrigo_personal.trainer/" target="_blank" rel="noreferrer">
            <img src={homeImageInstagramUser} alt="Foto de Rodrigo Godinho"/>
            <h4>Rodrigo Godinho</h4>
            <div className={styles["dizem-sobre-pt-training__instagram-estrelas"]}>
              {(() => {
                let icons = [];
                for (let i = 1; i <= 5; i++) {
                  icons.push(<FontAwesomeIcon key={`instagram-estrelas-${i}`} icon={faStar}/>);
                }
                return icons;
              })()}
            </div>
            <div className={styles["dizem-sobre-pt-training__instagram-user"]}>@rodrigo_personal.trainer</div>
            <FontAwesomeIcon className={styles["dizem-sobre-pt-training__instagram-icon"]} icon={['fab', 'instagram']}/>
          </a>
          <p className={styles["dizem-sobre-pt-training__instagram-texto"]}>
            A PT Training é uma excelente plataforma onde disponibiliza ferramentas 
            e informação para melhor desenvolver e otimizar a minha actividade enquanto Personal Trainer.</p>
        </div>
      </section>

      <section className={`container ${styles["pt-training-parceiro"]}`}>
        <h2>PT TRAINING</h2>
        <h3>O teu parceiro no fitness.</h3>
        <div className={styles["pt-training-parceiro__ginasio-personal"]}>
          <span>GRATUITO*</span>
          <img src={homeImageForth1} alt="Ginásio com iluminação natural e equipamentos"/>
          <h4>SOU UM GINÁSIO/ESTÚDIO</h4>
          <p>Rentabiliza e otimiza o teu espaço.<br/>* Grátis até 31/12/2022.</p>
          <a href="/registar-ginasio-estudio" target="_blank" rel="noreferrer">REGISTAR</a>
        </div>
        <div className={styles["pt-training-parceiro__ginasio-personal"]}>
          <span>GRATUITO*</span>
          <img src={homeImageForth2} alt="Senho idoso sendo assessorado pelo personal trainer"/>
          <h4>SOU UM PERSONAL TRAINER</h4>
          <p>Rentabiliza a gestão dos teus treinos.<br/>* Todas as funcionalidades gratuitamente.</p>
          <a href="/registar-personal-trainer" target="_blank" rel="noreferrer">REGISTAR</a>
        </div>
      </section>

      <Newsletter />
    </>
  );
};

export default Home;
