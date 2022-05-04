import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5rem 1rem 0 1rem;
  background-color: ${(props) => props.theme.light.color.primary};
  padding: 1rem;
`;

export const StyledHeader = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
  letter-spacing: 0.46px;
  color: ${(props) => props.theme.light.color.third};
`;

export const StyledArrowBackIosIcon = styled(ArrowBackIosIcon)`
  color: ${(props) => props.theme.light.color.third};
`;
export const StyledArrowForwardIosIcon = styled(ArrowForwardIosIcon)`
  color: ${(props) => props.theme.light.color.third};
`;

export const StyledCarousel = styled.div`
  margin: 1rem 1.6rem 1.5rem 1.6rem;
`;

export const StyledDiv = styled.div`
  padding: 0 1rem;
`;

export const StyledButton = styled.button`
  padding: 0;
  margin: 0;
  border-width: 0px;
  border: ${(props) =>
    props.isSelected
      ? `4px solid ${props.theme.light.color.secondary} !important`
      : undefined};
`;
