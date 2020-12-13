import React, { Fragment } from 'react';
import img007 from '../images/007.jpg';
import styled from 'styled-components';

{/* Two Views - in Fragmet */}

function Delegate() {
    return (
        <Fragment>
             {/* Mobile View */}
            <div class="d-block d-md-none">
                <ImageMobileDiv>
                    <DelegateText>
                        <h1>Delegation: a brand new way of investing in infrastucture</h1>
                        <a type="button" class="btn btn-secondary btn-sm mt-5" href="">Learn More</a>
                    </DelegateText>
                </ImageMobileDiv>
            </div>

            {/* Browser Wide View */} 
            <div class="d-none d-md-block">
                <ImageWideDiv>
                    <DelegateText>
                        <h1>Delegation: a brand new way of investing in infrastucture</h1>
                        <a type="button" class="btn btn-secondary mt-5" href="">Learn More</a>
                    </DelegateText>
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
    padding-left: 33vh;
    padding-top: 25vh;
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
