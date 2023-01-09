import {useState, useContext} from "react"
import ServicesLeft from "./ServicesLeft"
import SharedContext from "../../context/SharedContext"
import ServicesList from "./ServicesList"
const Service = () => {
    const {sharedData : {servicesData}} = useContext(SharedContext);
    console.log(servicesData)
    const [state] = useState({
        heading : '고객이 LV,Kyoto를 좋아하는 이유는 무엇일까요? 차별화된 서비스를 제공하기 때문입니다.',
        subHeading : '우리의 목표는 일본 여행에 대해 전문적이고 독특한 서비스를 제공하는 것이며, 고품질 서비스를 고객에게 제공하도록 노력하고 있습니다.'
    })
    return(
        <div className = "services">
            <div className = "services__contents">
                <div className = "container">
                    <div className = "row ml-minus-15 mr-minus-15 services__contents__container">
                        <div className = "col-6 p-15">
                            <ServicesLeft 
                            heading ={state.heading}
                            subHeading = {state.subHeading}/>
                        </div>
                        <div className = "col-6 p-15">
                            <ServicesList services = {servicesData}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service;