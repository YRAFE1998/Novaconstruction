import { useEffect } from "react";
import ThankYouMessage from "../components/thankyoupage";

export const ThankyouPage = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
        <ThankYouMessage />
        </>
    )
}

export default ThankyouPage;