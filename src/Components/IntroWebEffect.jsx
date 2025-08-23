import { useEffect, useState } from "react";
import "../IntroStyle.css";

const IntroWebEffect = () => {
  const [showIntro, setShowIntro] = useState(true);

  // disable [intro-web-container] after 6 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000);

    return () => {
      clearTimeout(timer); // cleanup on unmount
      document.body.style.overflowY = "auto"
    };
  }, []);

  if (!showIntro) return null; // remove completely

  return (
    <>
      <div className="intro-web-container w-screen h-screen fixed top-0 left-0 z-999 grid place-content-center place-items-center">
        <div className="intro-web-box w-screen h-screen grid place-content-center place-items-center">
          <div className="intro-web-Box1 w-full h-[60vh] overflow-hidden">
            <div className="tube-light-container w-full grid place-content-center">
              <div className="intro-web-img w-screen h-auto place-items-center">
                <img
                  src="/logos/anvi-space.png"
                  alt="intro-web-img"
                  className="w-full max-w-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="intro-web-Box2 w-full h-[40vh]"></div>
        </div>
      </div>
    </>
  );
};

export default IntroWebEffect;
