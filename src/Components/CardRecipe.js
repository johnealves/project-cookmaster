import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/CardRecipe.css';

function CardRecipe({recipe}) {
  return (
    <Link to={ `/recipes/${recipe.recipeId}` }>
      <div className="recipe-container">
        <img src={ recipe.image } alt={ `foto-${recipe.name}` }/>
        <div className="recipe-info">
          <span className="title-recipe">{ recipe.name }</span>
        </div>
      </div>
    </Link>
  )
}

export default CardRecipe