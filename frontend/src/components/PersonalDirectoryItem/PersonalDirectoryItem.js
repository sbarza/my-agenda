import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import FotoPersonal from '../../images/personal-gymnasium/thomas-ravera.png';

const PersonalDirectoryItem = () => {
  /* const navigate = useNavigate();

  const navigateToPersonalTrainer = () => {
    navigate('/contacts');
  }; */

  return (
    <>
      <figure className={`directory-container__item`}>
        <figcaption>Thomas Ravera</figcaption>
        <img src={FotoPersonal} alt="Thomas Ravera" />
        <ul>
          <li>Licenciado em Educação Física e Desporto - ULHT</li>
          <li>Mestrando em Treino de Alto Rendimento - FMH</li>
          <li>Personal Training Avançado</li>
        </ul>
        <p><FontAwesomeIcon icon={faLocationDot}/> Porto</p>
        <button>VER MAIS</button>
      </figure>
    </>
  );
};

export default PersonalDirectoryItem;
