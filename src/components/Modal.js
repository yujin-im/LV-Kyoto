import {useContext} from "react";
import ModalContext from "../context/ModalContext";
import { CLOSE_MODEL } from "../context/types/ModelTypes";

const Modal = (props) => {
    const {state, dispatch} = useContext(ModalContext);
    console.log(state);
    const close = (e) => {
        if(e.target.getAttribute('class') === 'modal') {
            dispatch({type : CLOSE_MODEL})
        }
    }
    return state.modelStatus && state.current === props.current ? ( 
        <div className="modal" onClick = {close}>
            <div class = "modal__body">
                {props.children}
            </div>
        </div>) : ('');
    
}

export default Modal;