import React from 'react';
import * as action from '../../redux/actions';
import store from '../../redux/store';
import Style from './alert.module.scss';

const Alert = props => {
    const onHandlerClose = () => {
        store.dispatch(action.hideError())
    }

    return props.show ? <div className={Style.wrapper}>
        <div className={`${Style.content} box`}>
            <strong>{props.title}</strong>
            <span>{props.message}</span>

            <button onClick={onHandlerClose} type="button">ok</button>
        </div>
    </div> : null
}

export default Alert;