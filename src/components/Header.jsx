import React, { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
      return (
      <div>
      <div className="banner">
        {/* <div className="Banner"> */}
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
            to="/inventory"
            // products={this.props.products}
            // deleteProduct={this.deleteProduct}
          >
            <ListGroup.Item>Inv</ListGroup.Item>
          </Link>
          <Link to="/extra">
            <ListGroup.Item>Extra</ListGroup.Item>
          </Link>
          <Link to="/favorites">
            <ListGroup.Item>Favs</ListGroup.Item>
          </Link>
        </ListGroup>

       
        </div>


        <br />
        {/* <img ClassName="logo"  alt=""/>
            <i className="fa fa-shopping-cart"></i>
            <div className="navbar">
         
      
        
       </div> */}

        {/* </div> */}

        {/* <div className="SearchBar">
          <form onSubmit={this.handleSubmit}>
            <input type="search" name="search" placeholder="Search.."></input>
            <input type="submit" value="Search" />
            <i type="submit" className="fa fa-search"></i>
          </form>
        </div>
      </div > */}
        </div>
    );
  }
}