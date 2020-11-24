import React from 'react'
import {pageAnimation} from './Animation';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import squares from './images/squares.png';

const Contact = () => {
    return (
        <div>
            <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <Container className='mainContainer'>
                <motion.h1 variants={titleAnimation} initial='hidden' animate='show'>This is the Contact component</motion.h1>
                <section className='leftSection'>Aside</section>
                <motion.div>
                    <img src={squares}/>
                </motion.div>
            </Container>
        </motion.div>
        </div>
    )
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #000;
    position: relative;
    img {
        margin-top: 90px;
        height: 575px;
        width: 1500px;
        padding-left: 20px;
    }
     h1 {
        color: #74d660;
        font-family: cursive;
        font-size: 3rem;
        letter-spacing: 1.5px;
        text-align: center;
        padding-top: 30px;
    }
`

const titleAnimation = {
        hidden: {x: 900},
        show: {x: 0, transition: {type: 'spring', duration: 2}}
    }


export default Contact
