// @flow
import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

function Login(): React$Node {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleMagicLink = async () => {
    setMessage('');
    try {
      // Replace 'http://localhost:3000' with your actual redirect URL if needed
      const { data, error } = await supabase.auth.signInWithOtp({
        email,
        options: { emailRedirectTo: 'http://localhost:3000' },
      });
      if (error) {
        console.error('Error sending magic link:', error);
        setMessage(`Error: ${error.message}`);
      } else {
        setMessage('Magic link sent! Check your email.');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'left' }}>
      <h2>Login with Magic Link</h2>
      <input
        type="email"
        placeholder="Enter your email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
      />
      <button onClick={handleMagicLink} style={{ marginBottom: '1rem' }}>
        Send Magic Link
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login;
