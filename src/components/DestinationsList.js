//npm i react-lazy-load-image-component
//npm i react-icons
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {GiPositionMarker} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import "../style.css";
const DestinationsList = ({ destination }) => {
    return(
        <>
      
            <div clasName = 'col-3'>
            <div className="destinations__card">
                <div className = "destinations__card__img">
                    <LazyLoadImage src = {destination.image} alt = {destination.image} />
                </div>
                <div className = 'destinations__card__layer'>
                    <div className="destinations__card__layer__content">
                        <GiPositionMarker size = {20}/>
                        <div className="destinations__card__layer__content__country">
                            {destination.name}
                        </div>
                    </div>
                </div>
                <div className = 'destinations__card__info'>
                    <div className = 'destinations__card__info__text'>
                        <Link className = 'btn-white' to={`/details/${destination.id}`}> Explore </Link>
                    </div>
                </div>
            </div>
            </div>
  
        </>
    )
}

export default DestinationsList;