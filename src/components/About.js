import React from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {pageAnimation2} from './Animation';


const About = () => {
    return (
        <Container variants={pageAnimation2} initial='hidden' animate='show'>
            <h1>This is the About component</h1>
        </Container>
    )
}


const Container = styled(motion.div)`
    height: 100vh;
    width: 100%;
    background: #000;
    h1 {
        color: green;
        font-size: 3rem;
        text-align: center;
        padding-top: 25px;
    }
`

export default About
