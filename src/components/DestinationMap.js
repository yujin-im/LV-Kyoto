import DestinationsList from './DestinationsList';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from "swiper";
const DestinationMap = ({dd}) => {
    return(
        <>
         <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper"
        >
      
        {dd.map((destination) => (
                    <SwiperSlide>
                         <DestinationsList destination = {destination}/>
                    </SwiperSlide>
                     
           
              
            ))}
       </Swiper>
        </>
    )
}

export default DestinationMap;