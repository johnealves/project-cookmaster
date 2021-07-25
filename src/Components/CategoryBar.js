import axios from 'axios';
import React, { useEffect, useState } from  'react';
import '../CSS/CategoryBar.css';

function CategoryBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('https://cookmaster-back-end.herokuapp.com/categories')
    .then((resp) => setCategories(resp.data))
  }, [])

  return (
    <div className="category-bar-container">
      <p>Filtrar</p>
      <ul>
        <li>TODAS AS RECEITAS</li>
        { categories.map((cat, i) => <li key={ i }>{ cat.categoryName }</li>) }
      </ul>
    </div>
  )
}

export default CategoryBar;
