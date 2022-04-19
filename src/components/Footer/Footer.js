import React from "react";

import {
  StyledDivider,
  Container,
  Description,
  Text,
  Hearth,
  ImageContainer,
  Link,
  Twitter,
  Github,
  LinkedIn,
} from "./Footer.styled";

const Footer = () => (
  <>
    <StyledDivider />
    <Container>
      <Description>
        <Text>
          Connect with Me <Hearth>♥</Hearth>
        </Text>
      </Description>
      <ImageContainer>
        <Link href="https://twitter.com/mihale_andrei" target="_blank">
          <Twitter />
        </Link>
        <Link href="https://github.com/andreimihale" target="_blank">
          <Github />
        </Link>
        <Link href="https://www.linkedin.com/in/andrei-mihale/" target="_blank">
          <LinkedIn />
        </Link>
      </ImageContainer>
    </Container>
  </>
);

export default Footer;
