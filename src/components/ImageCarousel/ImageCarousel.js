import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Images from "./ImageCarousel.data";
import ArrowLeft from "../CarouselArrows/ArrowLeft";
import ArrowRight from "../CarouselArrows/ArrowRight";

const StyledDiv = styled.div`
  padding: 0 1rem;
`;

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
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
  };

  return (
    <Slider {...settings}>
      {Images.map((image) => (
        <StyledDiv key={image.id}>
          <img src={image.src} alt={image.alt} />
        </StyledDiv>
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
