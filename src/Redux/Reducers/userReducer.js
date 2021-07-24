const INITIAL_STATE = {
  token: localStorage.getItem('cookmasterToken'),
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
    default:
      return state;
  }
}

export default userReducer;