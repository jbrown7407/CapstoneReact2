import React, { Component } from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";


export default class NavTop extends Component {
    render() {
        return (
            <div className="NavTop">
            <div className="banner">
          <div id="navbar">
          <ListGroup horizontal className="list">
          <Link to="/">
            <ListGroup.Item>Home</ListGroup.Item>
          </Link>
          <Link to="/swipe">
            <ListGroup.Item>Swipe</ListGroup.Item>
          </Link>
          <Link to="/new">
            <ListGroup.Item>New</ListGroup.Item>
          </Link>
          <Link
            to="/fulllist"
          >
            <ListGroup.Item>Full List</ListGroup.Item>
          </Link>
          <Link to="/login">
            <ListGroup.Item>Login</ListGroup.Item>
          </Link>
        
                        </ListGroup>
                      
</div>  <h1 class="logo2"> Dinnder </h1>
            </div> </div>
        )
    }
}
