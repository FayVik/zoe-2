import React from 'react'
import img101 from '../images/101.jpg';
import img102 from '../images/102.jpg';
import img103 from '../images/103.jpg';
import img104 from '../images/104.jpg';
import img105 from '../images/105.jpg';
import img106 from '../images/106.jpg';
import Img from '../util/Img';

const Greeting = () => (
    <div className="container pt-3">
      <h1 class="greeting">zoepool</h1>
      <h2 class="greeting">welcome</h2>
    </div>
    )

function PhotoStripSix() {
    return (
        <div class="container">
            <div className="row no-gutters">
                <div class="col-2">
                    <Img src={img101} />
                </div>

                <div class="col-2">
                    <Img src={img102} />
                </div>

                <div class="col-2">
                    <Img src={img103} />
                </div>

                <div class="col-2">
                    <Img src={img104} />
                </div>

                <div class="col-2">
                    <Img src={img105} />
                </div>

                <div class="col-2">
                    <Img src={img106} />
                </div>
            </div>
            <div className="row">
                <Greeting />
            </div>
            
        </div>
    )
}

export default PhotoStripSix
