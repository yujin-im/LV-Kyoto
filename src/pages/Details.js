import {useParams} from 'react-router-dom'
import {useContext,useEffect} from 'react'
import DestinationsContext from '../context/DestinationsContext';
import EasternContext from '../context/EasternContext';
import NorthernContext from '../context/NorthernContext';
import SouthernContext from '../context/SouthernContext';
import { DETAILS, CITIES } from '../context/types/DestinationType';
import { EASTERN_DETAILS } from '../context/types/EasternTypes';
import { WESTERN_DETAILS } from '../context/types/WesternTypes';
import { NORTHERN_DETAILS } from '../context/types/NorthernTypes';
import { SOUTHERN_DETAILS } from '../context/types/SouthernTypes';
import Header from '../components/Header'
import {Helmet} from 'react-helmet-async'
import DestinationInfo from '../components/DestinationInfo';
import Cities from '../components/cities/Cities';
import WesternContext from '../context/WesternContext';


const Details = (props) => {
    const {destinationsData, dispatch} = useContext(DestinationsContext);
    const {EasternData, dispatch:dd} = useContext(EasternContext);
    const {WesternData, dispatch:ww} = useContext(WesternContext);
    const {NorthernData, dispatch:nn} = useContext(NorthernContext);
    const {SouthernData, dispatch:ss} = useContext(SouthernContext);
    // const id = props.match.params.id;
    console.log('western',WesternData);
    // console.log(destinationsData.details)
    const { id } = useParams();
    console.log('id',id)
    const {details, filteredCities} = destinationsData
    const {E_details} = EasternData;
    const {W_details} = WesternData;
    const {N_details} = NorthernData;
    const {S_details} = SouthernData;
    console.log('s_details', S_details)
    useEffect(()=>{
        dispatch({type : DETAILS, payload : id});
        dispatch({type : CITIES, payload : id });
        dd({type : EASTERN_DETAILS, payload : id});
        ww({type : WESTERN_DETAILS, payload : id});
        nn({type : NORTHERN_DETAILS, payload : id});
        ss({type : SOUTHERN_DETAILS, payload : id})
        window.scrollTo(0,0);
    },[id]);
    console.log('e-name',W_details)
    return (
        <div>
            {details ? 
            <Helmet>
                <title>{details.name}</title>
            </Helmet> : 
            E_details ? 
            <Helmet> 
                <title>{E_details.name}</title>
            </Helmet> : 
            W_details ? 
            <Helmet> 
                <title>{W_details.name}</title>
            </Helmet> : N_details ? 
            <Helmet> 
                <title>{N_details.name}</title>
            </Helmet> : S_details ? 
            <Helmet> 
            <title>{S_details.name}</title>
        </Helmet> : ''
        }
         {details ?  
         <Header heading = {details.name} image = {details.image }></Header> : 
         E_details ? 
         <Header heading = {E_details.name} image = {E_details.image }></Header> : 
         W_details ? 
         <Header heading = {W_details.name} image = {W_details.image }></Header> :
         N_details ? 
         <Header heading = {N_details.name} image = {N_details.image }></Header> : 
         S_details ?
         <Header heading = {S_details.name} image = {S_details.image }></Header> : ''
        }
       {details ? 
       <DestinationInfo details = {details} /> : 
       E_details ? 
       <DestinationInfo details = {E_details} /> : 
       W_details ? 
       <DestinationInfo details = {W_details} /> : 
       N_details ? 
       <DestinationInfo details = {N_details} /> : 
       S_details ?
       <DestinationInfo details = {S_details} /> : ''
       }
        
        {details ? 
        <Cities cities = {destinationsData['destinations']} name = {details.name}/>  : 
        E_details?  
        <Cities cities = {EasternData['eastern_destinations']} name = {EasternData['E_details'].name}/> : 
        W_details?
        <Cities cities = {WesternData['western_destinations']} name = {W_details.name}/> : 
        N_details ? 
        <Cities cities = {NorthernData['northern_destinations']} name = {N_details.name}/> : 
        S_details ?
        <Cities cities = {SouthernData['southern_destinations']} name = {S_details.name}/> : ''}  
    
    
        
        </div>
    )
}

export default Details;