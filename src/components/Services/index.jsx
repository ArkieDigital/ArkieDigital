import React from "react";
import cards from "../../constants/cards";
import Button from "../Button";
import DotFrame from "../../assets/DotFrame.svg";

const Services = () => {
  return (
    <div className="container mx-auto sm:px-20">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl sm:text-4xl font-bold mt-[100px] sm:mt-[280px] mb-10">What we offer</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div className="bg-[A9F868] sm:mb-8" key={card.id}>
              <div className="max-w-sm bg-[#1B1B1B] h-full p-[20px] sm:p-[30px] rounded-[25px]">
                <img src={card.icon} className="w-7 h-7 sm:w-9 h-9" alt="Card Icon" />
                <div className="mt-4 sm:mt-8 pb-[20px]">
                  <div className="mb-4">
                    <div className="text-1xl font-bold mb-1">
                      {card.heading}
                    </div>
                    <div
                      style={{
                        width: "50px",
                        height: "0px",
                        border: "1px solid #FFFFFF",
                      }}
                    ></div>
                  </div>
                  <div className="text-md">{card.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Button text="Let's Talk" />
        </div>
      </div>
    </div>
  );
};

export  default Services;