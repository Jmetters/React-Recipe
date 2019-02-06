import React from 'react';

import { Link } from "react-router-dom"; 

const api_key ="74c127ede31f802cc42b40cef9d46c3f";


class Recipe extends React.Component {

	state = {
		activeRecipe: []
	}

	componentDidMount = async () => {
		
    
    const title = this.props.location.state.recipe;

    const req = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${title}`);

   const res = await req.json();
    
this.setState({ activeRecipe: res.recipes[0] });
	console.log(this.state.activeRecipe);
}

render() {
const recipe= this.state.activeRecipe;
	return(
	
	<div className="container">
	<div className="active-recipe">
	<img className="active-recipe-image" src={recipe.image_url} alt={recipe.title} />
	<div className="active-title">Title:<span> {recipe.title}</span></div>
	<div className="active-website">Website:<span><a href={recipe.publisher_url}> {recipe.publisher_url}</a></span></div>
	<div className="active-website"></div>

<div className="recipe-active-button">
	<button>
	<Link to="/">Home</Link>
	</button>
	</div>



	</div>
	</div>

);
}

}

	export default Recipe;