import React from "react";
import { StyledNav, StyledNavLink, StyledImg } from "./Navbar.styled";
import Logo from "../../static/Logo.png";
import Wave from "../../static/Wave.svg";

const Navbar = () => (
  <StyledNav>
    <StyledNavLink to="/">
      <StyledImg src={Logo} alt="Logo" />
    </StyledNavLink>
    <StyledNavLink to="/">Home</StyledNavLink>
    <StyledNavLink to="/invoice">Invoice</StyledNavLink>
  </StyledNav>
);

export default Navbar;
