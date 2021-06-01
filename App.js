import React, {useState, useEffect} from 'react';
import Recipe from './Recipe'
import './App.css';

function App() {
  const APP_ID = 'f650d73a';
  const APP_KEY = 'd7a2a32f9e23862f5f8663f49654d078';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  // update value on input
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className='search-form'>
        <input className='searc-bar' type="text" value={search} onChange={updateSearch}/>
        <button type='submit'>
          <i className="fa fa-search" aria-hidden="true" onClick={getSearch}></i>
        </button>
      </form>
      {
        recipes.map( recipe => {
          return <Recipe key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        })
      }
    </div>
  );
}

export default App;
