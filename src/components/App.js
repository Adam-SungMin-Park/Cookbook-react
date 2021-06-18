import React, {useState,  useEffect} from 'react';
import RecipeList from './RecipeList';
import RecipeEdit from './RecipeEdit';
import '../css/app.css'
import { uuid } from 'uuidv4';

export const RecipeContext = React.createContext();
const localStorageKey = 'ReactCooking.Recipes'

function App() {
    const [recipes, setRecipes] = useState(sampleRecipes);
    const [selectedRecipeId, setSelectedRecipeId] = useState()
    const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)
    useEffect(()=>{
          const recipeJSON = localStorage.getItem(localStorageKey)
          if(recipeJSON !== null) setRecipes(JSON.parse(recipeJSON))
        },[])

    useEffect(()=>{
      localStorage.setItem(localStorageKey,JSON.stringify(recipes))
      return ()=>{
      }
    },[recipes])

    console.log(selectedRecipe)
    const RecipeContextValue = {
      handleRecipeAdd ,
      handleRecipeDelete :handleRecipeDelete,
      handleRecipeSelect,
      handleRecipeChange
    }

  function handleRecipeSelect(id){
    setSelectedRecipeId(id);
  }

  function handleRecipeAdd(){
    const newRecipe = {
      id:uuid(),
      name:"",
      servings:'',
      cookTime:"",
      instructions:"",
      ingredients:[
        {
          id:uuid(),
          name:'',
          amount:""
        }
      ]
    }
    setSelectedRecipeId(newRecipe.id)
    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeChange(id,recipe){
    const newRecipes =[...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)

  }

  function handleRecipeDelete(id){
    if(selectedRecipeId !== null && selectedRecipeId ===id){
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (

    <RecipeContext.Provider value = {RecipeContextValue}>
      <RecipeList
        recipes = {recipes}
        handleRecipeAdd = {handleRecipeAdd}
        handleRecipeDelete = {handleRecipeDelete}
      />
      {selectedRecipe &&
      <RecipeEdit
        recipe = {selectedRecipe}
      />}
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
      "1. Fourth\n2. Fifth\n3. Sixth ",
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
