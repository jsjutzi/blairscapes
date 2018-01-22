import axios from 'axios';


//Action constants

const GET_GRASS = 'GET_GRASS';
const GET_SHRUB = 'GET_SHRUB';
const GET_MULCH = 'GET_MULCH';
const GET_SPRINKLER = 'GET_SPRINKLER';
const GET_INSPECTION = 'GET_INSPECTION';
const GET_SEASONAL = 'GET_SEASONAL';

const initialState = {
    squareFootage: null,
    address: {},
    grassType: {},
    shrubType: {},
    irrigation: false,
    inspectionSchedule: '',
    seeding: {},
    fertilizerSeasons: null,
    seasonalColor: {},
    mulch: {},
    airation: {},
    dethatching: {},
    runningQuote: {}



};

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_GRASS:
            return Object.assign({}, state, {
                grassType: action.payload
            });
        case GET_SHRUB:
            return Object.assign({}, state, {
                shrubType: action.payload
            });
        case GET_MULCH:
            return Object.assign({}, state, {
                mulch: action.payload
            })
        case GET_SPRINKLER:
            return Object.assign({}, state, {
                irrigation: action.payload
            })
        case GET_INSPECTION:
            return Object.assign({}, state, {
                inspectionSchedule: action.payload
            })
        case GET_SEASONAL:
            return Object.assign({}, state, {
                seasonalColor: action.payload
            })
        default:
            return state;
    }
}

export function getGrass(grass){
    return {
        type: GET_GRASS,
        payload: grass
    }
}
export function getShrub(shrub){
    return {
        type: GET_SHRUB,
        payload: shrub
    }
}
export function getMulch(mulch){
    return {
        type: GET_MULCH,
        payload: mulch
    }
}
export function getSprinkler(boolean){
    return {
        type: GET_SPRINKLER,
        payload: boolean
    }
}
export function getInspection(inspection){
    return {
        type: GET_INSPECTION,
        payload: inspection
    }
}
export function getSeasonal(seasonal){
    return {
        type: GET_SEASONAL,
        payload: seasonal
    }
}