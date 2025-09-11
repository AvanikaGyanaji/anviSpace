import { Link } from "react-router-dom";
import { pagesLinksList } from "../Utils/PagesLinksList";

import { useScrollTextAnim } from "../Hooks/ScrollAnimationGSAP";
import { useRef } from "react";

const Careers = () => {
  const careersHeroRef = useRef(null);

  window.scrollTo(0, 0);

  useScrollTextAnim(careersHeroRef);

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/images/career-bg.png')",
        filter: "grayscale(100%)",
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div
        ref={careersHeroRef}
        className="absolute max-w-[900px] m-auto font-[inter] inset-0 flex flex-col justify-center items-center text-center px-6"
      >
        <span>
          <h1 className="text-[36px] md:text-[56px] font-[500] leading-snug">
            <span className="text-[#FEFEFE] italic uppercase">Join us </span>
            IN REVOLUTIONIZING
          </h1>
          <h1 className="text-[36px] md:text-[56px] text-[#D9D9D9] font-[600] leading-snug">
            SPACE ROBOTICS
          </h1>
        </span>
        <p className="max-w-[690px] mt-3 text-[#999999] text-center text-[16px] font-[400] not-italic leading-[27px]">
          Be a part of the future of space exploration. Together, we're building
          the robotic systems that will enable sustainable space operations for
          generations to come.
        </p>
        <Link
          to={pagesLinksList["Contact Us"]}
          id="explore-btn"
          className="careers-apply-btn mt-4 figma-btn"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default Careers;
