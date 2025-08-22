import gsap from "gsap";
import { useEffect, useRef } from "react";

const Home = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        introRef.current.style.display = "block"; // hide after anim
      },
    });

    // Step 1: Fade in + scale bump
    tl.fromTo(
      introRef.current,
      { opacity: 0.5, scale: 1, rotate: -10 },
      { opacity: 1, scale: 1.1, rotate: 10, duration: 1.2, ease: "power3.in" }
    );

    // Step 2: Stay still for 6s (just a delay)
    tl.to(introRef.current, { duration: 5 });

    // Step 3: Scale out + rotate + fade out
    tl.to(introRef.current, {
      opacity: 1,
      scale: 1.2,
      rotate: 15,
      duration: 3,
      // repeat: -1,
      // yoyo: true,
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      <section className="hero-section section1 w-full h-screen overflow-y-hidden bg-[#05080a] relative grid place-items-center overflow-hidden font-[Shinko Sans]">
        <div
          ref={introRef}
          className="fixed top-0 z-2 w-screen h-screen bg-cover bg-top bg-no-repeat object-center aspect-video brightness-60"
          style={{ backgroundImage: 'url("/images/earth-hero-bg.jpg")' }}
        ></div>

        {/* Hero Content */}
        <div className="w-full z-3 max-w-[1000px] min-h-[25vh] mt-[25vh] text-center flex flex-col justify-center align-middle gap-[12px]">
          <h1 className="text-[28px] text-[#FEFEFE] font-[400] uppercase">
            Engineering the next generation of space robotics.
          </h1>
          <p className="text-[12px] text-[#FEFEFE]">
            From orbital inspection to planetary rovers, ANVI Space builds the
            future of in-space autonomy.
          </p>
          <button
            type="button"
            className="explore-btn text-[34px] font-[400] mt-[20vh] text-white uppercase"
            onClick={() => console.log("Explored")}
          >
            Explore
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
