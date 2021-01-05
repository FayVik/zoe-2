import React from 'react';
import zoeblue from '../images/zoeblue.png';

function Partners() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src={zoeblue} class="img-fluid float-left" />
                </div>
                <div class="col-8">
                    <h1>ZOEPOOL Partners</h1>
                    <p1>A list of partners with links. We can change the layout of this page, and link to deeper content.</p1>
                    <ul>
                        <li>AfroFinLab</li>
                        <li>ABCD</li>
                        <li>Workshop Maybe</li>
                        <li>WADA, Liqwid, Grance, Gimbalabs</li>
                    </ul>                  
                </div>
            </div>
        </div>
    )
}

export default Partners
