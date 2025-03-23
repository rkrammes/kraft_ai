// @flow
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import AllIngredients from './components/AllIngredients';
import RecipeIteration from './components/RecipeIteration';
import './index.css';

function App(): React$Node {
  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleDarkToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleEditToggle = (e) => {
    setEditMode(e.target.checked);
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark-mode' : 'App'}>
        <header className="navbar">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/all-ingredients">All Ingredients</Link>
            <Link to="/new">Add New Recipe</Link>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
              <button onClick={handleDarkToggle}>
                {darkMode ? 'Light' : 'Dark'}
              </button>
              <button>Log Out</button>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Edit Mode:
                <input
                  type="checkbox"
                  checked={editMode}
                  onChange={handleEditToggle}
                />
              </label>
            </div>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/edit/:id" element={<RecipeForm />} />
            <Route path="/new" element={<RecipeForm />} />
            <Route path="/all-ingredients" element={<AllIngredients />} />
            <Route path="/iteration" element={<RecipeIteration />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;