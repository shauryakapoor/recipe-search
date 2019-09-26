import React from 'react';

//creating a stateless functional componenet instead of a class base component
//this keyword only works in class based components 
//so we simply pass an argument  
const Form = props => (
    <form onSubmit={props.getRecipe}>
        <input type="text"/>
        <button>Search</button>
    </form>
);

export default Form;