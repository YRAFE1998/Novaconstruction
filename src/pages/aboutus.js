import { PageHeading } from "../components/aboutuspageblocks";
import HeaderBar from "../components/header";
import { Clientsblock, Partnershipblock, Whoweareblock } from "../components/Homepageblocks";
import Projectsblock from "./products";

export const Aboutuspage = (props) => {
    return(
        <>
        <HeaderBar/>
        <Whoweareblock/>
        <Partnershipblock />
        <Clientsblock />
        </>
    );
}

export default Aboutuspage;