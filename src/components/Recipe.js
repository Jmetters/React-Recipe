import React from 'react';


const api_key ="74c127ede31f802cc42b40cef9d46c3f";

class Recipe extends React.Component{

	state= {
		activeRecipe: []
	}

	componentDidMount = () =>{

const title = this.props.loation.state.recipe;

    const req= await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${api_key}&q=${recipeName}&count=10`);

   const res = await req.json();
    
    this.setState({activeRecipe: res.recipes[0] })
    console.log(this.state.activeRecipe);

	}
render(){
console.log("works");
return(
<div class="container">

</div>

	);

}


}

	export default Recipe;