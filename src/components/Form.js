
import React from 'react';

const Form = props => (
<div className="Search">
<form onSubmit={props.getRecipe} style={{ marginBottom:"2rem"}}>
<input className="form_input" type="text" name="recipeName" >

</input>
<button className="button_styling">Search</button>
</form>
</div>

)


export default Form;