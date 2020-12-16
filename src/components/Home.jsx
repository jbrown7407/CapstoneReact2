import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

export default function Home() {
    function clicked() {
        console.log("button was clicked") //LEARN MORE BUTTON FUNCTION
    }
    return (
        <div>
            <Jumbotron>
  <h1>Hello, User!</h1>
  <p>
    This is a simple food Tinder App. Swipe Right on food to find restaurants near you!
  </p>
  <p>
    <Button onClick={() => clicked()} variant="primary">Learn more</Button>
  </p>
</Jumbotron>
        </div>
    )
}
