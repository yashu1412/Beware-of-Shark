import React, { useState, useEffect } from 'react'
import SharkImage from '../../../assets/shark.png'
import bubbleImage from '../../../assets/FishesBubble.png'

const Shark: React.FC = () => {
  const [isAtMiddle, setIsAtMiddle] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAtMiddle(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div
      className="shark-animation"
      style={{
        position: 'absolute',
        bottom: '50px',
        left: '0',
        display: 'flex',
        animation: 'moveShark 12s linear forwards',
      }}
    >
      <img
        src={SharkImage}
        alt="Shark"
        style={{
          width: '300px',
          margin: '0 10px',
        }}
      />
      {isAtMiddle && (
        <div
          className="bubble"
          style={{
            position: 'absolute',
            top: '-120px',
            left: '30%',
            transform: 'translateX(-70%)',
            width: '262px',
            height: '171px',
            backgroundImage: `url(${bubbleImage})`,
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '24px',
            fontFamily: '"Anton SC", serif',
            fontWeight: '400',
            lineHeight: '36.13px',
            textAlign: 'center',
            padding: '10px',
            borderRadius: '15px',
            animation: 'bubbleAppear 0.6s ease-out forwards',
          }}
        >
          <span
            className="anton-sc-regular text-[#000000] mx-auto mt-[-40px]"
            style={{
              opacity: 0,
              animation: 'textAppear 1s ease-in 1.2s forwards',
            }}
          >
            Not more than me babe!!
          </span>
        </div>
      )}
    </div>
  )
}

export default Shark
