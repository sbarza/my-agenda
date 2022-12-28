import React from "react";
import styles from "./PtTrainingGuide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import criarNovoServico from "../../images/pt-training-guide-criar-novo-servico.jpeg";
import adicionarFotos from "../../images/pt-training-guide-criar-novo-servico-adicionar-fotos.jpeg";
import adicionarExtras from "../../images/pt-training-guide-criar-novo-servico-adicionar-extras.jpeg";
import Accordion from "../Page/Accordion/Accordion";

const PtTrainingGuide = () => {
  return (
    <>
      <section className={`${styles["container-top"]}`}>
        <h2 className={"title--alpha fadeInUp animated"}>GUIA PT TRAINING</h2>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </section>

      <section className={`${styles["container-top-title"]}`}>
        <h2>OTIMIZA OS TEUS TREINOS, RENTABILIZA O TEU GINÁSIO</h2>
      </section>

      <section className={`${styles["pt-training-guide"]}`}>
        <div className={`container ${styles["pt-training-guide-wrapper"]}`}>
          <h2>Guia PT Training</h2>
          <h3 className={`title--beta title-icon`}>
            <span><FontAwesomeIcon icon={faUsers}/></span>
            MEMBROS
          </h3>
          <Accordion summary={`Ginásios/Estúdios`}>
            <p>Na Área(Página) de Membros Ginásio/Estúdios, o Membro tem todas as 
              opções disponíveis de membro nomeadamente a  opção para Adicionar o 
              seu Ginásio/Estúdio é onde cria um perfil do seu Ginásio/Estúdio, 
              onde será disponibilizado num directório e página de perfil do mesmo 
              Ginásio/Estúdio.
            </p>
          </Accordion>
          <Accordion summary={`Personal Trainer`}>
            <p>Na Área(Página) de Membros Personal Trainer, o Membro  tem todas as 
              opções disponíveis de membro nomeadamente a  opção para Criar o seu 
              Perfil de Personal Trainer com toda a informação, onde será 
              disponibilizado num directório de Personal Trainers e página de 
              perfil exclusivo do Personal Trainer.</p>
          </Accordion>

          <h3 className={"title--beta title-icon"}>
            <span><FontAwesomeIcon icon={faCalendarCheck}/></span>
            GESTÃO DE AGENDAMENTOS
          </h3>
          <h4>MEMBROS - GINÁSIOS/ESTÚDIOS</h4>
          <p>Os Membros Ginásios/Estúdios, devem entrar na Área de Membros e pedir 
            a criação de Serviços. É enviado automáticamente um email com toda a 
            informação e passos a seguir pelo Membro. Após esse envio de informação 
            Será criado no prazo de até 48H pela PT-TRAINING o acesso para a 
            Gestão de Agendamentos.
          </p>
          <Accordion summary={`Disponibilizar Serviços como Ginásio/Estúdio`}>
            <p>Todos os Ginásios/Estúdios, após criarem o seu perfil, devem entrar 
              na Área de Membros Ginásios/Estúdios e pedir a criação de serviços na 
              opção Criar Serviços. Confirma o seu email, e é enviado um email 
              automáticamente pela PT TRAINING com as instruções a seguir para 
              preencher toda a informação para a criação de serviços a serem 
              carregados e disponibilizados para os Personal Trainers dentro da 
              Plataforma PT TRAINING.
            </p>
          </Accordion>

          <h4>SERVIÇOS</h4>
          <p>Criação de Serviços. Os serviços disponibilizados são os que estão 
            disponíveis para agendamentos pelo Personal Trainer.<br/>
            <strong>Exemplo:</strong> SALA MUSCULAÇÃO<br/>
            <strong>Duração:</strong> 1h (Poderá ser parametrizado em outros intervalos de tempo)<br/>
            <strong>Valor por Duração:</strong> 25 Eur<br/>
            <strong>Número de Pessoas</strong> (Capacidade): 1 ou 50<br/>
            É possível multiplicar o valor por cada pessoa.<br/>
            Ao nível de Extras, poderá colocar o valor do Extra ou não. 
            Introdução de fotografias.<br/>
            Colocar o intervalo de tempo de preparação do Serviço Antes e Depois 
            do próximo agendamento. De acordo com as horas de trabalho definidas no 
            perfil do Ginásio, assim é colocado o número de Slots disponíveis 
            conforme a duração do serviço versus o tempo de horas de trabalho.
          </p>
          <div className={`${styles["pt-training-guide__container-photos"]}`}>
            <img src={criarNovoServico} alt="Página de criação de um novo serviço"></img>
            <img src={adicionarExtras} alt="Página de criação de um serviço extra"></img>
            <img src={adicionarFotos} alt="Página de criação de adição de nova foto"></img>
          </div>

          <h4>PAINEL DE AGENDAMENTOS</h4>
          <p>No Painel de Agendamentos, o membro ginásio/estúdio tem acesso, a todas as 
            marcações feitas por membros Personal Trainer , tendo igualmente a possibilidade 
            enquanto Membro Ginásio/Personal Trainer fazer marcações para qualquer utilizador 
            Membro Personal Trainer. Acesso a todos os Eventos criados, bem como ao Perfil.
          </p>
          <p>Dentro do Perfil de Membro Ginásio/Estúdio, o utilizador tem a possibilidade de visualizar:</p>
          <ul>
            <li><strong><em>Serviços</em></strong> – Verificar todos os seus serviços disponíveis , bem como alterar os seus valores.</li>
            <li><strong><em>Horário de Trabalho</em></strong> – Verificar e Alterar o horário de funcionamento.</li>
            <li><strong><em>Dias de Folga</em></strong> – Visualizar os Dias de Folga , bem como adicionar ou alterar.</li>
            <li><strong><em>Dias Especiais</em></strong> – Visualizar Dias Especiais, bem como adicionar ou alterar.</li>
          </ul>
          <Accordion summary={`Página - Directório de Serviços`}>
            <p>Nesta página será possível verificar todas as categorias com serviços disponíveis de cada 
              ginásio/estúdio. Será possível visualizar, escolher e fazer logo agendamentos enquanto 
              Personal Trainer.
            </p>
          </Accordion>
          <Accordion summary={`Pagamentos Agendamentos/Serviços`}>
            <p>Todos os pagamentos de agendamentos/marcações estão por defeito configurados para serem pagas 
              no local ( ginásio/estúdio ) . Não é feita nenhuma gestão de pagamentos referente aos 
              agendamentos/marcações pela PT TRAINING.</p>
          </Accordion>
          <Accordion summary={`Anular Agendamentos`}>
            <p>No painel de agendamentos é onde poderá reagendar ou anular agendamentos.</p>
          </Accordion>

          <h4>MEMBROS - PERSONAL TRAINER</h4>
          <Accordion summary={`Agendamentos como funciona?`}>
            <div>
              <p>Os Membros Personal Trainer, podem fazer agendamentos de várias formas.</p>
              <ul className={`numbered-list`}>
                <li>
                  Na página procurar ginásios/estúdios, podem pesquisar por localização, data, e 
                  verificar os serviços e slots disponibilizados pelos Membros Ginásios/Estúdios.
                </li>
                <li>Na página de Serviços, é possível verificar todas as Categorias e Serviços 
                  disponibilizados pelos Membros Ginásios/Estúdios.
                </li>
              </ul>
            </div>
          </Accordion>
          <Accordion summary={`Categorias e Serviços`}>
            <p>Todas as Categorias / Serviços que estão disponíveis na plataforma, são 
              disponibilizados pelos Ginásios/Estúdios, bem como o número de slots disponíveis 
              estão de acordo com o horário de funcionamento de cada Ginásio/Estúdio. É da inteira 
              responsabilidade dos Membros Ginásios/Estúdios os Serviços que são disponibilizados.
            </p>
          </Accordion>
          <Accordion summary={`Painel de Agendamentos`}>
            <p>
              No Painel de Agendamentos, o Personal Trainer terá acesso a todos os agendamentos/marcações 
              feitas, bem como a reagendar ou cancelar essas mesmas marcações.
            </p>
          </Accordion>
          <p>
            Em todos os Agendamentos e Reagendamentos entre Membros é enviado automaticamente pela 
            plataforma as notificações com toda a informação para os Membros. 
          </p>
          
          <h3 className={"title--beta title-icon"}><span><FontAwesomeIcon icon={faUserFriends}/></span>GESTÃO DE PAGAMENTOS</h3>
          <h4>MEMBROS - GINÁSIO/ESTÚDIO</h4>
          <Accordion summary={`Como funciona os Pagamentos de Serviços`}>
            <p>Todas as Categorias / Serviços que estão disponíveis na plataforma, são 
              disponibilizados pelos Ginásios/Estúdios, bem como o número de slots disponíveis 
              estão de acordo com o horário de funcionamento de cada Ginásio/Estúdio. É da inteira 
              responsabilidade dos Membros Ginásios/Estúdios os Serviços que são disponibilizados.
            </p>
          </Accordion>
          <Accordion summary={`Serviço Renda Mensal`}>
            <p>A PT Training sobre o Serviço de Renda Mensal, retém uma taxa(fee) de 7%.</p>
          </Accordion>
          <Accordion summary={`Processamento de Pagamentos`}>
            <p>
            A PT Training procede à transferência dos pagamentos de serviços efectuados pelos Membros 
            Personal Trainer aos Membros Ginásios/Estúdios, até 7 dias úteis.
            </p>
          </Accordion>

          <h4>MEMBROS - PERSONAL TRAINER</h4>
          <Accordion summary={`Como funciona os Pagamentos de Serviços`}>
            <p>
              Para os Membros Personal Trainer, os Pagamentos de Serviços são efectuados dentro da 
              Plataforma PT-Training e sempre no momento que regista/agenda o serviço.
            </p>
          </Accordion>
          <Accordion summary={`Devoluções. Como Funciona?`}>
            <ul className={`numbered-list`}>
              <li>
                Devolução de Serviços: Só é possivel devolução de um serviço agendado, se o PT efectuar 
                a anulação do mesmo na plataforma até máximo 2H antes do agendamento. Caso não tenha 
                efectuado este procedimento já não é possivel a devolução do valor pago.
              </li>
              <li>
                A PT Training faz a devolução se existir alguma falha por parte do membro  estúdio/ginásio. 
                Exemplo: "mudança de horário sem ter avisado; não haver condições  para dar o treino"
              </li>
              <li>
                Do valor pago na totalidade pelo treino/pack de treinos, o PT apenas recebe o montante 
                pago ao estúdio pelo treino (por exemplo: 11€ pago na totalidade pelo treino. 10€ foi 
                pago ao estúdio pelo treino e 0,90€ (9%) de taxa pago à  plataforma. O PT apenas recebe 
                os 10€ referentes ao preço pago ao estúdio) . Em relação a renda, é a mesma coisa, a 
                única diferença é a taxa que, neste caso, é 7%.
              </li>
            </ul>
          </Accordion>
        </div>
      </section>

      <section className={`${styles["container-bottom"]}`}>
        <div className={`container`}>
          <h2>Precisa de Ajuda?</h2>
          <p>Junta-te a esta comunidade.</p>
          <a className={`button--rounded`} href="/join-us" role="button">ABRIR TICKET</a>
        </div>
      </section>
    </>
  );
};

export default PtTrainingGuide;
