import React from 'react';
import styled from 'styled-components';

function Img(props) {
    return (
        <div>
            <Image src={props.src} />
            <p>{props.caption}</p>
        </div>
    )
}

const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 0%;
`;

export default Img
