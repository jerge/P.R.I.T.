import React, { Component } from "react";
import { HomeContainer } from "./styles";
import { Header } from "../../../views/18/header";
import { HomeContent } from "../../../views/18/content";

class HomeScreen extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <HomeContent />
      </HomeContainer>
    );
  }
}

export default HomeScreen;
