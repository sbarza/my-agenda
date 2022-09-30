import React from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PersonalForm from "./components/Forms/PersonalForm/PersonalForm";
import styles from "./App.module.css";

library.add(faFacebookF, faInstagram, faPhone, faEnvelope, faBars, faXmark)

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <PersonalForm />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
