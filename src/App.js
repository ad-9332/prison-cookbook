import logo from './logo.svg';
import './App.css';
import { recipes } from './recipes';
import { useState } from 'react';

function getRecipeByIndex(index){
  return recipes[index]
}

function App() {
 const [currentRecipe, setCurrentRecipe] = useState(0);
 const nextRecipe = ()=>{
  const next = currentRecipe +1
  /*if(next >= recipes.length){
    setCurrentRecipe(0)
  } else {
    setCurrentRecipe(next)
  }*/
  setCurrentRecipe (next%recipes.length)
 }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       <p>{currentRecipe} {getRecipeByIndex(currentRecipe).name}</p>
       <button onClick={()=> nextRecipe()}>
         Next Recipe
       </button>
      </header>
    </div>
  );
}


export default App;
