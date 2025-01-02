import React from "react";

interface AnswerButtonsProps {
  handleAnswer: (isCorrect: boolean) => void;
}

const AnswerButtons: React.FC<AnswerButtonsProps> = ({ handleAnswer }) => {
  return (
    <div className="absolute top-[60%] flex justify-between items-center w-full px-20 font-medium animate__animated animate__slideInLeft">
      <button
        className="px-6 bg-[#34841E] text-white rounded-full text-[24px] font-medium shadow-md shadow-zinc-500 hover:bg-[#246C14] transition-all duration-300 ease-out"
        onClick={() => handleAnswer(true)}
      >
        True
      </button>
      <button
        className="px-6 bg-[#FF0900] text-white rounded-full text-[24px] font-medium shadow-md shadow-zinc-500 hover:bg-[#C70600] transition-all duration-300 ease-out"
        onClick={() => handleAnswer(false)}
      >
        False
      </button>
    </div>
  );
};

export default AnswerButtons;
