import React from 'react';

const Select = props => {
    return <label data-size={props.size} className="field-container">
    <select className={`select`} {...props}>
        <option>{props.label}</option>
        {
            props?.data?.map((item, idx) => {
                return <option key={idx} value={item.ID}>{item.Name}</option>
            })
        }
    </select></label>
}

export default Select;