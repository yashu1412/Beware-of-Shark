import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameIntro from "./View/GameIntro";
import StartPage from "./Pages/StartPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/gameintro" element={<GameIntro />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
