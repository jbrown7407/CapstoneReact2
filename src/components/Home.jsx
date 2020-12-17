import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

export default function Home() {
    function clicked() {
        console.log("button was clicked") //LEARN MORE BUTTON FUNCTION
    }
    return (
      <div>
           <ListGroup vertical className="list">
  <Link to="/swipe" className="pop">
            <ListGroup.Item><h2 className="pop">Begin</h2></ListGroup.Item>
              </Link>
              </ListGroup>
            <Jumbotron>
  <h1>Hello, User!</h1>
  <p>
    This is a simple food Tinder App. Swipe Right on food to find restaurants near you!
  </p>
          <p>
       
  </p>
</Jumbotron>
        </div>
    )
}
