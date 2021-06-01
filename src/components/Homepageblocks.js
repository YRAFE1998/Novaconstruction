import Styledblock, { Styledblock1 } from './styledblock';
import {H5,H3,Secondary5} from '../styledcomponents/text';
import { Col, Container, Row } from "reactstrap"
import { Foundercard, Profilecard } from "./profilecard"


const clientslogos = [
"assets/images/clientslogos/1.png","assets/images/clientslogos/2.png",
"assets/images/clientslogos/3.png","assets/images/clientslogos/4.png",
"assets/images/clientslogos/5.png","assets/images/clientslogos/6.png",
"assets/images/clientslogos/7.png","assets/images/clientslogos/8.png",
"assets/images/clientslogos/9.png","assets/images/clientslogos/10.png",
"assets/images/clientslogos/11.png","assets/images/clientslogos/12.png",
"assets/images/clientslogos/13.png","assets/images/clientslogos/14.png",
"assets/images/clientslogos/15.png","assets/images/clientslogos/16.png",
"assets/images/clientslogos/17.png", "assets/images/clientslogos/18.png",
"assets/images/clientslogos/19.png"]

export const Whoweareblock = (props) => {
    return(
        <Styledblock bg='black' title='' backgroundpath={1} id="whoweare">
            
            <H3 className="text-gold">
                Who We Are
            </H3>
            <H5 style={{color:'white', lineHeight:'1.8'}} className="mt-4">
                NOVA Engineering provides a comprehensive portfolio of industrial solutions to our
                customers in the field of Pharma, Chemical, Cosmetics, Food and Beverages to create the
                future of industrial automation through precision, innovation and customer insight. We
                provide our expertise to various industries and Technologies from single machines to
                complete production lines and turnkey solutions. This is coupled with pioneering technology
                leaders in the Market. Our Sales and technical services Team are always tailored to your
                specific needs as well as the operating scenarios. We continue to be driven and defined by
                passion, perseverance and pursuit of perfection to be problem solvers and true partners.
            </H5>
        </Styledblock>
    );
}


export const Partnershipblock = (props) => {
    return(
    <Styledblock bg='white' title='PARTNERSHIP' backgroundpath={2} id="partnership">
        <H5 style={{lineHeight:'2.4'}} className="mb-5 secondary">
        SORGENTE SRL is located in MILANO, ITALY and is part of the Direct Selling Industry. Nova Engineering and SORGENTE SRL have created a partnership inside the Egyptian and international market to enhance the quality of services introduced to the Clients and ensure that the market receives the best quality available. Together ensure a 360° service with a strong presence in Europe-Italy.
        </H5>
        <Container style={{marginTop:'5rem'}}>
            <Row>
                <Col xs='12 text-center'>
                    <img src ='/assets/images/Group -1.png' className='imglogofit'/>
                </Col>
            </Row>
        </Container>
    </Styledblock>
    )
}

export const OurTeamBlock = (props) => {
    return(
    <Styledblock bg='black' title='OUR TEAM' subtitle='' backgroundpath={5} id="ourteam">
        
        <Container className="mt-5">
            <Row>
                <Col xs='12' sm='12' md='12' lg='12' xl='3' className="text-gold my-3">
                    <Foundercard title="Founder & CEO" name="Mohamed Ahmed" image='/assets/images/p1.jpg' />
                </Col>
                <Col xs='12' sm='12' md='6' lg='4' xl='3' className='my-3'>
                    <Profilecard image='/assets/images/p2.jpg' name='John Doe' title='Project Manager' />
                </Col>
                <Col xs='12' sm='12' md='6' lg='4' xl='3' className='my-3'>
                    <Profilecard image='/assets/images/p3.jpg' name='John Doe' title='Job title' />
                </Col>
                <Col xs='12' sm='12' md='6' lg='4' xl='3' className='my-3'>
                    <Profilecard image='/assets/images/p4.jpg' name='Yousef Refaat' title='Job title' />
                </Col>
            </Row>
        </Container>
    </Styledblock>
    )
}

export const Clientsblock = (props) => {
    const logos = clientslogos.map((item)=>{
        return(
        <Col xs='6' md='3' lg='2' className="d-flex align-items-center justify-content-center my-2">
            <img src={`${item}`} className='imgfit'/>
        </Col>
        );
    })
    return(
    <Styledblock bg='white' title='CLIENTS' subtitle='We have worked with some amazing companies around the world' backgroundpath={4} id="clients">
        <Container>
            <Row className='mt-5'>
                <Col xs='12' className="text-center">
                    <Row>
                        {logos}
                    </Row>
                </Col>
            </Row>
        </Container>
    </Styledblock>
    )
}
