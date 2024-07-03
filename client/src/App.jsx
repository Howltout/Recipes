import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import RecipeTile from './RecipeTile';
import pizza from './pizza_img.jpg';
import padThai from './pad_thai_img.jpeg';
import pie from './shepherds_pie_img.jpg';
import MyRecipes from './MyRecipes';

function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");
  const APP_ID = "7670dd91";
  const APP_KEY = "886d952fab1fe244922faac50ed09afa ";
  async function getRecipes() {
    const url =
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`;
    try {
      const result = await Axios.get(url);
      setrecipes(result.data.hits);
      console.log(result.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
      <h1 onClick={getRecipes}>Food Recipe Plaza 🍔 by TANUJ KATYAL</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app__input"
          placeholder="Enter ingredient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input type="submit" className="app__submit" value="Search" />
        <select className="app__healthLabels">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("vegetarian")}>Vegetarian</option>
          <option onClick={() => sethealthLabel("paleo")}>Paleo</option>
          <option onClick={() => sethealthLabel("dairy-free")}>Dairyfree</option>
          <option onClick={() => sethealthLabel("gluten-free")}>Glutenfree</option>
          <option onClick={() => sethealthLabel("wheat-free")}>Wheatfree</option>
          <option onClick={() => sethealthLabel("low-sugar")}>Lowsugar</option>
          <option onClick={() => sethealthLabel("egg-free")}>Egg-free</option>
          <option onClick={() => sethealthLabel("peanut-free")}>Peanutfree</option>
          <option onClick={() => sethealthLabel("tre-nut-free")}>Tree-nutfree</option>
          <option onClick={() => sethealthLabel("soy-free")}>Soy-free</option>
          <option onClick={() => sethealthLabel("fish-free")}>Fishfree</option>
          <option onClick={() => sethealthLabel("shellfish-free")}>Shellfishfree</option>
        </select>
        <div className="App">
          <MyRecipes />
        </div>
      </form>
      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
      <div id="box1">
        <p>Hello!</p>
        <p>Welcome to my recipe plaza.</p>
        <p>Search for an ingredient, choose a health label, and GET TO
          COOKING!</p>
        <p><a href="https://www.indianhealthyrecipes.com/pizza-recipe-makepizza/">
          <p><img src={pizza} alt="image" width={200}
            height={150} /></p>Pizza</a></p>
        <p><a href="https://tastesbetterfromscratch.com/pad-thai/">
          <p><img src={padThai} alt="image" width={200} height={150} /></p>Pad
          Thai</a></p>
        <p><a href="https://www.thewholesomedish.com/the-best-classicshepherds-pie/">
          <p><img src={pie} alt="image" width={200}
            height={150} /></p>Shepherd's pie</a></p>
      </div>
    </div>
  );
}
export default App;