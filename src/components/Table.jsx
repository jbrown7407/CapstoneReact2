import React, { Component } from "react";
import Meal from "./Meal";

export default class Table extends Component {
  render() {
    return (
      <div>
        
          <table>
            <th> id </th> <th> Meal </th> <th> Restaurant Link </th> <th> Pic </th> <th>  </th>{" "}
          {" "}
          {this.props.meals.map((meal) => {
            return <Meal meal={meal} deleteMeal={this.props.deleteMeal} />;
          })}{" "}
          {" "}
          </table>
      </div>
    );
  }
}