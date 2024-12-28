import React from 'react'
import HungryImage from '../../../Assets/Hungry-fish.png'

const HungryFish: React.FC = () => (
  <div
    className="big-fish-animation"
    style={{
      position: 'absolute',
      bottom: '50px',
      left: '0',
      display: 'flex',
      animation: 'moveFishBig 7s linear forwards',
    }}
  >
    <img
      src={HungryImage}
      alt="Big Fish"
      style={{
        width: '300px',
        margin: '0 10px',
      }}
    />
  </div>
)

export default HungryFish
