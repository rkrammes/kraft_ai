// @flow
import React from 'react';

function RecipeIteration(): React$Node {
  return (
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
        placeholder="Describe your next iteration..."
        style={{ width: '100%', minHeight: '80px', marginBottom: '0.5rem' }}
      />
      <button style={{ display: 'block' }}>
        Commit
      </button>
    </div>
  );
}

export default RecipeIteration;