import React from 'react';
import styled from 'styled-components';
import "../App.css"


function Blog() {
    return (
        <BlogPage>
         <h1 className="mt-5 mb-5 color">STORIES Of OUR WOMEN IN CARDANO</h1>
          <div class="row justify-content-around">
            <div class="col-sm-12 col-lg-6 col-md-6 mb-5">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM</h5>
                    <p class="card-text">What came to your mind when you first heard of blockchain technology? Well for me, I was unenthusiastic about it, I thought it would be lame(I had zero interest in technology at that time)...</p>
                    <a href="https://medium.com/@TCCPm/cardano-blockchain-a-solution-to-some-of-africas-major-problem-95bb3ce5594" class="text-primary">Read more</a>
                </div>
                </div>
            </div>
            
            <div class="col-sm-12 col-lg-6 col-md-6 mb-5">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">CARDANO BLOCKCHAIN: A SOLUTION TO SOME OF AFRICA’S MAJOR PROBLEM</h5>
                    <p class="card-text">What came to your mind when you first heard of blockchain technology? Well for me, I was unenthusiastic about it, I thought it would be lame(I had zero interest in technology at that time)...</p>
                    <a href="https://medium.com/@TCCPm/cardano-blockchain-a-solution-to-some-of-africas-major-problem-95bb3ce5594" class="text-primary">Read more</a>
                </div>
                </div>
            </div>
          </div>
        </BlogPage>
        
    )
}

const BlogPage = styled.div`
    width: 75%;
    min-height: 90vh;
    margin: auto;
    padding: 50px 0;
    text-align: center
`;


export default Blog


