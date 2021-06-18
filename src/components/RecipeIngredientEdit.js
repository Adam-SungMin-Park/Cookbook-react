import React from 'react';


export default function RecipeIngredientEdit({ingredient , handleIngredientChange ,handleIngredientDelete}){

  function handleChange(changes){
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return(
    <>
      <input className = "recipeEditInput" type = "text" value = {ingredient.name} onInput ={(e)=>handleChange({name : e.target.value})}/>
      <input className = "recipeEditInput" type = "text" value = {ingredient.amount} onInput ={(e)=>handleChange({amount : e.target.value})}/>
      <button onClick = {()=>handleIngredientDelete(ingredient.id)} className = "button button-danger">&times;</button>

    </>
  )
}
