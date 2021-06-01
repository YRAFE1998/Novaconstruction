import HeaderBar from '../components/header';
import PageHeading from '../components/pageheading'
import {Whoweareblock, Partnershipblock, Clientsblock, OurTeamBlock} from '../components/Homepageblocks';
import { Projectsblock } from '../components/projectsblock';
import {Backgroundtransition} from '../utils/animations';
import '../scripts/script';
import { useEffect, useState } from 'react';


export const HomePage = (props) => {
    const [loaded, setloaded] = useState(false);
  
  
    useEffect(() => {
      const el = document.getElementById("spinner");
        if (el) {
          el.remove();
          setloaded(true);
        }
  
    },[]);
  
    return(
        <>
        {loaded &&
        <section style={{position:'relative'}}>
        <Backgroundtransition />
        <HeaderBar  menuitems={["Home", "Contact Us", "About Us", "Products"]} activeitem={0}/>
        <PageHeading/>  
        <Whoweareblock />
        <Partnershipblock />
        <Projectsblock />
        <Clientsblock />
        <OurTeamBlock />
        </section>
        }
        </>
    );
}



export default HomePage;