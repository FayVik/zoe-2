import React from 'react';
import styled from 'styled-components';

function AboutCard(props) {
    return (

        <MyCard>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-12 col-sm-8 col-md-6"><Image src={props.cardImg} alt="..." /></div>  
                    <div className="col-md-6 d-none d-sm-block"><BlurbBig>{props.cardText}</BlurbBig></div>
                    <div className="col-12 d-block d-sm-none pt-3"><BlurbSmall>{props.cardText}</BlurbSmall></div>                                 
                </div>
            </div>        
        </MyCard>

    )
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2%;
  box-shadow: -26px -26px #F5F94B;
  transform: rotate(-2deg);
`;

const MyCard = styled.div`
    background-color: #B4C7F9;
    padding: 40px;
    margin: 10px;

`;

const BlurbBig = styled.p`
    color: #040740;
    font-weight: 200;
    font-size: 125%;
    text-align: left;
`;    

const BlurbSmall = styled.p`
    color: #040740;
    font-weight: 200;
    font-size: 80%;
    text-align: left;
`;  

export default AboutCard
