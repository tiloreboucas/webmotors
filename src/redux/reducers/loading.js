import * as actionTypes from '../actions/actions-type';

const initialState = {
    show: false
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_LOADING:
            return Object.assign({}, state, {
                show: true
            })
        case actionTypes.HIDE_LOADING:
            return Object.assign({}, state, {
                show: false
            })
        default:
            return state;
    }
}

export default loading;