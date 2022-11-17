import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import JoinUs from "./components/JoinUs/JoinUs";
import PersonalTrainerForm from "./components/Forms/PersonalForm/PersonalTrainerForm";
import GymnasiumForm from "./components/Forms/GymnasiumForm/GymnasiumForm";
import AuthForm from "./components/Auth/AuthForm";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/home" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/join-us" component={JoinUs} />
            <Route
              exact
              path="/personal-registration"
              component={PersonalTrainerForm}
            />
            <Route
              exact
              path="/gymnasium-studium-registration"
              component={GymnasiumForm}
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
