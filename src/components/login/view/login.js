/**
 * ./src/components/login/view/login
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { BLOG_TITLE } from '../../assistants/constants';
import { firebaseApp,database } from '../../../firebase/config';
import history from '../../../js/history';
import { signIn } from '../../../js/redux/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            auth_message: ''
        };
    }
    componentDidMount() {
        document.title = 'Login - ' + BLOG_TITLE;
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.id]: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
    };
    render() {

        const { classes, authError , auth} = this.props;
        if(auth.uid) return <Redirect to='/' />;

        return (
            <div className="login-section section center z-depth-1">
                <div className="heading">
                    <h5>Welcome Back</h5>
                    <p>
                        Sign in to appreciate stories you love, and more.
                    </p>
                </div>

                <div className="login-form">
                    <form className="row" onSubmit={this.handleSubmit}>
                        <div className="input-field col s12">
                            <input
                                type="text"
                                id="email"
                                placeholder="Your email"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <input
                                type="password"
                                id="password"
                                placeholder="Your password"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="input-field col s12">
                            <button type="submit" className="btn">
                                    Submit
                            </button>
                            <p className="red-text">{ authError }</p>
                        </div>
                    </form>
                </div>

                <div className="extra-info">
                    <p>
                        No account?
                        <Link to="/auth/signup" title="Sign Up">
                            {' '}
                            Sign up
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
    signIn : (creds) =>  dispatch(signIn(creds))
  }
}
const mapStateToProps = (state) => {
  return{
     authError : state.auth.authError,
     auth : state.firebase.auth
  }
}

export default connect(mapStateToProps,mapDispatchToProps)
(Login);
