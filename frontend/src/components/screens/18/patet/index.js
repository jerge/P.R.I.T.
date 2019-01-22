import React, { Component } from "react";
import { PatetContainer } from "./styles";
import { Header } from "../../../views/18/header";
import { PatetContent } from "../../../views/18/content";

class PatetScreen extends Component {
  render() {
    return (
      <PatetContainer>
        <Header />
        <PatetContent />
      </PatetContainer>
    );
  }
}

export default PatetScreen;
