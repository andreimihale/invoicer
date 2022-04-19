import styled from "styled-components";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.theme.light.padding};
  padding-top: 0;
  padding-bottom: 0;
  height: 100vh;
  row-gap: 5rem;
  color: ${(props) => props.theme.light.color.third};
`;

const Description = styled.div`
  max-width: 15.6rem;
`;

const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 15.6rem;
  @media screen and (min-width: 1200px) {
    min-width: 25rem;
    min-height: 25rem;
    justify-content: flex-start;
  }
`;

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 25px 16px 25px 16px;
  background-color: ${(props) => props.theme.light.color.primary};
  color: ${(props) => props.theme.light.color.third};
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  column-gap: 0.5rem;
`;

const CardPrice = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

const CardSeparator = styled.p`
  align-self: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const CardDescription = styled.p`
  align-self: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;

const CardButton = styled(Button)`
  margin-top: 1rem !important;
  color: ${(props) => props.theme.light.color.secondary} !important;
  border: 1px solid rgba(255, 255, 255, 0.5) !important;
`;

const CardContent = styled.div`
  margin: 1.56rem 1rem;
`;

const CardList = styled.ul`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 26px;
  letter-spacing: 0.46px;
  color: ${(props) => props.theme.light.color.third};
  padding-left: 20px;
`;

const CardListElement = styled.li``;

export {
  Container,
  Description,
  Text,
  Card,
  CardHeader,
  CardInfo,
  CardPrice,
  CardSeparator,
  CardDescription,
  CardButton,
  CardContent,
  CardList,
  CardListElement,
};
