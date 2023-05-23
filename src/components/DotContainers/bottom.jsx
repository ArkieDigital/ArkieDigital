import DotFrame from "../../assets/DotFrame.svg";
import Button from "../Button";

import React, { useEffect, useState } from 'react';

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
        <div className="container mx-auto px-4 mt-10">
          <div className="relative flex flex-col items-center sm:flex-row sm:items-start">
            <div className="w-full sm:w-3/4">
              <h3 className="text-2xl sm:text-4xl font-bold">
                Share Your Idea and Let's Transform It into Reality Together.
              </h3>
              <p className="text-lg sm:text-xl mt-3 sm:mt-5">
                Joining Forces with Aspiring Startups and Businesses to Drive
                Growth and Achieve Shared Goals.
              </p>
              <div className="flex justify-center mt-5">
                <Button text="Let's Talk" />
              </div>
            </div>
            <img
              src={DotFrame}
              alt="Dot Frame"
              className="absolute top-0 left-0 w-full h-auto sm:static sm:w-1/2 sm:h-auto sm:ml-10"
            />
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-40 mt-40 relative">
          <div className="flex items-center">
            <div className="w-3/4 mr-[-60px]">
              <h3 className="text-4xl font-bold">
                Share Your Idea and Let's Transform It into Reality Together.
              </h3>
              <p className="text-xl mt-5">
                Joining Forces with Aspiring Startups and Businesses to Drive
                Growth and Achieve Shared Goals.
              </p>
            </div>
            <img src={DotFrame} alt="Dot Frame" className="w-1/2" />
          </div>
          <div className="flex justify-left">
            <Button text="Let's Talk" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DotContainerTop;

