import React from "react";
import DotFrame from "../../assets/DotFrame.svg";

import { useEffect, useState } from 'react';

const DotContainerTop = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Call the handleResize function on initial load
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        // Use this in mobile view
        <div className="container mx-auto px-10 sm:px-40 flex flex-col sm:flex-row mt-10 sm:mt-40 items-center">
          <div className="relative">
            <img src={DotFrame} alt="Dot Frame" className="" />
            <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h3 className="text-2xl sm:text-4xl font-bold">
                We Thrive on partnerships
              </h3>
              <p className="text-md sm:text-xl mt-3 sm:mt-5">
                Joining Forces with Aspiring Startups and Businesses to Drive
                Growth and Achieve Shared Goals.
              </p>
            </div>
          </div>
        </div>
      ) : (
        // Use this div in other views
        <div>
          <div className="container mx-auto px-40 flex mt-40 items-center">
            <img src={DotFrame} alt="Dot Frame" className="w-1/2" />
            <div className="w-3/4 ml-[-60px]">
              <h3 className="text-4xl font-bold">We Thrive on partnerships</h3>
              <p className="text-xl mt-5">
                Joining Forces with Aspiring Startups and Businesses to Drive
                Growth and Achieve Shared Goals.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DotContainerTop;

