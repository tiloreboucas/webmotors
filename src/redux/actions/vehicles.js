import { UPDATE_VEHICLES_LIST }  from './actions-type';

const updateVehiclesList = list => {
    return { type: UPDATE_VEHICLES_LIST, list: list }    
}

export {
    updateVehiclesList
}