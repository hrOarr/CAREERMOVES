// src/components/assistants/topbar

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
//import { logoutUser } from '../../js/redux/actions';
import img from '../../img/default-pic.png';
import './topbar.css';
import firebase from '../../firebase/config';
import history from '../../js/history';
import { compose } from 'redux';
import { signOut } from '../../js/redux/actions';
import { Redirect } from 'react-router-dom';

const Signedintop = (props) => {

        const username = props.profile.username;
        const post = props.post;
        console.log(post.id);

        return (
                <div className="navbar-wrapper">
                  <div className="navbar-fixed">
                    <nav className="topbar nav-extended">
                        <div className="nav-wrapper">
                            <div className="blog-info">
                                <Link to="/" className="brand-logo">
                                    <span className="blog-title">CareerMoves</span>
                                </Link>
                            </div>
                                    <ul className="right hide-on-small-only">
                                   <div>
                                    <li>
                                      { !post ? 
                                       <Link to="/story/writestory" className="sign-in">
                                        Share story
                                       </Link>
                                       :
                                       <Link to="/story/updatestory" className="sign-in">
                                        Update story
                                       </Link>
                                     }
                                    </li>
                                    <li>
                                        <Link to="/" className="sign-in">
                                          { username }
                                        </Link>
                                    </li>
                                    <li>
                                        <a title="Logout" onClick={props.signOut}>
                                         <span>Logout</span>
                                        </a> 
                                    </li>
                                    </div>
                                    </ul>
                                    
                            </div>
                        </nav>
                    </div>
                </div>
        );
}
const mapDispatchToProps = (disptach) =>{
  return{
    signOut : () => disptach(signOut()) 
  }
}

export default connect(null, mapDispatchToProps)
(Signedintop);