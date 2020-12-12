import React from 'react';

import csocial from '../images/cardano-social.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import medium from '../images/medium.png';
import styled from 'styled-components';

function Social() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" style={{
            position: 'fixed',    
            bottom: 20,
            width: '33%',
            right: 0,
            zIndex: 2000,
            background: 'rgba(5,108,242,0.3)',        
        }}>
            <ul class="navbar-nav">
                <li class="nav-item"><a href=""><Img src={csocial} /></a></li>
                <li class="nav-item"><a href=""><Img src={instagram} /></a></li>
                <li class="nav-item"><a href="https://twitter.com/zoepoolz"><Img src={twitter} /></a></li>
                <li class="nav-item"><a href=""><Img src={medium} /></a></li>
                        
            </ul>       
        </div>
    </nav>
    

    )
}

const Img = styled.img`
    height: 70px;
    padding-left: 1em;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
`;


export default Social;
