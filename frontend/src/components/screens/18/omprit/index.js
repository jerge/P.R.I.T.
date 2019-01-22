import React, { Component } from "react";
import { AboutContainer } from "./styles";
import { Header } from "../../../views/18/header";
import { AboutContent } from "../../../views/18/content";

class AboutScreen extends Component {
  render() {
    return (
      <AboutContainer>
        <Header />
        <AboutContent />
      </AboutContainer>
    );
  }
}

export default AboutScreen;
