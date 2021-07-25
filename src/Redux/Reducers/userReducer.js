import { RECEIVE_RECIPIES } from "../Actions/actionTypes";

const INITIAL_STATE = {
  token: localStorage.getItem('cookmasterToken'),
  userRecipies: []
}

// const getToken = localStorage.getItem('cookmasterToken');
// if (getToken) INITIAL_STATE['token'] = getToken;

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEW_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'NEW_USER':
      return {
        ...state,
        user: action.user
      }
    case RECEIVE_RECIPIES:
      return {
        ...state,
        userRecipies: action.recipies,
      }
    default:
      return state;
  }
}

export default userReducer;