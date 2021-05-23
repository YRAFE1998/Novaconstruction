import { Row,Col } from "reactstrap";
import { H5, H6 } from "../styledcomponents/text"

export const Profilecard = (props) => {
    return(
        <Row className='text-center'>
            <Col xs="12">
                <img src={props.image} className='profileimage' />
            </Col>
            <Col xs="12" className="mt-4">
                <H5>{props.name}</H5>
            </Col>
            <Col xs="12">
                <H6>
                    {props.title}
                </H6>
            </Col>
            
        </Row>
    );
}

export const Foundercard = (props) =>{
    return(
        <Row >
            <Col xs="12" lg="4">
                <Row>
                    <Col xs='12' className='p-2' style={{border:'solid gold', borderWidth:'1px 0px 0px 1px'}}>
                        <img src={props.image} className='imgfit profileimage' />
                    </Col> 
                </Row>
                <Row style={{transform:'rotate(-90deg)', transformOrigin:'100px 90px',width:'200px'}}>  
                    <Col xs='12'>
                        <H6>{props.title}</H6>
                    </Col> 
                    <Col xs='12'>
                        <H5 >{props.name}</H5>
                    </Col>  
                </Row>
            </Col>
            
            <Col xs="12" lg="8">
                <Row>
                   <H5 style={{color:'white'}}>
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT ABOUT ABOUT
                    ABOUT
                   </H5> 
                </Row>
            </Col>
        </Row>
    );
} 