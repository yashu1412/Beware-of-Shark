import React from 'react'
import { useState, useEffect } from 'react'
import GameOverView from '../../view/GameOverView'
const GameOverContainer: React.FC = () => {
  const [isScoreVisible, setIsScoreVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScoreVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <GameOverView isScoreVisible={isScoreVisible} />
    </>
  )
}

export default GameOverContainer
