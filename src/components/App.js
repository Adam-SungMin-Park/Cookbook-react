import React, {useState} from 'react';
import IngredientList from './IngredientList';
import Ingredient from './Ingredient';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import '../css/app.css'




function App() {
  const sampleRecipes =[
    {
      id:1,
      name: 'Chicken food',
      servings: 3,
      cookTime: '1:00',
      instructions:
      "1. first\n2. second\n3. third ",
      ingredients:[
        {
          id:1,
          name:"Chicken",
          amount: "3 kg"
        },
        {
          id:2,
          name:"Salt",
          amount: "3 tbs"
        }
      ]
    },
    {
      id:2,
      name: 'Pork food',
      servings: 30,
      cookTime: '5:00',
      instructions:
      "1. FIRST\n2. SECOND\n3. THIRD ",
      ingredients:[
        {
          id:3,
          name:"Pork",
          amount: "6 kg"
        },
        {
          id:4,
          name:"Paprika",
          amount: "3 tbs"
        }
      ]
    }
  ]



  return (
    <>
      <RecipeList
        recipes = {sampleRecipes}
      />

    </>

  )


}

export default App;
