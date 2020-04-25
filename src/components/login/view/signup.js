// src/components/login/signup

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Router, Route, Switch, Link
import { Link, withRouter, Redirect } from 'react-router-dom';
// connector
import { connect } from 'react-redux';
// helping functions
import { validate_password, validateEmail } from '../../../js/assistants';
// site title
import { BLOG_TITLE } from '../../assistants/constants';
import firebaseApp from '../../../firebase/config';
import history from '../../../js/history';
import { signUp } from '../../../js/redux/actions';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirm_pass: '',
            profile_pic: '',
            auth_message: ''
        };
    }
    componentDidMount() {
        document.title = 'Sign Up - ' + BLOG_TITLE;
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        if( navigator.onLine ) {
            this.props.signUp(this.state);
        }
        else {
        this.setState({
            auth_message: 'You are offline'
        });
    }
    };
    render() {

        const { classes, authError , auth} = this.props;
        if(auth.uid) return <Redirect to='/' />;

        const password = this.state.password;
        let button_class = 'btn';
        let input_class = '';

        if (!validate_password(password) || this.state.password != this.state.confirm_pass || !validateEmail(this.state.email)) {
            button_class = button_class + ' disabled';
            input_class = input_class + ' invalid';
        }

        console.log(authError);

         this.state.auth_message = authError;
        

        return (
            <div className="signup-section section center z-depth-1">
                <div className="heading">
                    <h5>Join CareerMoves</h5>
                    <p>
                        Create an account to share stories
                    </p>
                    <p>
                        **Password must contain atleast one uppercase letter or one number. And must
                        be atleast 6 characters long
                    </p>
                </div>

                <div className="login-form">
                    <form onSubmit={this.handleSubmit} className="row">
                        <div className="input-field col s12">
                            <input
                                type="email"
                                id="email"
                                placeholder="Your email"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="username"
                                placeholder="Your username"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                className={input_class}
                                type="password"
                                id="password"
                                placeholder="Your password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                className={input_class}
                                type="password"
                                id="confirm_pass"
                                placeholder="Your confirm password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <button type="submit" className={button_class}>
                               
                                    Submit
                               
                            </button>
                            <p className="red-text">{this.state.auth_message}</p>
                        </div>
                    </form>
                </div>

                <div className="extra-info">
                    <p>
                        Have an account?
                        <Link to="/auth/login" title="Sign In">
                            {' '}
                            Login
                        </Link>
                    </p>
                    {/* <p>
                        <a title="Terms of service">Terms of service</a>
                    </p> */}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return{
    signUp : (creds) =>  dispatch(signUp(creds))
  }
}
const mapStateToProps = (state) => {
  return{
     authError : state.auth.authError,
     auth : state.firebase.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
