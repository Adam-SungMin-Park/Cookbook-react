import React,{useContext} from 'react';
import RecipeIngredientEdit from './RecipeIngredientEdit';
import { RecipeContext } from './App';
import { uuid } from 'uuidv4';

export default function RecipeEdit({recipe}){
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  function handleChange(changes){
    handleRecipeChange(recipe.id, {...recipe, ...changes})
  }
  function handleIngredientChange(id, ingredient){
    const newIngredient =[...recipe.ingredients]
    const index = newIngredient.findIndex(r => r.id === id)
    newIngredient[index] = ingredient
    handleChange({ingredients: newIngredient})

  }

  function handleIngredientDelete(id){
    handleChange({ingredients: recipe.ingredients.filter(i=>i.id !== id)})
  }
  function handleIngredientAdd(){
    const newIngredient = {
      id:uuid(),
      name:'',
      amount:''
    }
    handleChange({ingredients: [...recipe.ingredients,newIngredient]})
  }


  return(
    <div className = "recipeEdit">
      <div className ="recipeEditRemoveButtonContainer">
        <button className = "button recipeEditRemoveButton" onClick = {()=>handleRecipeSelect(undefined)}>&times;</button>
      </div>
      <div className = "recipeEditDetailsGrid">
        <label className= "recipeEditLabel"
          htmlFor= "name">
           Name
        </label>
        <input
          onInput ={(e=> handleChange({name : e.target.value}))}
          className= "recipeEditInput"
          type= "text"
          name = "name"
          id ="name"
          value = {recipe.name}

          />
        <label
          className= "recipeEditLabel"
          htmlFor= "cookTime">
            Cook Time
        </label>
        <input
        onInput ={(e=> handleChange({cookTime : e.target.value}))}
         className= "recipeEditInput"
         type= "text"
         name = "cookTime"
         id ="cookTime"
         value = {recipe.cookTime}/>
        <label
         className= "recipeEditLabel"
          htmlFor= "servings">
            servings
        </label>
        <input
        onInput ={(e=> handleChange({servings : parseInt(e.target.value) || ''}))}
         className= "recipeEditInput"
         type= "number"
         min = "1"
         name = "servings"
         id ="servings"
         value = {recipe.servings}/>
        <label
          className= "recipeEditLabel"
          htmlFor = "instructions">
           Instructions
        </label>
        <textarea
        onInput ={(e=> handleChange({instructions : e.target.value}))}
        className = "recipeEditInput"
        name = "instructions"
        id="instructions"
        value= {recipe.instructions}>

        </textarea>
      </div>
      <br/>
      <label className ="recipeEditLabel">Ingredients</label>
      <div className = "recipeEditIngredientGrid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map(ingredient =>(
          <RecipeIngredientEdit key ={ingredient.id} ingredient ={ingredient} handleIngredientChange = {handleIngredientChange} handleIngredientDelete = {handleIngredientDelete}/>

        ))}


      </div>
      <div className = "recipeEditAddIngredientButtonContainer">
        <button onClick ={()=> handleIngredientAdd()} className = "button button-primary">Add Ingredient</button>
      </div>
    </div>
  )
}
