import { Container, Jumbotron, Row,Col } from "reactstrap";
import {H6, H7} from '../styledcomponents/text';
import {scrolltofirstblock} from '../scripts/script';
import { Link } from 'react-router-dom';

export const PageHeading = (props) => {
    const Scrolltofirstblock = ()=> scrolltofirstblock();
    return(
        <Jumbotron style={{ minHeight:'100vh', position:'relative', backgroundImage:'black', backgroundImage:'url("assets/images/ba6.jpg")',borderRadius:'none'}} className="d-flex align-items-stretch mb-0 page-heading-background backgroundzoomonhover" id="pageheading">
        <div className="pageheader-background-image" style={{opacity:'0.5'}}/>
            <Container style={{zIndex:'2'}} className="pb-4">
                <Row className="d-flex align-items-end" style={{height:'100%'}}>
                        <Col xs="12" xl="8" className="offset-xl-2 text-center px-0" style={{}}>
                                <img src="assets/images/Logo.png" style={{maxWidth:'100%'}} />
                        </Col>
                        
                    {/*<Col xs='6' md='4'  className='offset-6 offset-md-8 pb-xl-5 pb-0 text-white' style={{textAlign:'right'}}>
                        <Link to="/contactus" className='unstyled'><H6 className="text-end"> Get in Touch <i className="fas fa-long-arrow-alt-right ms-2"></i> </H6></Link>
                    </Col>*/}
                    <Col xs="12" className="text-center text-white">
                        <button className="unstyledbtn fixedheight" onClick={() => {Scrolltofirstblock()}} id="scrolltonextbutton"><i className="fas fa-chevron-down text-white animationtoptobottom"></i></button>
                    </Col>
                </Row>   
            </Container>         
        </Jumbotron>
    );
}

export default PageHeading;