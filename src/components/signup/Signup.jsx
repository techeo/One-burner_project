import React, { useState } from 'react';
import { supabase } from './supabaseClient'; // Import your Supabase client

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Track loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state to indicate ongoing request

    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        setError(error.message);
      } else {
        console.log('Signup successful:', user);
        // Handle successful signup (e.g., redirect to login)
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.message);
    } finally {
      setIsLoading(false); // Reset loading state after finish
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Email and password input fields */}
      <div className="form-group">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit" className="button" disabled={isLoading}>
        {isLoading ? 'Signing Up...' : 'Sign Up'}
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default Signup;
