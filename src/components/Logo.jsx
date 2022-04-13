import React from 'react'
import styled from 'styled-components'
import { DarkTheme } from './Themes'


const MyLogo = styled.h1`
    display: inline-block;
    color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
    font-family: 'Pacifico',cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index:3;
`

const Logo = (props) => {
  return (
    <MyLogo color={props.theme}>
        HA
    </MyLogo>
  )
}

export default Logo;