import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Art1 from "@/assets/imgs/Art/art1.jpg";
import Art2 from "@/assets/imgs/Art/art2.jpg";
import Art3 from "@/assets/imgs/Art/art3.jpg";
import Art4 from "@/assets/imgs/Art/art4.jpg";
import { CustomSlider } from "@/components";

export const Art = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = [
    {
      image: Art1, // Replace with your image URL
      text: "In a sky of golden stars, where sunflowers shine in blue",
    },
    {
      image: Art2, // Replace with your image URL
      text: "Crypto dances in golden waves, painting the future in a subtle hue",
    },
    {
      image: Art3, // Replace with your image URL
      text: "Like Van Gogh on his timeless canvas, dreams are drawn in each transaction",
    },
    {
      image: Art4, // Replace with your image URL
      text: "In the blockchain field, a path of art and crypto, in vibrant connection",
    },
  ];

  return (
    <>
      <section id="art" className="max-w-4xl mx-auto py-20 flex flex-col gap-8">
        <h2 className="text-4xl text-black text-center">WE HAVE ARRIVED</h2>
        <CustomSlider settings={settings} slides={slides} />
      </section>
      <section id="art" className="bg-blue-400">
        <div className="max-w-4xl mx-auto py-20 flex flex-col gap-8">
          <h2 className="text-4xl text-white text-center">
            IMAGINE SOMETHING LIKE THIS...
          </h2>
          <CustomSlider settings={settings} slides={slides} />
        </div>
      </section>
    </>
  );
};
