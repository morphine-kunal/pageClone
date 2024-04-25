"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "./components/header";
import Accordion from "./components/accordian";
import Slider from "./components/Slider";

import useIntersection from "./hook/useIntersection";

const accordians1 = [
  {
    title: "Material",
    inshort: [
      "Durable,biocompatible titanium",
      "Non allergic",
      "water Resistant",
    ],
    points: [
      "Durable titanium",
      "PVD Coating",
      "Non-allergenic, non-metallic, seamless inner molding",
      "Water resistant up to 100m/328 ft",
    ],
  },
  {
    title: "Weight & Dimensions",
    inshort: ["width: 7.9mm", "Thickness: 2.55mm", "Weight: 4 to 6 grams"],
    points: [
      "Width: 7.9mm",
      "Thickness: 2.55mm — size of a wedding band",
      "Weight: 4 to 6 grams (depending on ring size)",
    ],
  },
  {
    title: "Power",
    inshort: ["Battery life upto 7 days"],
    points: ["Up to 7 days battery life.", "Full charge in 20 to 80 minutes"],
  },
];
const accordians2 = [
  {
    title: "Sleep",
    inshort: [
      "Daily Sleep Score",
      "Bedtime Guidence",
      "Blood Oxygen (spo2) sensing",
    ],
    points: [
      {
        name: "Daily Sleep Score",
        about:
          'The answer to "how did you sleep last night?" Your score is based on your sleep stages, temperature trends and heart rate.',
      },
      {
        name: "Bedtime Guidance",
        about:
          "Oura reminds you when to start winding down so you can improve your sleep quality.",
      },
    ],
    description:
      "A market leader in sleep tracking for over a decade, Oura gives you best-in-class insights into your sleep quality. Feel more rested every day with personalized recommendations based on your sleep patterns.",
  },
  {
    title: "Early Illness Detection",
    inshort: [
      "Sudden shifts in skin temperature and HRV",
      "Personalized Rest and Recovery Insights",
    ],
    points: [
      {
        name: "Temperature Trends",
        about:
          "Oura tells you when your temperature trends or heart rate are higher than normal.",
      },
      {
        name: "Rest & Recovery Insights",
        about:
          "Oura will provide suggestions for recovery if you may be getting sick.",
      },
    ],
    description:
      "Oura monitors your temperature trends and heart rate variability to identify potential signs of a fever or sickness so you can take extra precautions.",
  },
  {
    title: "Compatibility",
    inshort: ["Language availability", "iOS and Android"],
    points: [
      {
        name: "Language Availability",
        about:
          "The Oura App is available in English, Finnish, Japanese, German, French, Spanish, and Italian. Supports metric and imperial units of measurement.",
      },
      {
        name: "iOS and Android",
        about:
          "The Oura App works with Apple Health or Google Health Connect. It can also be added as a complication to the Apple Watch.",
      },
    ],
  },
];

const foot1 = [
  {
    title: "Company",
    options: [
      { name: "About us" },
      {
        name: "Leadership",
      },
      {
        name: "Medical Advisory Board",
      },
      {
        name: "Research & Validation",
      },
      {
        name: "Press",
      },
      {
        name: "Careers",
      },
    ],
  },
  {
    title: "Solutions",
    options: [
      {
        name: "Oura for Business",
      },
      {
        name: "Reproductive Health",
      },
      {
        name: "Developers",
      },
      {
        name: "FSA/HSA Eligible",
      },
    ],
  },
  {
    title: "Support",
    options: [
      {
        name: "Getting Started",
      },
      {
        name: "Membership",
      },
      {
        name: "My Account",
      },
      {
        name: "Oura on the Web",
      },
      {
        name: "Sizing",
      },
      {
        name: "Help",
      },
      {
        name: "Contact",
      },
      {
        name: "Extra Charger",
      },
    ],
  },
];

