import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { recipes } from "./recipelist";
import { useState, useEffect } from "react";
import Recipe from "./Recipe";
import Menu from "./Menu";

function App() {
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(-1);
  const [recipes, setRecipes] = useState([]);
  const [homepageImage, sethomepageImage] = useState(null);
  const getRecipeByIndex = (index) => recipes[index];

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app11QxjnMJB6HKIa/Recipes?api_key=keyeLQ9PpO8NVMkg3"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const newRecipes = data.records.map((record) => {
          console.log("record", record);
          return {
            name: record.fields["Recipe Name"],
            ingredients: record.fields["Ingredients"],
            preparation: record.fields["Preparation"].split("\n"),
            images: record.fields.Attachments,
          };
        });
        console.log(newRecipes);
        setRecipes(newRecipes);
      });
  }, []);
  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app11QxjnMJB6HKIa/homepageImage?api_key=keyeLQ9PpO8NVMkg3"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        const { url } = data.records[2].fields.Attachments[0].thumbnails.large;
        sethomepageImage(url);
      });
  }, []);
  const nextRecipe = () => {
    const next = currentRecipeIndex + 1;
    if (next >= recipes.length) {
      setCurrentRecipeIndex(0);
    } else {
      setCurrentRecipeIndex(next);
    }
    setCurrentRecipeIndex(next % recipes.length);
  };
  const currentRecipe = getRecipeByIndex(currentRecipeIndex);
  console.log(currentRecipe);
  return (
    <div className="App">
      <Menu setRecipeIndex={setCurrentRecipeIndex} recipes={recipes} />
      <header className="App-header">
        {currentRecipe ? (
          <>
            <Recipe
              name={currentRecipe.name}
              ingredients={currentRecipe.ingredients}
              preparation={currentRecipe.preparation}
              images={currentRecipe.images}
            />
            <button onClick={() => nextRecipe()}>Next Recipe</button>
          </>
        ) : (
          <img src={homepageImage}></img>
        )}
      </header>
    </div>
  );
}

export default App;
