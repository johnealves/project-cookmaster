import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../CSS/CardRecipiesUser.css'

function CardRecipeUser({ recipe }) {
  return (
    <li className="card-recipe-user">
      <Link to={ `/recipes/${recipe.recipeId}` }>
        <h5>{recipe.name}</h5>
      </Link>
      <div>
        <Button size='sm' variant="warning">
          Editar
        </Button>
        <Button size='sm' variant="danger">
          Deletar
        </Button>
      </div>
    </li>
  )
}

export default CardRecipeUser;