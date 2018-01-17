import axios from 'axios';


//Action constants

const GET_GRASS = 'GET_GRASS';

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