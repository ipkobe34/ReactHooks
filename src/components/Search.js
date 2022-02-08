import React from 'react';

const Search = ({ searchInput, search, handleSearch }) => {

    return (
        <div className="Search">
            <label htmlFor="">Search</label>
            <input type="text" ref={ searchInput } value={ search } onChange={ handleSearch } />
        </div>
    );
}

export default Search;