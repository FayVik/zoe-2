import React from 'react';
import zoeblue from '../images/zoeblue.png';

function Glossary() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src={zoeblue} class="img-fluid float-left" />
                </div>
                <div class="col-8">
                    <h1>ZOEPOOL Glossary</h1>
                    <p1>A gallery of educational resources and content for sharing. We can feature content on this page and link to a full library.</p1>                  
                </div>
            </div>
        </div>
    )
}

export default Glossary
