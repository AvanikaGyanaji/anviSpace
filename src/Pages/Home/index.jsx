import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ConeIcon, File, Plus, Upload } from "lucide-react";

const anviSectionList = {
  A: {
    image: "A.svg",
    descHead: "Autonomous Robotic Systems",
    descPara:
      "Modular arms, rovers, and embedded propulsion for orbit/surface ops.",
  },
  N: {
    image: "N.svg",
    descHead: "Navigation, Communication and Control",
    descPara:
      "Sensor fusion (vision/LiDAR/IMU/star-trackers) and precise GN&C.",
  },
  V: {
    image: "V.svg",
    descHead: "Versatile Autonomous Systems",
    descPara:
      "ROS2 autonomy, perception, planning, health and predictive maintenance.",
  },
  I: {
    image: "I.svg",
    descHead: "Integrated Missions",
    descPara: "HIL, TVAC/vibe, EMI/EMC,ConOps, and verification to flight.",
  },
};

const services = [
  {
    title: "Robotic Arms for Space Servicing",
    desc: "Multi-functional robotic manipulators enabling inspection, maintenance, and payload handling in orbit.",
    imgAlt:
      "High-tech robotic arm extending in space with the Earth and digital mesh globe in the background",
    imgSrc: "/images/services-robotics.png",
  },
  {
    title: "ISAM",
    desc: "Orbital concept for repair, refueling, manufacturing, and assembly of future infrastructure.",
    imgAlt:
      "Astronauts operating advanced machinery inside a zero-gravity orbital factory module with equipment",
    imgSrc: "/images/services-isam.png",
  },
  {
    title: "Active Debris Removal",
    desc: "Autonomous capture and de-orbit systems to secure congested orbital highways.",
    imgAlt:
      "Satellite spacecraft equipped with thrusters moving above Earth’s atmosphere in a dark orbit",
    imgSrc: "/images/services-debris.png",
  },
  {
    title: "Automation & AI",
    desc: "Onboard autonomy and prediction analytics that reduce human workload and boost mission efficiency.",
    imgAlt:
      "Spacecraft with AI-augmented interface floating in orbit with a backdrop of stars and Earth reflection",
    imgSrc: "/images/services-automation.png",
  },
];

const userContactDetails = {
  Name: "",
  Email: "",
  CVFile: null,
  Message: "",
  FileError: false,
};

