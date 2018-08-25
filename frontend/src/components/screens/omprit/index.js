import React, { Component } from 'react';
import { AboutContainer } from './styles'
import { Header } from '../../views/header';
import { AboutContent } from '../../views/content';

class AboutScreen extends Component{
    render() {
        return (
            <AboutContainer>
                <Header/>
                <AboutContent/>
            </AboutContainer>
        )
    }
}

export default AboutScreen;