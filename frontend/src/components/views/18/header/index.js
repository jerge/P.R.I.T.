import React from "react";

import {
  HeaderContainer,
  Link,
  HeaderText,
  LogoImg,
  HeaderLinkList,
  HeaderLinkListItem,
  ImageLink,
  Avancez,
  IT
} from "./styles";

export const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <LogoImg />
      <HeaderText>P.R.I.T.</HeaderText>
    </Link>
    <ImageLink href="https://chs.chalmers.se">
      <Avancez />
    </ImageLink>
    <ImageLink href="https://chalmers.it">
      <IT />
    </ImageLink>
    <HeaderLinkList>
      <Link to="/18/hubben-2-1">
        <HeaderLinkListItem>Hubben 2.1</HeaderLinkListItem>
      </Link>
      <Link to="/18/omprit">
        <HeaderLinkListItem>Om P.R.I.T.</HeaderLinkListItem>
      </Link>
      <Link to="/18/pateter">
        <HeaderLinkListItem>Pateter</HeaderLinkListItem>
      </Link>
    </HeaderLinkList>
  </HeaderContainer>
);
