import React from 'react';
import Img from '../util/Img';
import img114 from '../images/114.jpg';

function Home() {
    return (
        <div class="container-fluid">
            <div className="row align-items-center">
           
                <div className="col-6">
                    <Img src={img114} />
                </div>
                <div className="col-6">
                    <h1>Welcome to Zoe Pool</h1>
                    <br />
                    <p>A Cardano Stake Pool in Africa</p>
                    <p>Run by women</p>
                    <p>Investing in women</p>
                    <br />
                    <h2>#WomenInBlockchain</h2>
                                    
                </div>
            </div>
        </div>
    )
}

export default Home