const dummy = [
  {
    link: "https://ourahealth.imgix.net/product/research-dunes.jpg?ixlib=js-2.3.2&fm=webp&w=500&ov=&s=b069c5e81c7db04d23387150eea2bef5",
    logo: "https://ourahealth.imgix.net/meet-the-community/logo-UCSF@2x.png?ixlib=js-2.3.2&fm=webp&w=256&q=75&s=776206ae1e8a09e0f23fb260c8eff7c0",
    description:
      "Their large-scale COVID-19 study found that the temperature sensors in Oura Ring could be an effective tool for fever monitoring and early illness detection.",
  },
  {
    link: "https://ourahealth.imgix.net/product/research-pregnancy.jpg?ixlib=js-2.3.2&fm=webp&w=500&ov=&s=08cf1aaa32e14ca31de1138e269969f2",
    logo: "https://ourahealth.imgix.net/meet-the-community/logo-UCSD@2x.png?ixlib=js-2.3.2&fm=webp&w=256&q=75&s=b06ffd8367be1f702fd7f83fb3415616",
    description:
      "Researchers here are using Oura Ring to look for patterns in temperature trends, heart and respiratory rates, and sleep that may predict different pregnancy outcomes.",
  },
  {
    link: "https://ourahealth.imgix.net/product/research-ring.jpg?ixlib=js-2.3.2&fm=webp&w=500&ov=&s=de4e362536903e9568fd97d54220eca5",
    logo: "https://ourahealth.imgix.net/meet-the-community/logo-WVU@2x.png?ixlib=js-2.3.2&fm=webp&w=640&q=75&s=7ae9b4ffbe4aadad5fb5148675b5719e",
    description:
      "Academic researchers found that the infrared photoplethysmogram (PPG) sensor that Oura Ring uses to measure heart rate and HRV consistently outperformed other PPG tools.",
  },
];

