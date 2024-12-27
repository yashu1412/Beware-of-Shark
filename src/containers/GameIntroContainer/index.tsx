import { useState, useEffect } from 'react'

export function GameIntroContainer() {
  const [showFish, setShowFish] = useState(false)
  const [showBigFish, setShowBigFish] = useState(false)
  const [showShark, setShowShark] = useState(false)
  const [animateTitle, setAnimateTitle] = useState(false)
  const [showStartButton, setShowStartButton] = useState(false)

  useEffect(() => {
    const titleTimeout = setTimeout(() => {
      setShowFish(true)

      const fishTimeout = setTimeout(() => {
        setShowBigFish(true)

        const sharkTimeout = setTimeout(() => {
          setShowShark(true)

          const titleAnimationTimeout = setTimeout(() => {
            setAnimateTitle(true)

            const buttonTimeout = setTimeout(() => {
              setShowStartButton(true)
            }, 10000)
            return () => clearTimeout(buttonTimeout)
          }, 7000)
          return () => clearTimeout(titleAnimationTimeout)
        }, 7000)
        return () => clearTimeout(sharkTimeout)
      }, 5000)
      return () => clearTimeout(fishTimeout)
    }, 2000)
    return () => clearTimeout(titleTimeout)
  }, [])

  return {
    showFish,
    showBigFish,
    showShark,
    animateTitle,
    showStartButton,
  }
}
