import React, { useState } from "react";
import QuestionsView from "../../view/QuestionsView";
import GameOverView from "../../view/GameOverView";

interface Question {
  question: string;
  correctAnswer: "True" | "False";
}

const questions: Question[] = [
  { question: "India is located in Africa", correctAnswer: "False" },
  { question: "The earth revolves around the sun", correctAnswer: "True" },
  { question: "Water boils at 50 degrees Celsius at sea level", correctAnswer: "False" },
  { question: "Humans have five senses", correctAnswer: "True" },
  { question: "Fire is hot", correctAnswer: "True" },
  { question: "Fish live on land", correctAnswer: "False" },
  { question: "The sun is a star", correctAnswer: "True" },
];

const GameContainer: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [result, setResult] = useState<"yes" | "no" | null>(null);

  const handleAnswer = (answer: "True" | "False") => {
    const currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      setCorrectCount(correctCount + 1);
      setResult("yes");
    } else {
      setWrongCount(wrongCount + 1);
      setResult("no");
    }

    setTimeout(() => {
      setResult(null); // Clear the result after a delay
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setIsGameOver(true);
      }
    }, 4000); // 2-second delay
  };

  return (
    <div>
      {!isGameOver ? (
        <QuestionsView
          key={currentQuestionIndex} // Ensures the component re-renders on question change
          question={questions[currentQuestionIndex].question}
          result={result}
          onAnswer={handleAnswer}
        />
      ) : (
        <GameOverView
          correctCount={correctCount}
          wrongCount={wrongCount}
          // onRestart={resetGame}
        />
      )}
    </div>
  );
};

export default GameContainer;
