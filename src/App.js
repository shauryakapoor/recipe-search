import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import { async } from 'q';
import Recipes from "./components/Recipes";

//Always a good idea to store your imported data into a constant 
const API_KEY = "499f59092da31cfd528fe53ff3119a93";

//https://www.food2fork.com/api/search?key=&q=shredded%20chicken&count=5


class App extends Component {
  state = {
    recipes: []
  }
  //This method will be responsible for making the API call 
  //In the new React you can even declare a state without a constuctor function
  //e is the event object in JS not React 
  //Will make use of Acincobait and fetch API to make a call to call
  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch
    (`http://cors-anywhere.herokuapp.com/https://www.food2fork.com`
    + `/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await api_call.json();
    //console.log(data.recipes[0].recipe_id);
    this.setState({recipes: data.recipes});
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;