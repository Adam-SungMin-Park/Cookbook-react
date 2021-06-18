import React from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';

export default function RecipeEdit(){
  return(
    <div className = "recipeEdit">
      <div className ="recipeEditRemoveButtonContainer">
        <button className = "button recipeEditRemoveButton">&times;</button>
      </div>
      <div className = "recipeEditDetailsGrid">
        <label className= "recipeEditLabel"
          htmlFor= "name">
           Name
        </label>
        <input
          className= "recipeEditInput"
          type= "text"
          name = "name"
          id ="name"/>
        <label
          className= "recipeEditLabel"
          htmlFor= "cookTime">
            Cook Time
        </label>
        <input
         className= "recipeEditInput"
         type= "text"
         name = "cookTime"
         id ="cookTime"/>
        <label
         className= "recipeEditLabel"
          htmlFor= "servings">
            servings
        </label>
        <input
         className= "recipeEditInput"
         type= "number"
         min = "1"
         name = "servings"
         id ="servings"/>
        <label
          className= "recipeEditLabel"
          htmlFor = "instructions">
           Instructions
        </label>
        <textarea
        className = "recipeEditInput"
        name = "instructions"
        id="instructions">
        </textarea>
      </div>
      <br/>
      <label className ="recipeEditLabel">Ingredients</label>
      <div className = "recipeEditIngredientGrid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit/>
        <RecipeIngredientEdit/>

      </div>
      <div className = "recipeEditAddIngredientButtonContainer">
        <button className = "button button-primary">Add Ingredient</button>
      </div>
    </div>
  )
}
