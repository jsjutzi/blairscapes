import axios from 'axios';


//Action constants

const GET_GRASS = 'GET_GRASS';
const GET_SHRUB = 'GET_SHRUB';
const GET_MULCH = 'GET_MULCH';
const GET_SPRINKLER = 'GET_SPRINKLER';
const GET_INSPECTION = 'GET_INSPECTION';
const GET_SEASONAL = 'GET_SEASONAL';
const GET_SEEDING = 'GET_SEEDING';
const GET_FERTILIZER = 'GET_FERTILIZER';
const GET_AIRATION = 'GET_AIRATION';
const GET_DETHATCHING = 'GET_DETHATCHING';
const GET_FOOTAGE = 'GET_FOOTAGE';
const GET_ADDRESS = 'GET_ADDRESS';


const initialState = {
    squareFootage: null,
    address: {},
    grassType: {},
    shrubType: {},
    irrigation: false,
    inspectionSchedule: '',
    seeding: null,
    fertilizer: null,
    seasonalColor: {},
    mulch: {},
    airation: false,
    dethatching: false,
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
        case GET_SEEDING:
            return Object.assign({}, state, {
                seeding: action.payload
            })
        case GET_FERTILIZER:
            return Object.assign({}, state, {
                fertilizer: action.payload
            })
        case GET_AIRATION:
            return Object.assign({}, state, {
                airation: action.payload
            })
        case GET_DETHATCHING:
            return Object.assign({}, state, {
                dethatching: action.payload
            })
        case GET_ADDRESS +'_FULFILLED':
            console.log(action.payload);
            return Object.assign({}, state, {
                address: action.payload
            })
        case GET_FOOTAGE:
            console.log(action.payload);
            return Object.assign({}, state, {
                squareFootage: action.payload
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
export function getSeeding(boolean){
    return {
        type: GET_SEEDING,
        payload: boolean
    }
}
export function getFertilizer(fertilizer){
    return {
        type: GET_FERTILIZER,
        payload: fertilizer
    }
}
export function getAiration(boolean){
    return {
        type: GET_AIRATION,
        payload: boolean
    }
}
export function getDethatching(boolean){
    return {
        type: GET_DETHATCHING,
        payload: boolean
    }
}
export function getAddress(address){
    console.log('success', address);
    return {
        type: GET_ADDRESS,
        payload: axios
        .post(`http://localhost:3001/api/getFootage`, address)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(err => err)
    };
}
export function getFootage(footage){
    console.log('footage', footage);
    return {
        type: GET_FOOTAGE,
        payload: footage
    }
}