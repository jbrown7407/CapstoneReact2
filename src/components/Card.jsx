import React, { Component } from "react";
import Meal from "./Meal";

export default class Card extends Component {
  
    render() {
        let data = this.props.meals  
        return (
            <div>
                {  console.log(data) }
          Logging
              
          <Meal key="id"ukiy76></Meal>
            </div>
        )
    }
}
