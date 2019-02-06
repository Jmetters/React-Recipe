import React from 'react';

import { Link } from "react-router-dom";



const Recipes = props => (
	<div className="container">
	<div className="row">

{ props.recipes.map((recipe) => {

  return (
  	<div key={recipe.title} className="col-md-4 home_page" style={{marginBottom:"2rem"}}>
  	<div className="recipe_cards">
  	<img 
  	src={recipe.image_url} 
  	alt={recipe.title} />
  	<div className="recipe_text">
  	<h5 className="recipes_title">
  	{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}..`}
  	</h5>
  	<p className="recipes_subtitle">Chef:<span> {recipe.publisher} </span></p>
  	</div>

   <button className="button_styling">
   <Link to={{ 
    pathname: `/Recipe/${recipe.recipe_id}`,

    state: {recipe: recipe.title}

  }}>
View recipe
   </Link > 
   </button>
   
    </div>
    </div>
    );
} )}
</div>
</div>

	);

export default Recipes;