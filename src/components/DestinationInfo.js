import DestinationDetails from "./DestinationDetails";

const DestinationInfo = ({details}) => {
    return(
        <div className = 'destinationInfo'>
            <div className = 'container'>
                <h2 className = 'heading'>
                    Overview
                </h2>
                <div className  ="row">
                    <div className = "col-8">
                        <p className = "destinationInfo__p">
                            {details.details}
                        </p>
                    </div>
                </div>

                <h2 className = "heading"> How to go </h2>
                <div className = "row">
                    <div className = "col-8">
                        <p className = "destinationInfo__p" > 
                            {details.howtogo}
                        </p>
                    </div>
                </div>
                <h2 className = "heading">
                    Good to know
                </h2>
                <div class = "row">
                    <div className = "col-8">
                        {details.popularity? 
                            <DestinationDetails title = "관광객의 인지도" text = {details.popularity} />
                         : ''}

                        {details.scenery? 
                            <DestinationDetails title = "거리풍경" text = {details.scenery} />
                         : ''}

                        {details.world? 
                            <DestinationDetails title = "세계유산" text = {details.world} />
                         : ''}

                        {details.time? 
                            <DestinationDetails title = "시간" text = {details.time} />
                         : ''}
                       
                        
                    </div>
                </div>

                <h3 className="heading">
                    Point!!
                </h3>
                <div class="row">
                    <div className="col-8">
                        <p className = "destinationInfo__p" >
                        {details.point}
                         </p> 
                          
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationInfo;