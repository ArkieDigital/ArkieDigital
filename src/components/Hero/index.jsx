import React, { useEffect, useState } from 'react';

const Hero = () => {
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
      {/* In web view */}
      <div className={isMobile ? 'hidden' : 'flex flex-col justify-center items-center'}>
        <div className="relative">
          <div className="w-[500px] h-[500px] blur-2xl rounded-full border-[27px] border-[#A9F868]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-semibold leading-[70px] text-6xl whitespace-nowrap">
              From Start-ups&nbsp;to&nbsp;Unicorns:<br />
              Empowering Extraordinary <br /> Journeys<span className="text-[#A9F868]">.</span>
            </div>
          </div>
        </div>
      </div>

      {/* In mobile view */}
      <div className={isMobile ? 'flex flex-col mt-[50px] justify-center items-center' : 'hidden'}>
        <div className="relative">
          <div className="w-[300px] h-[300px] blur-xl rounded-full border-[27px] border-[#A9F868]"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-semibold text-3xl whitespace-nowrap">
              From Start-ups <br />to&nbsp;Unicorns:<br />
              Empowering <br />Extraordinary <br />Journeys<span className="text-[#A9F868]">.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

  
