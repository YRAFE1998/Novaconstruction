import Styledblock from './styledblock';
import {H5,H3,Secondary5} from '../styledcomponents/text';
import { Col, Container, Row } from "reactstrap"
import { Foundercard, Profilecard } from "./profilecard"


export const Whoweareblock = (props) => {
    return(
        <Styledblock bg='black' title=''>
            
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
    <Styledblock bg='white' title='PARTNERSHIP'>
        <Secondary5 style={{lineHeight:'2.4'}} className="mb-5 secondary">
        SORGENTE SRL is located in MILANO, ITALY and is part of the Direct Selling Industry. Nova Engineering and SORGENTE SRL have created a partnership inside the Egyptian and international market to enhance the quality of services introduced to the Clients and ensure that the market receives the best quality available. Together ensure a 360° service with a strong presence in Europe-Italy.
        </Secondary5>
        <Container style={{marginTop:'5rem'}}>
            <Row>
                <Col xs='12 text-center'>
                    <img src ='/assets/images/Group -1.png' className='imglogofit' />
                </Col>
            </Row>
        </Container>
    </Styledblock>
    )
}

export const OurTeamBlock = (props) => {
    return(
    <Styledblock bg='black' title='OUR TEAM' subtitle='OUR AMAZING TEAM'>
        <Secondary5 style={{lineHeight:'2.4'}} className="mt-4 secondary">
        </Secondary5>
        <Container className="mt-5">
            <Row>
                <Col xs='3' className="text-gold">
                    <Foundercard title="Founder & CEO" name="Mohamed Ahmed" image='/assets/images/profile-example.jpeg' />
                </Col>
                <Col xs='3'>
                    <Profilecard image='/assets/images/profile-example.jpeg' name='Yousef Refaat' title='Web Developer' />
                </Col>
                <Col xs='3'>
                    <Profilecard image='/assets/images/profile-example.jpeg' name='Yousef Refaat' title='Web Developer' />
                </Col>
                <Col xs='3'>
                    <Profilecard image='/assets/images/profile-example.jpeg' name='Yousef Refaat' title='Web Developer' />
                </Col>
            </Row>
        </Container>
    </Styledblock>
    )
}

export const Clientsblock = (props) => {
    return(
    <Styledblock bg='white' title='CLIENTS' subtitle='We have worked with some amazing companies around the world'>
        <Container>
            <Row className='mt-5'>
                <Col xs='8' className="offset-2 text-center">
                    <img src ='/assets/images/Group -2.png' className='imgfit' />
                </Col>
            </Row>
        </Container>
    </Styledblock>
    )
}
