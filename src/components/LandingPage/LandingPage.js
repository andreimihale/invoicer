import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Description,
  Header,
  StyledButton,
  Image,
  Wave,
} from "./LandingPage.styled";
import Invoice from "../../static/Invoice.jpg";
import WaveImage from "../../static/Wave.svg";

const LandingPage = () => {
  const navigate = useNavigate();

  const submitGenerate = (event) => {
    event.preventDefault();
    navigate("/invoice");
  };
  return (
    <>
      <Container>
        <Description>
          <Header>
            An easy to use and free invoice generator for your business.
          </Header>
          <StyledButton
            variant="outlined"
            type="submit"
            onClick={submitGenerate}
          >
            Generate
          </StyledButton>
        </Description>
        <Image src={Invoice} alt="Invoice Presentation" effect="blur" />
      </Container>
      <Wave src={WaveImage} alt="Wave" />
    </>
  );
};

export default LandingPage;
