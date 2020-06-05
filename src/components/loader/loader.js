import React from 'react';
import Style from './loader.module.scss';

const Loader = props => {
    return props.show ? <div className={Style.wrapper}><span className={Style.content}>Carregando...</span></div> : null
}

export default Loader;