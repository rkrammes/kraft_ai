// @flow
import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AllIngredients = (): React$Node => {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const { data, error } = await supabase
          .from('Ingredients')
          .select('*');
        if (error) throw error;
        setIngredients(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchIngredients();
  }, []);

  if (loading) return <div>Loading ingredients...</div>;
  if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;
  if (!ingredients || ingredients.length === 0) {
    return <div>No ingredients found.</div>;
  }

  return (
    <div>
      <h2>All Ingredients</h2>
      <ul>
        {ingredients.map((item) => (
          <li key={item.id}>
            {item.name} — {item.quantity} {item.unit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllIngredients;
