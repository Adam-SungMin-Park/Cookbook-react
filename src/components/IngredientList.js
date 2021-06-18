import React from 'react';
import Ingredient from './Ingredient'

export default function IngredientList({ingredients}){

  const ingredientItems = ingredients.map(ingredient =>{
    return (
      <Ingredient
      key = {ingredient.id}
      {...ingredient}
      />
    )
  }

  )
  console.log(ingredients)


  return (
    <div>
      {ingredientItems}
    </div>
    )
}
