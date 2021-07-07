import { Container, Jumbotron, Row,Col } from "reactstrap";
import {BlockTitle, Secondary} from '../styledcomponents/text';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';


export const Styledblock1 = (props) => {
    const colorclasses = props.bg=='white'? 'bg-white secondary':'my-bg-dark text-white';
    const backimage = props.backimage?props.backimage:"";
    return(
        <Container style={{position:'relative'}} fluid={true} className={colorclasses + " mt-5 d-flex flex-column pb-5 justify-content-center align-items-center"} id={props.id}>
          {props.backimage && 
            <img src={backimage} style={{position: 'absolute', width: '100%', top:0, height: '100%',left: 0,objectFit: 'cover',opacity:'0.1'}} />
          }
            <Row className="text-center mx-auto" style={{width:'100%'}}>
                    <Col xs="12" className="mt-5">
                    <Zoom>
                        <BlockTitle color={props.bg == "white"?"#196bde":"white"}>
                            <hr className="me-3" style={{display:'inline-block',verticalAlign:'middle'}}/>{props.title}<hr className="ms-3" style={{display:'inline-block',verticalAlign:'middle'}}/>
                        </BlockTitle>
                    </Zoom>
                    </Col>
            </Row>
            <Container>
                <Row>
                    <Col xs="12" className="text-white">
                        <Fade>
                            {props.children}
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </Container>         
    );
}

export const Styledblock = (props) => {
    const colorclasses = props.bg=='white'? 'bg-white':'my-bg-dark text-white';
    const whitebackground= props.bg == 'white';
    const backimage = props.backimage?props.backimage:"";
    return(
        <Container style={{minHeight:'100vh',position:'relative'}} fluid={true} className={colorclasses + " d-flex flex-column pb-5 justify-content-center align-items-center"} id={props.id}>
          {!whitebackground && <img src={backimage} style={{position: 'absolute', width: '100%',height: '100%',left: 0, top:0, objectFit: 'cover', filter:'blur(5px)',opacity:'0.7'}} /> }
        <Row className="text-center mx-auto my-4 my-md-0" style={{width:'100%'}}>
                <Col xs="12" className="mt-3">
                <Zoom>
                    <BlockTitle color={props.bg == "white"?"#196bde":"white"}>
                    <hr className="me-3" style={{display:'inline-block',verticalAlign:'middle'}}/>{props.title}<hr className="ms-3" style={{display:'inline-block',verticalAlign:'middle'}}/>
                    </BlockTitle>
                </Zoom>
                </Col>
        </Row>
        <Container>
            <Row>
                <Col xs="12" className="">
                    <Fade>
                        {props.children}
                    </Fade>
                </Col>
            </Row>
        </Container>
    </Container>       
    );
}





export default Styledblock;