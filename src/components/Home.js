import React from 'react';
import styled from 'styled-components';
import img114 from '../images/114.jpg';


function Home() {
    return (
        <div>
            <MyImage src={img114} />
            <WordWall className="container">
                <div className="row justify-content-end">
                    <div className="col-6"></div>
                    <div className="col-6">
                        <h1>zoepool</h1>
                        <SubTitle>an African based stakepool focused on </SubTitle>
                        <div class="d-block d-lg-none"><HashTaggedSmall>#WomenInBlockchain.</HashTaggedSmall></div>
                        <div class="d-none d-lg-block"><HashTaggedLarge>#WomenInBlockchain.</HashTaggedLarge></div>
                    </div>
                </div>
            </WordWall>
        </div>
    )
}

const MyImage = styled.img`
    position: fixed;
    top: 0;
    left: 0; 
    height: 100vh;
`;

const WordWall = styled.div`
    zIndex: 50;
`;

const SubTitle = styled.p`
    letter-spacing: 5px;
    padding-top: 100px;
`;

const HashTaggedSmall = styled.p`
    letter-spacing: 0px;
    margin-left: -60px;
`;

const HashTaggedLarge = styled.p`
    letter-spacing: 10px;
`;

export default Home
