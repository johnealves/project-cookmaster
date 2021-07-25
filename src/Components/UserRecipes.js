import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRecipies } from '../Redux/Actions/setRecipes';
import CardRecipeUser from './cardRecipiesUser';

function UserRecipes({ token, getRecipies, recipies }) {
  useEffect(() => {
    getRecipies(token)
  }, [])

  return (
    <div>
      <h3>Minhas receitas</h3>
      <ul>
        { (recipies) && recipies.map((recipe, i) => <CardRecipeUser key={ i } recipe={ recipe } />) }
      </ul>
    </div>
  )
}

const mapStateToProps = ({ userReducer }) => ({
  token: userReducer.token,
  recipies: userReducer.userRecipies,
})

const mapDispatchToProps = (dispatch) => ({
  getRecipies: (token) => dispatch(fetchRecipies(token))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserRecipes);