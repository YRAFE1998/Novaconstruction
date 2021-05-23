import { Container, Jumbotron, Row,Col } from "reactstrap";
import {H5, H6, H7} from '../styledcomponents/text';


export const PageHeading = (props) => {
    
    return(
        <Jumbotron style={{background:'url("assets/images/1717709.jpg")', backgroundSize:'cover', backgroundRepeat:'no-repeat', height:'100vh'}} className="d-flex align-items-center">
            <Container style={{height:'100%'}}>
                <Row className="d-flex align-items-end" style={{height:'100%'}}>
                    <div className="text-center"> 
                        <Col xs="12" xl="8" className="offset-xl-2" style={{}}>
                                <img src="assets/images/Group 80.png" style={{maxWidth:'80%'}} />
                                {/*<img src="assets/images/NOVA LOGO.png" />*/}
                        </Col>
                        <Col  sm="12" md="10" lg="8" xl="6" className="d-none text-gold offset-md-1 offset-lg-2 offset-xl-3 mt-4" style={{wordBreak:'break-all'}}>
                         {/* d-sm-block*/}
                         
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
                    </div>
                    <Col xs='4' className='offset-8 pb-5 text-gold' style={{textAlign:'right'}}>
                        <H6 className="text-right" style={{fontWeight:'bold'}}> Get in Touch <i className="fas text-gold fa-long-arrow-alt-right"></i> </H6>
                    </Col>
                </Row>   
            </Container>         
        </Jumbotron>
    );
}

export default PageHeading;