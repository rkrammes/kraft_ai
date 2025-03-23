// @flow
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const RecipeForm = (): React$Node => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [name, setName] = useState('');
  const [textVal, setTextVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isEditing) {
      const fetchRecipe = async () => {
        const { data, error } = await supabase
          .from('All_Recipes')
          .select('*')
          .eq('id', id)
          .single();
        if (error) {
          setError(error.message);
        } else {
          setName(data.name ?? '');
          setTextVal(data.text ?? '');
        }
      };
      fetchRecipe();
    }
  }, [id, isEditing]);

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      if (isEditing) {
        const { error } = await supabase
          .from('All_Recipes')
          .update({ name, text: textVal })
          .eq('id', id);
        if (error) throw error;
        alert('Recipe updated successfully!');
      } else {
        const { error } = await supabase
          .from('All_Recipes')
          .insert([{ name, text: textVal }]);
        if (error) throw error;
        alert('Recipe added successfully!');
      }
      navigate('/');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>{isEditing ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="textVal">Text:</label>
          <textarea
            id="textVal"
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : isEditing ? 'Update Recipe' : 'Add Recipe'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default RecipeForm;