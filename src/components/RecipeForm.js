// @flow
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const RecipeForm = (): React$Node => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isEditing) {
      const fetchRecipe = async () => {
        const { data, error } = await supabase
          .from('recipes')
          .select('*')
          .eq('id', id)
          .single();
        if (error) {
          setError(error.message);
        } else {
          setTitle(data.title);
          setDescription(data.description);
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
          .from('recipes')
          .update({ title, description })
          .eq('id', id);
        if (error) throw error;
        alert('Recipe updated successfully!');
      } else {
        const { error } = await supabase
          .from('recipes')
          .insert([{ title, description }]);
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
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Saving...' : (isEditing ? 'Update Recipe' : 'Add Recipe')}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default RecipeForm;