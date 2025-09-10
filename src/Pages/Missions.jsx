import { ChevronsDown } from "lucide-react";
import { useState, useEffect } from "react";
import { RoadMapDataList } from "../Utils/RoadMapDataList";
import RoadMapCard from "../Components/RoadMapCard";

const Missions = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".roadmap-ul");

    const handleScroll = () => {
      if (!container) return;

      const cards = container.querySelectorAll(".roadmap-card");
      let closestIndex = 0;
      let closestDistance = Infinity;

      const containerCenter = container.scrollTop + container.clientHeight / 2;

      cards.forEach((card, index) => {
        const cardTop = card.offsetTop;
        const cardHeight = card.offsetHeight;
        const cardCenter = cardTop + cardHeight / 3;
        const distance = Math.abs(containerCenter - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveCardIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll);

    // Run once to set initial index
    handleScroll();

    return () => container.removeEventListener("scroll", handleScroll);
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
        <div className="w-screen z-2 relative h-screen m-auto px-2 flex flex-col gap-[20px] justify-center align-middle place-items-center aspect-auto text-center font-[inter]">
          <div
            className="w-screen -z-1 absolute max-w-7xl h-screen max-h-[99vh]"
            style={{
              backgroundImage: "url('/images/missions-ellipse-bg.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
          <h1 className="text-[72px] max-w-[1000px] max-md:text-[48px] font-[500] m-0 leading-[3.5rem] md:leading-[5.5rem] tracking-[-1.6px] capitalize font-[Inter] text-white text-center">
            Foundation for a Sustainable Space Future
          </h1>
          <p className="text-[16px] max-w-[820px] max-md:text-[14px] font-[400] leading-[24.61px] tracking-[-0.4px] font-[Inter] text-[#bbb] text-center mt-4 px-4">
            From debris cleanup to in-orbit recycling, manufacturing, and
            scalable space habitats, we're building tomorrow's self-sustaining
            space econ
          </p>
          <button
            className="about-space-btn explore-btn inline-flex justify-center align-middle animate-pulse figma-btn tracking-[4px] cursor-pointer hover:scale-102 text-[16px] font-[400] text-white uppercase transition-all duration-150"
            style={{ animationDelay: "1s !important" }}
            onClick={() => {
              const targetElement = document.getElementById(
                "about-space-karkana"
              );
              // console.log("targetElement:", targetElement);
              if (targetElement) {
                document.body.scrollIntoView({ behavior: "smooth" });
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            About Space Karkana <ChevronsDown size={20} className="mt-1" />
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="about-space-karkana"
        className="w-screen m-auto min-h-screen pt-[50px] md:max-h-[800px] relative place-content-center bg-[#010204]"
        style={{
          backgroundImage: "url('/images/karkana-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-full flex flex-col md:flex-row justify-around align-middle items-end gap-2 relative p-10 px-5">
          <div className="flex flex-col md:max-w-full max-md:w-full md:w-[623px] min-h-[387px] items-start gap-[30px] relative">
            <div className="relative self-stretch w-full h-[178px]">
              <div className="inline-flex items-center justify-center gap-2.5 p-2 absolute top-0 left-0 rounded-lg border border-solid border-[#fefefe]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#fefefe] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Our Product
                </div>
              </div>

              <div className="absolute w-[399px] h-[101px] top-[50px] left-0 [font-family:'Instrument_Sans-Medium',Helvetica] font-medium text-white text-[40px] tracking-[-1.00px] leading-[52px]">
                About <br />
                Space Karkana
              </div>
            </div>

            <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-[#bbbbbb] text-base tracking-[0] leading-[25.6px]">
              Space Karkana is shaping the foundation of a sustainable space
              economy. Starting with debris removal through modular satellites
              and robotic capture, we enable safer orbits. This progresses into
              satellite servicing, in-orbit recycling, and large-scale
              manufacturing. Building on these capabilities, we advance toward
              ISRU, space agriculture, and the creation of long-term
              infrastructure and habitats to support humanity's future in space.
            </p>
          </div>

          <div className="relative w-full md:max-w-[450px] min-h-[387px]">
            <div
              className="absolute w-[251px] h-[195px] top-0 md:left-[150px] border-1 rounded-[24px] border-gray-300 lg:left-[189px] bg-cover bg-[50%_50%]"
              style={{
                background: "url('/images/karkana-img1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="absolute w-[325px] h-36 top-[243px] max-md:right-0 md:left-0 border-1 rounded-[24px] border-gray-300 bg-cover bg-[50%_50%]"
              style={{
                background: "url('/images/karkana-img2.jpg')",
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
        <div className="inline-flex w-full flex-col items-center gap-3 relative">
          <div className="inline-flex items-center justify-center gap-2.5 p-2 relative flex-[0_0_auto] rounded-lg border border-solid border-[#fefefe]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#fefefe] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Roadmap
            </div>
          </div>

          <div className="flex flex-col gap-3.5 font-[inter] self-stretch w-full items-center relative flex-[0_0_auto]">
            <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
              <p className="relative w-full mt-[-1.00px] font-medium text-white text-[40px] text-center tracking-[-1.00px] leading-[52px]">
                Roadmap to Sustainable Space Economy
              </p>
            </div>

            <div className="inline-flex justify-center gap-2.5 items-center relative flex-[0_0_auto]">
              <p className="relative w-[587px] mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-[#bbbbbb] text-base text-center tracking-[0] leading-[25.6px]">
                From debris cleanup to thriving orbital infrastructure - explore
                our Five-phase journey towards building a self-sustaining space
                economy through recycling, manufacturing, and innovation.
              </p>
            </div>
          </div>
        </div>

        {/* RoadMap Ul Cards */}
        <ul className="roadmap-ul w-full relative flex flex-col gap-2 justify-start place-items-center max-w-[1200px] px-5 sm:h-screen md:h-[450px] lg:h-[500px] overflow-hidden p-0 m-0 overflow-y-auto my-12 mx-auto font-[inter] text-white scroll-smooth transition-all duration-150">
          // In your Missions.js, replace the mapping section:
          {RoadMapDataList.map((eachCard, index) => (
            <RoadMapCard
              key={eachCard.number}
              data={eachCard}
              currentIndex={activeCardIndex}
              totalItems={RoadMapDataList.length}
              cardIndex={index}
              className="roadmap-card"
              data-index={index}
            />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Missions;