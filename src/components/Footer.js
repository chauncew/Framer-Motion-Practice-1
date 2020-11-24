import React from 'react'
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterStyles className='footerContainer'>
            <h1>This is the footer component</h1>
        </FooterStyles>
    )
}

const FooterStyles = styled.div`
    height: 150px;
    width: 100%;
    background: #252629;
    color: green;
`

export default Footer
