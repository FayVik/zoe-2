import React from 'react'
import img101 from '../images/101.jpg';
import img102 from '../images/102.jpg';
import img103 from '../images/103.jpg';
import Img from '../util/Img';

function PhotoStripThree() {
    return (
        <div class="container">
            <div className="row">
                <div className="col-4">
                    <Img src={img101} caption="build" />
                </div>
                <div className="col-4">
                    <Img src={img102} caption="believe" />
                </div>
                <div className="col-4">
                    <Img src={img103} caption="learn" />
                </div>
            </div>             
        </div>
    )
}

export default PhotoStripThree
