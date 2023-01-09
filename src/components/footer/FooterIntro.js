import {useState} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
const FooterIntro = () => {
    const [state] = useState({
        logo : '/assets/footer/kyoto_2.png',
        intro : 'LV,Kyoto는 세계적으로 유명하고 아름다운 교토로 여행을 주선합니다. 2022년부터 우리는 귀중한 고객에게 고품질 영상을 제공합니다.'
    })
    return(
        <div className="footer__intro">
            <div className="footer__intro__img">
                <LazyLoadImage src = {state.logo} alt = "footer logo"/>
            </div>
            <div className="footer__intro__msg">
                {state.intro}
            </div>
        </div>
    )
}

export default FooterIntro;