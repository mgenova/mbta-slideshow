import React from 'react';
import {RouteHanndler,Link, Route, Router, hashHistory} from 'react-router';
import App from '../containers/app';
import Slide from '../components/Slide';
/*
import Audience from '../components/audience';
import Board from '../components/board';
import Speaker from '../components/speaker';
import Meeting from '../components/meeting';
import SlideContainer from '../containers/slideContainer';
*/

const Routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Slide}>
        </Route>
    </Router>
)


export default Routes;
