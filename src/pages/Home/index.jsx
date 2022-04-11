import React from 'react';
import styled from 'styled-components';
import Logo from '../../components/Logo';
import PowerButton from '../../components/PowerButton';
import SocialIcons from '../../components/SocialIcons';

const MainContainer = styled.div`
    background: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    overflow:hidden;
    position: relative;

    h2,h3,h4,h5,h6{
        font-family:'Karla', sans-serif;
        font-weight:500;
    }
`

const Container = styled.div`
    padding: 2rem;
`

const Home = () => {
    return (
        <MainContainer>
            <Container>
                <PowerButton />
                <Logo />
                <SocialIcons />
            </Container>
        </MainContainer>
    );
};

export default Home;