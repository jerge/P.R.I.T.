import React, { Component } from 'react';
import { HubbenContainer } from './styles'
import { Header } from '../../views/header';
import { HubbenContent } from '../../views/content';

class HubbenScreen extends Component{
    render() {
        return (
            <HubbenContainer>
                <Header/>
                <HubbenContent/>
            </HubbenContainer>
        )
    }
}

export default HubbenScreen;