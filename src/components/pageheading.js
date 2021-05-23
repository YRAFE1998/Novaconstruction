import { Container, Jumbotron, Row,Col } from "reactstrap";
import {H5, H6} from '../styledcomponents/text';


export const PageHeading = (props) => {
    
    return(
        <Jumbotron style={{background:'url("assets/images/1717709.png")', height:'100vh'}} className="d-flex align-items-center">
            <Container style={{height:'100%'}}>
                <Row className="text-center d-flex align-items-end" style={{height:'100%'}}>
                    <div className=""> 
                        <Col xs="12" lg="8" className="offset-lg-2" style={{background:'url("assets/images/Box.png")',backgroundRepeat:'no-repeat', backgroundSize:'contain',backgroundPosition:'center' , padding:"20px"}}>
                                <img src="assets/images/We’re an Engineering firm.png" style={{maxWidth:'80%'}} />
                                {/*<img src="assets/images/NOVA LOGO.png" />*/}
                        </Col>
                        <Col xs="12" style={{color:'gold'}} lg="8" className="text-center text-yellow offset-lg-2 mt-4" style={{wordBreak:'break-all'}}>
                            <Row>
                                <Col xs="12" md="3" className="borderrightgoldmd">
                                    <H6>WHO WE ARE</H6>
                                </Col>
                                <Col xs="12" md="2" className="borderrightgoldmd">
                                    <H6> SERVICES </H6>
                                </Col>
                                <Col xs="12" md="2" className="borderrightgoldmd">
                                    <H6> PRODUCTS </H6>
                                </Col>
                                <Col xs="12" md="2" className="borderrightgoldmd">
                                    <H6>CLIENTS</H6>
                                </Col>
                                <Col xs="12" md="3">
                                    <H6>OUR TEAM</H6>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                    <Col xs='4' className='offset-8 text-right pb-5'>
                        <H6 style={{fontWeight:'bold'}}> Get in Touch <i class="fas fa-long-arrow-alt-right"></i> </H6>
                    </Col>
                </Row>   
            </Container>         
        </Jumbotron>
    );
}

export default PageHeading;