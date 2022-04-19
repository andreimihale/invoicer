import styled from "styled-components";
import Button from "@mui/material/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${(props) => props.theme.light.padding};
  background-color: ${(props) => props.theme.light.color.primary};
  margin-top: -1px;
  padding-top: 5.5rem;
  padding-bottom: 0;
  height: calc(100vh - 100px);
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 1rem;
    column-gap: 40px;
  }
`;

const Description = styled.div`
  max-height: 200px;
  max-width: 400px;
`;
const Header = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.light.color.third};
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.light.color.secondary} !important;
  box-shadow: ${(props) => props.theme.light.elevation2};
  color: ${(props) => props.theme.light.color.third} !important;
  max-width: 7.5rem;
  margin-top: 0.75rem !important;
`;

const Image = styled(LazyLoadImage)`
  width: 100%;
  height: auto;
  /* max-width: 700px;
  max-height: 700px; */
  margin-top: 2.875rem;
  @media screen and (min-width: 1200px) {
    max-width: calc(100vw - 800px);
  }

  @media screen and (min-width: 1600px) {
    max-width: calc(100vw - 1000px);
  }
`;

const Wave = styled.img`
  left: 0;
  margin-top: -1px;
  width: 100%;
`;
export { Container, Description, Header, StyledButton, Image, Wave };
