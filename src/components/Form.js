
import React from 'react';

const Form = props => (
<div>
<form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>
<input type="text" name="recipeName" >

</input>
<button>Search</button>
</form>
</div>

)


export default Form;