/**
 * ./src/components/home/body
 */

import React, { Component } from 'react';
import type from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Preloader from '../assistants/preloader';
import { Container, Card } from 'reactstrap';
import moment from 'moment';

class Body extends Component {
    
    render() {

        const{ posts, auth } = this.props;
        console.log(posts);
        return (
        <Container className="containercss2">
        {
         posts && posts.map( post =>{
             console.log(post);
            // planned_made : '',
            //problems_faced : '',
            //overcome_strategies : '',
           // auth_message : ''
           return(
             //<Link to={'/story/'+post.id }  key={post.id}>
              <Card className="card">
                <div className="col s12">
                 <ul className="list-inline">
                    <li className="list-inline-item"><span>{ post.authorUsername }</span>
                    </li>
                    <li className="list-inline-item"><small>{ moment(post.createdAt.toDate()).calendar() } </small>
                    </li>
                 </ul>
                 <p>Current Status : {post.current_status}</p>
                 <p>Dreamed for : {post.dreamed_for}</p>
                 <b>Planned made : </b>
                 <p>{ post.planned_made }</p>
                 <b>Problems faced : </b>
                 <p>{ post.problems_faced }</p>
                 <b>Overcome strategies : </b>
                 <p>{ post.overcome_strategies }</p>
                </div>
                </Card>
             //</Link>
           )
         })
       }
       </Container>
      );
    }
}

const mapStateToProps = (state) =>{
  console.log(state);
  return{
    posts : state.firestore.ordered.posts,
    auth : state.firebase.auth
  }
}

export default compose(connect(mapStateToProps),firestoreConnect([{collection : 'posts' ,  orderBy : [ 'createdAt' , 'desc' ]}]))
(Body);
