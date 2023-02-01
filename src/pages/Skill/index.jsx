import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import {LightTheme} from '../../components/Themes';
import { Develope, ReactIcon } from '../../components/AllSvgs';
import PowerButton from '../../components/PowerButton';
import Logo from '../../components/Logo';
import SocialIcons from '../../components/SocialIcons'
import Particle from '../../components/Particle';


const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 2rem;
    width: 30vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;
    cursor: pointer;

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: baseline;

    &:hover{
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);

    ${Main}:hover &{
        &>*{
            fill:${props => props.theme.body};
        }
    }

    &>*:first-child{
        margin-right: 1rem;
    }
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.6em + 1vw); 
    padding: 0.5rem 0;
    
    ${Main}:hover &{        
        color:${props => props.theme.body};        
    }
            
    ul{
        margin-left: 2rem;
    }
`

const Skill= () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>
                <Logo theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <Particle theme='light'/>
                <Main>
                    <Title>
                        <ReactIcon width={30} height={30} /> SOFT SKILLS
                    </Title>
                    <Description>
                        <ul>
                            <li>Autonomie</li>
                            <li>Ponctualité</li>
                            <li>Esprit d'équipe</li>
                            <li>Curiosité</li>
                            <li>Force de proposition</li>
                            <li>Sociale</li>
                            <li>Créativité</li>
                            <li>Pensée critique</li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={30} height={30} /> HARD SKILLS
                    </Title>
                    <Description>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>                        
                            <li>RUBY-ON-RAILS</li>
                            <li>REACTJS</li>
                            <li>NEXTJS</li>                            
                            <li>NODEJS</li>
                            <li>POSTGRESQL</li>
                            <li>MONGODB</li>
                            <li>GIT</li>
                            <li>LINUX</li>
                        </ul>
                    </Description>
                </Main>
            </Box>
        </ThemeProvider>
        
    );
};

export default Skill;