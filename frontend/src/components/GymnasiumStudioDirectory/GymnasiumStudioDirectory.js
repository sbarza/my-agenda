import React from "react";
import GymnasiumStudioItem from "../GymnasiumStudioItem/GymnasiumStudioItem";

const GymnasiumStudioDirectory = () => {
  return (
    <>
      <section className={`container directory-container`}>
        <h2 className={`title--alpha`}>DIRECTÓRIO DE PERSONAL TRAINERS</h2>
        <GymnasiumStudioItem/>
        <GymnasiumStudioItem/>
        <GymnasiumStudioItem/>
      </section>
    </>
  );
};

export default GymnasiumStudioDirectory;
