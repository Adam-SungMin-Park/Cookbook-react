import React, {useState} from 'react';
import IngredientList from './IngredientList';
import Ingredient from './Ingredient';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import '../css/app.css'
import { uuid } from 'uuidv4';


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
        },

      ]
    },

  ]
  const [recipes, setRecipes] = useState(sampleRecipes);


  function handleRecipeAdd(){
    const newRecipe = {
      id:uuid(),
      name:"New",
      servings:1,
      cookTime:"1:00",
      instructions:"intructions",
      ingredients:[
        {
          id:uuid(),
          name:'Name',
          amount:"1 kg"
        }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }

 console.log(recipes)
  return (

    <>
      <RecipeList
        recipes = {sampleRecipes}
        handleRecipeAdd = {handleRecipeAdd}
      />

    </>

  )


}

export default App;
