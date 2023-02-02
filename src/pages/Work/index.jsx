import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import {DarkTheme} from '../../components/Themes';
import PowerButton from '../../components/PowerButton';
import Logo from '../../components/Logo';
import SocialIcons from '../../components/SocialIcons';
import {WorkData} from '../../datas/WorkDatas';
import Card from '../../components/Card';
import { useRef } from 'react';
import { YinYang } from '../../components/AllSvgs';


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

const Rotate = styled.span`
    display: block;
    position: fixed;
    right: 1rem;
    bottom: 1rem;
    width: 80px;
    height: 80px;
    z-index: 1;
`


const Work = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current;
        const rotate = () => {
            element.style.transform = `translateX(${-window.pageYOffset}px)`
            yinyang.current.style.transform = 'rotate(' + -window.pageYOffset + 'deg)'
        }
        window.addEventListener('scroll', rotate)
        return () => window.removeEventListener('scroll', rotate)
    }, [])
    

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
                <Rotate ref={yinyang}>
                    <YinYang width={80} height={80} fill={DarkTheme.text} />
                </Rotate>              
            </Box>
        </ThemeProvider>
        
    );
};

export default Work;