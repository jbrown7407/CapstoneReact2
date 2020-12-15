import React, { Component } from "react";
import Meal from "./Meal";

export default class Card extends Component {
    handleChange(e) {
        this.setState({
          [e.target.id]: e.target.value,
        });
      }
    render() {
     
    return (
      <div>
        

         <h2>{this.props.id}</h2>
        <h2>{this.props.meal}</h2>
        <h2>{this.props.restlink}</h2>
            <h2>{this.props.pic}</h2>
               
         <h1> Display one above here</h1>
          {/* <h1>  <Meal meal={this.state.id[0].meal}/> </h1> */}
          
      </div>
    );
  }
}