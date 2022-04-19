import React from "react";
import LandingPage from "../../components/LandingPage/LandingPage";
import PriceCard from "../../components/PriceCard/PriceCard";
import TemplatesDescription from "../../components/TemplatesDescription/TemplatesDescription";
import Usage from "../../components/Usage/Usage";

const Homepage = () => {
  const message = "Homepage";
  return (
    <>
      <LandingPage />
      <Usage />
      <TemplatesDescription />
      <PriceCard />
    </>
  );
};

export default Homepage;
