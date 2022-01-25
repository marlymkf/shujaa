import React, { useState } from "react";
import Button from "../Button/Button";
import {
  Cabecalho,
  Left,
  Lista,
  ListaLink,
  Hamburger,
  BtnMobile,
} from "./styles";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenu = (e) => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Cabecalho className={isMenuOpen ? "active" : ""}>
      <Left>
        <img src="img/logo.png" alt="shujaa" width="92" height="37" />
        <Lista className="nav">
          <li>
            <ListaLink href="Features">Features</ListaLink>
          </li>
          <li>
            <ListaLink href="Pricing">Pricing</ListaLink>
          </li>
          <li>
            <ListaLink href="Contact us">Contact us</ListaLink>
          </li>
        </Lista>
      </Left>
      <Left>
        <Button className="botao">Get Started</Button>
        <BtnMobile id="btn-mobile" onClick={handleMenu}>
          Menu
          <Hamburger id="hamburger" />
        </BtnMobile>
      </Left>
    </Cabecalho>
  );
};

export default Header;
