import React from 'react';
import CoverPage from './CoverPage';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import Events from '../components/Events';
import Partners from '../components/Partners';
import Glossary from '../components/Glossary';

function Dive() {

    let { path, url } = useRouteMatch();

    return (
        <DivePage>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="navbar-nav">
                    <Link class="nav-link active" to="/partners" style={{ color: 'black' }}>
                        Partners
                    </Link>                    
                
                    <Link class="nav-link" to="/glossary" style={{ color: 'black' }}>
                        Glossary
                    </Link>                    
                
                
                    <Link class="nav-link" to="/events" style={{ color: 'black' }}>
                        Events
                    </Link>   
                </div>
            </nav>
            <div class="container p-1 p-lg-5">
                <Switch>
                    <Route path="/events">
                        <Events />
                    </Route>
                    <Route path="/glossary">
                        <Glossary />
                    </Route>
                    <Route path="/partners">
                        <Partners />
                    </Route>
                    <Route path="/">
                        <h1>Dive In</h1>
                    </Route>
                </Switch>
            </div>

        </DivePage>
    )
}

const DivePage = styled.div`
    background: #040740;
    width: 80%;
    height: 90vh;
    margin: auto;
`;



export default Dive
