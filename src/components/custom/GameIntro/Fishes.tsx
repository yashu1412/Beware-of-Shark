import React, { useState, useEffect } from 'react';
import fishImage from '../../../assets/Fishes.png';
import bubbleImage from '../../../assets/FishesBubble.png';

const Fishes: React.FC = () => {
  const [isAtMiddle, setIsAtMiddle] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAtMiddle(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fish-animation gap-y-1"
      style={{
        position: 'absolute',
        bottom: '150px',
        left: '0',
        display: 'flex',
        animation: 'moveFishSmall 12s linear forwards',
        alignItems: 'center',
      }}
    >
      <img
        src={fishImage}
        alt="Fish"
        style={{
          width: '350px',
          margin: '0 10px',
        }}
      />
      {isAtMiddle && (
        <div
          className="bubble"
          style={{
            position: 'absolute',
            top: '60px',
            left: '15%',
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
            Run!!
            <br />
            She will eat us all
          </span>
        </div>
      )}
    </div>
  );
};

export default Fishes;
