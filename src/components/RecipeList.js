// @flow
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const RecipeList = (): React$Node => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('All_Recipes')
      .select('*');
    if (error) {
      setError(error.message);
    } else {
      setRecipes(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('All_Recipes')
      .delete()
      .eq('id', id);
    if (error) {
      alert('Error deleting recipe: ' + error.message);
    } else {
      fetchRecipes();
    }
  };

  if (loading) return <div>Loading recipes...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <strong>{recipe.title}</strong> –{' '}
              <Link to={`/recipe/${recipe.id}`}>View</Link> |{' '}
              <Link to={`/edit/${recipe.id}`}>Edit</Link> |{' '}
              <button onClick={() => handleDelete(recipe.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;