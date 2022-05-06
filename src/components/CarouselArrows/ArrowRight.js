import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const StyledArrowLeftIosIcon = styled(ArrowForwardIosIcon)`
  color: ${(props) => props.theme.light.color.third};
  &:hover {
    color: ${(props) => props.theme.light.color.third} !important;
  }
`;

const ArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <StyledArrowLeftIosIcon {...props} />
);

ArrowRight.propTypes = {
  currentSlide: PropTypes.number,
  slideCount: PropTypes.number,
};

ArrowRight.defaultProps = {
  currentSlide: 0,
  slideCount: 0,
};
export default ArrowRight;
