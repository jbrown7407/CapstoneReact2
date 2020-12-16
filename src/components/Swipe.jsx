import React, { Component } from "react";
// import Meal from "./Meal"

export default class Swipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      meals: this.props.meals
    };
   
  }

  render() {
    let randomNum = 1
    console.log(this.state.meals)
    
    //when page loads, meals as an array
    let mealArray = Object.values(this.props.meals)
    //  mealArray.push(Object.values(this.state.meals))
    // let x = this.state.index
    let x= 1
    const meal1 = mealArray[x]
    console.log(typeof meal1)
    const meal2 = mealArray[2]
    console.log(typeof mealArray)
    //state tracks current
     
    return (
      <div>
        {/* loop through items. SHOW JUST FIRST ITEM
         if this.handleclick left => dotn want (restart loop and i++)
        else this.handleclick right => do this isntead (push to favorites array and then i++) */}
          
      X
        <h1> {this.state.index} </h1>
        <h1> <img src={meal1.pic}/> </h1>
        <h1> {meal1.id} </h1>
        <h1> {meal1.meal} </h1>
        <h1> <a href={meal1.restlink}> Link to</a> </h1>
      </div>
    );
  }
}