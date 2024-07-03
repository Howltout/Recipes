import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyRecipes.css'

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    category: ''
  });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/recipes/');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/recipes/', newRecipe);
      fetchRecipes();
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/recipes/${id}/`);
      fetchRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };

  return (
    <div>
      <h1>My Recipes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={newRecipe.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="ingredients"
          value={newRecipe.ingredients}
          onChange={handleChange}
          placeholder="Ingredients"
        />
        <textarea
          name="instructions"
          value={newRecipe.instructions}
          onChange={handleChange}
          placeholder="Instructions"
        />
        <input
          type="text"
          name="category"
          value={newRecipe.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <button type="submit">Add Recipe</button>
      </form>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
            <p>{recipe.category}</p>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyRecipes;
