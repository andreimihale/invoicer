import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-height: 100px;
  background-color: ${(props) => props.theme.light.color.primary};
  padding: ${(props) => props.theme.light.padding};
  @media screen and (min-width: 900px) {
    justify-content: flex-start;
    column-gap: 5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.light.color.third};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &[class*="active"]:not(:first-child) {
    text-decoration: underline;
    text-decoration-color: #1f7397;
  }
`;

const StyledImg = styled.img`
  height: 48px;
  width: 48px;
`;
export { StyledNav, StyledNavLink, StyledImg };
