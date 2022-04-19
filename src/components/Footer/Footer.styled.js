import styled from "styled-components";
import Divider from "@mui/material/Divider";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LazyLoadImage } from "react-lazy-load-image-component";

const StyledDivider = styled(Divider)``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const Description = styled.div`
  align-items: center;
`;

const Text = styled.p`
color: ${(props) => props.theme.light.color.third};}`;

const Hearth = styled.span`
  color: red;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  column-gap: 3rem;
  margin-top: 1rem;
`;

const Link = styled.a``;

const Twitter = styled(TwitterIcon)`
  color: ${(props) => props.theme.light.color.primary} !important;
  height: 48px !important;
  width: 48px !important;
`;

const Github = styled(GitHubIcon)`
  color: ${(props) => props.theme.light.color.primary} !important;
  height: 48px !important;
  width: 48px !important;
`;

const LinkedIn = styled(LinkedInIcon)`
  color: ${(props) => props.theme.light.color.primary} !important;
  height: 48px !important;
  width: 48px !important;
`;

export {
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
};
