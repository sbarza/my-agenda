import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faBars, faXmark, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PersonalTrainerForm from "./components/Forms/PersonalForm/PersonalTrainerForm";
import Home from "./components/Home/Home";
import styles from "./App.module.css";

library.add(faFacebookF, faInstagram, faPhone, faEnvelope, faBars, faXmark, faAngleRight)

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
