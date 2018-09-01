import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import * as test from 'react-router-dom'
import Main from './components/main';
import Home from './views/home';
import About from './views/about';
import HomePage from "./views/homePage";
import EventsOffline from "./views/EventsPageOffline"
import SingleEvent from "./views/EventPage"

const Routes = (
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home} />
        <Route path="about" component={About} />
            <Route path="events-offline" component={EventsOffline} />
            <Route path="event" component={SingleEvent} />
        </Route>
    </Router>
);

export default Routes;
