import {EASTERN_DETAILS} from "../types/EasternTypes";
const EasternReducer = (state, action) => {

    console.log('zz',state)
    const {payload} = action;
    console.log('hi',typeof payload);
    if(action.type === EASTERN_DETAILS) {
        const eastern = state.eastern_destinations.find(
            (eastern) => eastern.id === parseInt(payload));
        console.log('hmm',eastern) 
        return {
            ...state,
            E_details : eastern,    
        }
    }else {
        return state;
    }
}

export default EasternReducer;