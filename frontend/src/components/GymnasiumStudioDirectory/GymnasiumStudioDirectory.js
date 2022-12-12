import React from "react";
import GymnasiumStudioItem from "../GymnasiumStudioItem/GymnasiumStudioItem";

const GymnasiumStudioDirectory = () => {
  return (
    <>
      <section className={`container directory-container`}>
        <h1 className={`title--alpha`}>DIRECTÓRIO DE PERSONAL TRAINERS</h1>
        <GymnasiumStudioItem/>
        <GymnasiumStudioItem/>
        <GymnasiumStudioItem/>
      </section>
    </>
  );
};

export default GymnasiumStudioDirectory;
