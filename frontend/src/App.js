import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import PersonalTrainerForm from "./components/Forms/PersonalForm/PersonalTrainerForm";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/auth-context";

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
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header isLoggedIn={authCtx.isLoggedIn} />
      <main>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about-us">
            <AboutUs />
          </Route>
          <Route path="/personal-registration">
            <PersonalTrainerForm />
          </Route>
          <Route path="/auth">
            <AuthForm />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
