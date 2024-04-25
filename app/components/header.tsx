import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header: React.FC = ({ show, showAnother }) => {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = (event: any) => {
      // Prevent scrolling in the y-direction only when showNav is true
      if (showNav && event.deltaY !== 0) {
        event.preventDefault();
      }
    };

    if (showNav) {
      // Add event listener to intercept scroll events
      window.addEventListener("wheel", handleScroll, { passive: false });
    } else {
      // Clean up the event listener when the nav is not shown
      window.removeEventListener("wheel", handleScroll);
    }

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [showNav]);
  return (
    <header>
      <nav
        className={`flex justify-between items-center rounded-full p-3 lg:fixed absolute w-[80%] left-[50%] top-[20px] translate-x-[-50%]  z-50 py-4 px-2 ${
          showNav || show || showAnother === true ? "dark" : "glass"
        }`}
      >
        <div className="logo">
          <svg
            viewBox="0 0 993 311"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              width: "80px",
              color: showNav || show || showAnother ? "white" : "black",
            }}
          >
            <path
              d="M63.443 27.388H190.38V0H63.443zM643.464 174.105H554.68V83.082h88.783c31.634 0 52.89 18.292 52.89 45.513 0 27.221-21.256 45.51-52.89 45.51m29.409 21.29c30.456-8.686 50.136-34.907 50.136-66.8 0-41.397-31.967-69.212-79.547-69.212H528.035v244.66h26.646V198.174h90.3l57.501 105.867h28.83l-59.946-108.218zM389.668 308.653c65.348 0 110.987-45.903 110.987-111.63V59.384h-27.387v135.793c0 50.688-34.377 86.09-83.6 86.09-40.798 0-84.709-26.94-84.709-86.09V59.384h-27.382v137.64c0 65.726 46.093 111.628 112.093 111.628m478.192-217.35 57.757 126.333H809.735zm-12.848-31.916L743.16 304.044h28.606l27.662-62.713h136.493l27.67 62.713h28.603L880.342 59.383zm-728.077-4.611C56.944 54.775 0 111.719 0 181.712c0 69.996 56.944 126.94 126.937 126.94 69.996 0 126.94-56.944 126.94-126.94 0-69.993-56.944-126.937-126.94-126.937m0 226.49c-54.893 0-99.553-44.66-99.553-99.553 0-54.892 44.661-99.55 99.554-99.55 54.894 0 99.556 44.658 99.556 99.55 0 54.893-44.662 99.553-99.556 99.553"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div
          className={`xl:flex justify-center items-center  gap-x-7 text-[1.25rem] hidden ${
            show || showAnother ? "text-white" : "text-black"
          }`}
        >
          <h3 className="cursor-pointer">Experience</h3>
          <h3 className="cursor-pointer">Membership</h3>
          <h3 className="cursor-pointer">Community</h3>
          <h3 className="cursor-pointer">Oura for Bussiness</h3>
        </div>
        <div className=" hidden xl:block">
          <button className=" bg-[#CFECF7] px-4 py-2 rounded-full hover:bg-black hover:text-white text-black text-md">
            Choose your Oura Ring
          </button>
        </div>

        <div
          className=" block xl:hidden cursor-pointer z-50"
          onClick={() => setShowNav(!showNav)}
        >
          {showNav ? (
            <div className="w-[22px] z-50 ">
              <div className="border-[1.6px] border-white mt-2 transform rotate-45 delay-75"></div>
              <div className="border-[1.6px] border-white mt-1 transform -rotate-45 delay-75"></div>
            </div>
          ) : (
            <div>
              <div className="w-[22px] border-[1.6px] z-50 mt-2 border-black"></div>
              <div className="w-[22px] border-2 z-50 mt-2 border-black"></div>
            </div>
          )}
        </div>
      </nav>

      {showNav && (
        <div className="w-full h-full bg-[#0A1018] block xl:hidden absolute top-0 left-0 z-40 pt-[100px]">
          <ul className="text-white text-3xl flex flex-col gap-y-5 w-[80%] mx-auto">
            <li>Experience</li>
            <li>Membership</li>
            <li>Community</li>
            <li>Oura for Business</li>
          </ul>

          <div className="mt-72 w-full">
            <ul className="text-white text-xl flex flex-col gap-y-5 w-[80%] mx-auto">
              <li>My Account</li>
              <li>Help</li>
            </ul>

            <div className="w-[80%] mx-auto mt-5">
              <button className=" bg-[#CFECF7] w-full m-auto py-3 rounded-full hover:bg-black hover:text-white text-black text-md">
                Buy now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
