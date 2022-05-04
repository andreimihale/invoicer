import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GetWidth from "../../utils/GetWidth";
import { selectTemplate, resetTemplate } from "../../redux/templateSelector";
import Images from "../ImageCarousel/ImageCarousel.data";
import {
  StyledContainer,
  StyledHeader,
  StyledArrowBackIosIcon,
  StyledArrowForwardIosIcon,
  StyledCarousel,
  StyledDiv,
  StyledButton,
} from "./TemplateSelector.styled";

const TemplateSelector = () => {
  const { templateId } = useSelector((state) => state.template);
  const dispatch = useDispatch();

  const wide = GetWidth(1200);

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: wide ? 3 : 1,
    arrows: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    prevArrow: <StyledArrowBackIosIcon />,
    nextArrow: <StyledArrowForwardIosIcon />,
  };

  return (
    <StyledContainer>
      <StyledHeader>Select Template</StyledHeader>
      <StyledCarousel>
        <Slider {...settings}>
          {Images.map((image) => (
            <StyledDiv key={image.id}>
              <StyledButton
                type="button"
                onClick={() => dispatch(selectTemplate(image.id))}
                isSelected={templateId === image.id}
              >
                <img src={image.src} alt={image.alt} />
              </StyledButton>
            </StyledDiv>
          ))}
        </Slider>
      </StyledCarousel>
    </StyledContainer>
  );
};

export default TemplateSelector;
