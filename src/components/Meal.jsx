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

  render() {
    return (
      <tr>
        <td>
          <Link to={"/" + this.props.meal.id}>{this.props.meal.meals}</Link>
          {/* #plural? */}
        </td>
        <td>{this.props.meal.id}</td>
        <td>{this.props.meal.name}</td>
        <td>{this.props.meal.restlink}</td>
        <td>{this.props.meal.pic}</td>

       

        <td>
          <button onClick={this.handleClick}>X</button>
        </td>
      </tr>
    );
  }
}
