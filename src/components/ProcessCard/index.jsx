import React from "react";
import processcard from "../../constants/process";

const ProcessCard = () => {
  return (
    <div className="container mx-auto px-5 mt-40">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl sm:text-4xl font-bold mb-10">How it works</div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 h-[max-content]">
          {processcard.map((card) => (
            <div className="bg-[A9F868] mb-2 sm:mb-8" key={card.id}>
              <div className="max-w-sm bg-[#1B1B1B] h-full p-[15px] rounded-[15px]">
                <div className="w-6 h-6 bg-[#A9F868] rounded-lg flex items-center justify-center" alt="Card Icon">
                  <div className="text-[#1B1B1B] text-xs font-semibold">{card.id}</div>
                </div>
                <div className="mt-4 pb-[10px]">
                  <div className="mb-2 text-md font-bold">{card.heading}</div>
                  <div className="text-sm">{card.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;

