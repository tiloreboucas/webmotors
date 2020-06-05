import * as actionTypes from '../actions/actions-type';

const initialState = {
    list: null
}

const vehicles = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_VEHICLES_LIST:
            return Object.assign({}, state, {
                list: action.list
            })
        default:
            return state;
    }
}

export default vehicles;