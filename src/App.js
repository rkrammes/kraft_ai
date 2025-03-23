// @flow
import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import RecipeForm from './components/RecipeForm';
import AllIngredients from './components/AllIngredients';
import RecipeIteration from './components/RecipeIteration';
import Login from './components/Login';
import './index.css';

import { useEffect } from 'react';

function App(): React$Node {
  const [darkMode, setDarkMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [session, setSession] = useState(null);

  const handleDarkToggle = () => {
    setDarkMode((prev) => !prev);
  };

  const handleEditToggle = (e) => {
    setEditMode(e.target.checked);
  };
  
  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error);
      } else {
        alert('You have been logged out.');
        // Optionally navigate to home or a login page:
        // navigate('/');
      }
    } catch (err) {
      console.error('Unexpected error during logout:', err);
    }
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
              {session ? (
                <button onClick={handleLogout}>Log Out</button>
              ) : (
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <button>Log In</button>
                </Link>
              )}
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
            <Route path="/iteration" element={<RecipeIteration editMode={editMode} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
  // Track session changes
  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );

    // Cleanup
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);