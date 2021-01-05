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
            <ul class="nav navbar navbar-light bg-light">
                <li class="nav-item">
                    <Link to="/partners" style={{ color: 'black' }}>
                        Partners
                    </Link>                    
                </li>
                <li class="nav-item">
                    <Link to="/glossary" style={{ color: 'black' }}>
                        Glossary
                    </Link>                    
                </li>
                <li class="nav-item">
                    <Link to="/events" style={{ color: 'black' }}>
                        Events
                    </Link>
                </li>
            </ul>
            <div class="container p-5">
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
                </Switch>
            </div>

        </DivePage>
    )
}

const DivePage = styled.div`
    background: rgb(255, 0, 0, 0.3);
    width: 80%;
    height: 70vh;
    margin: auto;
    padding: 20px;
`;



export default Dive
