import React, { Component } from "react";
// import Meal from "./Meal"

import Button from "react-bootstrap/Button";

export default class Swipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: this.props.meals, 
      currentMeal: {}
    };
    this.clicked2=this.clicked2.bind(this)
  }
  // console.log(this.state.meals)
    
  //when page loads, meals as an array
  mealArray = Object.values(this.props.meals) 
  //  mealArray.push(Object.values(this.state.meals))

  // x = 0
  // y = 0
  // meal1 = Object.values(this.props.meals)[x]
  // // console.log(typeof meal1)
  // meal2 = Object.values(this.props.meals)[y]
  // console.log(typeof mealArray)

   pullNewIndex = () => {
    let x = Math.ceil(Math.random() * (this.state.meals.length - 1))
    let y = Math.ceil(Math.random() * (this.state.meals.length - 1))
   }
  initialMeal = () => {
    this.setState({currentMeal: this.props.meals[0]})
  }
  

   clicked2 = () => {
    console.log("button was clicked")
    let x = Math.ceil(Math.random() * (this.state.meals.length - 1))
    // console.log(x)
    // console.log(this.state.meals[x])
    let meal1 = this.state.meals[x]
    console.log(meal1)
     this.setState({ currentMeal: meal1 })
     console.log(this.state.currentMeal.pic)
   }
  componentDidMount() {
    this.initialMeal()
  }
  // leftClick = () => {
  //   console.log("left click. add to dislike array for user")
  //   }
  // rightClick = () => {
  //       console.log("right click. add to favs array. option to link to restaurant")
  //   }
  
  changeMeal = () => {
    console.log("change meal")
  }


 ///// ERROR COMING FROM FUNCTION CALL
  // this.pullNewIndex()
  
  render() {
    return (
      <article className="card">
      
        {/* <img src={this.state.meals[this.state.currentMeal]} /> */}
        {console.log(this.state.currentMeal)}
        {/* set to value x */}

        <h1> Do you want: {this.state.currentMeal.meal}? </h1> 
           <img src={this.state.currentMeal.pic} />  
        <h1> <a href={this.state.currentMeal.restlink}> Click to Order</a> </h1>
        <h1> ID: {this.state.currentMeal.id} </h1>
    
        <Button className="jumbo" onClick={() => this.clicked2()} >SWIPE</Button>

        {/* <Button onClick={() => leftClick()} variant="primary">DISLIKE</Button>
        <Button onClick={() => rightClick()} variant="primary">LIKE</Button> */}
 
      </article>
    );
  }
}