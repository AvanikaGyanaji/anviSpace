import { ChevronsDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { RoadMapDataList } from "../Utils/RoadMapDataList";
import RoadMapCard from "../Components/RoadMapCard";
import { pagesLinksList } from "../Utils/PagesLinksList";
import { useLocation } from "react-router-dom";

import { useScrollTextAnim } from "../Hooks/ScrollAnimationGSAP";

const Missions = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const location = useLocation();
  const missionHeroRef = useRef(null);
  const missionAnvisGalacticaRef = useRef(null);
  const missionRoadmapRef = useRef(null);

  useScrollTextAnim(missionHeroRef);
  useScrollTextAnim(missionAnvisGalacticaRef);
  // useScrollTextAnim(missionRoadmapRef)

  useEffect(() => {
    let { pathname, hash, search } = location;
    // console.log(pathname, hash);
    if (pathname !== pagesLinksList.Missions && !hash) {
      window.scrollTo(0, 0);
      return;
    }
    // console.log("============")
    // normalize trailing slash
    const orgUrl = pathname;
    if (pathname !== "/" && pathname.endsWith("/")) {
      pathname = pathname.slice(0, -1);
    }

    // console.log('orgUrl', orgUrl, pagesLinksList.Missions)
    if (orgUrl !== pagesLinksList.Missions) {
      const targetId = hash ? hash.replace("#", "") : "roadmap";
      const target = document.getElementById(targetId);

      if (target) {
        target.scrollIntoView({ behavior: "smooth" });

        // if URL had #roadmap, clean it back to /missions
        if (hash) {
          let cleanPath = pathname + search;
          window.history.replaceState(null, "", cleanPath);
        }
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  useEffect(() => {
    const container = document.querySelector(".roadmap-ul");
    const cards = container?.querySelectorAll(".roadmap-card");
    if (!container || !cards.length) return;

    // 👉 Initial state
    container.scrollTo({ top: 0, behavior: "instant" });
    setActiveCardIndex(0);

    let hasUserScrolled = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!hasUserScrolled) return; // ❌ block updates until scroll starts

        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));

          if (entry.isIntersecting) {
            setActiveCardIndex(index);
          } else if (entry.boundingClientRect.top > 0) {
            setActiveCardIndex(index - 1 >= 0 ? index - 1 : 0);
          }
        });
      },
      {
        root: container,
        threshold: [0.5],
      }
    );

    cards.forEach((card) => observer.observe(card));

    // Detect first user scroll → then enable updates
    const enableScrollTracking = () => {
      hasUserScrolled = true;
    };
    container.addEventListener("scroll", enableScrollTracking, { once: true });

    return () => {
      cards.forEach((card) => observer.unobserve(card));
      container.removeEventListener("scroll", enableScrollTracking);
    };
  }, []);

  return (
    <>
      <section className="missions-section w-full h-screen relative place-content-center">
        {/* Star Animate Box */}
        <div className="star-animate fixed z-1 top-0 left-0 w-screen h-screen aspect-square overflow-visible">
          <div
            className="star-animate-bg star-bg-1"
            style={{ animationDelay: 0 }}
          ></div>
          <div
            className="star-animate-bg star-bg-1 scale-150"
            style={{ animationDelay: 0 }}
          ></div>
        </div>

        {/* Hero Content Box */}
        <div
          ref={missionHeroRef}
          className="w-screen z-2 relative h-screen m-auto px-2 flex flex-col gap-[20px] justify-center align-middle place-items-center aspect-auto text-center font-[inter]"
        >
          <div
            className="w-screen -z-1 absolute max-w-7xl h-screen max-h-[99vh]"
            style={{
              backgroundImage: "url('/images/missions-ellipse-bg.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1
            className="text-[32px] md:text-[40px] uppercase max-w-[1200px] font-[400] m-0 leading-[3.5rem] md:leading-[3.5rem] tracking-[-1.6px] font-[Shinko sans] text-white text-center"
            style={{ fontFamily: "Shinko Sans" }}
          >
            Independent. Intelligent. Interplanetary.
          </h1>
          <p className="text-[16px] max-w-[820px] max-md:text-[14px] font-[400] leading-[24.61px] tracking-[-0.4px] font-[Inter] text-[#bbb] text-center px-4">
            From debris cleanup to in-orbit recycling, manufacturing, and
            scalable space habitats, we're building tomorrow's self-sustaining
            space economy
          </p>
          <button
            id="explore-btn"
            className="about-space-btn explore-btn mt-[20px] inline-flex gap-1 justify-center align-middle animate-pulse figma-btn tracking-[4px] cursor-pointer hover:scale-102 text-[16px] font-[400] text-white capitalize transition-all duration-150"
            onClick={() => {
              const targetElement = document.getElementById(
                "about-anvis-galactica"
              );
              // console.log("targetElement:", targetElement);
              if (targetElement) {
                document.body.scrollIntoView({ behavior: "smooth" });
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Explore <ChevronsDown size={20} className="mt-0.5" />
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="about-anvis-galactica"
        className="w-screen m-auto min-h-screen pt-[50px] md:max-h-[800px] z-1 relative place-content-center bg-[#010204]"
        style={{
          backgroundImage: "url('/images/anvis-galactica-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          ref={missionAnvisGalacticaRef}
          className="w-full flex flex-col md:flex-row justify-around align-middle items-end gap-2 relative p-10 px-5"
        >
          <div className="flex flex-col md:max-w-full max-md:w-full md:w-[623px] min-h-[387px] items-start gap-[30px] relative">
            <div className="relative self-stretch w-full h-[178px]">
              <div className="inline-flex items-center justify-center gap-2.5 p-2 absolute top-0 left-0 rounded-lg border border-solid border-[#fefefe]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#fefefe] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Our Product
                </div>
              </div>

              <div className="absolute w-[399px] h-[101px] top-[50px] left-0 font-[Instrument Sans] font-medium text-white text-[40px] tracking-[-1.00px] leading-[52px]">
                About <br />
                Anvi's Galactica
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#bbbbbb] text-base tracking-[0] leading-[25.6px]">
              Anvi's Galactica is shaping the foundation of a sustainable space
              economy. Starting with debris removal through modular satellites
              and robotic capture, we enable safer orbits. This progresses into
              satellite servicing, in-orbit recycling, and large-scale
              manufacturing. Building on these capabilities, we advance toward
              ISRU, and the creation of long-term infrastructure and habitats to
              support humanity's future in space.
            </p>
          </div>

          <div className="relative w-full md:max-w-[450px] min-h-[387px]">
            <div
              className="absolute w-[251px] h-[195px] top-0 md:left-[150px] border-1 rounded-[24px] border-gray-300 lg:left-[189px] bg-cover bg-[50%_50%]"
              style={{
                background: "url('/images/anvis-galactica-img1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute w-[325px] h-36 top-[243px] max-md:right-0 md:left-0 border-1 rounded-[24px] border-gray-300 bg-cover bg-[50%_50%]"
              style={{
                background: "url('/images/anvis-galactica-img2.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </section>

      {/* RoadMap Missions */}
      <section
        id="roadmap"
        className="w-full max-w-[1400px] m-auto text-center pt-[60px] py-4"
      >
        {/* Content Top */}
        <div
          ref={missionRoadmapRef}
          className="inline-flex w-full flex-col items-center gap-3 relative"
        >
          <div className="flex flex-col gap-3.5 font-[inter] self-stretch w-full items-center relative flex-[0_0_auto]">
            <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
              <p className="relative w-full mt-[-1.00px] font-medium text-white text-[40px] text-center tracking-[-1.00px] leading-[52px]">
                Roadmap to Sustainable Space Economy
              </p>
            </div>

            <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
              <p className="relative w-full max-md:px-2 md:w-[587px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bbbbbb] text-base text-center tracking-[0] leading-[25.6px]">
                From debris cleanup to thriving orbital infrastructure - explore
                our Five-phase journey towards building a self-sustaining space
                economy through recycling, manufacturing, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* RoadMap Container */}
        <div className="roadmap-cards-box relative max-w-[1200px] m-auto flex justify-center align-middle">
          {/* Side Indicator - Left */}
          <div className="w-8 flex flex-col absolute md:left-[2.5%] md:top-[100px] lg:top-[115px] z-10 justify-center items-center max-md:hidden">
            <div className="flex flex-col gap-3">
              {Array.from({ length: RoadMapDataList.length }).map(
                (_, index) => {
                  // console.log('indexxx : ', index, activeCardIndex)
                  return (
                    <div
                      key={index}
                      className={`w-1 h-12 rounded-full transition-all duration-500 border ${
                        index === activeCardIndex
                          ? "bg-white shadow-lg shadow-white/20"
                          : "bg-[#ffffff50]"
                      }`}
                    />
                  );
                }
              )}
            </div>
          </div>

          {/* RoadMap UL (Cards) */}
          <ul className="roadmap-ul w-[96%] relative flex flex-col gap-y-[80px] justify-start items-center max-w-[1200px] sm:h-screen md:h-[510px] lg:h-[500px] overflow-y-auto my-12 font-[inter] text-white scroll-smooth">
            {RoadMapDataList.map((eachCard, index) => (
              <RoadMapCard
                key={eachCard.number}
                data={eachCard}
                currentIndex={activeCardIndex}
                totalItems={RoadMapDataList.length}
                cardIndex={index}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Missions;
