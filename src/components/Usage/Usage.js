import React from "react";
import {
  Container,
  Description,
  Text,
  ImageContainer,
  Image,
} from "./Usage.styled";
import Invoice from "../../static/Invoice.jpg";

const Usage = () => (
  <Container>
    <Description>
      <Text>Fast to use since you can save data for reusing</Text>
    </Description>
    <ImageContainer>
      <Image src={Invoice} alt="Fast Usage Description" effect="blur" />
    </ImageContainer>
  </Container>
);

export default Usage;
