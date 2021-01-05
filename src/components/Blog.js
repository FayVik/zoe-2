import React from 'react';
import styled from 'styled-components';


function Blog() {
    return (
        <BlogPage>
            <h1>Blog coming soon!</h1>
            <p1>check us out on Medium</p1>
            <div class="card m-5" style={{ width: '200px' }}>
                <div class="card-header">I'm a card!</div>
                <div class="card-body">We can use cards</div>
                
            </div>
            <div class="card m-5" style={{ width: '200px' }}>
                <div class="card-header">Another card!</div>
                <div class="card-body">to highlight our favorite or most recent blog posts</div>
            </div>
        </BlogPage>
        
    )
}

const BlogPage = styled.div`
    background: rgb(255, 255, 255, 0.7);
    width: 60%;
    height: 70vh;
    margin: auto;
    padding: 100px 0;
    text-align: center;
`;


export default Blog


