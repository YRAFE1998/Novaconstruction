import { useEffect } from 'react';
import Form from '../components/contactusform';
import HeaderBar from '../components/header';

export const Contactuspage = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
        <HeaderBar activeitem={2}/>
        <Form color="black" />
        </>
    )
}

export default Contactuspage;