// @flow
import React from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = (): React$Node => {
  const { id } = useParams();
  return (
    <div>
      <h2>Recipe Detail</h2>
      <p>Details for recipe with ID: {id}</p>
    </div>
  );
};

export default RecipeDetail;