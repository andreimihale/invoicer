import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const StyledArrowLeftIosIcon = styled(ArrowBackIosIcon)`
  color: ${(props) => props.theme.light.color.third};
  &:hover {
    color: ${(props) => props.theme.light.color.third} !important;
  }
`;

const ArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <StyledArrowLeftIosIcon {...props} />
);

ArrowLeft.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

ArrowLeft.defaultProps = {
  currentSlide: 0,
  slideCount: 0,
};
export default ArrowLeft;
