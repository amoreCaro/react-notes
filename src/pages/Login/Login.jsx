import React, { useState } from 'react'; // Import useState hook
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput/PasswordInput';
import './Login.scss'; // Import the SCSS file

// Helper function to validate email
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function Login() {
  const [email, setEmail] = useState(""); // Correct usage of useState
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevents the form from submitting and reloading the page

    // Validate email before proceeding
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }
    // Validate password before proceeding
    if ((!password)) {
      setError("Please enter a password");
      return;
    }
    
    // If email is valid, clear error
    setError("");

    // Handle the login logic (e.g., API call)
  }

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2 className="login-title">Login</h2>
        
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state with what user types
          className="login-input" 
        />

        <PasswordInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        /> 

        {error && <p className="error-message">{error}</p>} {/* Display error if exists */}

        <button 
          type="submit" 
          className="login-button"
        >
          Login
        </button>
        
        <p className="signup-text">
          Don't have an account? 
          <Link to="/signup" className="signup-link">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
