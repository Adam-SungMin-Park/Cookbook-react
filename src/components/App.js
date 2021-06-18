import React, {useState,  useEffect} from 'react';
import IngredientList from './IngredientList';
import Ingredient from './Ingredient';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css'
import { uuid } from 'uuidv4';

export const RecipeContext = React.createContext();
const localStorageKey = 'ReactCooking.Recipes'

function App() {
    const [recipes, setRecipes] = useState(sampleRecipes);
    useEffect(()=>{
          const recipeJSON = localStorage.getItem(localStorageKey)
          if(recipeJSON !== null) setRecipes(JSON.parse(recipeJSON))
        },[])

    useEffect(()=>{
      localStorage.setItem(localStorageKey,JSON.stringify(recipes))
      return ()=>{
      }
    },[recipes])



    const RecipeContextValue = {
      handleRecipeAdd ,
      handleRecipeDelete :handleRecipeDelete
    }
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

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (

    <RecipeContext.Provider value = {RecipeContextValue}>
      <RecipeList
        recipes = {recipes}
        handleRecipeAdd = {handleRecipeAdd}
        handleRecipeDelete = {handleRecipeDelete}
      />
      <RecipeEdit/>
    </RecipeContext.Provider>



  )


}
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

export default App;
