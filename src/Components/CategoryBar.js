import React from  'react';
import '../CSS/CategoryBar.css';

function CategoryBar() {
  return (
    <div className="category-bar-container">
      <p>Filtrar</p>
      <ul>
        <li>TODAS AS RECEITAS</li>
        <li>AVES</li>
        <li>CARNES</li>
        <li>DOCES E SOBREMESAS</li>
        <li>MASSAS</li>
        <li>LANCHES</li>
        <li>PEIXES</li>
        <li>BOLOS E TORTAS</li>
        <li>CARNES</li>
      </ul>
    </div>
  )
}

export default CategoryBar;
