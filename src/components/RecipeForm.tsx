import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import { Recipe } from '../types';

const RecipeList = (): React.ReactNode => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { data, error } = await supabase
        .from<Recipe, Recipe>('All_Recipes')
        .select('*');
      if (error) {
        setError(error.message);
      } else {
        setRecipes(data);
      }
      setLoading(false);
    };

    fetchRecipes();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: 'red' }}>{error}</div>;

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;