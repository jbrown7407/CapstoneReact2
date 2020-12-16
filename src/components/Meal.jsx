import React, { Component } from "react";


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
console.log("left click. add to dislike array for user")
  }
rightClick() {
    console.log("right click. add to favs array. option to link to restaurant")
  }
     
  render() {
    return (
 
        
     <article className="bubble"> <img src={this.props.meal.pic} alt="nope"></img> <br />  <br />
          
     ID: {this.props.meal.id} <br />
        Meal: {this.props.meal.meal} <br />
        Restlink: <a href={this.props.meal.restlink} target="_blank" rel="noreferrer">Link to Restaurant</a><br />
          {/* RestName: To Add */}
        <br />
         
          
 <button className="left" >Left</button>
  <button className="right" >Right</button>     <br />   <br />  
         <button onClick={this.handleClick}>DELETE</button>
      </article> 
      
      // { if (this.props.meal.id != 1) }
 
    );
  }
}
