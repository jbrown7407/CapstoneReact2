import React, { Component } from "react";

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
    fetch("http://localhost:8000/api/v1/meals/", {
      method: "POST",
      body: JSON.stringify({
        id: this.state.id,
        meal: this.state.meal,
        restlink: this.state.restlink,
        pic: this.state.pic,
      }),
      headers: {
        "Content-Type": "application/json",
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
       <div>
        <h2>{this.state._id}</h2>
        <h2>{this.state.meal}</h2>
        <h2>{this.state.restlink}</h2>
        <h2>{this.state.pic}</h2>
  

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="id">
            ID:
            <input
              type="text"
              name="_id"
              id="_id"
              onChange={this.handleChange}
              value={this.state._id}
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

          <input type="submit" value="Save changes" />
        </form>
        </div>
    );
  }
}
