const INITIAL_STATE = {
  sectionUser: 'my-recipies'
}

const userPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_SECTION_USER':
      return {
        ...state,
        sectionUser: action.section,
      }
    default:
      return state
  }
}

export default userPageReducer;
