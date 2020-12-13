import { React, Fragment } from 'react';
import styled from 'styled-components';

{/* Two Views - in Fragmet */}

function Menu() {
    return (
        
        <Fragment>
            {/* Mobile View */}
            <div class="d-block d-lg-none">
                <div
                className="menu"
                style={{
                position: 'fixed',    
                top: 8,
                left: 0,
                width: '100%',
                zIndex: 2000,
                background: 'rgba(66,31,113,0.3)',
                }}
                >

                    <ul class="nav nav-fill">
                        <li class="nav-item border-0">
                            <a class="nav-link" data-menuanchor="home" href="#home"><MenuLinkM>Home</MenuLinkM></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="about" href="#about"><MenuLinkM>About</MenuLinkM></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="delegate" href="#delegate"><MenuLinkM>Delegate</MenuLinkM></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="partners" href="#partners"><MenuLinkM>Partners</MenuLinkM></a>
                        </li>         
                    </ul>
                </div>
            </div>

            {/* Browser Wide View */}    
            <div class="d-none d-lg-block">
                <div
                className="menu"
                style={{
                position: 'fixed',    
                top: 100,
                left: 0,
                zIndex: 2000,
                background: 'rgba(66,31,113,0.3)',
                }}
                >

                    <ul class="nav flex-column">
                        <li class="nav-item border-0">
                            <a class="nav-link" data-menuanchor="home" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="about" href="#about">Welcome</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="delegate" href="#delegate">Delegate</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="partners" href="#partners">Learn More</a>
                        </li>         
                    </ul>
                </div>
            </div>
        </Fragment>


    );
}


const MenuLinkM = styled.p`
    margin: auto;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 80%;
`;  



export default Menu
