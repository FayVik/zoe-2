import React from 'react';
import img001 from '../images/001.jpg';
import img002 from '../images/002.jpg';
import img012 from '../images/012.jpg';
import img018 from '../images/018.jpg';
import img101 from '../images/101.jpg';
import img102 from '../images/102.jpg';
import img103 from '../images/103.jpg';
import img104 from '../images/104.jpg';
import img105 from '../images/105.jpg';
import img106 from '../images/106.jpg';
import styled from 'styled-components';

function CoverPage() {
    return (
        
        <div class="container">
            <div class="row no-gutters">
                <div class="col-6">
                    <ImgContainer>
                        <Img src={img001} />
                        <ImgMeta>
                            <p>zoepool</p>
                        </ImgMeta>
                    </ImgContainer>
                </div>
                <div class="col-6">
                    <ImgContainer>
                        <Img src={img018} />
                        <ImgMeta>
                            <p>about</p>
                        </ImgMeta>
                    </ImgContainer>
                </div>

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

                <div class="col-6">
                    <ImgContainer>
                        <Img src={img002} />
                        <ImgMeta>
                            <p>partners</p>
                        </ImgMeta>
                    </ImgContainer>
                </div>
                <div class="col-6">
                    <ImgContainer>
                        <Img src={img012} />
                        <ImgMeta>
                            <p>delegate</p>
                        </ImgMeta>
                    </ImgContainer>
                </div>
            </div>
        </div>

    )
}


const ImgContainer = styled.div`
  position: relative;
  flex-basis: 100%;
  cursor: pointer;
  transition: 0.5s all ease-in
`;

const Img = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  
`;

const ImgMeta = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: rgba(50, 0, 140, 0.3);
  color: #FFF;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
 
  ${ImgContainer}:hover & {
    display: flex !important;
  }
`;


export default CoverPage
