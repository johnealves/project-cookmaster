import React, { useEffect, useState } from "react";
import { listAllRecipes } from "../Api/get";
import CardRecipe from "../Components/CardRecipe";
import Loading from "../Components/Loading";
import '../CSS/Home.css';

function Home() {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    listAllRecipes().then((result) => setRecipes(result));
  }, [setRecipes])

  if (recipes.length === 0) {
    return <Loading />
  }

  console.log(recipes)

  return (
    <div className="home-container">
      <section>
        { (recipes) &&
         recipes.map((recipe) => <CardRecipe key={ Math.random() } recipe={ recipe }/>) }
      </section>
    </div>
  )
}

export default Home;