import React, { Fragment } from 'react';
import img007 from '../images/007.jpg';
import styled from 'styled-components';
import zoeblue from '../images/zoeblue.png';

function Delegate() {
    return (
        <Fragment>
             {/* Mobile View */}
            <div class="d-block d-md-none">
                <ImageMobileDiv>
                    <div className="container">
                        <div className="row">
                            <DelegateTextM>
                                <h1>Delegation: a brand new way of investing in infrastucture</h1>
                                <h2>Own the network, earn rewards</h2>
                                <a type="button" class="btn btn-secondary btn-sm mt-5" href="/delegate">Learn More</a>
                            </DelegateTextM>
                        </div>
                        <div className="row justify-content-center">
                            <ZoeBlue src={zoeblue} /> 
                        </div>
                    </div>  
                    
                </ImageMobileDiv>
                
            </div>

            {/* Browser Wide View */} 
            <div class="d-none d-md-block">
                <ImageWideDiv>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <ZoeFull src={zoeblue} /> 
                            </div>

                            <div className="col">
                                <DelegateText>
                                    <h1>Delegation: a brand new way of investing in infrastucture</h1>
                                    <h2>Own the network, earn rewards</h2>
                                    <a type="button" class="btn btn-secondary mt-5" href="/delegate">Learn More</a>
                                </DelegateText>
                            </div>   
                        </div>
                    </div>
                    
                    
                </ImageWideDiv>
                
            </div>
        </Fragment>

    )
}

const ImageWideDiv = styled.div`
    background-image: url(${img007});
    background-size: cover;
    height: 100vh;
    background-repeat: no-repeat;
`;


const DelegateText = styled.div`
    padding-top: 25vh;
`;

const DelegateTextM = styled.div`
    padding-left: 10vh;
    padding-top: 25vh;
`;

const ImageMobileDiv = styled.div`
    background-image: url(${img007});
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
`;

const ZoeBlue = styled.img`
    width: 60%;
`;

const ZoeFull = styled.img`

`;

//const ImageMobile = styled.img`
//    height: 100%;
//`;

export default Delegate
