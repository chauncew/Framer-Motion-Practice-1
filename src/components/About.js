import React from 'react'
import {motion} from 'framer-motion';
import styled from 'styled-components';
import {pageAnimation2} from './Animation';
import Squars from './Squars';
import curves from './images/curves.png'
import {pageAnimation, titleAnimation} from './Animation';



const About = () => {
    return (
            <Container variants={pageAnimation2} initial='hidden' animate='show'>
                <h1>This is the About component</h1>
                <img src={curves} alt="curves"/>
                <motion.div variants={titleAnimation} className='emptyBox'></motion.div>
            </Container>
    )
}


const Container = styled(motion.div)`
    height: 100vh;
    width: 100%;
    background: #000;
    overflow-y: hidden;
    h1 {
        color: green;
        font-size: 3rem;
        text-align: center;
        padding-top: 25px;
    }

    .emptyBox {
        height: 800px;
        width: 600px;
        position: absolute;
        top: 25%;
        left: 38%;
        background: #252629;
        box-shadow: 13px 13px 5px 1px rgba(104,103,103,0.75);
    }
    img {
    height: 500px;
    width: 2500px;
    margin-top: 75px;
}
`


export default About
