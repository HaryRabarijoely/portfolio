import React from 'react'
import styled from 'styled-components'


const MyLogo = styled.h1`
    display: inline-block;
    color: ${props => props.theme.text};
    font-family: 'Pacifico',cursive;

    position: fixed;
    left: 2rem;
    top: 2rem;
    z-index:3;
`

const Logo = () => {
  return (
    <MyLogo>
        HA
    </MyLogo>
  )
}

export default Logo;