import React from 'react'
import GameOverImage from '../../assets/GameOver.png'
import PowerUp from '../../components/base/PowerUp'

interface GameOverViewProps {
  correctCount: number
  wrongCount: number
}

const GameOverView: React.FC<GameOverViewProps> = ({
  correctCount,
  wrongCount,
}) => {
  return (
    <>
      <PowerUp
        coinCount={0}
        onUseHint={function (): void {
          throw new Error('Function not implemented.')
        }}
        onUsePowerUp={function (): void {
          throw new Error('Function not implemented.')
        }}
      >
        <div className="flex flex-col items-center justify-center mt-52 flex-grow">
          <img
            src={GameOverImage}
            alt="Game Over"
            className="w-3/4 max-w-sm animate-bounce"
          />
        </div>
        <div className="flex justify-center items-center space-x-6 w-full py-4 transition-opacity duration-300 ease-out opacity-100">
          {/* Right Answers Section */}
          <div className="flex flex-col items-center px-6 pt-6 bg-[#34841E] text-white font-bold w-1/3 animate-slide-in-left">
            <p className="text-2xl font-normal bg-[#303050] p-4">Right</p>
            <div className="pt-20 pb-20">
              <span className="text-6xl font-normal">{correctCount}</span>
            </div>
          </div>

          {/* Wrong Answers Section */}
          <div className="flex flex-col items-center px-6 pt-6 bg-[#FF0900] text-white font-bold w-1/3 animate-slide-in-right">
            <p className="text-2xl font-normal bg-[#303050] p-4">Wrong</p>
            <div className="pt-20 pb-20">
              <span className="text-6xl font-normal">{wrongCount}</span>
            </div>
          </div>
        </div>
      </PowerUp>
    </>
  )
}

export default GameOverView
