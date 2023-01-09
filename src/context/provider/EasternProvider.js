import {useReducer} from 'react';
import EasternContext from '../EasternContext';
import {eastern_destinations} from '../../data/eastern_destinations';
import EasternReducer from '../reducers/EasternReducer';
const EasternProvider = (props) => {
    console.log('?');
    const [EasternData,dispatch] = useReducer(EasternReducer, {
        eastern_destinations, 
        E_details : {},
    });
    console.log('ee',EasternReducer)
    return (
        <EasternContext.Provider value = {{EasternData, dispatch}}>
            {props.children}
        </EasternContext.Provider>
    )
}

export default EasternProvider;