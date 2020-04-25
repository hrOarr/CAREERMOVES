// src/components/assistants/topbar

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { logoutUser } from '../../js/redux/actions';
import img from '../../img/default-pic.png';
import './topbar.css';
import { compose } from 'redux';
import firebase from '../../firebase/config';
import Signedintop from './signedintop';
import Signedouttop from './signedouttop';
import { firestoreConnect } from 'react-redux-firebase';

class TopBar extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const { currentUser, auth, profile, posts } = this.props;
        const _posts = posts;
        var arr = '';
        posts && posts.map( post => {
            if( post.authorId == auth.uid )
                arr = post;
        }
        );
        const currenttop = (!auth.uid)?<Signedouttop/>:<Signedintop profile={profile} post={arr}/>;

        return (<div>{currenttop}</div>);
    }
}
const mapStateToProps = (state) => {
  console.log(state)
  return{
    auth : state.firebase.auth,
    profile : state.firebase.profile,
    posts : state.firestore.ordered.posts
  }
}

export default compose(connect(mapStateToProps),firestoreConnect([{collection : 'posts'}]))
(TopBar);
