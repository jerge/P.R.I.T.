import React, { Component } from 'react';
import { HomeContainer } from './styles'
import { Header } from '../../views/header';
import { HomeContent } from '../../views/content';

class HomeScreen extends Component{
    render() {
        return (
            <HomeContainer>
                <Header/>
                <HomeContent/>
            </HomeContainer>
        )
    }
}

export default HomeScreen;