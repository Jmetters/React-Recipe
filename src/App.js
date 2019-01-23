import React,  { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import './App.css';
import Recipes from "./components/Recipes";
import Header from "./components/Header";


const api_key ="74c127ede31f802cc42b40cef9d46c3f";

class App extends Component {

  state ={
    recipes: []
  }

 getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=10`);

   const data = await api_call.json();
    
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
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
