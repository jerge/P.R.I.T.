import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Emphasis = styled.text`
    font-size:32px;
`
export const Turquoise = styled(NavLink)`
    text-decoration: none;
    color:#00997a;
`

export const ContentContainer = styled.div`
    background-color:rgba(255,255,255,0.8);
    height:auto;
    min-height:450px;
    box-shadow: 0 -5px 5px #00826a;
    margin-top: 550px;
`

export const LargeText = styled.h3`
    padding-left:20%;
    padding-right:20%;
    text-align:left;
    font-size: 30px;
    line-height: 50px;
    font-weight: 100;
    margin-bottom: 0;
`

export const LargeSerifText = styled.p`
    font-family:'Georgia';
    padding-left:20%;
    padding-right:20%;
    text-align:left;
    font-size: 26px;
    line-height: 50px;
    font-weight: 100;
    margin-bottom: 0;
`

export const RegularSerifText = styled.p`
    font-family: 'Georgia';
    padding-left:20%;
    padding-right:20%;
    text-align:left;
    font-size: 16px;
    line-height: 30px;
    font-weight: 100;
    margin-top:0;
    margin-bottom:0;
`

export const MailLink = styled.a`
    text-decoration: none;
    color: #009e81; 
`

export const NameList = styled.ul`
    list-style-type:none;
    overflow:hidden;
    text-align:left;
    padding-left:20%;
    padding-right:20%;
    margin:0;
`

export const LineBreak = styled.br`
    margin:0 0 5px 5px;
`