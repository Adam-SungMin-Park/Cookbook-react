import React , {useContext} from 'react';
import Recipe from './Recipe';
import { RecipeContext } from './App';

export default function RecipeList({recipes}){

  const {handleRecipeAdd , handleRecipeDelete} = useContext(RecipeContext)


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
        <button
        onClick={handleRecipeAdd}
         className = "button button-primary"
         >
           Add Recipe
         </button>
      </div>
    </div>
  )
}
