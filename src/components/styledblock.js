import { Container, Jumbotron, Row,Col } from "reactstrap";
import { Verticalline } from "../styledcomponents/lines";
import {H6,BlockTitle, Secondary} from '../styledcomponents/text';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { useContext, useEffect, useState } from "react";
import { Offsetcontext } from "../context";
import $ from 'jquery';


const bgimages = ["assets/images/Earth.png","assets/images/Venus.png","assets/images/Callisto.png", "assets/images/Saturn.png","assets/images/GJ 504b.png"
                    ,"assets/images/Jupiter.png","assets/images/Mars.png","assets/images/Sirius.png","assets/images/Sun.png","assets/images/Uranus.png"]

export const Styledblock1 = (props) => {
    const offsetY = useContext(Offsetcontext);
    const index = ((props.backgroundpath-1)*2) % bgimages.length;
    const index1 = (((props.backgroundpath-1)*2)+1) % bgimages.length;

    const colorclasses = props.bg=='white'? 'secondary':'text-white';
    const top = ((props.backgroundpath-1) * 50) + 50;
    return(
        <Container style={{minHeight:'100vh', zIndex:'1'}} fluid={true} className={"d-flex flex-column pb-5 justify-content-center styled-block"} id={props.id}>
            <div style={{transform:`translateY(-${offsetY * 0.5}px)`, top:`${top}%`}} className="background-image-container d-none d-lg-block">
                <img src={`${bgimages[index]}`} className="background-image"/>
            </div>
            <div style={{transform:`translateY(-${offsetY * 0.5}px)`, top:`${top}%`}} className="background-image1-container d-none d-lg-block">
                <img src={`${bgimages[index1]}`} className="background-image1" />
            </div>

            <Row className="text-center align-self-start mx-auto" style={{width:'100%'}}>
                <Col xs="6" className="text-center offset-6 px-0">
                    <Verticalline offset={props.offset}/>
                </Col>
                    <Col xs="12" className="mt-3">
                    <Zoom>
                        <BlockTitle>
                            {props.title}
                        </BlockTitle>
                    </Zoom>
                    </Col>
                    <Col xs="12" sm="12" md="8" xl="6" className="offset-md-2 offset-xl-3 text-center"> 
                    <Zoom>
                        <Secondary fontweight='bold' style={{lineHeight:'2.4'}} className={"mt-4 " + 'text-white'}>
                            {props.subtitle}
                        </Secondary>
                    </Zoom>
                    </Col>
            </Row>
            <Container className="my-auto px-lg-5">
                <Row className="mt-5 px-lg-5">
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
    const [translate, settranslate] = useState(0);
    const [scrollstart, setscrollstart] = useState(0);
    const offsetY = useContext(Offsetcontext);
    const index = ((props.backgroundpath-1)*2) % bgimages.length;
    const index1 = (((props.backgroundpath-1)*2)+1) % bgimages.length;
    useEffect(()=>{
        const trigger = offsetY - scrollstart;
        settranslate(trigger >= 0 ? trigger * 0.5 :0);  
    },[offsetY]);
    useEffect(()=>{
        setscrollstart($('#' + props.id).offset().top - $( window ).height());
    },[]);
    const colorclasses = props.bg=='white'? 'secondary':'text-white';
    return(
        <Container style={{minHeight:'100vh', zIndex:'1'}} fluid={true} className={"d-flex flex-column pb-5 justify-content-center styled-block"} id={props.id}>
            <div style={{transform:`translateY(-${translate}px)`, top:`50%`}} className="background-image-container">
                <img src={`${bgimages[index]}`} className="background-image"/>
            </div>
            <div style={{transform:`translateY(-${translate}px)`, top:`50%`}} className="background-image1-container d-none d-lg-block">
                <img src={`${bgimages[index1]}`} className="background-image1" />
            </div>

            <Row className="text-center align-self-start mx-auto" style={{width:'100%'}}>
                <Col xs="6" className="text-center offset-6 px-0">
                    <Verticalline offset={props.offset}/>
                </Col>
                    <Col xs="12" className="mt-3">
                    <Zoom>
                        <BlockTitle>
                            {props.title}
                        </BlockTitle>
                    </Zoom>
                    </Col>
                    <Col xs="12" sm="12" md="8" xl="6" className="offset-md-2 offset-xl-3 text-center"> 
                    <Zoom>
                        <Secondary fontweight='bold' style={{lineHeight:'2.4'}} className={"mt-4 " + 'text-white'}>
                            {props.subtitle}
                        </Secondary>
                    </Zoom>
                    </Col>
            </Row>
            <Container className="my-auto px-lg-5">
                <Row className="mt-5 px-lg-5">
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