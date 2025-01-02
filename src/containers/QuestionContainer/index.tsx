import { useState, useEffect } from "react";

const questionsData = [
  { question: "Mount Fiji is the highest mountain.", answer: false },
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

  const handleAnswer = (isCorrect: boolean) => {
    const correctAnswer = questionsData[currentQuestionIndex].answer;
    if (isCorrect === correctAnswer) {
      setMessage("Correct!");
      setScore((prev) => prev + 50); // Add 50 points for correct answer
      setSubmarinePosition("translate-x-[170%]");
      setTimeout(() => {
        const nextIndex = (currentQuestionIndex + 1) % questionsData.length;
        setCurrentQuestionIndex(nextIndex);
      }, 2000); // Move to the next question
    } else {
      setMessage("Wrong!");
      setScore((prev) => Math.max(0, prev - 10)); // Deduct 10 points for wrong answer, prevent negative score
      setShowBubble(true);
      setBigFishMove(true);
      setBigFishPosition("translate-x-[50%]");
      setTimeout(() => {
        setShowBubble(false);
        setHideSmallFishes(true);
        setTimeout(() => {
          setShowShark(true);
          setSharkPosition("translate-x-[50%]");
          setTimeout(() => {
            setBigFishMove(false);
            setBigFishPosition("translate-x-[150%] scale-50");
            setTimeout(() => {
              const nextIndex = (currentQuestionIndex + 1) % questionsData.length;
              setCurrentQuestionIndex(nextIndex);
            }, 2000); // Reset after shark animation
          }, 2000);
        }, 2000);
      }, 3000);
    }
  };

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
