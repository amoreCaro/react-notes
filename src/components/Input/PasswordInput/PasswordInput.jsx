import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';

function PasswordInput({ value, onChange, placeholder }) {
  // State for showing or hiding the password
  const [isShowPassword, setIsShowPassword] = useState(false);

  // Function to toggle the password visibility state
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <>
      <input 
        value={value} // Current password value
        onChange={onChange} // Updates the value on input change
        placeholder={placeholder || "Password"} // Placeholder text
        type={isShowPassword ? "text" : "password"} // Toggle between showing/hiding password
      />
      {isShowPassword ? 
        <FaRegEye size={22} onClick={toggleShowPassword} /> // Icon to hide password
        : 
        <FaRegEyeSlash size={22} onClick={toggleShowPassword} /> // Icon to show password
      }
    </>
  );
}

export default PasswordInput;