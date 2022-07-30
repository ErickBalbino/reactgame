import React from "react";

import * as styles from "./css/Home.css";

import logo from "../assets/logo.png";
import imagem_aprender from "../assets/imagem-estudo.png";
import imagem_jogo from "../assets/imagem-jogo.jpg";

import CardHome from "../components/CardHome";

const Home = () => {
  return (
    <styles.Container >
      <div className="container__image">
        <img src={logo} alt="logo reactgame" className="logo" />
      </div>

      <styles.Wrapper>
        <CardHome
          link="#"
          urlImage={imagem_aprender}
          altImage="imagem aprender react"
          title="Aprender React"
        />

        <CardHome
          link="/jogo"
          urlImage={imagem_jogo}
          altImage="imagem jogar reactgame"
          title="Jogar Reactgame"
        />
      </styles.Wrapper>
    </styles.Container>
  );
};

export default Home;