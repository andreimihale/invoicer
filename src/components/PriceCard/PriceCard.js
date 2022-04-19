import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
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
} from "./PriceCard.styled";

const PriceCard = () => {
  const navigate = useNavigate();

  const SubmitStart = (event) => {
    event.preventDefault();
    navigate("/invoice");
  };

  return (
    <Container>
      <Description>
        <Text>And it’s always FREE!</Text>
      </Description>
      <Card elevation={4}>
        <CardHeader>
          <CardInfo>
            <CardPrice>$0</CardPrice>
            <CardSeparator>-</CardSeparator>
            <CardDescription>Free Forever</CardDescription>
          </CardInfo>
          <CardButton
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            onClick={SubmitStart}
          >
            Get Started
          </CardButton>
        </CardHeader>
        <CardContent>
          <CardList>
            <CardListElement>Full Access</CardListElement>
            <CardListElement>No Costs</CardListElement>
            <CardListElement>No Cookie Monitorization</CardListElement>
            <CardListElement>No Data Stored</CardListElement>
          </CardList>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PriceCard;
