import React, { useState } from 'react';
import EditableTable from './EditableTable';
import { supabase } from '../supabaseClient';

const EditableTableComponent = EditableTable as React.FC<{ editMode: boolean }>;

function RecipeIteration({ editMode }: { editMode: boolean }): React.ReactNode {
  // For AI iteration text
  const [iterationText, setIterationText] = useState('');
  // For possible category selection
  const [selectedCategory, setSelectedCategory] = useState('Beard Oil 7');
  const [message, setMessage] = useState<string | null>(null);

  // Example AI suggestion call
  const handleGetAiSuggestion = async () => {
    try {
      const response = await fetch('https://example.com/ai-suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: iterationText }),
      });
      const data = await response.json();
      setIterationText(data.suggestion || '');
    } catch (err) {
      console.error('Error fetching AI suggestion:', err);
      if (err instanceof Error) {
        setMessage(`Error: ${err.message}`);
      } else {
        setMessage('Error: An unexpected error occurred');
      }
    }
  };

  // Example commit logic to store iteration notes
  const handleCommit = async () => {
    try {
      const { data, error } = await supabase
        .from('Iteration_Notes')
        .insert([{ notes: iterationText }])
        .single();
      if (error) {
        console.error('Error saving iteration notes:', error);
        setMessage(`Error: ${error.message}`);
      } else {
        alert('Iteration notes saved successfully!');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      if (err instanceof Error) {
        setMessage(`Error: ${err.message}`);
      } else {
        setMessage('Error: An unexpected error occurred');
      }
    }
  };

  // Category selection logic
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // e.g., fetch a new set of ingredients based on category
  };

  return (
    <>
      {/* Category row with static placeholders */}
      <div className="category-row">
        {[
          'Beard Oil 7',
          'Beard Balm 9',
          'Mustache Wax 2',
          'Hand Cream 1',
          'Hair Rinse 1',
          'Foaming Hand Soap 1',
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            style={{ backgroundColor: cat === selectedCategory ? '#555' : '' }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="panel-container">
        <div className="card">
          <h2>Current Ingredients</h2>
          <p>Distilled Water – 1 cup (240 mL)</p>
          <p>Liquid Castile Soap – 2 tablespoons (30 mL)</p>
          <p>Sweet Almond Oil – 1 teaspoon (5 mL)</p>
          <p>Essential Oils – 10–15 drops</p>
        </div>

        <div className="card">
          <h2>Next Iteration</h2>
          <textarea
            value={iterationText}
            onChange={(e) => setIterationText(e.target.value)}
            placeholder="Describe your next iteration..."
            style={{ width: '100%', minHeight: '80px', marginBottom: '0.5rem' }}
          />
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={handleGetAiSuggestion}>Get AI Suggestion</button>
            <button onClick={handleCommit}>Commit</button>
          </div>
          {message && <p style={{ color: 'red' }}>{message}</p>}
        </div>

        <EditableTableComponent editMode={editMode} />
      </div>
    </>
  );
}

export default RecipeIteration;