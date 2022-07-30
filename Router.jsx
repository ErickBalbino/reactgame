import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./src/pages/Home";
import Game from "./src/pages/game/Game";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/jogo" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
