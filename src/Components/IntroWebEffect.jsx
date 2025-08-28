import { useEffect, useState } from "react";
import "../IntroStyle.css";

const IntroWebEffect = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Step 1: Lock scroll + fix height on mount
    document.body.style.height = "100vh";
    document.body.style.overflowY = "hidden";
    window.scrollTo(0, 0);

    const heroSection = document.querySelector(".hero-section"); // ✅ class selector
    if (heroSection) {
      heroSection.style.opacity = 0;
      heroSection.style.transition = "opacity 1s ease-in-out"; // ✅ add smooth fade
    }

    // Step 2: Hide intro after 8s (keep scroll locked)
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      window.scrollTo(0, 0);
    }, 6000);

    // Step 3: Fade in hero + restore scroll after 9s
    const scrollTimer = setTimeout(() => {
      if (heroSection) {
        heroSection.style.opacity = 1; // ✅ fade in
      }
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
    }, 6100);

    // Cleanup
    return () => {
      clearTimeout(introTimer);
      clearTimeout(scrollTimer);
      document.body.style.height = "auto";
      document.body.style.overflowY = "auto";
      window.scrollTo(0, 0);
      if (heroSection) heroSection.style.opacity = 1;
    };
  }, []);

  if (!showIntro) return null; // remove completely

  return (
    <>
      <div className="intro-web-container w-screen h-screen fixed top-0 left-0 z-999 grid place-content-center place-items-center">
        <div className="intro-web-box w-screen h-screen grid place-content-center place-items-center">
          <div className="intro-web-Box1 w-full h-[60vh] overflow-hidden">
            <div className="tube-light-container w-full grid place-content-center">
              <div className="intro-web-img max-w-[300px] md:max-w-[400px] w-screen h-auto place-items-center">
                <img
                  src="/logos/anvi-space.png"
                  alt="intro-web-img"
                  loading="eager"
                  className="w-full max-w-[300px]"
                />
                <link rel="preload" as="image" href="/logos/anvi-space.png" />
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
