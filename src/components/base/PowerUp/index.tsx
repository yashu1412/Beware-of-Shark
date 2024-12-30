import React, { useState } from 'react'
import Coin from '../../../assets/coin.png'
import Hint from '../../../assets/hint.png'
import PowerUpImage from '../../../assets/powerUp.png'

interface PowerUpProps {
  children: React.ReactNode // Allow wrapping child components
}

const PowerUp: React.FC<PowerUpProps> = ({ children }) => {
  const [isHintActive, setIsHintActive] = useState(false)
  const [isPowerUpActive, setIsPowerUpActive] = useState(false)

  const handleCoinClick = () => {
    alert('Coin clicked!')
  }

  const handleHintClick = () => {
    setIsHintActive(true)
    setTimeout(() => setIsHintActive(false), 500)
  }

  const handlePowerUpClick = () => {
    setIsPowerUpActive(true)
    setTimeout(() => setIsPowerUpActive(false), 300)
  }

  return (
    <div className="relative h-screen overflow-hidden bg-common">
      {/* Power-Up Controls */}
      <div className="absolute top-4 right-5 flex flex-col items-center gap-4 gap-y-2">
        {/* Coin Button */}
        <button
          onClick={handleCoinClick}
          className="w-20 h-9 bg-[#88F0C8] rounded-full shadow-md shadow-slate-800 flex items-center justify-center gap-2"
        >
          <img
            src={Coin}
            alt="Coin"
            className="w-7 h-7 object-contain animate-spin-y"
          />
          <span className="text-black text-2xl">50</span>
        </button>

        {/* Hint Button with Glow Effect */}
        <button
          onClick={handleHintClick}
          className={`transition-all duration-300 rounded-full ${
            isHintActive ? 'hint-glow' : ''
          }`}
        >
          <img src={Hint} alt="Hint" className="w-12 h-12 object-contain" />
        </button>

        {/* Power-Up Button with Scale Effect */}
        <button
          onClick={handlePowerUpClick}
          className={`transition-transform duration-300 rounded-full ${
            isPowerUpActive ? 'scale-effect' : ''
          }`}
        >
          <img
            src={PowerUpImage}
            alt="Power-Up"
            className="w-12 h-12 object-contain"
          />
        </button>
      </div>

      {/* Wrapped Children */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default PowerUp
