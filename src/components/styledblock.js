import { Container, Jumbotron, Row,Col } from "reactstrap";
import { Verticalline } from "../styledcomponents/lines";
import {H6,BlockTitle, Secondary} from '../styledcomponents/text';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';




export const Styledblock = (props) => {
    const bg = 'bg-' + props.bg;
    const colorclasses = props.bg=='white'? 'secondary':'text-white';
    return(
        <Container style={{minHeight:'100vh'}} fluid={true} className={bg + " d-flex flex-column pb-5 justify-content-center"}>
            <Row className="text-center align-self-start mx-auto" style={{width:'100%'}}>
                <Col xs="12" className="text-center ">
                    <Verticalline offset={props.offset}/>
                </Col>
                    <Col xs="12 mt-3 ">
                    <Zoom>
                        <BlockTitle>
                            {props.title}
                        </BlockTitle>
                    </Zoom>
                    </Col>
                    <Col xs="6 text-center" className="offset-3"> 
                    <Zoom>
                        <Secondary fontweight='bold' style={{lineHeight:'2.4'}} className={"mt-4 " + colorclasses}>
                            {props.subtitle}
                        </Secondary>
                    </Zoom>
                    </Col>
            </Row>
            <Container className="my-auto px-5">
                <Row className="mt-5 px-5">
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





export default Styledblock;