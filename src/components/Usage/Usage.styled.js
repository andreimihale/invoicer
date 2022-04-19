import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Container = styled.div`
  background-color: ${(props) => props.theme.light.color.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5rem;
  padding: ${(props) => props.theme.light.padding};
  height: 100vh;
  padding-top: 0;
  padding-bottom: 0;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 1rem;
    column-gap: 40px;
    align-items: center;
  }
`;

const Description = styled.div`
  max-height: 200px;
  max-width: 400px;
`;

const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.light.color.third};
`;

const ImageContainer = styled.div`
  width: 100%;
  height: auto;
  @media screen and (min-width: 1200px) {
    max-width: calc(100vw - 800px);
  }

  @media screen and (min-width: 1600px) {
    max-width: calc(100vw - 1000px);
  }
`;

const Image = styled(LazyLoadImage)``;

export { Container, Description, Text, ImageContainer, Image };
