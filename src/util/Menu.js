import { React, Fragment } from 'react';
import styled from 'styled-components';
import '../App.css'

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
                background: 'rgba(66,31,113,0.7)',
                }}
                >

                    <ul class="nav nav-fill">
                        <li class="nav-item border-0">
                            <a class="nav-link" data-menuanchor="home" href="/#home"><MobileMenuLink>Home</MobileMenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="about" href="/#about"><MobileMenuLink>About</MobileMenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="delegate" href="/#delegate"><MobileMenuLink>Delegate</MobileMenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="dive" href="/#dive"><MobileMenuLink>Dive In</MobileMenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="blog" href="/#blog"><MobileMenuLink>Blog</MobileMenuLink></a>
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
                background: 'rgba(66,31,113,0.7)',
                }}
                >

                    <ul class="nav flex-column">
                        <li class="nav-item border-0">
                            <a class="nav-link" data-menuanchor="home" href="/#home"><MenuLink>Home</MenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="about" href="/#about"><MenuLink>About</MenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="delegate" href="/#delegate"><MenuLink>Delegate</MenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="dive" href="/#dive"><MenuLink >Dive In</MenuLink></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-menuanchor="blog" href="/#blog"><MenuLink>Blog</MenuLink></a>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>


    );
}


const MenuLink = styled.p`
    margin: auto;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 95%;
`;  

const MobileMenuLink = styled.p`
    margin: auto;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 60%;
`;  


export default Menu
