import React from "react";
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
import Contact from "./components/Contact/Contact";
import JoinUs from "./components/JoinUs/JoinUs";
import PersonalTrainerForm from "./components/Forms/PersonalForm/PersonalTrainerForm";
import GymnasiumForm from "./components/Forms/GymnasiumForm/GymnasiumForm";
import AuthForm from "./components/Auth/AuthForm";

function App() {

  return (
    <>
      <Header />
      <main>
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
            <Route exact path="/home" render={(props) => <Home {...props} />} />
            <Route exact path="/about-us" render={(props) => <AboutUs {...props} />} />
            <Route exact path="/contact" render={(props) => <Contact {...props} />} />
            <Route exact path="/join-us" render={(props) => <JoinUs {...props} />} />
            <Route exact path="/personal-registration" render={(props) => <PersonalTrainerForm {...props} />} />
            <Route exact path="/gymnasium-studium-registration" render={(props) => <GymnasiumForm {...props} />} />
            <Route exact path="/auth" render={(props) => <AuthForm {...props} />} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
