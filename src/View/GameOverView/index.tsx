import React from 'react'
import GameOverImage from '../../Assets/GameOver.png'
import PowerUp from '../../components/base/PowerUp'

interface GameOverViewProps {
  isScoreVisible: boolean
}

const GameOverView: React.FC<GameOverViewProps> = ({ isScoreVisible }) => {
  return (
    <PowerUp>
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
        <div className="flex flex-col items-center px-6 py-40 pt-6 bg-[#34841E] text-white font-bold w-1/3">
          <p className="text-2xl font-normal bg-gray-900 p-4">Right</p>
          <span className="text-4xl font-normal pt-4">4</span>
        </div>
        <div className="flex flex-col items-center px-6 py-40 pt-6 bg-[#FF0900] text-white font-bold w-1/3">
          <p className="text-2xl font-normal bg-gray-900 p-4">Wrong</p>
          <span className="text-4xl font-normal pt-4">1</span>
        </div>
      </div>
    </PowerUp>
  )
}

export default GameOverView
