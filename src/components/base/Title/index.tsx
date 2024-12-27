import React from 'react'
import titleImage from '../../../Assets/Title-image.png'

const TitleImage: React.FC = () => (
  <div
    className="bg-title"
    aria-label="Game Title"
    style={{
      backgroundImage: `url(${titleImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '300px',
      transition: 'opacity 3s ease-out',
    }}
  />
)

export default TitleImage
