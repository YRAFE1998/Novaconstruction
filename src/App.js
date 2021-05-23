import logo from './logo.svg';
import HeaderBar from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/styles.css'
import PageHeading from './components/pageheading'
import {Whoweareblock, Partnershipblock, Clientsblock, OurTeamBlock} from './components/Homepageblocks';
import { Projectsblock } from './components/projectsblock';
function App() {
  return (
    <>
    <HeaderBar  menuitems={["Home", "Contact Us", "About Us", "Products"]} activeitem={0}/>
    <PageHeading>  
    </PageHeading>
    <Whoweareblock />
    <Partnershipblock />
    <Projectsblock />
    <Clientsblock />
    <OurTeamBlock />
    </>
  );
}

export default App;
