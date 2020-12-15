import React from 'react'



export default function Card() {
    const pic = "url.image.com"
    const restlink = "Arby's"
    // const restLink = "url.rest.com"
    const meal = "burger"
    const id = "9"

    const Meal = ({ img, title, author }) => {
        
    
    

    return (
        <div>
            Card
           Pic <img>{this.props.pic}</img>
           RestName: <h1>{restlink}</h1>
           {/* Link: <h1>{restlink}</h1> */}
           Meal <h3>{meal}</h3>
           ID: <h3>{id}</h3>
        
            
           <div className="bubble"> <img src={this.props.Meal.pic}></img> <br />  LINK:  <br />
          
          ID: {this.props.Meal.id} <br />
             Meal: {this.props.Meal.meal} <br />
             Restlink: <a href={this.props.Meal.restlink} target="_blank">Link to Restaurant</a><br />
                </div>
             <br />
        </div>
    )
}
