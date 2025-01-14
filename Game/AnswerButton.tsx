import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCorrectAnswers,
  incrementWrongAnswers,
} from "../../../slices/GameSlice"; 
import { RootState } from "../../../Store"; 

interface Question {
  question: string;
  answer: boolean;
}

interface AnswerButtonsProps {
  currentQuestion: Question;
  handleAnswer: (isCorrect: boolean) => void;
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({
  currentQuestion,
  handleAnswer,
}) => {
  const dispatch = useDispatch();
  const correctAnswers = useSelector((state: RootState) => state.game.correctAnswers);
  const wrongAnswers = useSelector((state: RootState) => state.game.wrongAnswers);

  useEffect(() => {
    console.log("Correct Answers:", correctAnswers);
    console.log("Wrong Answers:", wrongAnswers);
  }, [correctAnswers, wrongAnswers]);

  const handleButtonClick = (selectedValue: boolean) => {
    // console.log("Current Question Answer:", currentQuestion.answer);  // Log the current question's correct answer
    // console.log("Selected Answer:", selectedValue);  // Log the selected value
  
    const isCorrect = selectedValue === currentQuestion.answer;
    // console.log("iscorrect", isCorrect);

    if (isCorrect) {
      dispatch(incrementCorrectAnswers()); 
      handleAnswer(true); 
    } else {
      dispatch(incrementWrongAnswers());
      handleAnswer(false); 
    }
  };
  

  return (
    <div className="absolute top-[60%] flex justify-between items-center w-full px-20 font-medium">
      {["true", "false"].map((label) => {
        const isTrueButton = label === "true";
        return (
          <button
            key={label}
            className={`px-7 py-1 rounded-full text-[24px] font-medium shadow-md shadow-zinc-500 text-white 
              hover:scale-105 active:scale-95 transition-all duration-[800ms] ease-in-out ${
                isTrueButton
                  ? "bg-[#34841E] hover:bg-[#246C14]"
                  : "bg-[#FF0900] hover:bg-[#C70600]"
              }`}
            style={{
              animation: `${
                isTrueButton ? "moveFromLeft" : "moveFromRight"
              } 1.5s ease-in-out forwards`,
            }}
            onClick={() => handleButtonClick(isTrueButton)}
            aria-label={label}
          >
            {label}
          </button>
        );
      })}
      <style>{`
        @keyframes moveFromLeft {
          0% {
            transform: translateX(-200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes moveFromRight {
          0% {
            transform: translateX(200%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default AnswerButtons;
