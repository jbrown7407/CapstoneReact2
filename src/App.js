import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import EditForm from "./components/EditForm"; //jss extension is auto
import Form from "./components/Form";
import Table from "./components/Table";
import NavTop from "./components/NavTop";
import UserName from "./components/UserName";
import Swipe from "./components/Swipe";
// import Login from "./components/Login";
import Card from "./components/Card";
// import Meal from "./components/Meal";

// import {meals} from "./components/Meals";



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [],
    };
    this.getMeals = this.getMeals.bind(this);
    this.addMeal = this.addMeal.bind(this);
    this.deleteMeal = this.deleteMeal.bind(this);
  }

  addMeal(newMeal) {
    this.setState({
      meals: [...this.state.meals, newMeal.data],
    });
  }

  deleteMeal(json) {
    const id = parseInt(json.data);
    const index = this.state.meals.findIndex((meal) => meal.id === id);
    console.log(index);
    let copyMeals = [...this.state.meals];
    copyMeals.splice(index, 1);
    console.log(copyMeals);
    this.setState({
      meals: copyMeals,
    });
  }
  getMeals() {
    fetch("http://localhost:8000/api/v1/meals/")
      .then((data) => {
        console.log(data);
        return data.json();
      })
      .then((json) => {
        console.log(json);
        this.setState({
          meals: json.data,
        });
      });
  }

  componentDidMount() {
    this.getMeals(); //API call occurs when getMeals is called
  }

  render() {
    return (

      <Router>
     
        <div>
          <NavTop></NavTop>
        
  
           
          <Switch>
              
            <Route exact path="/new">     
              <Form addMeal={this.addMeal} />{" "}
            </Route>

            {/* <Route exact path="/e/:id" component={EditForm}></Route> */}
              
            <Route
              path="/e/:id"
              render={(props) => <EditForm {...props} getMeals={this.getMeals} />}
            ></Route> 
              
            <Route path="/login">Login
             {/* <Login></Login> */}
               <UserName />
            </Route> 
            
            <Route path="/swipe" >
            <Card></Card>
              <Swipe></Swipe>
              <Table meals={this.state.meals} deleteMeal={this.deleteMeal}></Table>
             </Route> 
            
            <Route path="/fulllist">
              FULL LIST <Table meals={this.state.meals} deleteMeal={this.deleteMeal}></Table>
            </Route> 

            <Route path="/">
              HOME
          <Table meals={this.state.meals} deleteMeal={this.deleteMeal}></Table>
          </Route> 
           
          </Switch>
       
        </div>
        </Router>
    
    );
  }
}
