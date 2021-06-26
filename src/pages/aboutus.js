import { useEffect } from "react";
import HeaderBar from "../components/header";
import { Clientsblock, Partnershipblock, Whoweareblock } from "../components/Homepageblocks";

export const Aboutuspage = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
        <HeaderBar activeitem={1} notransition/>
        <Whoweareblock/>
        <Partnershipblock />
        <Clientsblock />
        </>
    );
}

export default Aboutuspage;