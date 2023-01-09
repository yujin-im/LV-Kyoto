import {useContext, useState, useEffect} from 'react';
import ModalContext from '../context/ModalContext';
import{Helmet} from 'react-helmet-async'
import Header from "../components/Header"
import Modal from '../components/Modal'
import { OPEN_MODEL } from '../context/types/ModelTypes';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Destinations from '../components/Destinations';
import Services from '../components/servies/Services'
import Reviews from "../components/reviews/Reviews"
import GalleryComponent from '../components/gallery/GalleryComponent';
import Footer from '../components/footer/Footer';
const Home = () => {
    const {state:ss,dispatch} = useContext(ModalContext);
    const [state] = useState({
        heading : '1000년의 수도',
        paragraph : '100만명의 일본여행자들이 선택한 대한민국 No.1 여행플랫폼'
    })

    const [registerModel] = useState('registerModel');
    const [loginModel] = useState('loginModel')

    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
    return (
        
        <>
        <Helmet>
            <title>LV,Kyoto</title>
            <meta name = "description" content="Travel to the world with travel friends" />
            <meta name = "keywords" content = "travel,travel tours, airline" />
        </Helmet>
        <Header heading = {state.heading} paragraph = {state.paragraph}>
            <button className = 'btn-default' onClick={()=>dispatch({type : OPEN_MODEL, payload : registerModel})}>Get Started</button>
        </Header>
        <Modal current = {registerModel}>
            <Register currentModel = {loginModel}/>
        </Modal>
        <Modal current = {loginModel}>
            <Login currentModel = {registerModel}/>
        </Modal>
        <Destinations />
        <Services />
        <Reviews />
        <GalleryComponent />
        <Footer />
        </>
    )
}

export default Home;