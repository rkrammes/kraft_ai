// @flow
import React, { useState, useEffect } from 'react';
import { Session } from '@supabase/supabase-js'; // Import Session type
import { supabase } from './supabaseClient';
import RecipeIteration from './components/RecipeIteration';

const RecipeIterationComponent = RecipeIteration as React.FC<{ editMode: boolean }>;

function App(): React.ReactNode {
  const [editMode, setEditMode] = useState(false);
  const [session, setSession] = useState<Session | null>(null);

  const handleEditToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <header>
        <nav>
          {session ? (
            <button onClick={handleLogout}>Log Out</button>
          ) : (
            <button onClick={() => alert('No login flow in single-page mode!')}>
              Log In
            </button>
          )}
          <label>
            Edit Mode:
            <input
              type="checkbox"
              checked={editMode}
              onChange={handleEditToggle}
            />
          </label>
        </nav>
      </header>
      <main>
        <RecipeIterationComponent editMode={editMode} />
      </main>
    </div>
  );
}

export default App;