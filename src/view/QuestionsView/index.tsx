import React, { useState } from "react";
import Submarine from "../../assets/submarine.png";
import Fishes from "../../assets/fishes1.png";
import HungryFish from "../../assets/Hungry-fish.png";
import YesImage from "../../assets/yes.png";
import NoImage from "../../assets/no.png";
import Shark from "../../assets/shark.png";
import "animate.css";
import PowerUp from "../../components/base/PowerUp";

interface QuestionsViewProps {
  question: string;
  result: "yes" | "no" | null;
  onAnswer: (answer: "True" | "False") => void;
}

const QuestionsView: React.FC<QuestionsViewProps> = ({ question, result, onAnswer }) => {
  const [animateResult, setAnimateResult] = useState(false);

  const handleAnswer = (answer: "True" | "False") => {
    setAnimateResult(false); 
    setTimeout(() => setAnimateResult(true), 0); 
    onAnswer(answer);
  };

  return (
    <div className=" ">
    <PowerUp
      coinCount={50}
      onUseHint={() => console.log("Hint Used!")}
      onUsePowerUp={() => console.log("Power-Up Activated!")}
    >
      <div className="w-full max-w-2xl mx-auto">
        <div className="relative mt-32 md:mt-48 animate__animated animate__fadeInLeft">
          <img
            src={Submarine}
            alt="Submarine"
            className="w-full max-w-md mx-auto object-contain relative top-7"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md text-center">
            <h2 className="font-semibold text-4xl text-center text-gray-800 mt-32 ml-8 w-auto">
              {`"${question}"`}
            </h2>
          </div>
        </div>
        <div className="mt-20 md:mt-16 flex justify-center items-center space-x-4 animate__animated animate__fadeInLeft animate__delay-1s">
          <button
            className="font-bold text-4xl text-white bg-green-700 px-16 py-2 rounded-full"
            onClick={() => handleAnswer("True")}
          >
            True
          </button>
          <button
            className="font-bold text-4xl text-white bg-red-600 px-14 py-2 rounded-full"
            onClick={() => handleAnswer("False")}
          >
            False
          </button>
        </div>
        <img
          src={Fishes}
          alt="Fishes"
          className={`animate__animated animate__backInRight animate__delay-2s fixed right-0 bottom-24 w-40 ${
          animateResult ? "animate__animated animate__fadeOut animate_delay-2s " : ""
            }`}
       />
        <div className="relative">
          {result && (
            <img
              src={result === "yes" ? YesImage : NoImage}
              alt={result}
              className="absolute left w-32 h-32 ml-8 animate__animated animate__fadeOut "
            />
          )}
          <img
            src={HungryFish}
            alt="Hungry Fish"
            className={`animate__animated animate__backInLeft animate__delay-2s fixed left-1 bottom-16 w-52 ${
              animateResult ? "animate__animated animate__slideOutRight  " : ""
            }`}
          />
          {result === "no" && (
            <img
              src={Shark}
              alt="Shark"
              className="top-0 right-0 animate__animated animate__slideInLeft h-96 "
              style={{ animationDelay: '2s' }}
                          />
          )}
        </div>
      </div>
    </PowerUp>
    </div>
  );
};

export default QuestionsView;
