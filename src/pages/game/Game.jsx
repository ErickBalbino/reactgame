import React from "react";

import logo from "../../assets/logo.png"

import * as styles from "./css/Game.css";

function Game() {
  return (
    <styles.Container>
      <div className="container__image">
        <img src={logo} alt="logo reactgame" className="logo" />
      </div>

      <styles.Categorias>
        
      </styles.Categorias>
    </styles.Container>
  );
}

export default Game;
