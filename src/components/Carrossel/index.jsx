import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const Carrossel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
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
    ],
  };

  return (
    <Slider {...settings}>
      <div data-aos="fade-down">
        <img src="http://placekitten.com/300/200" alt="Imagem de gato" />
      </div>
      <div data-aos="fade-down">
        <img src="http://placekitten.com/300/200" alt="Imagem de gato" />
      </div>
      <div data-aos="fade-down">
        <img src="http://placekitten.com/300/200" alt="Imagem de gato" />
      </div>
      <div data-aos="fade-down">
        <img src="http://placekitten.com/300/200" alt="Imagem de gato" />
      </div>
      <div data-aos="fade-down">
        <img src="http://placekitten.com/300/200" alt="Imagem de gato" />
      </div>
    </Slider>
  );
};

export default Carrossel;
