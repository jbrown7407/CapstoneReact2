import React, { Component } from "react";
import Meal from "./Meal";

export default class Card extends Component {
    render() {
        return (
            <div>
                {  console.log(this.props.meals) }
          Logging
              
          <Meal key="id"></Meal>
            </div>
        )
    }
}
