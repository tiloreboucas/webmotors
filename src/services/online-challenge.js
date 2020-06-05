import API from '../utils/api';

const getMakes = async () => {
    return await API.get('OnlineChallenge/Make')
}

const getModels = async MakeID => {
    return await API.get('OnlineChallenge/Model', { params: { MakeID }})
}

const getVersions = async ModelID => {
    return await API.get('OnlineChallenge/Version', { params: { ModelID }})
}

const getVehicles = async Page => {
    return await API.get('OnlineChallenge/Vehicles', { params: { Page }})
}

const OnlineChallenge = {
    getMakes,
    getModels,
    getVersions,
    getVehicles
}

export default OnlineChallenge;