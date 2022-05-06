import styled from "styled-components";

const Wave = styled.img`
  width: 100%;
  margin-bottom: -1px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 5rem;
  padding: ${(props) => props.theme.light.padding};
  padding-top: 0;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.light.color.primary};
  height: 100vh;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-top: 1rem;
    column-gap: 40px;
    align-items: center;
    flex-direction: row-reverse;
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

const Carousel = styled.div`
  padding: 0 2rem;
  width: 100%;
  height: auto;
  @media screen and (min-width: 1200px) {
    max-width: calc(100vw - 800px);
  }

  @media screen and (min-width: 1600px) {
    max-width: calc(100vw - 1000px);
  }
`;

export { Wave, Container, Description, Header, Carousel };
