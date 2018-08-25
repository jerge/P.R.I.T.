import styled from 'styled-components'

import pritgroup from '../../../omslagsbild4.jpg'  

export const MemberContainer = styled.li`
    box-shadow: 0 -4px 4px #00826a;
    width: 100%;
    height: 400px;
    float: left;
`

export const MemberTempContainer = styled.li`
    box-shadow: 0 -4px 4px #00826a;
    width: 80%;
    height: 550px;
`

export const Name = styled.p`
    display: inline-block;
    margin:0;
    width:50%;
    font-weight: 200;
    font-size: 20px;
`

export const Text = styled.p`
    display: inline-block;
    margin:0;
    width:50%;
    font-size: 14px;
`

export const ChefChefImage = styled.div`
    display: inline-block;
    background-image: url(${pritgroup});
    background-size: cover;
    width:40%;
    height:400px;
`

export const TempMemberImage = styled.div`
    display: inline-block;
    background-image: url(${pritgroup});
    background-size: cover;
    width:100%;
    height:400px;
`