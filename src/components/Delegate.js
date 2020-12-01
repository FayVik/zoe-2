import React, { Fragment } from 'react';
import img007 from '../images/007.jpg';
import styled from 'styled-components';

function Delegate() {
    return (
        <Fragment>
            <div class="d-block d-md-none">
                <ImageMobile src={img007} />
            </div>
            <div class="d-none d-md-block">
                <ImageWide src={img007} />
            </div>
        </Fragment>

    )
}

const ImageWide = styled.img`
    width: 100vw;
`;

const ImageMobile = styled.img`
    height: 100vh;
    margin: auto;
`;

export default Delegate
