import React from 'react'
import styled from 'styled-components';
import {pageAnimation} from './Animation';
import {motion} from 'framer-motion';

const Main = () => {
    const titleAnimation = {
        hidden: {x: 800},
        show: {x: 0, transition: {type: 'spring', duration: 2}}
    }

    return (
        <motion.div variants={pageAnimation} initial='hidden' animate='show'>
            <Container className='mainContainer'>
                <motion.h1 variants={titleAnimation} initial='hidden' animate='show'>This is the main component</motion.h1>
                <section className='leftSection'>Aside</section>
                <motion.div 
                animate={{opacity: 1, transition: {duration: 1.5}}} initial={{opacity: 0}} className='boxes'>
                    <div className='box1'>Box 1</div>
                    <div className='box2'>Box 2</div>
                </motion.div>
            </Container>
        </motion.div>
    )
}


const Container = styled.div`
    height: 100vh;
    width: 100%;
    background: #000;
    position: relative;
    h1 {
        color: #74d660;
        font-family: cursive;
        font-size: 3rem;
        letter-spacing: 1.5px;
        text-align: center;
        padding-top: 30px;
    }
    .leftSection {
        width: 20%;
        margin-top: 25px;
        margin-left: 25px;
        color: green;
        height: 80%;
        font-size: 2.5rem;
        background: #252629;
        box-shadow: 13px 13px 5px 1px rgba(104,103,103,0.75);

    }
    .boxes {
        position: absolute;
        display:flex;
        justify-content: space-around;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        margin-left: 150px;
    }
    .box1 {
        height: 500px;
        width: 500px;
        background: #252629;
        color: green;
        margin: 0 80px;
        font-size: 2.5rem;
    }
    .box2 {
        height: 500px;
        width: 500px;
        margin: 0 80px;
        background: #252629;
        color: green;
        font-size: 2.5rem;

    }
    
`


export default Main
