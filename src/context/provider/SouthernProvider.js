import {useReducer} from 'react';
import SouthernContext from "../SouthernContext"
import { southern_destinations } from '../../data/southern_destinations';
import SouthernReducer from '../reducers/SouthernReducer';


const SouthernProvidier = (props) => {
    const [SouthernData, dispatch] = useReducer(SouthernReducer, {
        southern_destinations,
        S_details : {},
    })

    return(
    <SouthernContext.Provider value = {{SouthernData, dispatch}}>
        {props.children}
    </SouthernContext.Provider>
    )
}

export default SouthernProvidier;