import React from 'react';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoMdClose } from 'react-icons/io';
import './SearchBar.scss'; // Import the SCSS file

function SearchBar({ value, onChange, handleSearch, onClearSearch }) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search notes"
                value={value}
                onChange={onChange}
            />
            {value && (
              <IoMdClose className="icon" onClick={onClearSearch} /> 
            )}
            <FaMagnifyingGlass className="icon" onClick={handleSearch} />
        </div>
    );
}

export default SearchBar;
