import React from 'react';
import zoeblue from '../images/zoeblue.png';

function Events() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src={zoeblue} class="img-fluid float-left" />
                </div>
                <div class="col-8">
                    <h1>ZOEPOOL Events</h1>
                    <p1>A list of upcoming events will be posted here.</p1>                    
                </div>
            </div>
        </div>
    )
}

export default Events