const Home = () => {
  const [showDiv, setShowDiv] = useState(false);

  const isSectionIntersected = useIntersection("#section2", {
    thresholds: [0.05],
  });

  const showWhite = useIntersection("#section2 ", {
    thresholds: [0.5, 0.6, 0.7, 0.8, 0.9, 1],
  });
  const showAnotherWhite = useIntersection("#section3", { thresholds: [0.2] });
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const specificQuantity = 1;

      if (scrollY > specificQuantity) {
        setShowDiv(true);
      } else {
        setShowDiv(false);
      }
    };
    console.log(showWhite);

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showWhite]);
  return (
    <>
      <main>
        <Header show={showWhite} showAnother={showAnotherWhite} />

        <section className="relative h-[500px] lg:min-h-[870px] box-border">
          <div className="flex justify-center items-center flex-col pt-[110px] relative z-10">
            <h1 className="text-5xl font-light">
              A <em className="italic">really</em> smart ring
            </h1>
            <h2 className="mt-5 max-w-[430px] text-center text-s">
              Meet the most innovative, stylish wearable on the market. Your
              Oura Ring tracks over 20 biometric signals, all from your finger.
            </h2>
            <button className=" bg-[black] px-8 py-4 rounded-full hover:bg-[#CFECF7] hover:text-black text-white text-md mt-5 text-center lg:block hidden">
              Choose your Oura Ring
            </button>
          </div>

          <div className="w-full h-full absolute top-0 left-0 z-0 bottom-0">
            <Slider />
          </div>

          {showDiv && (
            <div className="mt-8 flex justify-between items-center w-[80%] mx-auto z-10 relative flex-1">
              <div className="w-[320px] lg:flex hidden flex-col gap-y-3">
                <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                  <Image
                    src={"/images/battery.svg"}
                    alt="battery"
                    width={30}
                    height={30}
                    className="rotate-[-90deg]"
                  />
                </div>
                <h1 className="text-2xl w-[320px]">Long Nattery Life</h1>
                <p className="text-black text-md w-[320px]">
                  Up to 7 days of battery means you can track your health 24/7
                  without charging every night.
                </p>
              </div>
              <div className="flex-1 flex justify-between items-center gap-y-3 relative z-10">
                {isSectionIntersected && (
                  <div
                    className={`arrow1 ${
                      isSectionIntersected ? "animate-expand" : "animate-shrink"
                    }`}
                  ></div>
                )}
                {isSectionIntersected && (
                  <div
                    className={`arrow2 ${
                      isSectionIntersected ? "animate-expand" : "animate-shrink"
                    }`}
                  ></div>
                )}
              </div>
              <div className="w-[320px] hidden lg:flex flex-col gap-y-3">
                <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                  <Image
                    src={"/images/diamond.svg"}
                    alt="battery"
                    width={30}
                    height={30}
                  />
                </div>
                <h1 className="text-2xl w-[320px]">Build to Last</h1>
                <p className="text-black text-md w-[320px]">
                  Oura Ring is made of titanium: super strong, non-allergenic,
                  lighter than the average wedding band.
                </p>
              </div>
            </div>
          )}
          {showDiv && (
            <div className="mt-8  flex justify-between items-center w-[80%] mx-auto z-10 relative flex-1">
              <div className="w-[320px] lg:flex hidden flex-col gap-y-3">
                <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                  <Image
                    src={"/images/rate.svg"}
                    alt="battery"
                    width={30}
                    height={30}
                  />
                </div>
                <h1 className="text-2xl w-[320px]">Pinpoint Accuracy</h1>
                <p className="text-black text-md w-[320px]">
                  Oura`s research-grade sensors track it all:
                  temperature-trends, heart rate, daily activity and recovery,
                  sleep quality, menstrual cycles, even stress.
                </p>
              </div>
              <div className="flex-1 flex justify-between items-center gap-y-3 relative z-10">
                {isSectionIntersected && (
                  <div
                    className={`arrow1 ${
                      isSectionIntersected ? "animate-expand" : "animate-shrink"
                    }`}
                  ></div>
                )}
                {isSectionIntersected && (
                  <div
                    className={`arrow2 ${
                      isSectionIntersected ? "animate-expand" : "animate-shrink"
                    }`}
                  ></div>
                )}
              </div>
              <div className="w-[320px] hidden lg:flex flex-col gap-y-3">
                <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                  <Image
                    src={"/images/diamond.svg"}
                    alt="battery"
                    width={30}
                    height={30}
                  />
                </div>
                <h1 className="text-2xl w-[320px]">Build to Last</h1>
                <p className="text-black text-md w-[320px]">
                  Oura Ring is made of titanium: super strong, non-allergenic,
                  lighter than the average wedding band.
                </p>
              </div>
            </div>
          )}

          {/* <div className=" lg:hidden flex justify-center items-center relative z-10 mt-12 pb-8">
            <div className="w-[320px] bg-white px-4 py-5 bg-white rounded-full"></div>
          </div> */}
        </section>

        <section className="min-h-screen bg-[#D7DBE0] z-20 lg:hidden block">
          <div className="w-[80%] mx-auto pt-16">
            <div className="w-full flex flex-col gap-y-3">
              <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                <Image
                  src={"/images/battery.svg"}
                  alt="battery"
                  width={30}
                  height={30}
                  className="rotate-[-90deg]"
                />
              </div>
              <h1 className="text-2xl w-full">Long Nattery Life</h1>
              <p className="text-black text-md w-full">
                Up to 7 days of battery means you can track your health 24/7
                without charging every night.
              </p>
            </div>

            <div className="w-[320px] flex flex-col gap-y-3 mt-8">
              <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                <Image
                  src={"/images/diamond.svg"}
                  alt="battery"
                  width={30}
                  height={30}
                />
              </div>
              <h1 className="text-2xl w-[320px]">Build to Last</h1>
              <p className="text-black text-md w-[320px]">
                Oura Ring is made of titanium: super strong, non-allergenic,
                lighter than the average wedding band.
              </p>
            </div>

            <div className="w-[40px] h-[40px] border rounded flex justify-center items-center mt-8">
              <Image
                src={"/images/rate.svg"}
                alt="battery"
                width={30}
                height={30}
              />
            </div>
            <h1 className="text-2xl w-full">Pinpoint Accuracy</h1>
            <p className="text-black text-md w-full mt-3">
              Oura`s research-grade sensors track it all: temperature-trends,
              heart rate, daily activity and recovery, sleep quality, menstrual
              cycles, even stress.
            </p>

            <div className="w-fullflex flex-col gap-y-3 mt-8 pb-5">
              <div className="w-[40px] h-[40px] border rounded flex justify-center items-center">
                <Image
                  src={"/images/battery.svg"}
                  alt="battery"
                  width={30}
                  height={30}
                  className="rotate-[-90deg]"
                />
              </div>
              <h1 className="text-2xl w-full">Long Nattery Life</h1>
              <p className="text-black text-md w-full mt-3">
                Up to 7 days of battery means you can track your health 24/7
                without charging every night.
              </p>
            </div>
          </div>
        </section>

        <section className="min-h-screen bg-[#101926] z-20" id="section2">
          <div className="w-[80%] mx-auto pt-28">
            <div>
              <h1 className="text-6xl text-white font-light mb-20">
                How it works
              </h1>
              <div className="flex justify-center md:items-center md:flex-row flex-col">
                <div className="flex gap-x-2 items-center w-full md:w-[30%] md:mb-0 mb-3">
                  <div className="w-[30px] h-[30px] Border rounded flex justify-center items-center">
                    <Image
                      src={"/images/crown.svg"}
                      alt="crown"
                      width={20}
                      height={20}
                      className="text-white"
                    />
                  </div>
                  <h1 className="text-3xl text-[#4A6373] font-medium">
                    Membership
                  </h1>
                </div>

                <div className="w-[70%] text-white text-sm">
                  <p>
                    An Oura membership delivers daily, personalized health
                    insights, powered by 24/7, hyper-accurate data from your
                    Oura Ring.
                  </p>
                </div>
              </div>

              <hr className="md:mt-20 mt-8  border-t-1 border-[#4A6373]" />
            </div>
            <div className="mt-20">
              <div className="flex justify-center items-start md:flex-row flex-col">
                <div className="flex gap-x-2 items-center w-full md:w-[30%] md:mb-0 mb-3">
                  <div className="w-[30px] h-[30px] Border rounded flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                      style={{ color: "white" }}
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="32"
                        d="M48 320h64l64-256 64 384 64-224 32 96h64"
                      />
                      <circle
                        cx="432"
                        cy="320"
                        r="32"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                    </svg>
                  </div>
                  <h1 className="text-3xl text-[#4A6373] font-medium">
                    Tech Specs
                  </h1>
                </div>
                <div className="flex flex-col w-full md:w-[70%]">
                  {accordians1.map((item, index) => (
                    <Accordion
                      key={index}
                      title={item.title}
                      points={item.points}
                    />
                  ))}
                </div>
              </div>

              <hr className="md:mt-20 mt-8  border-t-1 border-[#4A6373]" />
            </div>

            <div className="mt-20">
              <div className="flex justify-center items-start flex-col md:flex-row">
                <div className="flex gap-x-2 items-center w-full md:w-[30%] md:mb-0 mb-3">
                  <div className="w-[30px] h-[30px] Border rounded flex justify-center items-center">
                    <svg
                      height="24"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ fill: "white" }}
                      color="white"
                    >
                      <path d="M7.5 14.5c-1.58 0-2.903 1.06-3.337 2.5H2v2h2.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2H10.837c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5S9 17.173 9 18s-.673 1.5-1.5 1.5zm9-11c-1.58 0-2.903 1.06-3.337 2.5H2v2h11.163c.434 1.44 1.757 2.5 3.337 2.5s2.903-1.06 3.337-2.5H22v-2h-2.163c-.434-1.44-1.757-2.5-3.337-2.5zm0 5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z" />
                      <path d="M12.837 5C12.403 3.56 11.08 2.5 9.5 2.5S6.597 3.56 6.163 5H2v2h4.163C6.597 8.44 7.92 9.5 9.5 9.5s2.903-1.06 3.337-2.5h9.288V5h-9.288zM9.5 7.5C8.673 7.5 8 6.827 8 6s.673-1.5 1.5-1.5S11 5.173 11 6s-.673 1.5-1.5 1.5z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl text-[#4A6373] font-medium">
                    Features
                  </h1>
                </div>
                <div className="flex flex-col w-full md:w-[70%]">
                  {accordians2.map((item, index) => (
                    <Accordion
                      key={index}
                      title={item.title}
                      points={item.points}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>

              <hr className="md:mt-20 mt-8  border-t-1 border-[#4A6373]" />
            </div>
            <div className="mt-20">
              <div className="flex justify-center items-start flex-col md:flex-row">
                <div className="flex gap-x-2 items-center w-full md:w-[30%] md:mb-0 mb-5">
                  <div className="w-[30px] h-[30px] Border rounded flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ionicon"
                      viewBox="0 0 512 512"
                      style={{ color: "white" }}
                    >
                      <path
                        d="M448 341.37V170.61A32 32 0 00432.11 143l-152-88.46a47.94 47.94 0 00-48.24 0L79.89 143A32 32 0 0064 170.61v170.76A32 32 0 0079.89 369l152 88.46a48 48 0 0048.24 0l152-88.46A32 32 0 00448 341.37z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="28"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M69 153.99l187 110 187-110M256 463.99v-200"
                      />
                    </svg>
                  </div>
                  <h1 className="text-3xl text-[#4A6373] font-medium">
                    What&apos;s Include
                  </h1>
                </div>
                <div className="flex flex-col w-[70%]">
                  <div className="flex flex-col gap-y-8 text-lg text-white">
                    <p>Our Ring</p>
                    <p>Ring Charger & USB-C Charging Cable</p>
                    <p>Free Sizing Kit</p>
                  </div>
                  <span className="text-gray-700 text-md mt-2">Optional</span>
                </div>
              </div>

              <hr className="mt-20  border-t-1 border-[#4A6373]" />
            </div>
          </div>
        </section>

        <section
          className="bg-[#E6DED3] min-h-screen flex flex-col justify-center items-center"
          id="section3"
        >
          <div className="w-[70%]  mx-auto bg-[#C6BCB1] flex md:flex-row flex-col">
            <div className="flex-1 md:ml-[-70px] mt-[-30px] md:mt-0 md:py-4 px-4">
              <video
                loop={true}
                playsInline={true}
                autoPlay={true}
                muted={true}
                controls={false}
                poster="https://s3.amazonaws.com/ouraring.com/images/product/wizard/pdp-charger-set-thumbnail-1.jpg"
              >
                <source src="https://s3.amazonaws.com/ouraring.com/images/product/wizard/pdp-charger-set-mobile.mp4" />
              </video>
            </div>
            <div className="flex flex-col justify-center items-center flex-1">
              <p className=" text-lg md:text-[33px] text-center font-thin leading-relaxed">
                Need an extra charger <br /> for your Oura Ring?
              </p>
              <button className=" bg-[black] px-16 py-4 rounded-full hover:bg-[#CFECF7] hover:text-black text-white text-md mt-5 text-center mb-5">
                Buy
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#E6DED3] min-h-screen">
          <div className="w-[80%] mx-auto">
            <div>
              <h1 className="text-5xl font-thin text-center">
                Real science. Real proof.
              </h1>
              <p className="text-center mt-8">
                Oura Ring has been used in independent studies conducted by{" "}
                <br /> researchers at universities, the US Army, and the US
                Navy.
              </p>
            </div>
            <div className="flex md:flex-row flex-col justify-center lg:justify-start gap-x-16 mt-20 relative">
              {dummy.map((item, index) => (
                <div key={index}>
                  <div className="w-[440px] md:w-[100%] md:h-[242px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.link} alt="image" className="w-full" />
                  </div>
                  <div className="w-[150px] my-4 h-[60px] flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.logo} alt="logo" className="w-full" />
                  </div>
                  <p>{item.description}</p>
                  <button className=" bg-[black] px-6 py-2 rounded-full hover:bg-[#CFECF7] hover:text-black text-white text-md mt-5 text-center md:mb-0 mb-5">
                    Read more
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#E6DED3] min-h-screen flex items-center justify-center flex-col">
          <div className="w-[80%] mx-auto flex pt-12 flex-col md:flex-row">
            <div className="md:w-[35%] w-full">
              <div className="md:w-[75%] w-full">
                <div className="w-[100px]">
                  <svg
                    viewBox="0 0 993 311"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full"
                  >
                    <path
                      d="M63.443 27.388H190.38V0H63.443zM643.464 174.105H554.68V83.082h88.783c31.634 0 52.89 18.292 52.89 45.513 0 27.221-21.256 45.51-52.89 45.51m29.409 21.29c30.456-8.686 50.136-34.907 50.136-66.8 0-41.397-31.967-69.212-79.547-69.212H528.035v244.66h26.646V198.174h90.3l57.501 105.867h28.83l-59.946-108.218zM389.668 308.653c65.348 0 110.987-45.903 110.987-111.63V59.384h-27.387v135.793c0 50.688-34.377 86.09-83.6 86.09-40.798 0-84.709-26.94-84.709-86.09V59.384h-27.382v137.64c0 65.726 46.093 111.628 112.093 111.628m478.192-217.35 57.757 126.333H809.735zm-12.848-31.916L743.16 304.044h28.606l27.662-62.713h136.493l27.67 62.713h28.603L880.342 59.383zm-728.077-4.611C56.944 54.775 0 111.719 0 181.712c0 69.996 56.944 126.94 126.937 126.94 69.996 0 126.94-56.944 126.94-126.94 0-69.993-56.944-126.937-126.94-126.937m0 226.49c-54.893 0-99.553-44.66-99.553-99.553 0-54.892 44.661-99.55 99.554-99.55 54.894 0 99.556 44.658 99.556 99.55 0 54.893-44.662 99.553-99.556 99.553"
                      fill="#41587C"
                    ></path>
                  </svg>
                </div>

                <p className="text-lg text-[#41587C] mt-16">
                  Receive the latest articles, tips, and offers from Oura
                </p>
                <div className="mt-5 flex ">
                  <input
                    type="text"
                    placeholder="Email address"
                    className="border-0 outline-none bg-transparent border-b border-black hover:border-b-2 w-full box-border"
                  />
                  <Image
                    src={"/images/arroow.svg"}
                    alt="arrow"
                    width={25}
                    height={25}
                    style={{ marginLeft: "-25px" }}
                    className="fill-white"
                  />
                </div>
                <p className="text-[#41587C] text-md mt-4 md:mb-0 mb-5">
                  We care about protecting your data. Read more in our{" "}
                  <span className="border-b-2 border-[#41587C]">
                    {" "}
                    Privacy Policy.
                  </span>
                </p>
              </div>
            </div>
            <div className="w-[65%] flex gap-x-4 justify-between flex-col md:flex-row">
              <div className="md:block hidden">
                <h5 className="text-[#72757C] mb-5">Company</h5>

                <div>
                  <ul className="flex flex-col gap-4 text-[#41587C] text-md">
                    <li className="cursor-pointer">About us</li>
                    <li className="cursor-pointer">Leadership</li>
                    <li className="cursor-pointer">Medical Advisory Board</li>
                    <li className="cursor-pointer">Research & Validation</li>
                    <li className="cursor-pointer">Press</li>
                    <li className="cursor-pointer">Careers</li>
                  </ul>
                </div>
              </div>

              <div className="md:block hidden">
                <h5 className="text-[#72757C] mb-5">Solutions</h5>

                <div>
                  <ul className="flex flex-col gap-4 text-[#41587C] text-md">
                    <li className="cursor-pointer">Oura for Business</li>
                    <li className="cursor-pointer">Reproductive Health</li>
                    <li className="cursor-pointer">Developers</li>
                    <li className="cursor-pointer">FSA/HSA Eligible</li>
                  </ul>
                </div>
              </div>
              <div className="md:block hidden">
                <h5 className="text-[#72757C] mb-5">Support</h5>

                <div>
                  <ul className="flex flex-col gap-4 text-[#41587C] text-md">
                    <li className="cursor-pointer">Getting Started</li>
                    <li className="cursor-pointer">Membership</li>
                    <li className="cursor-pointer">My Account</li>
                    <li className="cursor-pointer">Oura on the Web</li>
                    <li className="cursor-pointer">Sizing</li>
                    <li className="cursor-pointer">Help</li>
                    <li className="cursor-pointer">Contact</li>
                    <li className="cursor-pointer">Extra Charger</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 md:hidden mt-5">
              {foot1.map((item, index) => (
                <Accordion
                  key={index}
                  title={item.title}
                  points={item.options}
                  color="gray"
                />
              ))}
            </div>
          </div>

          <div className="w-[80%] mx-auto mt-12">
            <div className="flex justify-between flex-col md:flex-row ">
              <div className="flex gap-x-8 md:mb-0 mb-5">
                <div className="bg-[#41587C] p-1 rounded-full hover:bg-black cursor-pointer">
                  <Image
                    src="/images/fb.svg"
                    alt="fb"
                    width={25}
                    height={25}
                  ></Image>
                </div>
                <div className="bg-[#41587C] p-1 rounded-full  hover:bg-black cursor-pointer">
                  <Image
                    src="/images/insta.svg"
                    alt="fb"
                    width={25}
                    height={25}
                  ></Image>
                </div>

                <div className="bg-[#41587C] p-1 rounded-full  hover:bg-black cursor-pointer">
                  <Image
                    src="/images/twitter.svg"
                    alt="fb"
                    width={25}
                    height={25}
                  ></Image>
                </div>

                <div className="bg-[#41587C] p-1 rounded-full  hover:bg-black cursor-pointer">
                  <Image
                    src="/images/pinterest.svg"
                    alt="fb"
                    width={25}
                    height={25}
                  ></Image>
                </div>
              </div>
              <hr className="md:hidden block border-gray-400 mb-2" />
              <div>
                <Image
                  src={"/images/mark.svg"}
                  alt="original"
                  width={35}
                  height={35}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-between flex-col md:flex-row gap-y-4 md:gap-y-0">
              <div>
                <p className="text-[#72757C]">
                  © 2024 Ōura Health Oy. All Rights Reserved.
                </p>
                <p className="text-[#72757C]">
                  ŌURA and OURA and Ō are trademarks of Ōura Health Oy and may
                  not be used without permission.
                </p>
              </div>

              <div className="flex items-end md:mb-0 mb-5">
                <ul className="flex justify-between items-center gap-x-3 text-sm text-[#41587C]">
                  <li>Terms & Conditions</li>
                  <li>Privacy policy</li>
                  <li>IP Notice</li>
                  <li>Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
