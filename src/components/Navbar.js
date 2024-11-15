import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: #333; /* Fundo do Navbar */
  padding: 16px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 24px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 16px;
  &:hover {
    color: #ddd;
  }
`;

const Navbar = ()=> {
  return (
    <NavbarContainer>
      <Logo>MeuLogo</Logo>
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre</NavLink>
        <NavLink href="#services">Serviços</NavLink>
        <NavLink href="#contact">Contato</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;