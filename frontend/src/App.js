import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./components/Forms/Login/Login";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faBars,
  faXmark,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PersonalTrainerForm from "./components/Forms/PersonalForm/PersonalTrainerForm";
import styles from "./App.module.css";

library.add(
  faFacebookF,
  faInstagram,
  faPhone,
  faEnvelope,
  faBars,
  faXmark,
  faAngleRight
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = async (email, password) => {
    const loginData = {
      username: email,
      password: password,
    };

    const requestOptions = {
      method: "POST",
      body: JSON.stringify(loginData),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await fetch(
        "http://localhost:8000/api/login_check",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        setIsLoggedIn(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main>
        <Route path="/personal-registration">
          <PersonalTrainerForm />
        </Route>
        <Route path="/login">
          <Login onLogin={loginHandler} />
        </Route>
      </main>
      <Footer />
    </>
  );
}

export default App;
