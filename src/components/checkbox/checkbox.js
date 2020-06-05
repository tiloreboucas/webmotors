import React from 'react';

const Checkbox = props => {
    return <label className="checkbox field-container">
        <input type="checkbox" className="field" {...props} />
        <span className="label">{props.label}</span>
    </label>
}

export default Checkbox;