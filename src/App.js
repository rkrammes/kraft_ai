// @flow
import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import RecipeIteration from './components/RecipeIteration';
import './index.css';

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
      }
    } catch (err) {
      console.error('Unexpected error during logout:', err);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
      }
    );
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className={darkMode ? 'App dark-mode' : 'App'}>
      <header className="navbar" style={{ padding: '1rem', borderBottom: '1px solid #444' }}>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button className="btn" onClick={handleDarkToggle}>
            {darkMode ? 'Light' : 'Dark'}
          </button>
          {session ? (
            <button className="btn" onClick={handleLogout}>Log Out</button>
          ) : (
            <button className="btn" onClick={() => alert('No login flow in single-page mode!')}>Log In</button>
          )}
          <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
            Edit Mode:
            <input
              type="checkbox"
              checked={editMode}
              onChange={handleEditToggle}
            />
          </label>
        </nav>
      </header>
      <main style={{ padding: '1rem' }}>
        <RecipeIteration editMode={editMode} />
      </main>
    </div>
  );
}

export default App;