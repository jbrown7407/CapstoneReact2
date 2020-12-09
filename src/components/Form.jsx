import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      meal: "",
      price: "",
      restaurant: "",
      image: "",
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
        price: this.state.price,
        restaurant: this.state.restaurant,
        image: this.state.image,
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
      name: "",
      owner: "",
      breed: "",
    });
  }

  render() {
    return (
       <div>
        <h2>{this.state._id && this.state._id}</h2>
  

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
          <label htmlFor="name">
          Name:
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
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
