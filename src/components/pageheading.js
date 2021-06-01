import { useEffect, useState } from "react";
import { Container, Jumbotron, Row,Col } from "reactstrap";
import {H5, H6, H7} from '../styledcomponents/text';
import { backgroundtransition } from "../utils/animations";
import $ from 'jquery';
import {scrolltofirstblock} from '../scripts/script';

export const PageHeading = (props) => {
    const [offsetY, setoffsetY] = useState(0);
    const handleScroll = () => setoffsetY(window.pageYOffset);

    const Scrolltofirstblock = ()=> scrolltofirstblock();
    useEffect(()=> {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

  },[]);
    return(
        <Jumbotron style={{ height:'100vh'}}
        
        
            className="d-flex align-items-center mb-0 page-heading-background" id="pageheading">
            {

            //<img src="assets/images/1717709.png" className="background-image" id="firstbackgroundimage"/>
            }
            <Container style={{height:'100%'}}>
                <Row className="d-flex align-items-end" style={{height:'100%'}}>
                        <Col xs="12" xl="8" className="offset-xl-2 text-center px-0" style={{}}>
                                <img src="assets/images/Group 80.png" style={{maxWidth:'100%'}} />
                        </Col>
                        <Col  sm="12" md="10" lg="8" xl="6" className="d-none text-gold offset-md-1 offset-lg-2 offset-xl-3 mt-4" style={{wordBreak:'break-all'}}>                         
                            <Row>
                                <Col xs="12" sm="3" className="borderrightgoldmd">
                                    <H7 className = "m-0">WHO WE ARE</H7>
                                </Col>
                                <Col xs="12" sm="2" className="borderrightgoldmd">
                                    <H7 className = "m-0"> SERVICES </H7>
                                </Col>
                                <Col xs="12" sm="2" className="borderrightgoldmd">
                                    <H7 className = "m-0"> PRODUCTS </H7>
                                </Col>
                                <Col xs="12" sm="2" className="borderrightgoldmd">
                                    <H7 className = "m-0">CLIENTS</H7>
                                </Col>
                                <Col xs="12" sm="3">
                                    <H7 className = "m-0">OUR TEAM</H7>
                                </Col>
                            </Row>
                        </Col>
                    <Col xs='6' md='4'  className='offset-6 offset-md-8 pb-xl-5 pb-0 text-white' style={{textAlign:'right'}}>
                        <H6 className="text-right"> Get in Touch <i className="fas text-white fa-long-arrow-alt-right ml-2"></i> </H6>
                    </Col>
                    <Col xs="12" className="text-center text-white">
                        <button class="unstyledbtn fixedheight" onClick={() => {Scrolltofirstblock();document.getElementById("scrolltonextbutton").remove()}} id="scrolltonextbutton"><i class="fas fa-chevron-down text-white animationtoptobottom"></i></button>
                    </Col>
                </Row>   
            </Container>         
        </Jumbotron>
    );
}

export default PageHeading;