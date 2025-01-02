import React from 'react';
import GameOverImage from '../../assets/GameOver.png';
import PowerUp from '../../components/base/PowerUps';

interface GameOverViewProps {
  isScoreVisible: boolean;
  score: number;  // Add score as a prop
}

const GameOverView: React.FC<GameOverViewProps> = ({ isScoreVisible, score }) => {
  return (
    <PowerUp score={score}> {/* Pass score to PowerUp */}
      <div className="flex flex-col items-center justify-center mt-52 flex-grow">
        <img
          src={GameOverImage}
          alt="Game Over"
          className="w-3/4 max-w-sm animate-bounce"
        />
      </div>
      <div
        className={`flex justify-center items-center space-x-6 w-full py-4 transition-opacity duration-300 ease-out ${
          isScoreVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`flex flex-col items-center px-6 pt-6 bg-[#34841E] text-white font-bold w-1/3 transform ${
            isScoreVisible ? 'animate-slide-in-left' : ''
          }`}
        >
          <p className="text-2xl font-normal bg-[#303050] p-4">Right</p>
          <div className="pt-20 pb-20">
            <span className="text-6xl font-normal">4</span>
          </div>
        </div>
        <div
          className={`flex flex-col items-center px-6 pt-6 bg-[#FF0900] text-white font-bold w-1/3 transform ${
            isScoreVisible ? 'animate-slide-in-right' : ''
          }`}
        >
          <p className="text-2xl font-normal bg-[#303050] p-4">Wrong</p>
          <div className="pt-20 pb-20">
            <span className="font-normal text-6xl mx-auto">1</span>
          </div>
        </div>
      </div>
    </PowerUp>
  );
};

export default GameOverView;
