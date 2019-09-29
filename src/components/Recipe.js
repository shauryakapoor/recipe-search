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
        this.setState({ activeRecipe: res.recipes[0] })
        console.log(this.state.activeRecipe);
    }
    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                <div className="active-recipe">
                    <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title} />
                </div>
            </div>
        );
    }
};

export default Recipe;