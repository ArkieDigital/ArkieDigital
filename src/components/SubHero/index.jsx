import React from "react";
import imageUrls from "../../constants/flags";
import belgium from "../../assets/Belgium.png";
import india from "../../assets/India.png";
import lebanon from "../../assets/Lebanon.png";
import sriLanka from "../../assets/LK.png";
import us from "../../assets/US.png";

const SubHero = () => {
  return (
    <div className="text-center mt-40 sm:mt-40">
      <div className="text-3xl sm:text-4xl font-semibold">Who we are</div>
      <div className="text-lg mt-5 sm:text-2xl max-w-lg mx-auto sm:mt-7">
        We Are a Collaborative Design Hub:<br></br> A Diverse Team United by a
        Passion for Crafting Unforgettable Digital Experiences
      </div>
      <div className="text-2xl sm:text-3xl font-semibold mt-20">We Work Globally</div>
      <div className="flex items-center justify-center  mt-10">
        <img src={us} alt="United States" className="w-[50px] sm:mr-5 sm:w-[100px] h-auto ml-5 "/>
        <img src={belgium} alt="Belgium" className="w-[50px] sm:mr-5 sm:w-[100px] h-auto ml-5 "/>
        <img src={india} alt="India"   className="w-[50px] sm:mr-5 sm:w-[100px] h-auto ml-5 "/>
        <img src={sriLanka} alt="Sri Lanka"   className="w-[50px] sm:mr-5 sm:w-[100px] h-auto ml-5 "/>
        <img src={lebanon} alt="Lebanon"   className="w-[50px] sm:mr-5 sm:w-[100px] h-auto ml-5 "/>
      </div>
    </div>
  );
};

export default SubHero;
