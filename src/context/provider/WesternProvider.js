import {useReducer} from 'react';
import WesternContext from "../WesternContext";
import {western_destinations} from '../../data/western_destinations'
import WesternReducer from '../reducers/WesternReducer';
const WesternProvider = (props) => {
    const [WesternData, dispatch] = useReducer(WesternReducer, {
        western_destinations,
        W_details : {},
    })
    console.log('wesern',western_destinations);
    return (
        <WesternContext.Provider value = {{WesternData, dispatch}}>
            {props.children}
        </WesternContext.Provider>
    )
}

export default WesternProvider