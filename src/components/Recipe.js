import React from 'react';
import IngredientList from './IngredientList';

export default function Recipe({name, cookTime, servings, instructions, ingredients}){
  return(
    <div className = "recipe">
      <div className = "recipeHeader">
        <h3 className = "recipeTitle">{name}</h3>
        <div>
          <button className = "button button-primary mr-1">Edit</button>
          <button className = "button button-danger">Delete</button>
        </div>
      </div>
        <div className = "recipeRow">
          <span className = "recipeLabel">Cook Time:</span>
          <span className ="recipeValue">{cookTime}</span>
        </div>
        <div className = "recipeRow">
          <span className = "recipeLabel">Servings :</span>
          <span className ="recipeValue">{servings}</span>
        </div>
        <div className = "recipeRow">
          <span className ="recipeLabel">Instructions: </span>
          <div className ="recipeValue recipeValueIndented recipeInstructions" >
            {instructions}
          </div>
        </div>
        <div className = "recipeRow">
          <span className ="recipeLabel">Ingredient: </span>
          <div className ="recipeValue recipeValueIndented" >
            <IngredientList ingredients = {ingredients}/>
          </div>
        </div>
      </div>

  )


}
