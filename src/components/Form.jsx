import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      meal: "",
      restlink: "",
     
      pic: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://dinnder-api.herokuapp.com/api/v1/meals", {
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        id: this.state.id,
        meal: this.state.meal,
        restlink: this.state.restlink,
        pic: this.state.pic,
        // restname: this.state.restname
      }),
      headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin':'*'
      },
    })
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.props.addMeal(json);
      });

    this.setState({
      id: "",
      meal: "",
      restlink: "",
      pic: "",
    });
   
  }

  render() {
    return (
       <div className="container">
        <h2>{this.state.id}</h2>
        <h2>{this.state.meal}</h2>
        <h2>{this.state.restlink}</h2>
        <h2>{this.state.pic}</h2>
  

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">
            ID:
            <input
              type="number"
              name="id"
              id="id"
              onChange={this.handleChange}
              value={this.state.id}
            />
          </label>
          <label htmlFor="meal">
          Meal:
            <input
              type="text"
              name="meal"
              id="meal"
              onChange={this.handleChange}
              value={this.state.meal}
            />
          </label>
          <label htmlFor="restlink">
           Restaurant:
            <input
              type="text"
              name="restlink"
              id="restlink"
              onChange={this.handleChange}
              value={this.state.restlink}
            />
          </label>
          <label htmlFor="pic">
            Pic:
            <input
              type="text"
              name="pic"
              id="pic"
              onChange={this.handleChange}
              value={this.state.pic}
            />
          </label>

        <input type="submit" value="New Meal"></input>
        </form>
        {this.state.redirect && <Redirect to="/" />}
        </div>
    );
  }
}
