import React from 'react'
import PowerUp from '../../components/base/PowerUp'
import Submarine from '../../Assets/submarine.png'
import Fishes from '../../Assets/fishes1.png'
import HungryFish from '../../Assets/Hungry-fish.png'
import 'animate.css'
const QuestionsView = () => {
  const mainContent = (
    <div className="w-full max-w-2xl mx-auto ">
      <div className="relative mt-32 md:mt-48 animate__animated animate__fadeInLeft">
        <img
          src={Submarine}
          alt="Submarine"
          className="w-full max-w-md mx-auto object-contain relative top-7"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md text-center">
          <h2 className="font-semibold text-4xl  text-center text-gray-800 mt-32 ml-8 w-auto ">
            "India is located in Africa"
          </h2>
        </div>
      </div>
      <div className="mt-20 md:mt-16 flex justify-center items-center space-x-4 animate__animated animate__fadeInLeft animate__delay-1s">
        <button className="font-bold text-4xl text-white bg-green-700 px-16  py-2 rounded-full ">
          True
        </button>
        <button className="font-bold  text-4xl text-white bg-red-600 px-14 py-2 rounded-full">
          False
        </button>
      </div>
      <img
        src={Fishes}
        alt=""
        className="animate__animated animate__backInRight animate__delay-2s fixed right-0 bottom-32 z-10 w-40"
      />{' '}
      <img
        src={HungryFish}
        alt=""
        className="animate__animated animate__backInLeft animate__delay-2s fixed left-4 bottom-32 z-10 w-44"
      />{' '}
    </div>
  )

  return (
    <div className="relative">
      <PowerUp>{mainContent}</PowerUp>
    </div>
  )
}

export default QuestionsView
