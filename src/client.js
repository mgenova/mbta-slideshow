
import React from 'react';
import ReactDOM from 'react-dom';
import {RouteHanndler,Link, Route, Router} from 'react-router';
import App from './containers/app';
import Slide from './components/Slide';

import routes from './config/routes';

const app = document.getElementById('app');


//ReactDOM.render((routes), app);
ReactDOM.render(<Slide/>, app);
