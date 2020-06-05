import { SHOW_ERROR, HIDE_ERROR }  from './actions-type';

const showError = payload => {
    return { type: SHOW_ERROR, payload: payload }    
}

const hideError = payload => {
    return { type: HIDE_ERROR, payload: payload }    
}

export {
    showError,
    hideError
}