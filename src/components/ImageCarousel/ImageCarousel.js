import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./ImageCarousel.data";

const ImageCarousel = ({ autoplay, autoplaySpeed }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay,
    autoplaySpeed,
  };

  return (
    <Slider {...settings}>
      {Images.map((image) => (
        <div key={image.id}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </Slider>
  );
};

ImageCarousel.propTypes = {
  autoplay: PropTypes.bool,
  autoplaySpeed: PropTypes.number,
};

ImageCarousel.defaultProps = {
  autoplay: false,
  autoplaySpeed: 3000,
};

export default ImageCarousel;
