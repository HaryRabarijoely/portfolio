import React from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import {DarkTheme} from '../../components/Themes';
import PowerButton from '../../components/PowerButton';
import Logo from '../../components/Logo';
import SocialIcons from '../../components/SocialIcons';
import {WorkData} from '../../datas/WorkDatas';
import Card from '../../components/Card';
import { useRef } from 'react';


const Box = styled.div`
    background-color: ${props => props.theme.body};    
    height: 400vh;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
`

const Main = styled.ul`
    position: fixed;
    top: 12rem;
    left: calc(10rem + 15vw);
    height: 40vh;
    display: flex;
    color: white;
`


const Work = () => {

    const ref = useRef(null);

    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <Logo theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton /> 
                <Main ref={ref}>
                    {
                        WorkData.map( d =>
                            <Card key={d.id} data={d} />    
                        )
                    }
                </Main>              
            </Box>
        </ThemeProvider>
        
    );
};

export default Work;