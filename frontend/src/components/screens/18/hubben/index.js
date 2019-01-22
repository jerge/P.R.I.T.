import React, { Component } from "react";
import { HubbenContainer } from "./styles";
import { Header } from "../../../views/18/header";
import { HubbenContent } from "../../../views/18/content";

class HubbenScreen extends Component {
  render() {
    return (
      <HubbenContainer>
        <Header />
        <HubbenContent />
      </HubbenContainer>
    );
  }
}

export default HubbenScreen;
