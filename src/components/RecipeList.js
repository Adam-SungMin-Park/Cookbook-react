import React from 'react';
import Recipe from './Recipe';

export default function RecipeList({recipes}){
  return(
    <div className = "recipeList">
      <div>
        {recipes.map((recipe)=>{
          return(
            <Recipe
            key = {recipe.id}
            {...recipe}

            />
        )})}
      </div>
      <div className = "addRecipeListButtonContainer">
        <button className = "button button-primary">Add Recipe</button>
      </div>
    </div>
  )
}
