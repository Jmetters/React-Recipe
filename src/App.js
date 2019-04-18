import React,  { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import './App.css';
import Recipes from "./components/Recipes";
import Header from "./components/Header";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel)


const api_key ="74c127ede31f802cc42b40cef9d46c3f";

class App extends Component {

  state ={
    recipes: []
  }

 getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=6`);

   const data = await api_call.json();

    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }
componentDidMount = () =>{

  const json = localStorage.getItem("recipes");
  const recipes= JSON.parse(json);
  this.setState({recipes:recipes});
}

  componentDidUpdate =() => {
const recipes = JSON.stringify(this.state.recipes);
localStorage.setItem("recipes", recipes );

  }

  render(){
    return (
<div>
<Header />
<Form getRecipe={this.getRecipe} />
<Recipes recipes={this.state.recipes} />




</div>
);
  }
}






export default App;
