import React, { Component } from 'react';
import PropTypes from 'prop-types';
import View from './view';

class Story extends Component {
    render() {
        return <View section={this.props.match.params.section} />;
    }
}


export default Story;