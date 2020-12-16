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

    console.log(this.state.meals)
    
    //when page loads, meals as an array
    let mealArray = Object.values(this.props.meals)
    //  mealArray.push(Object.values(this.state.meals))
    // let x = this.state.index
    let x = 0
    let y = 0

    function pullNewIndex() {
      x = Math.ceil(Math.random() * (mealArray.length-1))
      y = Math.ceil(Math.random() * (mealArray.length-1))
    }
    pullNewIndex()
    const meal1 = mealArray[x]
    console.log(typeof meal1)
    const meal2 = mealArray[y]
    console.log(typeof mealArray)
    //state tracks current
    function buttonClicked() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        x = x + 1
        console.log(x)
      }
    }
    // leftClick() {
    //   console.log("left click. add to dislike array for user")
    //     }
    //   rightClick() {
    //       console.log("right click. add to favs array. option to link to restaurant")
    //     }
    return (
      <article className="card">
        {/* loop through items. SHOW JUST FIRST ITEM
         if this.handleclick left => dotn want (restart loop and i++)
        else this.handleclick right => do this isntead (push to favorites array and then i++) */}
          
      
        {/* <h1> {this.state.index} </h1> */}
         <img src={meal1.pic} /> 
        <h1> <a href={meal1.restlink}> Link to Order</a> </h1>
        <h1> ID: {meal1.id} </h1>
        <h1> Food: {meal1.meal} </h1>

 <button><a href="#" onClick={buttonClicked}>UP</a> </button>
        <button> Dislike </button>
        <button> Favorite </button>
       
      </article>
    );
  }
}