const Home = () => {
  const [formValues, setFormValues] = useState(userContactDetails);

  const handleFileChange = (e) => {
    // console.log(e)
    if (e.target.files.length > 0) {
      setFormValues((prev) => ({
        ...prev,
        CVFile: e.target.files[0],
        FileError: false,
      }));
    } else {
      CancelFileUpload();
    }
  };

  const CancelFileUpload = () => {
    const fileInput = document.getElementById("fileUpload");
    if (fileInput) {
      fileInput.value = "";
      setFormValues((prev) => ({ ...prev, CVFile: null, FileError: false }));
    }
  };

  const ContactFormSubmit = (e) => {
    e.preventDefault();

    if (!formValues.Name || !formValues.Email || !formValues.Message) {
      alert("Please fill all fields and upload a file.");
      return;
    }
    if (!formValues.CVFile) {
      setFormValues((prev) => ({ ...prev, FileError: true }));
      return;
    }

    // console.log(formValues)

    const formData = new FormData();
    formData.append("Name", formValues.Name);
    formData.append("Email", formValues.Email);
    formData.append("Message", formValues.Message);
    formData.append("CVFile", formValues.CVFile);

    // console.log("userContactDetails:", formValues);
    alert("Contact Form Submitted");
    setFormValues({
      Name: "",
      Email: "",
      CVFile: null,
      Message: "",
      FileError: false,
    });
  };

  const introRef = useRef(null);
  const formRef = useRef(null);
  const headlineRef = useRef(null);
  const servicesRef = useRef([]);

  // GSAP for Hero Section BG
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        introRef.current.style.display = "block"; // hide after anim
      },
    });

    // Step 1: Fade in + scale bump
    tl.fromTo(
      introRef.current,
      { opacity: 0.5, scale: 1, rotate: 0 },
      { opacity: 1, scale: 1.1, rotate: 2, duration: 1.2, ease: "power3.in" }
    );

    // Step 2: Stay still for 5s (just a delay)
    tl.to(introRef.current, { duration: 5 });

    // Step 3: Scale out + rotate + fade out
    tl.to(introRef.current, {
      opacity: 1,
      scale: 1.2,
      rotate: 5,
      duration: 6,
      // repeat: -1,
      // yoyo: true,
      ease: "power1.out",
    });
  }, []);

  return (
    <>
      {/* Home - Hero Section   */}
      <section
        id="home"
        className="hero-section section1 w-full h-screen overflow-y-hidden bg-[#05080a] relative grid place-items-center overflow-hidden font-[Shinko Sans]"
      >
        <div
          ref={introRef}
          className="absolute top-15 md:top-0 z-2 w-screen h-screen bg-cover bg-top bg-no-repeat object-center aspect-video brightness-60"
          style={{ backgroundImage: 'url("/images/earth-hero-bg.jpg")' }}
        ></div>

        {/* Hero Content */}
        <div className="w-full z-3 max-w-[1000px] min-h-[25vh] mt-[25vh] text-center flex flex-col justify-center align-middle gap-[12px]">
          <h1 className="text-[28px] text-[#FEFEFE] font-[400] uppercase tracking-[2px]">
            Independent. Intelligent. Interplanetary.
          </h1>
          <p className="text-[16px] max-w-[750px] m-auto text-[#FEFEFE] px-5 tracking-[1px] font-[inter] font-[300]">
            “We build modular robotic systems from debris removal to intelligent
            rovers powering our mission, SPACE KARKANA for sustainable space
            exploration”
          </p>
          <a
            href="#pillars"
            target=""
            className="explore-btn animate-pulse figma-btn tracking-[4px] cursor-pointer hover:scale-102 text-[34px] font-[400] mt-[20vh] text-white uppercase transition-all duration-150"
          >
            Explore
          </a>
        </div>
      </section>

      {/* PILLARS SECTION */}
      <section
        id="pillars"
        className="pillars-section relative z-2 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div className="pillars-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle gap-5">
          <h3 className="text-[28px] tracking-[2px] uppercase">our pillars</h3>
          <ul
            className="figma-btn rounded-[32px] w-full max-w-[90vw] md:max-w-[1320px] min-h-[400px] aspect-[4/3] md:aspect-auto m-0 py-2 px-3 md:px-5 flex justify-evenly align-middle gap-[50px]
              border-1 bg-gradient-[92.48deg, #111111 0.36%, #FEFEFE 99.64%]"
            style={{ width: "90vw" }}
          >
            {Object.keys(anviSectionList).map((each, index) => (
              <li
                key={anviSectionList[each].image + index}
                className="pillars-li w-full max-w-[120px] self-center relative flex flex-col justify-center align-middle place-items-center gap-2"
              >
                {/* {console.log(anviSectionList[each])} */}
                <img
                  src={`/svgs/${anviSectionList[each].image}`}
                  className="w-full max-w-[100px] lg:max-w-[120px] object-contain aspect-square"
                  alt={anviSectionList[each].image}
                />
                <p
                  className="pillars-li-p w-[120px] md:w-[150px] aspect-square rounded-[32px] text-[12px] md:text-[16px] text-[#FEFEFE] place-content-center text-center py-[15px] px-[17px] absolute z-4 top-[-20%] md:-top-7.5 left:[-10%] md:left-[-5%] border-1"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {anviSectionList[each].descHead}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* MISSION SECTION */}
      <section
        id="missions"
        className="missions-section relative z-2 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div className="missions-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3 className="text-[28px] font-[400] text-white tracking-[2px] uppercase">
            our mission
          </h3>
          <p
            className="text-[18px] font-[300] text-[#FEFEFE] max-w-[773px] m-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            “An indigenous hub turning advanced robotics, propulsion, autonomy
            and test infrastructure into flight-ready systems for sustainable
            exploration”
          </p>
          <img
            src="/images/mission-banner.png"
            alt="mission-banner-img"
            className="w-full max-w-[900px]"
          />
          <button
            className="coming-soon-btn figma-btn py-2 px-[20px] border-2 rounded-[8px] tracking-[4px] cursor-pointer hover:scale-102 text-[24px] font-[400] mt-5 text-white uppercase transition-all duration-150"
            style={{
              border: "2px solid #111",
              // background: "linear-gradient(270deg, #161616 0%, #7C7C7C 100%)",
              backgroundBlendMode: "soft-light",
            }}
          >
            Coming Soon
          </button>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        className="products-section relative z-2 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div className="products-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3 className="text-[28px] font-[400] text-white tracking-[2px] uppercase">
            our products
          </h3>
          <ul className="products-ul-box mt-5 w-full max-w-[1300px] flex flex-wrap flex-row justify-between align-middle gap-x-[10vw] gap-y-8">
            <li
              key="prod-1"
              className="products-li-box max-w-[400px] md:max-w-[300px] aspect-[3/4] min-h-[450px] m-auto group cursor-pointer hover:scale-101 transition-all duration-120 rounded-[20px] border-[0.64px] border-[#FEFEFE] bg-[#111111] overflow-hidden"
            >
              <div className="relative h-[70%] w-full object-cover object-center bg-center bg-cover rounded-t-2xl overflow-hidden">
                {/* Default Image (visible until hover) */}
                <img
                  src="/images/products-hover.png"
                  alt="prodImg1"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 mix-blend-luminosity"
                />

                {/* Hover Image (hidden until hover) */}
                <img
                  src="/images/products-hoverBg.png"
                  alt="prodImg1-hover"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="min-h-[30%] text-center flex flex-col justify-center align-middle gap-2 py-2 px-1.5">
                <h4
                  className="font-[600] text-[20px] text-[#999999] uppercase"
                  style={{ fontFamily: "inter, sans-serif" }}
                >
                  celest
                </h4>
                <p
                  className="text-[#999999] text-[16px] font-[300] leading-[24px] tracking-[0.5px]"
                  style={{ fontFamily: "inter, sans-serif" }}
                >
                  CELEST is an autonomous planetary mobility platform engineered
                  for extreme environments.
                </p>
              </div>
            </li>
            <li
              key="prod-2"
              className="products-li-box max-w-[400px] md:max-w-[300px] aspect-[3/4] min-h-[450px] m-auto group cursor-pointer hover:scale-101 transition-all duration-120 rounded-[20px] border-[0.64px] border-[#FEFEFE] bg-[#111111] overflow-hidden"
            >
              <div className="relative h-[70%] w-full object-cover object-center bg-center bg-cover rounded-t-2xl overflow-hidden">
                {/* Default Image (visible until hover) */}
                <img
                  src="/images/products-satellite.png"
                  alt="prodImg1"
                  className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0 mix-blend-luminosity"
                />

                {/* Hover Image (hidden until hover) */}
                <img
                  src="/images/products-satelliteBg.png"
                  alt="prodImg1-hover"
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
              <div className="min-h-[30%] text-center flex flex-col justify-center align-middle gap-2 py-2 px-1.5">
                <h4
                  className="font-[600] text-[20px] text-[#999999]"
                  style={{ fontFamily: "inter, sans-serif" }}
                >
                  ADR Servicer
                </h4>
                <p
                  className="text-[#999999] text-[16px] font-[300] leading-[24px] tracking-[0.5px]"
                  style={{ fontFamily: "inter, sans-serif" }}
                >
                  A reusable servicer designed for multi-target debris removal,
                  ensuring long-term orbital safety.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="services-section pt-15 relative z-9 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div className="services-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3
            className="text-[28px] pb-10 font-[400] text-white tracking-[2px] uppercase"
            ref={headlineRef}
          >
            OUR SERVICES
          </h3>

          <div className="p-3 md:p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-4 max-w-7xl mx-auto font-[inter]">
            {services.map((service, idx) => (
              <div
                key={service.title}
                ref={(el) => (servicesRef.current[idx] = el)}
                className="space-y-4 p-1 rounded-xl shadow-lg"
              >
                <div className="overflow-hidden rounded-lg shadow-md">
                  <img
                    src={service.imgSrc}
                    alt={service.imgAlt}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2323251d-e9ed-44e8-81fb-ca8a70ae75f7.png";
                    }}
                    className="w-full h-auto md:max-h-56 object-cover aspect-video transform hover:scale-110 hover:shadow-gray-50 hover:shadow-md transition-transform duration-400 ease-in-out"
                  />
                </div>
                <h3 className="text-[16px] text-white m-0 mb-1 font-semibold leading-tight">
                  {service.title}
                </h3>
                <p className="text-[14px] font-[300] m-0 leading-relaxed text-[#C9C9C9]">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="contact-section relative z-2 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div className="contact-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3 className="text-[28px] font-[400] text-white tracking-[2px] uppercase">
            JOIN US IN REVOLUTIONIZING SPACE ROBOTICS
          </h3>
          <p
            className="text-[16px] font-[400] text-[#B3B3B3] max-w-[650px] m-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Be part of the future of space exploration. Together, we're building
            the robotic systems that will enable sustainable space operations
            for generations to come.
          </p>
          <form
            ref={formRef}
            className="w-full figma-btn max-w-[500px] overflow-hidden mt-8 mb-15 rounded-[12px] p-[50px] text-left mx-auto flex flex-col gap-[16px] space-y-5 border-1 border-[#FEFEFE]"
            style={{ width: "100%", cursor: "auto" }}
            onSubmit={(e) => ContactFormSubmit(e)}
          >
            <div className="form-Bgimg absolute -z-1 w-full h-full left-0 top-0 bg-no-repeat bg-contain bg-bottom"></div>
            <label className="w-full">
              <span className="text-gray-300 text-sm block mb-1">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formValues.Name}
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, Name: e.target.value }))
                }
                required
                className="w-full rounded-md bg-black bg-opacity-40 border border-gray-600 px-4 py-2 text-white placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
              />
            </label>
            <label className="w-full">
              <span className="text-gray-300 text-sm block mb-1">Email</span>
              <input
                type="email"
                name="email"
                value={formValues.Email}
                placeholder="your.email@gmail.com"
                onChange={(e) =>
                  setFormValues((prev) => ({ ...prev, Email: e.target.value }))
                }
                required
                className="w-full rounded-md bg-black bg-opacity-40 border border-gray-600 px-4 py-2 text-white placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
              />
            </label>

            {
              <div className="flex justify-start align-middle gap-3">
                <label className="w-max">
                  <span className="text-gray-300 text-sm block mb-1">
                    Upload your CV
                  </span>
                  <div className="relative w-full">
                    {/* Hidden file input */}
                    <input
                      type="file"
                      id="fileUpload"
                      name="file"
                      accept=".pdf,.doc,.docx"
                      // required
                      className="hidden"
                      onChange={handleFileChange}
                    />

                    {/* Custom input look */}
                    <label
                      htmlFor="fileUpload"
                      className="w-max flex items-center gap-2 rounded-md bg-opacity-40 border border-[#999] px-4 py-2 text-white cursor-pointer transition hover:bg-opacity-60 focus-within:ring-1 focus-within:ring-cyan-400"
                    >
                      {/* Upload Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        {!formValues.CVFile ? (
                          <Upload color="white" />
                        ) : (
                          <File color="white" />
                        )}
                      </svg>

                      {/* Placeholder / File name */}
                      <span
                        id="fileName"
                        className="text-[14px] max-w-[200px] h-min  overflow-ellipsis overflow-hidden text-[#999] font-[inter] font-[400]"
                      >
                        {/* {console.log(formValues.CVFile)} */}
                        {formValues.CVFile && formValues.CVFile.name
                          ? formValues.CVFile.name
                          : "Add File"}
                      </span>
                    </label>
                  </div>
                </label>
                {formValues.CVFile ? (
                  <button
                    type="button"
                    style={{ backgroundColor: "transparent" }}
                    className="p-0 h-min my-auto"
                    onClick={CancelFileUpload}
                  >
                    {/* <Plus className="rotate-45" color="#fff" onClick={cancelFileUpload()} /> */}
                    <Plus
                      className="rotate-45 bg-transparent self-center"
                      color="white"
                      size={30}
                    />
                  </button>
                ) : (
                  ""
                )}
              </div>
            }
            <label className="w-full">
              <span className="text-gray-300 text-sm block mb-1">Message</span>
              <textarea
                name="message"
                placeholder="Message"
                value={formValues.Message}
                onChange={(e) =>
                  setFormValues((prev) => ({
                    ...prev,
                    Message: e.target.value,
                  }))
                }
                rows="6"
                required
                className="w-full rounded-md bg-black bg-opacity-40 border border-gray-600 px-4 py-2 text-white placeholder-[#999] focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
              ></textarea>
            </label>
            <button
              type="submit"
              className="mt-3 m-0 font-[inter] text-[16px] hover:from-cyan-700 hover:via-blue-700 hover:to-blue-800 text-white font-semibold py-2 rounded-lg shadow-lg transition"
            >
              Submit
            </button>
            <p className="text-sm font-[inter] font-semibold text-red-500 text-left w-full">
              {!formValues.FileError ? "" : "* Upload Your CV File"}
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
