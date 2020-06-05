import React from 'react';

const Search = props => {
    return <label className="field-container" data-size={props.size}>
        <input className="text" type="search" {...props} defaultValue="São Paulo - SP" />
    </label>
}

export default Search;