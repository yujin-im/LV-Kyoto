import {Helmet} from 'react-helmet-async';
const NotFound = () => {
    return(
        <>
            <Helmet>
                <title>Not found</title>
                <meta name = "description" content = 'travel friends not found page' />
            </Helmet>
            <h1> Not Found </h1>
        </>
    )
}


export default NotFound