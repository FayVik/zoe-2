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
                    <Link class="nav-link" to="/" style={{ color: 'black' }}>
                        Glossary
                    </Link>                    
                    <Link class="nav-link" to="/events" style={{ color: 'black' }}>
                        Events
                    </Link>
                    <Link class="nav-link active" to="/partners" style={{ color: 'black' }}>
                        Partners
                    </Link>                    
                    <Link class="nav-link" to="/credits" style={{ color: 'black' }}>
                        Credits
                    </Link>     
                </div>
            </nav>
            <div class="container p-1 p-lg-5">
                <Switch>
                    <Route path="/events">
                        <Events />
                    </Route>
                    
                    <Route path="/partners">
                        <Partners />
                    </Route>
                    <Route path="/credits">
                        <h1 className="mt-5">Site Credits</h1>
                        <p>This site was made with love by the ZOEPOOL team, with design help from Gimbalabs.</p>
                        <p>All photos are by Darlington Sheriff. For more info see:</p>
                        <ul>
                            <li><a href="https://Instagram.com/darlingtonsheriff">Instagram @darlingtonsheriff</a></li>
                            <li><a href="https://Youtube.com/darlingtonsheriff">YouTube</a></li>
                            <li><a href="https://Twitter.com/darlingsheriff">Twitter @darlingsheriff</a></li>
                        </ul>
                    </Route>
                    <Route path="/">
                        <Glossary />
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
