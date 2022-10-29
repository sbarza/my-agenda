import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
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
        <Router>
          <Switch>
            <Route exact path="/" Redirect to="/home">
              <Redirect to="/home" />
            </Route>
            <Route
              exact
              path="/personal-registration"
              component={PersonalTrainerForm}
            />
            <Route exact path="/auth" component={AuthForm} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
