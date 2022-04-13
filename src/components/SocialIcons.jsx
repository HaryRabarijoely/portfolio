import React from 'react'
import styled from 'styled-components'
import { Facebook, Github, Twitter } from './AllSvgs'
import { DarkTheme } from './Themes'



const Icons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index:3;

    &>*:not(:last-child){
        margin: 0.5rem 0;
    }
`

const Line = styled.span`
    width: 3px;
    height: 8rem;
    background-color: ${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`

const SocialIcons = (props) => {
  return (
    <Icons>
        <div>
            <a style={{color:'inherit'}} target="_blank" href="https://github.com/HaryRabarijoely" rel="noreferrer">
                <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div>
        <div>
            <a style={{color:'inherit'}} target="_blank" href="https://github.com/HaryRabarijoely" rel="noreferrer">
                <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div>
        <div>
            <a style={{color:'inherit'}} target="_blank" href="https://github.com/HaryRabarijoely" rel="noreferrer">
                <Facebook width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
            </a>
        </div>
        <Line color={props.theme} />
    </Icons>
  )
}

export default SocialIcons