/**
 * ./src/components/login/view
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Err404 } from '../../assistants/errors';
import { AppLoading } from '../../assistants/preloader';
import Loadable from 'react-loadable';

const AsyncLogin = Loadable({
    loader: () => import('./login'),
    loading: AppLoading,
    timeout: 10000,
    delay: 300
});
const AsyncSignUp = Loadable({
    loader: () => import('./signup'),
    loading: AppLoading,
    timeout: 10000,
    delay: 300
});

const View = ({ section }) => {
    let section_el = <Err404 />;

    if (section == 'signup') {
        section_el = (
            <div>
                <div className="auth">
                    <div className="container">
                        <AsyncSignUp />
                    </div>
                </div>
            </div>
        );
    } else if (section == 'login') {
        section_el = (
            <div>
                <div className="auth">
                    <div className="container">
                        <AsyncLogin />
                    </div>
                </div>
            </div>
        );
    }
    return section_el;
};

View.propTypes = {
    section: PropTypes.string,
};

export default View;
