import React from 'react';
import Style from './tabs.module.scss';

const Button = props => {
    return <button role="tab" aria-selected={props.selected || false} className={Style.button} aria-controls={`panel-${props.id}`} id={`tab-${props.id}`} tabIndex={props.index}>
        <i className={`${Style['button-icon']} ${Style[`icon-${props.id}`]}`}>
            {props.icon}
        </i>
        <span className={Style['button-text']}>{props.children}</span>
    </button>
}

const List = props => {
    return <div role="tablist" aria-label="Tabs" className={Style.list}>{props.children.map((item, index) => {
        const newProps = Object.assign({}, item.props, {index: index});
        
        const newItem = Object.assign({}, item, {props: newProps});

        return newItem;
    })}</div>
}

const Panel = props => {
    return <div id={`panel-${props.id}`} role="tabpanel" tabIndex="0" className={`${Style.panel} box`} aria-labelledby={`tab-${props.id}`}>{props.children}</div>
}

const Wrapper = props => {
    return <div className={Style.wrapper}>{props.children}</div>
}

const Tabs = {
    Wrapper,
    Button,
    List,
    Panel
}

export default Tabs;