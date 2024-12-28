import React from 'react'
import titleImage from '../../../assets/Title-image.png'

interface GameIntro {
  animateTitle: boolean
  children: React.ReactNode
}

export function GameIntro({ animateTitle, children }: GameIntro) {
  return (
    <div className="bg-common flex flex-col items-center justify-center relative overflow-hidden">
      <div
        className={`transition-transform duration-[10000ms] ease-in flex flex-col items-center justify-center ${
          animateTitle ? 'scale-[2]' : 'scale-100'
        }`}
        style={{
          position: animateTitle ? 'absolute' : 'relative',
          top: animateTitle ? '0' : 'auto',
          left: animateTitle ? '0' : 'auto',
          width: animateTitle ? '100%' : 'auto',
          height: animateTitle ? '100%' : 'auto',
          backgroundImage: `url(${titleImage})`,
          backgroundSize: animateTitle ? 'cover' : 'contain',
          backgroundPosition: 'center',
        }}
      >
        {!animateTitle && (
          <img
            src={titleImage}
            alt="Game Title"
            className="w-3/4 md:w-1/2 mb-8"
            style={{
              marginTop: '-313px',
            }}
          />
        )}
      </div>
      {children}
    </div>
  )
}
