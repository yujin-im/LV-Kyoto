import {NORTHERN_DETAILS} from "../types/NorthernTypes";

const NorthernReducer = (state, action) => {
    const {payload} = action;
    if(action.type ===NORTHERN_DETAILS) {
        const northern = state.northern_destinations.find(
            (northern) => northern.id === parseInt(payload));
            return {
                ...state,
                N_details : northern,
            }
    }

    return state;
}

export default NorthernReducer;