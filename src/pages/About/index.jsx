import React from 'react';
import { ThemeProvider, keyframes } from 'styled-components';
import styled from 'styled-components';
import {DarkTheme} from '../../components/Themes';
import PowerButton from '../../components/PowerButton';
import Logo from '../../components/Logo';
import SocialIcons from '../../components/SocialIcons'
import Particle from '../../components/Particle';
import hary from '../../assets/Images/profilimg.png';

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
`

const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }
`

const Picture = styled.div`
    position: absolute;
    top: -10%;
    right: 10%;
    width: 25vw;
    animation: ${float} 4s ease infinite;

    img{
        width: 150%;
        height: auto;
        transform: scaleX(-100%);
    }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
    font-style: italic;
`

const About = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <Logo theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <Particle theme='dark'/>
                <Picture>
                    <img src={hary} alt='moi' />
                </Picture>
                <Main>
                Développeur full-stack mordu d’informatique depuis toujours, j’ai appris à manipuler des ordinateurs dès mon plus jeune âge. Originaire de Madagascar j'ai décidé de poser mes valises à Marseille il y a plus d'une dixaine d'année et profite depuis du climat et de la bonne ambiance de la méditerranée.
                <br/><br/>
                Depuis 2021 je me suis lançé dans l'apprentissage des  frameworks Ruby-on-rails et reactjs pour perfectionner mes compétences.
                <br/><br/>
                Polyvalent, je maîtrise les différentes étapes techniques de la création d’un site ou d’une application web , de la compréhension des besoins utilisateurs, au développement frontend et backend ainsi que la maintenance.
                </Main>
            </Box>
        </ThemeProvider>
        
    );
};

export default About;