import React from "react";
import PersonalDirectoryItem from "../PersonalDirectoryItem/PersonalDirectoryItem";

const PersonalDirectory = () => {
  return (
    <>
      <section className={`container directory-container`}>
        <h1 className={`title--alpha`}>DIRECTÓRIO DE PERSONAL TRAINERS</h1>
        <PersonalDirectoryItem />
        <PersonalDirectoryItem />
        <PersonalDirectoryItem />
      </section>
    </>
  );
};

export default PersonalDirectory;
