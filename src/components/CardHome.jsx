import React from "react";
import { Link } from "react-router-dom";

import * as styles from "./css/CardHome.css";

const CardHome = ({ link, urlImage, altImage, title }) => {
  return (
    <Link to={link}>
      <styles.Container>
        <div>
          <img src={urlImage} alt={altImage} />
          <h2>{title}</h2>
        </div>
      </styles.Container>
    </Link>
  );
};

export default CardHome;