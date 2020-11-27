import React from 'react'

function Menu() {
    return (
        <div
        className="menu"
        style={{
        position: 'fixed',    
        top: 100,
        left: 0,
        zIndex: 100,
        background: 'rgba(66,31,113,0.3)',
        }}
        >

            <ul class="nav flex-column">
            <li class="nav-item border-0">
                <a class="nav-link" data-menuanchor="home" href="#home">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-menuanchor="about" href="#about">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-menuanchor="delegate" href="#delegate">Delegate</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-menuanchor="partners" href="#partners">Partners</a>
            </li>         
            </ul>
        </div>
    );
}

export default Menu
