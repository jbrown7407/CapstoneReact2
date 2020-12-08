import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import EditForm from "./components/EditForm";
import Form from "./components/Form";
import Table from "./components/Table";

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
        <h3> Dinnder </h3>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Table meals={this.state.meals} deleteMeal={this.deleteMeal} />
              <Form addMeal={this.addMeal} />{" "}
            </Route>
            {/* <Route exact path="/:id" component={EditForm}></Route> */}
            <Route
              path="/:id"
              render={(props) => <EditForm {...props} getMeals={this.getMeals} />}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
