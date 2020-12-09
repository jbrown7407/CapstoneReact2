import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Meal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    fetch("http://localhost:8000/api/v1/meals/" + this.props.meal.id, {
      method: "DELETE",
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.props.deleteMeal(json);
      });
  }
  leftClick() {
console.log("left click")
  }
  rightClick() {
    console.log("right click")
  }

  render() {
    return (
      <ul>
        
     <li className="bubble"> <div className="container"><img src={this.props.meal.pic}></img></div> <br />  LINK:  <Link to={"/" + this.props.meal._id}>{this.props.meal.meal}</Link><br />
          
       
        Meal: {this.props.meal.meal} <br />
        Restlink: <a href={this.props.meal.restlink}>Link to Restaurant</a><br />
        <br />
          



       
 <button className="left" onClick={this.leftClick}>Left</button>
  <button className="right" onClick={this.rightClick}>Right</button>     <br />   <br />  
         DELETE: <button onClick={this.handleClick}>X</button>
          </li> 
       
      </ul>
    );
  }
}
