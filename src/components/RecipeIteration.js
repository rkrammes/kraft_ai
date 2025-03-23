// @flow
import React, { useState } from 'react';
import EditableTable from './EditableTable';

function RecipeIteration(): React$Node {
  const [iterationText, setIterationText] = useState('');

  const handleGetAiSuggestion = async () => {
    try {
      // Replace this placeholder URL with your actual AI endpoint
      const response = await fetch('https://example.com/ai-suggest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: iterationText }),
      });
      const data = await response.json();
      // Adjust based on your API response structure
      setIterationText(data.suggestion || '');
    } catch (err) {
      console.error('Error fetching AI suggestion:', err);
    }
  };

  return (
    <>
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
          <button>Commit</button>
        </div>
      </div>
      <EditableTable />
    </>
  );
}

export default RecipeIteration;