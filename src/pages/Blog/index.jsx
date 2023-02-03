import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import img from "../../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import AnchorComponent from '../../components/Anchor';
import BlogContent from '../../components/BlogContent';
import Logo from "../../components/Logo";
import PowerButton from "../../components/PowerButton";
import SocialIcons from "../../components/SocialIcons";
import {Blogs} from "../../datas/BlogDatas";

const MainContainer = styled.div`
    background: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;    
`

const Container = styled.div`
    background-color: ${props => `rgba(${props.theme.bodyRgba},0.8)`};
    width: 100%;
    height:auto;

    position: relative;
    padding-bottom: 5rem;
`

const Center = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10rem;    
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
    grid-gap: calc(1rem + 2vw);
`

const Blog = () => {
    const [numbers, setNumbers] = useState(0);

    useEffect (() => {
        let num = (window.innerHeight - 70)/30;
        setNumbers(parseInt(num));
    }, [])
    
    return (
        <MainContainer>
            <Container>
                <Logo />
                <PowerButton />
                <SocialIcons />
                <AnchorComponent number={numbers} />
                <Center>
                    <Grid>
                        {
                            Blogs.map(blog => {
                                return <BlogContent key={blog.id} blog={blog} />
                            })
                        }
                    </Grid>
                </Center>
            </Container>
        </MainContainer>
    );
};

export default Blog;