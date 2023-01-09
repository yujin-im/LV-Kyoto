import {WESTERN_DETAILS} from '../types/WesternTypes'

const WesternReducer = (state, action) => {
    const {payload} = action;
    if(action.type === WESTERN_DETAILS) {
        const western = state.western_destinations.find(
            (western) => western.id === parseInt(payload));
            return{
                ...state,
                W_details : western,
            }
    } else {
        return state;
    }
    
}

export default WesternReducer;