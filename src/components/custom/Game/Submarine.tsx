import React from "react";
import submarineImage from "../../../assets/submarine.png";

interface SubmarineProps {
  submarinePosition: string;
  isSubmarineStopped: boolean;
  showQuestion: boolean;
  question: string;
}

const Submarine: React.FC<SubmarineProps> = ({ submarinePosition, isSubmarineStopped, showQuestion, question }) => {
  return (
    <div
      className={`absolute top-1/3 left-[10%] transition-transform duration-1000 ease-in-out animate__animated animate__slideInLeft ${submarinePosition}`}
    >
      <img src={submarineImage} alt="Submarine" className="w-80 h-auto" />
      {isSubmarineStopped && showQuestion && (
        <div className="absolute top-[65%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center transition-opacity duration-500 ease-in-out">
          <p className="font-akshar font-medium text-[24px] text-black">{question}</p>
        </div>
      )}
    </div>
  );
};

export default Submarine;
