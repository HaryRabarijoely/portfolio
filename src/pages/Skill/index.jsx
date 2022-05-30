import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import {LightTheme} from '../../components/Themes';
import { Develope, ReactIcon } from '../../components/AllSvgs';


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

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(1em + 1vw);
`

const Skill= () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <Box>
                <Main>
                    <Title>
                        <ReactIcon width={30} height={30} /> Frontend ReactJS
                    </Title>
                </Main>
                <Main>
                    <Title>
                        <Develope width={30} height={30} /> Fullstack Ruby
                    </Title>
                </Main>
            </Box>
        </ThemeProvider>
        
    );
};

export default Skill;