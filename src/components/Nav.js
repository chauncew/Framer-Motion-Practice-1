import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div className='navContainer'>
            <NavLinks className='navLinks'>
                <Empty className='emptyDiv'>Empty Part</Empty>
                <NavDiv className='navDiv'>
                    <NavLi to='/'>Home</NavLi>
                    <NavLi to='/about'>About Us</NavLi>
                    <NavLi to='/contact'>Contact Us</NavLi>
                </NavDiv>
            </NavLinks>
        </div>
    )
}

//Style Nav Component
const NavLinks = styled.div`
    height: 6.5rem;
    width: 100%;
    display: flex;
    background: #252629;
    color: #74d660;
    justify-content: space-between;
    align-items: center;
`

const Empty = styled.div`
    z-index: 1;
    font-family: cursive;
    letter-spacing: 2px;
    font-size: 1.7rem;
    margin-left: 25px;
`

const NavDiv = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    /* margin-right: 25px; */

`

const NavLi = styled(Link)`
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    margin: 0 25px;
    font-family: cursive;
    letter-spacing: 2px;
    font-size: 1.7rem;
    color: #74d660;
`

export default Nav
