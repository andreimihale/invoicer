/* eslint-disable no-console */
import React from "react";
import { useLocation } from "react-router-dom";
import { StyledNav, StyledNavLink, StyledImg } from "./Navbar.styled";
import Logo from "../../static/Logo.png";

const Navbar = () => {
  const location = useLocation();
  let white = false;

  if (location.pathname === "/") {
    white = false;
  }
  if (location.pathname === "/invoice") {
    white = true;
  }
  return (
    <StyledNav white={white}>
      <StyledNavLink to="/">
        <StyledImg src={Logo} alt="Logo" />
      </StyledNavLink>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/invoice">Invoice</StyledNavLink>
    </StyledNav>
  );
};
export default Navbar;
