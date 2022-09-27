import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PersonalForm from "./components/Forms/PersonalForm/PersonalForm";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />
      <PersonalForm />
      <Footer />
    </div>
  );
}

export default App;
