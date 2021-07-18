const noCors = 'https://floating-beyond-79262.herokuapp.com/'

export const listAllRecipes = () => fetch(`${noCors}https://cookmaster-back-end.herokuapp.com/recipes`)
    .then((response) => response.json())
    .catch((err) => console.log(err));

export const getRecipeById = (id) => 
    fetch(`${noCors}https://cookmaster-back-end.herokuapp.com/recipes/${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err));

