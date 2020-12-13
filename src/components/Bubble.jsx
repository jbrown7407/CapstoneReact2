import React from 'react'

export default function Bubble() {
    <div>
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
  leftClick() {
console.log("left click. add to dislike array for user")
  }
  rightClick() {
    console.log("right click. add to favs array. option to link to restaurant")
  }

  render() {
    return (
        
    
      <ul>
        
     <li className="bubble"> <img src={this.props.meal.pic}></img> <br />  LINK:  <Link to={"/" + this.props.meal._id}>{this.props.meal.meal}</Link><br />
          
     ID: {this.props.meal.id} <br />
        Meal: {this.props.meal.meal} <br />
        Restlink: <a href={this.props.meal.restlink} target="_blank">Link to Restaurant</a><br />
          RestName: To Add
        <br />
          {/* destructure props */}
          



       
 <button className="left" onClick={this.leftClick}>Left</button>
  <button className="right" onClick={this.rightClick}>Right</button>     <br />   <br />  
         DELETE: <button onClick={this.handleClick}>X</button>
          </li> 
       
      </ul>
    );
        </div>
    )
}
