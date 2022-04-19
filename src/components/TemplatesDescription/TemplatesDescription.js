import React from "react";
import {
  Wave,
  Container,
  Description,
  Header,
  Carousel,
} from "./TemplatesDescription.styled";
import Wave2 from "../../static/Wave2.svg";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

const TemplatesDescription = () => (
  <>
    <Wave src={Wave2} alt="Wave image for separation" />
    <Container>
      <Description>
        <Header>Choose from a variety of templates</Header>
      </Description>
      <Carousel>
        <ImageCarousel autoplay autoplaySpeed={4000} />
      </Carousel>
    </Container>
  </>
);

export default TemplatesDescription;
