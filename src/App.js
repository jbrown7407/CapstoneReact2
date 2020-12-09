import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import Table from "./components/Table";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import swipeDisplay from "./components/swipeDisplay";
import Header from "./components/Header";

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
    fetch("http://localhost:8000/api/v3/meals/")
      .then((data) => {
        // console.log(data);
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
    this.getMeals();
  }

  render() {
    return (
      
<div>


      <Router>
      <div className="containerz">
        
       <Header></Header>
            <Switch className="container">
              
            <Route exact path="/new">
              <Table meals={this.state.meals} deleteMeal={this.deleteMeal} />
              <Form addMeal={this.addMeal} />{" "}
            </Route>

              <Route exact path="/:id" component={EditForm}></Route>
              
            <Route
              path="/:id"
              render={(props) => <EditForm {...props} getMeals={this.getMeals} />}
              ></Route> 
              
              <Route path="/meal" component={Banner} >Meal</Route> 
              
              <Route path="/swipe" component={swipeDisplay} >Swipe</Route> 
              
            <Route path="/fullist" component={Banner} >Full List   <Table meals={this.state.meals} deleteMeal={this.deleteMeal} /></Route> 
            <Route path="/">
              Home</Route> 
           
          </Switch>
          <Footer></Footer>
        </div>
        </Router>
        </div>
    );
  }
}
