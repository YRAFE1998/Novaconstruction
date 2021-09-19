import { useEffect } from "react";
import { DigitalSolutions } from "../components/digitalsolutions";
import HeaderBar from "../components/header";
export const DigitalSolutionsPage = (props) => {

    
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
            <HeaderBar activeitem={3} notransition/>
            <DigitalSolutions />
        </>
    )
}

export default DigitalSolutionsPage;