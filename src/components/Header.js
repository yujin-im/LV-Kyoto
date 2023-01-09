import {useState} from 'react';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Typical from 'react-typical';
const Header = ({heading, paragraph, children, image}) => {
    const [state] = useState({
        video : '/assets/videos/kyoto.mp4',
        poster : '/assets/images/screen_2.png',  
        logo : '/assets/images/kyoto_2.png', 
    })

    function tipical (heading) {
        var pageName = "";
        var tempPageName = window.location.href;
        var strPageName = tempPageName.split("/");
        pageName = strPageName[3];
        console.log(pageName);
        if (pageName == "details") {
            console.log('details:', heading);
            return(
                heading
            )
        } else{
            return(
                <Typical 
                loop = {Infinity}
                steps = {[
                    `${heading}`,
                    2000,
                    '살아숨쉬는 역사',
                    2000,
                    'KYOTO.',
                    1500,
                ]}
                />
            )

        }
  
  
    }

    return (
        <div className = "header">
            <div className="container pr">
                <div className="header__logo">
                    <img src={state.logo} alt='logo' />
                </div>
            </div>
            <div className = "header__video">
                {image ? (<LazyLoadImage src = {image} alt = {image} /> ):(
                <video src = {state.video} autoPlay loop muted poster={state.poster}></video>) }
            </div>
            <div className="header__contents">
                <div className = "container">
                    <div className = "header__contents__text">
                        <div class = "header__contents__text__child">
                            <div>
                            <h1 className="header__contents__text__child__h1">
                                {tipical(heading)}
                    
                            </h1>
                            </div>
                            <p className="header__contents__text__child__p">
                                {paragraph}
                            </p>
                            <div className="header__contents__text__child__link">
                                {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;