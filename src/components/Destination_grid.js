import React from 'react'
import DestinationsList from './DestinationsList';
import {Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation } from "swiper";
function Destination_grid({destination}) {
  return (
    <>
    <div className="destinations__block">
    <div className="row ml-minus-15 mr-minus-15">
        <h1 className = 'destinations__block__h'>{destination[0].direction == 1 ? '교토 중심' : destination[0].direction == 2 ? '교토 동부' : destination[0].direction == 3 ? '교토 서부' : destination[0].direction == 4 ? '교토 북부' : destination[0].direction == 5 ? '교토 남부' : ''}</h1>
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
             {destination.map((des) => (
                    <SwiperSlide>
                         <DestinationsList destination = {des}/>
                    </SwiperSlide>
                     
           
              
            ))}
            
        </Swiper>
       
    </div>                                          
</div>
</>
  )
}

export default Destination_grid