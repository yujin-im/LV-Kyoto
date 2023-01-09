import {useReducer} from 'react';
import NorthernContext from '../NorthernContext';
import {northern_destinations } from '../../data/northern_destinations';
import NorthernReducer from '../reducers/NorthernReducer';
const NorthernProvider = (props) => {
    const [NorthernData, dispatch] = useReducer(NorthernReducer,{
        northern_destinations,
        N_details : {},
    })
    return(
        <NorthernContext.Provider value = {{NorthernData, dispatch}}>
            {props.children}
        </NorthernContext.Provider>
    )
}

export default NorthernProvider;