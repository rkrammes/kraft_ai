// @flow
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const RecipeDetail = (): React.ReactNode => {
  const { id } = useParams();
  const navigate = useNavigate();
  interface Recipe {
    id: string;
    name: string;
    text: string;
  }

  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data, error } = await supabase
        .from('All_Recipes')
        .select('*')
        .eq('id', id)
        .single();
      if (error) {
        setError(error.message);
      } else {
        setRecipe(data);
      }
      setLoading(false);
    };
    fetchRecipe();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase
      .from('All_Recipes')
      .delete()
      .eq('id', id);
    if (error) {
      alert('Error deleting recipe: ' + error.message);
    } else {
      alert('Recipe deleted successfully!');
      navigate('/');
    }
  };

  if (loading) return <div>Loading recipe details...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!recipe) return <div>No recipe found.</div>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <p>{recipe.text}</p>
      <Link to={`/edit/${recipe.id}`}>Edit</Link> |{' '}
      <button onClick={handleDelete}>Delete</button>
      <br />
      <Link to="/">Back to Recipe List</Link>
    </div>
  );
};

export default RecipeDetail;