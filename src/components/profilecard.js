import { Row,Col } from "reactstrap";
import { H5, H6 } from "../styledcomponents/text"

export const Profilecard = (props) => {
    return(
        <Row className='text-center text-white m-0' style={{height:'100%', width:'100%'}}>
            <Col xs="12" style={{height:'60%', width:'100%'}}>
                <img src={props.image} className='profileimage' />
            </Col>
            <Col xs="12" className="mt-4 text-gold">
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
            <Col xs="12" xl="4">
                <Row>
                    <Col xs='12' sm='4' xl='12' className='py-0'>
                    {//style={{border:'solid gold', borderWidth:'1px 0px 0px 1px'}}
                    }
                        <img src={props.image} className='imgfit profileimage' />
                    </Col>
                    <Col xs="12" sm='8' xl='6' className="d-block d-xl-none order-2 order-sm-1">
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
                    </Col>
                    <Col xs='12' sm='4' className='order-1 order-sm-2 mb-4'>
                    <Row>
                        <Col xs='12' className='d-block d-xl-none mt-4 text-gold'>
                            <H6>{props.title}</H6>
                        </Col> 
                        <Col xs='12' className='d-block d-xl-none'>
                            <H5 >{props.name}</H5>
                        </Col> 
                    </Row>
                    </Col>
                </Row>
                <Row style={{transform:'rotate(-90deg)', transformOrigin:'100px 90px',width:'200px'}} className='d-none d-xl-block'>  
                    <Col xs='12' className="text-gold">
                        <H6>{props.title}</H6>
                    </Col> 
                    <Col xs='12'>
                        <H5 >{props.name}</H5>
                    </Col>  
                </Row>
            </Col>
            
            <Col xs="12" lg="8" className="d-none d-xl-block">
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