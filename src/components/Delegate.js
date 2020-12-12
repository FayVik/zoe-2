import React, { Fragment } from 'react';
import img007 from '../images/007.jpg';
import styled from 'styled-components';

function Delegate() {
    return (
        <Fragment>
            <div class="d-block d-md-none">
            <ImageMobileDiv>
                <h1>what does your delegation do?</h1>
            </ImageMobileDiv>
            </div>
            <div class="d-none d-md-block">
                <ImageWideDiv>
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-6 d-flex"></div>
                            <div class="col-6 d-flex"><div><h1>why delegate to ZOEPOOL?</h1></div></div>
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

const ImageMobileDiv = styled.div`
    background-image: url(${img007});
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;

`;

//const ImageMobile = styled.img`
//    height: 100%;
//`;

export default Delegate
