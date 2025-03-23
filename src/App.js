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
        <header>
          <h1>Kraft AI Recipe App</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/new">Add Recipe</Link>
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