import HeaderBar from '../components/header';
import PageHeading from '../components/pageheading'
import {Whoweareblock, Partnershipblock, Clientsblock, OurTeamBlock} from '../components/Homepageblocks';
import { Projectsblock } from '../components/projectsblock';
import Form from '../components/contactusform';
import '../scripts/script';
import { useEffect } from 'react';


export const HomePage = (props) => {
    useEffect(() => {
          window.scrollTo(0, 0);
    },[]);
  
    return(
        <>
        <HeaderBar activeitem={0}/>
        <PageHeading/>  
        <Clientsblock />
        <Whoweareblock />
        {//<Projectsblock />
        }
        <Partnershipblock />
        {//<OurTeamBlock />
        }
        <Form />
        </>
    );
}



export default HomePage;