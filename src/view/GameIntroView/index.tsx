import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GameIntroContainer } from '../../containers/GameIntroContainer'
import { GameIntro } from '../../components/custom/GameIntro'
import Fishes from '../../components/custom/GameIntro/Fishes'
import BigFish from '../../components/custom/GameIntro/Hungry'
import Shark from '../../components/custom/GameIntro/Shark'

const GameIntroView: React.FC = () => {
  const { showFish, showBigFish, showShark, animateTitle, showStartButton } =
    GameIntroContainer()
  const navigate = useNavigate()

  return (
    <GameIntro animateTitle={animateTitle}>
      {showFish && <Fishes />}
      {showBigFish && <BigFish />}
      {showShark && <Shark />}
      {showStartButton && (
        <button
          onClick={() => navigate('/game')}
          className="z-10 mt-8 px-6 py-3 bg-[#34841E] text-white text-xl font-akshar font-normal rounded-lg shadow-md hover:bg-[#2B6C17] transition-colors"
        >
          Start Game
        </button>
      )}
    </GameIntro>
  )
}

export default GameIntroView
