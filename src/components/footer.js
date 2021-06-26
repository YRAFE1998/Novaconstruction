import { Col, Container, Row } from "reactstrap";
import { BlockTitlesmall } from "../styledcomponents/text";
import { Link } from 'react-router-dom';

export const Footer = (props) => {
    return(
    <Container fluid={true} style={{backgroundColor:'#222222'}} className="pt-4 pb-4 text-center text-md-start">
    <Container>
      <Row>
          <Col xs='12' md='4' className="mt-4 mt-md-0">
            <div className="d-flex flex-column text-white">
                <div className="mb-2 bd-highlight">
                    <BlockTitlesmall color="white">
                    <hr className="me-3" style={{display:'inline-block',verticalAlign:'middle'}}/>Address<hr className="ms-3" style={{display:'inline-block',verticalAlign:'middle'}}/>
                    </BlockTitlesmall>
                </div>
                <h6>Administrative Building no.5</h6>
                <h6>Zizinia Resort - Fifth settlement</h6>
                <h6>New Cairo, Egypt</h6>
                <a href="tel:+20226124800" className="h6 unstyled"><span className="fas fa-phone-square-alt"></span> +202 26124800</a>
            </div>
          </Col>
          <Col xs='12' md='4' className="mt-4 mt-md-0">
            <div className="d-flex flex-column text-white">
                <div className="mb-2 bd-highlight">
                    <BlockTitlesmall color="white">
                    <hr className="me-3" style={{display:'inline-block',verticalAlign:'middle'}}/>Get in Touch<hr className="ms-3" style={{display:'inline-block',verticalAlign:'middle'}}/>
                    </BlockTitlesmall>
                </div>
                <Link to="/contactus" className="h6 unstyled">Get a Quote <span className="fas fa-long-arrow-alt-right ms-2"></span></Link>
                <a href="mailto: sales@nova-egypt.com" className="h6 unstyled"><span className="fas fa-envelope-square"></span> sales@nova-egypt.com</a>
                <div className="d-flex flex-row justify-content-md-start justify-content-center text-white mt-3" style={{fontSize:'1.8rem'}}>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube-square mx-4"></i>
                </div>
            </div>
          </Col>
          <Col xs='12' md='4' className="mt-4 mt-md-0">
            <div className="d-flex flex-column text-white">
                <div className="mb-2 bd-highlight">
                    <BlockTitlesmall color="white">
                    <hr className="me-3" style={{display:'inline-block',verticalAlign:'middle'}}/>Useful links<hr className="ms-3" style={{display:'inline-block',verticalAlign:'middle'}}/>
                    </BlockTitlesmall>
                </div>
                <Link to="/" className="h6 unstyled">Home</Link>
                <Link to="/contactus" className="h6 unstyled">Contact Us</Link>
                <Link to="/aboutus" className="h6 unstyled">About Us </Link>
                <Link to="/products" className="h6 unstyled">Our Projects</Link>

            </div>
          </Col>
          <Col xs='12' className="text-center text-white mt-5">
          2021 <span className="far fa-copyright"></span> Nova Egypt
          </Col>
      </Row>
      </Container>
    </Container>  
    );
}