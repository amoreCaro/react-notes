import React, { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {}

    const onClearSearch = () => {
      setSearchQuery("");
    }

    return (
        <>
            <h3>Notes</h3>
            <SearchBar
                value={searchQuery}
                onChange={({ target }) => setSearchQuery(target.value)} // Correctly passed onChange prop
                handleSearch = {handleSearch}
                onClearSearch = {onClearSearch}
            />
        </>
    );
}

export default Navbar;
