import * as actionTypes from '../actions/actions-type';

const initialState = {
    show: false,
    title: "",
    message: ""
}

const error = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SHOW_ERROR:
            return Object.assign({}, state, {
                show: true,
                title: action?.payload?.title || "Erro",
                message: action?.payload?.message || "Não foi possivel realizar essa solicitação"
            })
        case actionTypes.HIDE_ERROR:
            return Object.assign({}, state, {
                show: false
            })
        default:
            return state;
    }
}

export default error;