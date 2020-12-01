import React from 'react';
import AboutCard from '../util/AboutCard';
import { aboutParagraphs } from '../data/aboutParagraphs';

import imgA from '../images/014.jpg';
import imgB from '../images/025.jpg';
import imgC from '../images/023.jpg';
import imgD from '../images/012.jpg';
import imgE from '../images/021.jpg';

function About() {
    return (
        <div class="container">
           
                    
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><AboutCard cardText={aboutParagraphs[1]} cardImg={imgA} /></div>
                <div class="tab-pane fade" id="nav-two" role="tabpanel" aria-labelledby="nav-profile-tab"><AboutCard cardText={aboutParagraphs[2]} cardImg={imgB} /></div>
                <div class="tab-pane fade" id="nav-three" role="tabpanel" aria-labelledby="nav-contact-tab"><AboutCard cardText={aboutParagraphs[3]} cardImg={imgC} /></div>
                <div class="tab-pane fade" id="nav-four" role="tabpanel" aria-labelledby="nav-contact-tab"><AboutCard cardText={aboutParagraphs[4]} cardImg={imgD} /></div>
                <div class="tab-pane fade" id="nav-five" role="tabpanel" aria-labelledby="nav-contact-tab"><AboutCard cardText={aboutParagraphs[5]} cardImg={imgE} /></div> 
            </div>  
                
            <nav>
                <div class="nav nav-fill" id="nav-tab" role="tablist" style={{ border: 0 }}>
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">learn</a>
                    <a class="nav-item nav-link" id="nav-two-tab" data-toggle="tab" href="#nav-two" role="tab" aria-controls="nav-two" aria-selected="false">rewards</a>
                    <a class="nav-item nav-link" id="nav-three-tab" data-toggle="tab" href="#nav-three" role="tab" aria-controls="nav-three" aria-selected="false">for many</a>
                    <a class="nav-item nav-link" id="nav-four-tab" data-toggle="tab" href="#nav-four" role="tab" aria-controls="nav-four" aria-selected="false">aid</a>
                    <a class="nav-item nav-link" id="nav-five-tab" data-toggle="tab" href="#nav-five" role="tab" aria-controls="nav-five" aria-selected="false">light</a>
                </div>
            </nav>
                
        </div>


    )
}

export default About


