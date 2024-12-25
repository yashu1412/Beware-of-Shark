import React from "react";
import { useNavigate } from "react-router-dom"; 
import titleImage from "../Assets/Title-image.png";

const StartPage: React.FC = () => {
  const navigate = useNavigate(); 

  return (
    <div className="bg-common flex flex-col items-center justify-center">
      {/* Image Section */}
      <div style={{ marginBottom: "290px" }} className="flex justify-center">
        <img
          src={titleImage}
          alt="Game Title"
          className="w-3/4 md:w-1/2"
        />
      </div>

      {/* Button Section */}
      <div style={{ position: "relative", bottom: "50px" }}>
        <button
          onClick={() => navigate("/gameintro")} 
          className="bg-green-700 text-white px-20 py-3 rounded-2xl text-xl hover:bg-green-600 w-[376px] h-[56px]"
        >
          Press to Continue
        </button>
      </div>
    </div>
  );
};

export default StartPage;
