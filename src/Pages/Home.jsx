import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import ContactForm from "../Components/ContactForm";
import { servicesList } from "../Utils/ServicesList";
import { productsList } from "../Utils/ProductsList";
import ScrollToHash from "../Utils/ScrollToHash";

import {useScrollTextAnim} from "../Hooks/ScrollAnimationGSAP";

const Home = () => {
  const introRef = useRef(null);
  const headlineRef = useRef(null);
  const aboutRef = useRef(null);
  const productsRef = useRef([]);
  const productBoxRef = useRef(null);
  const servicesRef = useRef(null);

  // Apply reusable animation
  useScrollTextAnim(headlineRef);
  useScrollTextAnim(aboutRef);
  useScrollTextAnim(productBoxRef);
  useScrollTextAnim(servicesRef);


  // scroll to hash
  ScrollToHash();

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
      {/* Star Animation Background Image */}
      <div className="star-animate fixed top-0 left-0 w-[100%] h-[100%] aspect-square z-0 overflow-visible">
        <div
          className="star-animate-bg star-bg-1"
          style={{ animationDelay: 10 }}
        ></div>
        <div
          className="star-animate-bg star-bg-2"
          style={{ animationDelay: 10 }}
        ></div>
        <div
          className="star-animate-bg star-bg-3"
          style={{ animationDelay: 10 }}
        ></div>
        <div
          className="star-animate-bg star-bg-4"
          style={{ animationDelay: 10 }}
        ></div>
      </div>

      {/* Home - Hero Section   */}
      <section
        id="home"
        className="hero-section section1 w-full h-[120vh] lg:h-[120vh] overflow-y-hidden bg-[#05080a] relative grid place-items-center overflow-hidden font-[Shinko Sans]"
      >
        <div
          ref={introRef}
          className="absolute top-15 md:top-0 z-2 w-screen h-screen lg:h-[110vh] bg-cover bg-top bg-no-repeat object-center aspect-video brightness-60"
          style={{ backgroundImage: 'url("/images/earth-hero-bg.jpg")' }}
        ></div>

        {/* Hero Content */}
        <div ref={headlineRef} className="w-full z-3 max-w-[1100px] min-h-[50vh] mt-[-10vh] text-center flex flex-col justify-center align-middle gap-[2px]">
          <h1 className="text-[36px] md:text-[48px] px-3 m-0 text-[#FEFEFE] font-[500] font-[inter] tracking-[-1.3px] capitalize">
            Foundation for a Sustainable{" "}
            <span className="inline-block whitespace-nowrap">
              {" "}
              Space Future
            </span>
          </h1>
          <p className="text-[20px] font-[400] text-[#FEFEFE] tracking-tight font-[inter] capitalize">
            Ecosystem Beyond Earth.
          </p>
          <a
            href="#about"
            target=""
            id="explore-btn"
            className="explore-btn animate-pulse figma-btn tracking-[4px] cursor-pointer capitalize hover:scale-102 text-[34px] font-[400] mt-[30px] text-white transition-all duration-150"
          >
            Explore
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="about-section h-auto max-md:mb-10 p-2 pt-0 relative z-2 grid place-content-center place-items-center w-full text-white bg-black"
      >
        <div
          ref={aboutRef}
          className="about-box w-screen min-h-[90vh] md:min-h-[600px] max-h-[900px] max-md:h-[80vh] relative py-8 pt-15 px-2 text-center h-full flex flex-col justify-start align-middle gap-5">
          <video
            muted
            autoPlay
            loop
            playsInline
            className="absolute top-0 left-0 w-screen h-[650px] max-md:h-[110vh] object-cover object-center bg-blend-color-burn -z-1"
          >
            {/* Local Static Fallback */}
            <source
              src="/videos/about-bg-org.webm"
              type="video/webm"
            />
            <source
              src="/videos/about-bg.webm"
              type="video/webm"
            />
            {/* Fallback message */}
            Your browser does not support the video tag.
          </video>

          <h3 className="text-[28px] tracking-[2px] uppercase font-[Shinko Sans]">
            About Us
          </h3>
          <p className="about-para text-[16px] font-[400] font-[Inter] text-white text-center leading-[22px] max-w-[900px] mx-auto px-3">
            Anvi Space aims to develop advanced space robotics and intelligent
            satellite technologies, for safer, more sustainable orbital
            operations. From satellite with robotic arms for servicing and
            debris capture to modular, refillable satellites, our solutions
            extend mission lifetimes and reduce waste. Our vision is to enable a
            self-reliant, sustainable space ecosystem for future generations.
          </p>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section
        id="products"
        ref={productBoxRef}
        className="products-section relative z-2 pt-15 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div className="products-box w-full pt-2 pb-4 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3 className="text-[28px] font-[400] text-white tracking-[2px] uppercase">
            our products
          </h3>
          <ul className="products-ul-box mt-5 w-full max-w-[1600px] flex flex-col justify-between align-middle gap-x-[10vw] gap-y-[20px]">
            {productsList.map((product, idx) => (
              <li
                key={idx}
                ref={(el) => (productsRef.current[idx] = el)}
                className={`products-li-box cardAnim group w-full max-w-[1100px] max-md:flex-col-reverse md:max-h-[300px] m-auto flex justify-between max-md:justify-center max-md:align-middle align-top gap-5 md:gap-10 lg:gap-20 cursor-pointer transition-all duration-200 ${
                  product.id !== "ads-servicer"
                    ? "bg-blend-luminosity backdrop-blur-lg hover:bg-blend-normal hover:bg-[rgb(8 11 13)] px-3"
                    : ""
                } max-md:bg-bottom hover:scale-101 bg-[#111111] hover:bg-[#080b0d] overflow-hidden`}
                style={product.style ? product.style : {}}
              >
                <div className="flex flex-col justify-center text-left align-top gap-5 py-3 px-5 font-[Inter] text-[#FEFEFE]">
                  <h4
                    className="font-[500] z-1 text-[18px] tracking-[0.44px] leading-[24px]"
                    style={{ fontFamily: "inter, sans-serif" }}
                  >
                    {product.title}
                  </h4>
                  <span className="flex justify-start align-middle gap-3">
                    <Link
                      to={
                        product.exploreLink.length > 0
                          ? product.exploreLink
                          : ""
                      }
                      className="rounded-[8px] border-1 border-[#FEFEFE] text-[14px] py-[11px] px-[16px]  tracking-[0.44px] leading-[24px] hover:bg-[#00000090] hover:shadow-md hover:shadow-gray-900 hover:scale-101 transition"
                    >
                      Explore {product.exploreLabel}
                    </Link>
                    {product.exploreLink.length > 0 && (
                      <Link
                        to=""
                        className="rounded-[8px] border-1 border-[#FEFEFE] text-[14px] py-[11px] px-[16px]  tracking-[0.44px] leading-[24px] hover:bg-[#00000090] hover:shadow-md hover:shadow-gray-900 hover:scale-101 transition"
                      >
                        Notify Me
                      </Link>
                    )}
                  </span>
                </div>
                <img
                  src={product.img_url}
                  alt={`prod-card-img-${idx}`}
                  className={`w-full max-w-[280px] max-md:m-auto max-md:object-cover max-md:px-3 ${
                    product.id === "ads-servicer"
                      ? "max-w-[300px] scale-180"
                      : ""
                  } mix-blend-luminosity group-hover:mix-blend-normal h-auto aspect-square`}
                  style={{
                    objectFit:
                      product.id === "ads-servicer" ? "contain" : "cover",
                    maxWidth: product.id === "ads-servicer" ? "350px" : "300px",
                  }}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="services-section pt-10 relative z-9 grid place-content-center place-items-center w-full p-2 text-white"
      >
        <div 
        ref={servicesRef} className="services-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3
            className="text-[28px] pb-10 font-[400] text-white tracking-[2px] uppercase"
          >
            OUR SERVICES
          </h3>

          <div className="p-3 md:p-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-4 max-w-7xl mx-auto font-[inter]">
            {servicesList.map((service) => (
              <div
                key={service.title}
                className="servicecard cardAnim group space-y-4 p-1 rounded-xl shadow-lg hover:bg-[#D7ECF533] hover:p-1.5 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="overflow-hidden w-full aspect-[16/9] bg-gray-950 object-center rounded-lg hover:rounded-none transition-all duration-350 hover:shadow-xl hover:shadow-gray-900">
                  <img
                    src={service.imgSrc}
                    alt={service.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      // e.currentTarget.src =
                      //   "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2323251d-e9ed-44e8-81fb-ca8a70ae75f7.png";
                    }}
                    className="w-full h-auto md:max-h-56 object-cover aspect-video transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-[16px] text-white m-0 mb-1 font-semibold leading-tight cursor-default">
                  {service.title}
                </h3>
                <p className="text-[14px] font-[300] m-0 leading-relaxed text-[#C9C9C9] cursor-default">
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
        className="contact-section relative z-2 grid place-content-center place-items-center w-full p-2 pt-10 text-white"
      >
        <div className="contact-box w-full py-8 pt-10 px-2 text-center h-full flex flex-col justify-center align-middle place-items-center gap-5">
          <h3 className="text-[30px] font-[400] text-white tracking-[2px] uppercase">
            Launch Your Ideas with Us.
          </h3>
          {/* <p
            className="text-[16px] font-[400] text-[#B3B3B3] max-w-[650px] m-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Be part of the future of space exploration. Together, we're building
            the robotic systems that will enable sustainable space operations
            for generations to come.
          </p> */}

          {/* Contact Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Home;
