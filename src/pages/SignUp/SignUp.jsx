import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import PasswordInput from '../../components/Input/PasswordInput/PasswordInput';
import validateEmail from '../../utils/helper';
import './SignUp.scss'; // Import the SCSS file

function SignUp() {
  const [name, setName] = useState(""); // State for fullname
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [error, setError] = useState(null); // State for error message

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Validate fullname before proceeding
    if (!name) {
      setError("Please enter a fullname");
      return;
    }

    // Validate email before proceeding
    if (!validateEmail(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Validate password before proceeding
    if (!password) {
      setError("Please enter a password");
      return;
    }

    setError(""); // Clear error if validation passes
    // Proceed with signup logic here (e.g., API call)
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignUp} className="signup-form">
        <h2 className="signup-title">Sign Up</h2>
        
        <input 
          type="text" 
          placeholder="Name" 
          className="signup-input"
          value={name} // Controlled input
          onChange={(e) => setName(e.target.value)} // Update name state
        />

        <input 
          type="email" 
          placeholder="Email" 
          className="signup-input" 
          value={email} // Controlled input
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />

        <PasswordInput 
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state
        />

        {error && <p className="error-message">{error}</p>} {/* Display error if exists */}
        
        <button 
          type="submit" 
          className="signup-button"
        >
          Create Account
        </button>
        
        <p className="login-text">
          Already have an account? 
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
