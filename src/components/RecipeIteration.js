// @flow
import React, { useState } from 'react';
import EditableTable from './EditableTable';
import { supabase } from '../supabaseClient';

function RecipeIteration({ editMode }: { editMode: boolean }): React$Node {
  const [iterationText, setIterationText] = useState('');

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
    }
  };

  const handleCommit = async () => {
    try {
      const { data, error } = await supabase
        .from('Iteration_Notes')
        .insert([{ notes: iterationText }])
        .single();
      if (error) {
        console.error('Error saving iteration notes:', error);
      } else {
        alert('Iteration notes saved successfully!');
        // setIterationText(''); // optional reset
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  return (
    <>
      {/* Category row (static placeholders for now) */}
      <div className="category-row" style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1rem',
        flexWrap: 'wrap'
      }}>
        <button>Beard Oil 7</button>
        <button>Beard Balm 9</button>
        <button>Mustache Wax 2</button>
        <button>Hand Cream 1</button>
        <button>Hair Rinse 1</button>
        <button>Foaming Hand Soap 1</button>
      </div>

      {/* Panel container for the three main panels */}
      <div className="panel-container" style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        <div className="card">
          <h2>Current Ingredients</h2>
          <p>Distilled Water – 1 cup (240 mL)</p>
          <p>Liquid Castile Soap – 2 tablespoons (30 mL)</p>
          <p>Sweet Almond Oil – 1 teaspoon (5 mL)</p>
          <p>Essential Oils – 10–15 drops</p>
        </div>
        <div className="card" style={{ marginTop: '1rem' }}>
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
        </div>
        <EditableTable editMode={editMode} />
      </div>
    </>
  );
}

export default RecipeIteration;