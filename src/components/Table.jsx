import React, { Component } from "react";
import Meal from "./Meal";

export default class Table extends Component {
  render() {
    return (
      <div>
        
         
          {" "}
          {this.props.meals.map((meal) => {
            return <Meal meal={meal} deleteMeal={this.props.deleteMeal} />;
          })}{" "}
          {" "}
          
      </div>
    );
  }
}