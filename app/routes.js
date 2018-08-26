import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Main from './components/main';
import Home from './views/home';
import About from './views/about';
import HomePage from "./views/homePage";

const Routes = (
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
            <Route path="about" component={About} />
            <Route path="homePage" component={HomePage} />
        </Route>
    </Router>
);

export default Routes;
