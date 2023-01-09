import {useContext} from 'react';
import GalleryContext from '../../context/GalleryContext';
import {LazyLoadImage} from 'react-lazy-load-image-component'
import { OPEN_LIGHTBOX } from '../../context/types/GalleryTypes';
const GalleryImage = ({glr}) => {
    const {dispatch} = useContext(GalleryContext);
    const openLightBox = imageObject => {
        dispatch({type : OPEN_LIGHTBOX, payload : imageObject})
    }
    return(
        <div className="col-3">
            <div className="gallery__image">
                <LazyLoadImage src = {glr.image} onClick = {() => openLightBox(glr)}/>
            </div>
        </div>
    )
}

export default GalleryImage