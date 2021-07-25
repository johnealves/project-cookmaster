import axios from "axios";
import { RECEIVE_RECIPIES, REQUEST_RECIPIES } from "./actionTypes";

const requestRecipies = () => ({
  type: REQUEST_RECIPIES,
})

const receiveRecipies = (recipies) => ({
  type: RECEIVE_RECIPIES,
  recipies,
})

export const fetchRecipies = (token) => {
  return (dispatch) => {
    dispatch(requestRecipies());
    return axios.get('https://cookmaster-back-end.herokuapp.com/recipes/user', { 
      headers: { Authorization: token }
    })
    .then((response) => dispatch(receiveRecipies(response.data)))
  }
}