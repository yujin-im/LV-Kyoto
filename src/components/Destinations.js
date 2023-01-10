
import React, {useState, useContext, useRef} from 'react';
import DestinationsContext from "../context/DestinationsContext";
import EasternContext from '../context/EasternContext';
import WesternContext from '../context/WesternContext';
import NorthernContext from '../context/NorthernContext';
import SouthernContext from '../context/SouthernContext';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Destination_grid from './Destination_grid';

const Destinations = () => {
    const {destinationsData} = useContext(DestinationsContext);
    const {EasternData} = useContext(EasternContext);
    const {WesternData} = useContext(WesternContext);
    const {NorthernData} = useContext(NorthernContext);
    const {SouthernData} = useContext(SouthernContext);
    const {western_destinations} = WesternData;
    const center = destinationsData['destinations'];
    const eastern = EasternData['eastern_destinations'];
    const {northern_destinations} = NorthernData;
    const {southern_destinations} = SouthernData;
    console.log('nn', NorthernData);
    console.log('e',eastern);
    console.log('sss',southern_destinations);

    const [state] = useState({
        heading : 
        '교토에서 가장 아름다운 장소를 별견하고 여행 친구를 만들어보세요!',
        paragraph :
        '교토(京都, 교토)는 794년 부터 1868년 까지 일본의 수도이자 천황의 거처였습니다. \
        150만명의 인구와 현대적인 얼굴을 가진 일본 10대 도시 중 하나입니다. \
        교토는 수세기에 걸쳐 많은 전쟁과 화재로 소실되었지만, \
        수많은 사원, 사당 등 역사적으로 귀중한 건축물이 오늘날 도시에 남아있습니다.'


})

    return(
        <div className = "destinations">
            <div className="container">
                <div className="row">
                    <div className="col-6 p-15">
                        <h3 className="destinations__heading"> {state.heading}</h3>
                    </div>
                    <div className="col-6 p-15">
                        <p className = "destinations__paragraph">
                            {state.paragraph}
                        </p>
                    </div>
                </div>
             <Destination_grid destination ={center}/>
             <Destination_grid destination ={eastern}/>
             <Destination_grid destination ={western_destinations}/>
             <Destination_grid destination ={northern_destinations}/>
             <Destination_grid destination ={southern_destinations}/>
             
             

            </div>
        </div>

    )
}


export default Destinations;