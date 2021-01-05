import React from 'react';
import CoverPage from './CoverPage';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

import Blog from '../components/Blog';
import Events from '../components/Events';
import Partners from '../components/Partners';
import Glossary from '../components/Glossary';

function Dive() {

    let { path, url } = useRouteMatch();

    return (
        <DivePage>
            <ul class="nav navbar navbar-light bg-light">
                <li class="nav-item">
                    <Link to="/dive/partners" style={{ color: 'black' }}>
                        Partners
                    </Link>                    
                </li>
                <li class="nav-item">
                    <Link to="/dive/glossary" style={{ color: 'black' }}>
                        Glossary
                    </Link>                    
                </li>
                <li class="nav-item">
                    <Link to="/dive/events" style={{ color: 'black' }}>
                        Events
                    </Link>
                </li>
            </ul>
            <div class="container p-5">
                <Switch>
                    <Route path="/dive/events">
                        <Events />
                    </Route>
                    <Route path="/dive/glossary">
                        <Glossary />
                    </Route>
                    <Route path="/dive/partners">
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
