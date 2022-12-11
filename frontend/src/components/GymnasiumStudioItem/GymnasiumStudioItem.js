import React from "react";
// import {Routes, Route, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import GymnasiumImage from '../../images/personal-gymnasium/absolute-health-club.png';

const GymnasiumStudioItem = () => {
  /* const navigate = useNavigate();

  const navigateToPersonalTrainer = () => {
    navigate('/contacts');
  }; */

  return (
    <>
      <figure className={`directory-container__item`}>
        <figcaption>Absolute Health Club</figcaption>
        <img src={GymnasiumImage} alt="Absolute Health Club" />
        <p><FontAwesomeIcon icon={faLocationDot}/> Lisboa</p>
        <button>VER MAIS</button>
      </figure>
    </>
  );
};

export default GymnasiumStudioItem;
