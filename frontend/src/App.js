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
import JoinUs from "./components/JoinUs/JoinUs";
import PersonalTrainerForm from "./components/Forms/PersonalForm/PersonalTrainerForm";
import GymnasiumForm from "./components/Forms/GymnasiumForm/GymnasiumForm";
import AuthForm from "./components/Auth/AuthForm";
import PersonalDirectory from "./components/PersonalDirectory/PersonalDirectory";
import PersonalPage from "./components/PersonalPage/PersonalPage";
import GymnasiumStudioDirectory from "./components/GymnasiumStudioDirectory/GymnasiumStudioDirectory";
import GymnasiumStudioPage from "./components/GymnasiumStudioPage/GymnasiumStudioPage";

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
            <Route exact path="/join-us" render={(props) => <JoinUs {...props} />} />
            <Route exact path="/personal-registration" render={(props) => <PersonalTrainerForm {...props} />} />
            <Route exact path="/gymnasium-studium-registration" render={(props) => <GymnasiumForm {...props} />} />
            <Route exact path="/auth" render={(props) => <AuthForm {...props} />} />
            <Route exact path="/personal-directory" render={(props) => <PersonalDirectory {...props} />} />
            <Route exact path="/personal-trainer/personal-page" render={(props) => <PersonalPage {...props} />} />
            <Route exact path="/gymnasium-studio-directory" render={(props) => <GymnasiumStudioDirectory {...props} />} />
            <Route exact path="/ginasio-estudio/gymnasium-studio-page" render={(props) => <GymnasiumStudioPage {...props} />} />
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
