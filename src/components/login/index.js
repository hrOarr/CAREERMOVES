/**
 * ./src/components/home
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style/auth.css';
import { AppLoading } from '../assistants/preloader';
import Loadable from 'react-loadable';

const AsyncView = Loadable({
    loader: () => import('./view'),
    loading: AppLoading,
    timeout: 10000,
    delay: 300
});

class Login extends Component {
    render() {
        return <AsyncView section={this.props.match.params.section} />;
    }
}


export default Login;
