import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';

const Squars = () => {
    return (
        
    <SquareSvg version="1.1" viewBox="0 0 210 297">
        <g transform="translate(55.209 1.6508)">
        <g transform="translate(-2.201 -10.272)" fill="#00a718" strokeWidth="0">
        
        <rect transform="matrix(.96142 -.27507 -.54299 .83974 0 0)" x=".639" y="40.926" 
        width="75.761" height="10.7"/>
        <rect transform="matrix(.96142 -.27507 -.54299 .83974 0 0)" x="25.325" y="80.77" width="75.761" height="10.7"/>
        <rect transform="matrix(.96142 -.27507 -.54299 .83974 0 0)" x="13.303" y="60.951" width="75.761" height="10.7"/>
        </g>
        </g>
    </SquareSvg>

    )
}

const SquareSvg = styled.svg`
    position: absolute;
    left: 0;

`

export default Squars
