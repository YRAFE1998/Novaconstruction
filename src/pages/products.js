import { useEffect } from "react";
import HeaderBar from "../components/header";
import { Projectsblock } from "../components/projectsblock"

export const ProductsPage = (props) => {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <>
        <HeaderBar activeitem={3} notransition/>
        <Projectsblock showall={true} paddingtop/>
        </>
    )
}

export default ProductsPage;