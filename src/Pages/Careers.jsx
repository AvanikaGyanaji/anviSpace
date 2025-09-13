import { Link } from "react-router-dom";

import { useScrollTextAnim } from "../Hooks/ScrollAnimationGSAP";
import { useRef } from "react";
import ContactForm from "../Components/ContactForm";

const Careers = () => {
  const careersHeroRef = useRef(null);
  const careersContactRef = useRef(null);

  useScrollTextAnim(careersHeroRef);
  useScrollTextAnim(careersContactRef);

  window.scrollTo(0, 0);

  return (
    <>
      <section className="relative min-h-[90vh] w-full text-white">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="fixed h-screen w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/career-bg.png')",
            filter: "grayscale(100%) brightness(0.5)",
          }}
        ></div>

        {/* Careers Hero section */}
        <div
          ref={careersHeroRef}
          className="max-w-[900px] h-[98vh] place-items-center m-auto font-[inter] inset-0 flex flex-col justify-center items-center text-center px-6"
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
          <p className="max-w-[690px] mt-3 text-[#d2d2d2] text-center text-[16px] font-[400] not-italic leading-[27px]">
            Be a part of the future of space exploration. Together, we're
            building the robotic systems that will enable sustainable space
            operations for generations to come.
          </p>
          <Link
            id="explore-btn"
            className="careers-apply-btn mt-4 figma-btn"
            onClick={() => {
              const target = document.getElementById("careers-contact-box");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Apply Now
          </Link>
        </div>

        <div
          id="careers-contact-box"
          ref={careersContactRef}
          className="careers-contact w-auto h-auto pt-8 pb-10"
        >
          <ContactForm isHavingCv={true} />
        </div>
      </section>
    </>
  );
};

export default Careers;
