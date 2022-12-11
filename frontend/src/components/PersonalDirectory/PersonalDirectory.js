import React from "react";
import PersonalDirectoryItem from "../PersonalDirectoryItem/PersonalDirectoryItem";

const PersonalDirectory = () => {
  return (
    <>
      <section className={`container directory-container`}>
        <h2 className={`title--alpha`}>DIRECTÓRIO DE PERSONAL TRAINERS</h2>
        <PersonalDirectoryItem />
        <PersonalDirectoryItem />
        <PersonalDirectoryItem />
      </section>
    </>
  );
};

export default PersonalDirectory;
