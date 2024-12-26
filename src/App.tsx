import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameIntro from "./View/GameIntro";
import StartPage from "./View/Start";
import "./App.css";
import GamePage from "./Pages/GamePage";
import GameOver from "./Pages/GameOverPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/gameintro" element={<GameIntro />} />
          <Route path="/game" element={<GamePage />} /> 
          <Route path="/gameover" element={<GameOver/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
