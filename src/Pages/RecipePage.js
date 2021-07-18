import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { getRecipeById } from '../Api/get';
import Loading from '../Components/Loading';
import '../CSS/RecipePage.css';

function RecipePage({ match: { params: { recipeId } } }) {
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRecipeById(recipeId)
    .then((response) =>  { 
      setRecipe(response);
      ingredientList(response);
     })
  }, [recipeId])

  const ingredientList = (recipe) => {
    const ingredientsArray = []
    for (let i = 1; i <= 20; i += 1) {
      ingredientsArray.push(recipe[`ingredient${i}`])
    }
    setIngredients(ingredientsArray);
  }

  if(recipe.message === 'recipe not found') {
    return (
      <div className="recipe-page-container">
        <h2>Recita não encontrada</h2>
      </div>
    )
  }

  if (recipe.length === 0 || ingredients.length === 0) {
    return <Loading />
  }

  return (
    <div className="recipe-page-container">
      <h1>{ recipe.name }</h1>
      <section>
        <img src={ recipe.image } alt={ `foto-${recipe.name}` } />
        <ul>
          <h5>Ingredientes:</h5>
          { ingredients.map((item) => (item) && <li>{ item }</li> ) }
        </ul>
      </section>
      <h5>Modo de Preparo:</h5>
      <p>{ recipe.preparation }</p>
    </div>
  )
}

export default RecipePage;