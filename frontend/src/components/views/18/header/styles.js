import styled from "styled-components";

import { NavLink } from "react-router-dom";
import pritlogo from "../../../../images/18/smurf.png";
import itlogo from "../../../../images/18/IT.png";
import avancezlogo from "../../../../images/18/avancez.png";

export const HeaderContainer = styled.div`
  height: 100px;
  text-align: center;
  background-color: rgba(0, 186, 190, 0.8);
  box-shadow: 0 0 10px #00826a;
`;

export const HeaderText = styled.h1`
  font-family: "Georgia";
  font-size: 38px;
  font-weight: 300;
  display: inline;
  height: 100px;
  float: left;
  margin-left: 10px;
  color: rgba(255, 255, 255, 0.8);
`;

export const HeaderLinkList = styled.ul`
  float: right;
  list-style: none;
  margin-top: 10px;
  margin-right: 10%;
  height: 100px;
  line-height: 80px;
  vertical-align: middle;
`;
export const HeaderLinkListItem = styled.li`
  font-family: "Georgia";
  font-size: 24px;
  font-weight: 300;
  float: left;
  margin-left: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  height: 100px;
`;

export const LogoImg = styled.div`
  background-image: url(${pritlogo});
  background-size: cover;
  width: 77px;
  height: 100px;
  margin-left: 20%;
  float: left;
`;
export const IT = styled.div`
  background-image: url(${itlogo});
  background-size: cover;
  width: 80px;
  height: 80px;
  margin: 10px 10px 10px 10px;
  float: right;
`;

export const Avancez = styled.div`
  background-image: url(${avancezlogo});
  background-size: cover;
  width: 80px;
  height: 80px;
  margin: 10px 10px 10px 10px;
  float: right;
`;

export const ImageLink = styled.a``;
