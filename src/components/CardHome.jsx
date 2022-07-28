import React from "react";

import * as styles from "./css/CardHome.css";

const CardHome = ({ urlImage, altImage, title }) => {
  return (
    <styles.Container>
      <div>
        <img src={urlImage} alt={altImage} />
        <h2>{title}</h2>
      </div>
    </styles.Container>
  );
};

export default CardHome;
