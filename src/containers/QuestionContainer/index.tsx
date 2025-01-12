import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const questionsData = [
  { question: "Mount Fuji is the highest mountain.", answer: false },
  { question: "China is the most populated country.", answer: true },
  { question: "The Amazon is the longest river in the world.", answer: false },
  { question: "Africa is the second largest continent.", answer: true },
  { question: "Venus is the closest planet to the Sun.", answer: false },
  { question: "Australia is both a country and a continent.", answer: true },
];

export const useGameLogic = () => {
  const [submarinePosition, setSubmarinePosition] = useState("translate-x-[-100%]");
  const [message, setMessage] = useState("");
  const [isSubmarineStopped, setIsSubmarineStopped] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const [bigFishMove, setBigFishMove] = useState(false);
  const [bigFishPosition, setBigFishPosition] = useState("translate-x-0");
  const [hideSmallFishes, setHideSmallFishes] = useState(false);
  const [showShark, setShowShark] = useState(false);
  const [sharkPosition, setSharkPosition] = useState("translate-x-[-100%]");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    resetGame();

    const submarineTimer = setTimeout(() => {
      setSubmarinePosition("translate-x-[50%]");
    }, 2000);

    const questionTimer = setTimeout(() => {
      setIsSubmarineStopped(true);
    }, 3500);

    const textTimer = setTimeout(() => {
      setShowQuestion(true);
    }, 4000);

    return () => {
      clearTimeout(submarineTimer);
      clearTimeout(questionTimer);
      clearTimeout(textTimer);
    };
  }, [currentQuestionIndex]);

  const resetGame = () => {
    setSubmarinePosition("translate-x-[-100%]");
    setMessage("");
    setIsSubmarineStopped(false);
    setShowQuestion(false);
    setShowBubble(false);
    setBigFishMove(false);
    setBigFishPosition("translate-x-0");
    setHideSmallFishes(false);
    setShowShark(false);
    setSharkPosition("translate-x-[-100%]");
  };

  const handleAnswer = (isCorrect:boolean) => {
    let newScore = score; 
  
    if (isCorrect) {
      newScore += 50; 
      setCorrectAnswers((prev) => prev + 1);
      setSubmarinePosition("translate-x-[170%]");
    } else {
      newScore = Math.max(0, newScore - 10); 
      setWrongAnswers((prev) => prev + 1);
      setShowBubble(true);
      setBigFishMove(true);
      setBigFishPosition("translate-x-[50%]");
    }
  
    setScore(newScore);

    if (currentQuestionIndex + 1 >= questionsData.length) {
      setTimeout(() => {
        navigateToGameOver(newScore); 
      }, 2000);
    } else {
      setTimeout(() => {
        setCurrentQuestionIndex((prev) => prev + 1);
      }, 2000);
    }
  };
  
  const navigateToGameOver = (finalScore: number) => {
    console.log("Game Over!");
    console.log("Total Score:", finalScore); 
    console.log("Correct Answers:", correctAnswers);
    console.log("Wrong Answers:", wrongAnswers);
  
    navigate("/gameover", {
      state: {
        score: finalScore,
        correctAnswers,
        wrongAnswers,
      },
    });
  };
  ;

  return {
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
    resetGame,
    handleAnswer,
  };
};
