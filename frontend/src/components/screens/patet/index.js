import React, { Component } from 'react';
import { PatetContainer } from './styles'
import { Header } from '../../views/header';
import { PatetContent } from '../../views/content';

class PatetScreen extends Component{
    render() {
        return (
            <PatetContainer>
                <Header/>
                <PatetContent/>
            </PatetContainer>
        )
    }
}

export default PatetScreen;