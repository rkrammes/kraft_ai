import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';

// Define a recipe interface for supabase data
interface Recipe {
  id: string;
  name: string;
  [key: string]: any; // or add more typed fields if you know them
}

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    setLoading(true);
    const { data, error } = await supabase.from('All_Recipes').select('*');
    if (error) {
      setError(error.message);
    } else {
      // if data is null or undefined, default to []
      setRecipes(data || []);
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
              <strong>{recipe.name}</strong> –{' '}
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