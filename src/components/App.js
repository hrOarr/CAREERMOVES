// React
import React, { Component } from 'react';
// proptypes
import type from 'prop-types';
// Loadable
import Loadable from 'react-loadable';
// React Router v4
import { Router, Route, Switch, HashRouter } from 'react-router-dom';
import history from '../js/history';
import { AppLoading } from './assistants/preloader';
import { Err404 } from './assistants/errors';
import firebase from '../firebase/config';
import { Provider, connect } from 'react-redux';
import { compose } from 'redux';
import TopBar from './assistants/topbar';

// Home section
const AsyncHome = Loadable({
    loader: () => import('./home'),
    loading: AppLoading,
    timeout: 10000,
    delay: 300
});
// Post section
const AsyncStory = Loadable({
    loader: () => import('./story'),
    loading: AppLoading,
    timeout: 10000,
    delay: 300
});
// Login section
const AsyncLogin = Loadable({
    loader: () => import('./login'),
    loading: AppLoading,
    timeout: 10000,
    delay: 300
});
// choose paths

class App extends Component {
    constructor(props){
        super(props);
        this.state = { loading : true };
    }
    componentDidMount(){
        this.setState({loading : false});
    }
    render() {
    return (
        <Router history = {history}>
        <div>
        <TopBar />
        <Switch>
        // Front end 
        <Route path="/" component={AsyncHome} exact />
        <Route path="/story/:section" component={AsyncStory} exact />

        // authentication  
        <Route path="/auth/:section" component={AsyncLogin} exact />

        // Backend

        <Route component={Err404} />
        </Switch>
        </div>
        </Router>
        );
    }
}

export default (App);
