import React from "react";
import "tailwindcss/tailwind.css";
import "animate.css"; // Import animate.css for built-in animations
import Submarine from "../../components/custom/Game/Submarine";
import AnswerButtons from "../../components/custom/Game/AnswerButton";
import PowerUpControls from"../../components/base/PowerUps/index";
import FishAnimation from "../../components/custom/Game/FishAnimation";
import { useGameLogic } from "../../containers/QuestionContainer/index";

const QuestionView: React.FC = () => {
  const {
    submarinePosition,
    isSubmarineStopped,
    showQuestion,
    message,
    bigFishMove,
    bigFishPosition,
    hideSmallFishes,
    showBubble,
    showShark,
    sharkPosition,
    score,
    currentQuestionIndex,
    questionsData,
    handleAnswer,
  } = useGameLogic();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-common overflow-hidden">
      <Submarine
        submarinePosition={submarinePosition}
        isSubmarineStopped={isSubmarineStopped}
        showQuestion={showQuestion}
        question={questionsData[currentQuestionIndex].question}
      />
      <AnswerButtons handleAnswer={handleAnswer} />
      <PowerUpControls score={score} />
      <FishAnimation
        bigFishMove={bigFishMove}
        bigFishPosition={bigFishPosition}
        hideSmallFishes={hideSmallFishes}
        showBubble={showBubble}
        showShark={showShark}
        sharkPosition={sharkPosition}
      />
      {message && (
        <p className="absolute top-4 text-2xl font-semibold text-purple-700 transition-opacity duration-500 ease-in-out">
          {message}
        </p>
      )}
    </div>
  );
};

export default QuestionView;
