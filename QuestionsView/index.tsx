import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "tailwindcss/tailwind.css";
import "animate.css";
import Submarine from "../../components/custom/Game/Submarine";
import AnswerButtons from "../../components/custom/Game/AnswerButton";
import PowerUpControls from "../../components/base/PowerUps";
import FishAnimation from "../../components/custom/Game/FishAnimation";
import { useGameLogic } from "../../containers/QuestionContainer";

const QuestionView: React.FC = () => {
  const navigate = useNavigate();
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

  const currentQuestion = questionsData[currentQuestionIndex] || {
    question: "Loading...",
    answer: false, 
  };

  
  useEffect(() => {
    if (currentQuestionIndex >= questionsData.length) {
      navigate("/gameover"); 
    }
  }, [currentQuestionIndex, questionsData.length, navigate]);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-common overflow-hidden p-4">
      <Submarine
        submarinePosition={submarinePosition}
        isSubmarineStopped={isSubmarineStopped}
        showQuestion={showQuestion}
        question={currentQuestion.question}
      />
      <AnswerButtons
        currentQuestion={currentQuestion} 
        handleAnswer={handleAnswer} 
      />
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
        <p
          className="absolute top-4 text-2xl font-semibold transition-opacity duration-500 ease-in-out"
          aria-live="polite"
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default QuestionView;
