import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
;


const Main = styled.h3`
    color: ${props => props.theme.text};
    position: absolute;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index:1;
`

const Contact = () => {
  return (
    <Main>
        <a style={{color:'inherit'}} href="mailto:rabonia@hotmail.com" target="_blank" rel="noopener noreferrer">
            <motion.h3
              whileHover={{scale: 1.1}}
              whileTap={{scale: 0.9}}
            >
                Fait coucou....
            </motion.h3>
        </a>
    </Main>
  )
}

export default Contact