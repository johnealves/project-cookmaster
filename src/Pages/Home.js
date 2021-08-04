import React, { useEffect, useState } from "react";
import { listAllRecipes } from "../Api/get";
import CardRecipe from "../Components/CardRecipe";
import CategoryBar from "../Components/CategoryBar";
import Loading from "../Components/Loading";
import '../CSS/Home.css';

function Home() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    listAllRecipes().then((result) => setRecipes(result));
  }, [setRecipes])

  if ((recipes) && recipes.length === 0) {
    return <Loading />
  }

  return (
    <div className="home-container">
      <CategoryBar classNew="category-bar"/>
      <section>
        { (recipes) &&
         recipes.map((recipe) => <CardRecipe key={ Math.random() } recipe={ recipe }/>) }
      </section>
    </div>
  )
}

export default Home;