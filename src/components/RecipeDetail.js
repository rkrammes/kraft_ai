// @flow
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const RecipeDetail = (): React$Node => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .eq('id', id)
          .single();
        if (error) throw error;
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <div>Loading recipe details...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>
    </div>
  );
};

export default RecipeDetail;