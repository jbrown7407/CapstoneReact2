import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      restlink: "",
      pic: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/v1/meals/" + this.props.match.params.id)
      .then((data) => {
        // console.log(data);
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          id: json.data._id,
      meal: json.data.meal,
          restlink: json.data.restlink,
          pic: json.data.pic,
        
        });
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.match.params.id);
    fetch("http://localhost:8000/api/v1/meals/" + this.props.match.params.id, {
      method: "PUT",
      body: JSON.stringify({
        id: this.state._id,
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
        this.setState({
          redirect: true,
        });
        this.props.getMeals();
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
          <label htmlFor="meal">
          meal:
            <input
              type="text"
              name="meal"
              id="meal"
              onChange={this.handleChange}
              value={this.state.meal}
            />
          </label>
          <label htmlFor="restlink">
            Price:
            <input
              type="text"
              name="restlink"
              id="restlink"
              onChange={this.handleChange}
              value={this.state.restlink}
            />
          </label>
          
          <label htmlFor="pic">
            Image:
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
        {this.state.redirect && <Redirect to="/" />}
      </div>
    );
  }
}