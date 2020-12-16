import React, { Component } from "react";
import Meal from "./Meal"

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
    console.log(typeof this.state.meals.data[1])
    //when page loads, meals as an array
    let mealArray = []
     mealArray.push(Object.values(this.state.meals))
    console.log(typeof mealArray)
    
    return (
      <div>
        {/* loop through items. SHOW JUST FIRST ITEM
         if this.handleclick left => dotn want (restart loop and i++)
        else this.handleclick right => do this isntead (push to favorites array and then i++) */}
         
      
         
         
      </div>
    );
  }
}