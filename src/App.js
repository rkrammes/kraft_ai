// @flow
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import './index.css';

function App(): React$Node {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link to="/all-ingredients">All Ingredients</Link>
            <Link to="/new">Add New Recipe</Link>
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
              <button>Dark</button>
              <button>Log Out</button>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                Edit Mode:
                <input type="checkbox" />
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
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;