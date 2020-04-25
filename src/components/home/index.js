/**
 * ./src/components/home
 */

import React, { Component } from 'react';
import { BLOG_TITLE } from '../assistants/constants';
import Body from './body';
import TopBar from '../assistants/topbar';
import firebase from '../../firebase/config';

class Home extends Component {
	constructor(props){
		super(props);
	}
    componentWillMount() {
        document.title = 'HomePage - ' + BLOG_TITLE;
    }
    render() {
        return (
            <div>
        	<Body/>
            </div>
        );
    }
}

export default Home;
