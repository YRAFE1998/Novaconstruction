import { useEffect } from "react";
import HeaderBar from "../components/header";
import { Clientsblock, Partnershipblock, Whoweareblock, Features } from "../components/Homepageblocks";

export const Aboutuspage = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
        <HeaderBar activeitem={1} notransition/>
        <div style={{height:'50px'}} />
        <Whoweareblock/>
        <Partnershipblock />
        <Features />
        <Clientsblock />
        </>
    );
}

export default Aboutuspage;