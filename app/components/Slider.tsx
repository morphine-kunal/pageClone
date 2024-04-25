/* eslint-disable @next/next/no-img-element */
import React from "react";
import Carousel from "./Carousel";

const App = () => {
  const slides = [
    <div className="slide-content" key="slide-1">
      <img
        alt="Brushed Titanium Smart Oura Ring"
        draggable="false"
        src="https://ourahealth.imgix.net/product/pop-hero-horizon-titanium.jpg?ixlib=js-2.3.2&amp;fm=webp&amp;w=3840&amp;q=75&amp;s=c257823023e2331b8b3e269ae21afa42"
        className="w-full h-full"
      />
    </div>,

    <div className="slide-content" key="slide-1">
      <img
        alt="Silver Smart Oura Ring"
        draggable="false"
        src="https://ourahealth.imgix.net/product/pop-hero-horizon-silver-desktop.jpg?ixlib=js-2.3.2&amp;fm=webp&amp;w=3840&amp;q=75&amp;s=2cfa7e91f39527c158e52233cd0797bc"
        className="w-full h-full"
      />
    </div>,
    <div className="slide-content" key="slide-1">
      <img
        alt="Black Smart Oura Ring"
        draggable="false"
        src="https://ourahealth.imgix.net/product/pop-hero-horizon-black-desktop.jpg?ixlib=js-2.3.2&amp;fm=webp&amp;w=3840&amp;q=75&amp;s=d7e92b3dc7861054024a418da4f1fd2a"
        className="w-full h-full"
      />
    </div>,
    <div className="slide-content" key="slide-1">
      <img
        alt="Stealth Smart Oura Ring"
        draggable="false"
        src="https://ourahealth.imgix.net/product/pop-hero-horizon-stealth-desktop.jpg?ixlib=js-2.3.2&amp;fm=webp&amp;w=3840&amp;q=75&amp;s=0d560035627c4d59bc39cd0cb39b86ee"
        className="w-full h-full"
      />
    </div>,
  ];

  return (
    <div className="h-full w-full">
      <Carousel slides={slides} />
    </div>
  );
};

export default App;
