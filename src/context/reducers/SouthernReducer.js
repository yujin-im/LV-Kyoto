import {SOUTHERN_DETAILS} from '../types/SouthernTypes'

const SouthernReducer = (state, action) => {
    const {payload} = action;
    if (action.type === SOUTHERN_DETAILS) {
        const southern = state.southern_destinations.find(
            (southern) => southern.id === parseInt(payload));
            return{
                ...state,
                S_details : southern,
            }
    }else {
        return state;
    }
   
}

export default SouthernReducer;