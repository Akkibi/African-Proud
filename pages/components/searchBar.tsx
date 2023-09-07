import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleSearch = () => {
      onSearch(searchQuery);
    };
  
    return (
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-2 py-1"
          placeholder="Rechercher..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-primary px-3 py-1 rounded-md text-black"
          onClick={handleSearch}
        >
          Rechercher
        </button>
      </div>
    );
  };
  
  export default SearchBar;
