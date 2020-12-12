import { React, Fragment } from 'react';

import csocial from '../images/cardano-social.png';
import instagram from '../images/instagram.png';
import twitter from '../images/twitter.png';
import medium from '../images/medium.png';
import styled from 'styled-components';

{/* Two Views - in Fragmet */}

function Social() {
    return (

        <Fragment>
             {/* Mobile View */}
            <div class="d-block d-lg-none">
                
                    <div className="container-fluid" style={{
                        position: 'fixed',    
                        bottom: 8,
                        width: '100%',
                        right: 0,
                        zIndex: 2000,
                        background: 'rgba(5,108,242,0.3)',        
                    }}>
                        <ul class="nav nav-fill">
                            <li class="nav-item"><a href=""><ImgM src={csocial} /></a></li>
                            <li class="nav-item"><a href=""><ImgM src={instagram} /></a></li>
                            <li class="nav-item"><a href="https://twitter.com/zoepoolz"><ImgM src={twitter} /></a></li>
                            <li class="nav-item"><a href=""><ImgM src={medium} /></a></li>            
                        </ul>       
                    </div>
               
            </div>
            
            {/* Browser Wide View */} 
            <div class="d-none d-lg-block">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid" style={{
                        position: 'fixed',    
                        bottom: 20,
                        width: '50%',
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
            </div>
        </Fragment>
    

    )
}

const Img = styled.img`
    height: 100px;
    padding-left: 1em;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
`;

const ImgM = styled.img`
    height: 35px;
    padding-left: 0.1em;
    padding-bottom: 0.1em;
    padding-top: 0.1em;
`;


export default Social;
