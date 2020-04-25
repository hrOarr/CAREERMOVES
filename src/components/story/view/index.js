/**
 * ./src/components/login/view
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Err404 } from '../../assistants/errors';
import Writestory from './writestory';
import Updatestory from './updatestory';

const View = ({ section }) => {
    let section_el = <Err404 />;

    if (section == 'updatestory') {
        section_el = (
            <div>
                <Updatestory />
            </div>
        );
    } else if (section == 'writestory') {
        section_el = (
            <div>
                <Writestory />
            </div>
        );
    }
    return section_el;
};

View.propTypes = {
    section: PropTypes.string,
};

export default View;