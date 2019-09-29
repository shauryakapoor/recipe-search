import React from 'react';
import { async } from 'q';

const API_KEY = "499f59092da31cfd528fe53ff3119a93";

class Recipe extends React.Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const req = await fetch
        (`http://cors-anywhere.herokuapp.com/https://www.food2fork.com`
        + `/api/search?key=${API_KEY}&q=${title}`);
        const res = await req.json();
        console.log(res.recipes[0]);
    }
    render() {
        console.log(this.props);
        return (
            <div>Recipe Component!</div>
        );
    }
};

export default Recipe;