import React from "react";

import * as styles from "./css/Home.css";

import CardHome from "../components/CardHome";

const Home = () => {
  return (
    <styles.Container>
      <styles.Wrapper>
        <CardHome
          urlImage=""
          altImage="imagem aprender react"
          title="Aprender React"
        />

        <CardHome
          urlImage=""
          altImage="imagem aprender react"
          title="Jogar Reactgame"
        />
      </styles.Wrapper>
    </styles.Container>
  );
};

export default Home;
