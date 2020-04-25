// src/components/assistants/topbar

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import img from '../../img/default-pic.png';
import './topbar.css';

const Signedouttop = () => {

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
                                        <Link to="/auth/login" className="sign-in">
                                            Sign in
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/auth/signup" className="sign-up">
                                            Get started
                                        </Link>
                                    </li>
                                    </div>
                                    </ul>
                                   
                            </div>
                        </nav>
                    </div>
                </div>
        );
    }

export default
(Signedouttop);
