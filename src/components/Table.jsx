import React, { Component } from "react";
import Meal from "./Meal";

export default class Table extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <th> Name </th> <th> Owner </th> <th> Breed </th> <th> Delete </th>{" "}
          </thead>{" "}
          {this.props.meals.map((meal) => {
            return <Meal meal={meal} deleteMeal={this.props.deleteMeal} />;
          })}{" "}
        </table>{" "}
      </div>
    );
  }
}