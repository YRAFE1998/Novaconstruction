import Styledblock, { Styledblock1 } from './styledblock';
import {H5,H3, BlockTitleBig,Secondary3} from '../styledcomponents/text';
import { Col, Container, Row } from "reactstrap"
import {GoldButton} from '../styledcomponents/buttons';
import { Foundercard, Profilecard } from "./profilecard";
import Zoom from 'react-reveal/Zoom';
import { Link } from 'react-router-dom';


const clientslogos = [
{
    "path":"assets/images/clientslogos/1.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig5"
},
{
    "path":"assets/images/clientslogos/2.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig6"
},
{
    "path":"assets/images/clientslogos/3.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih5"
},
{
    "path":"assets/images/clientslogos/4.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih2"
},
{
    "path":"assets/images/clientslogos/5.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig7"
},
{
    "path":"assets/images/clientslogos/6.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig3"
},
{
    "path":"assets/images/clientslogos/7.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig1"
},
{
    "path":"assets/images/clientslogos/8.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig2"
},
{
    "path":"assets/images/clientslogos/9.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig4"
},
{
    "path":"assets/images/clientslogos/10.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih6"
},
{
    "path":"assets/images/clientslogos/11.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig9"
},
{
    "path":"assets/images/clientslogos/12.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ig8"
},
{
    "path":"assets/images/clientslogos/13.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih4"
},
{
    "path":"assets/images/clientslogos/14.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih7"
},
{
    "path":"assets/images/clientslogos/15.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ii1"
},
{
    "path":"assets/images/clientslogos/16.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih3"
},
{
    "path":"assets/images/clientslogos/17.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih1"
},
{
    "path": "assets/images/clientslogos/18.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih9"
},
{   "path":"assets/images/clientslogos/19.png",
    "id":"k7q238y784c7687cn7yc47h746c6g7ch83ih8"
}]

const BootstrapCarousel = (props) => {
    const indicators = props.items.map((item, index) =>{
    const classnames = index == 0 ?"active d-none":"d-none";
    const ariaCurrent = index == 0 ?"true":"";
    return (
      <button type="hidden" className={classnames} aria-current={ariaCurrent} data-bs-target="#logoscarousel" data-bs-slide-to={`${index}`}  aria-label={`Slide ${index+1}`}></button>
    );
  });
  const carouselInner = props.items.map((item,index)=>{
    const classnames = index == 0?"carousel-item active":"carousel-item";
    return(
      <div className={classnames}>
          <img src={item} style={{objectFit:'contain',height:'100%'}} className="d-block w-100 my-auto" />
      </div>
    )
  })

return(
    <div id="logoscarousel" className="carousel carousel-dark slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {indicators}
      </div>
      <div className="carousel-inner">
        {carouselInner}
      </div>
      <button className="carousel-control-prev logoscontrolleft" type="button" data-bs-target="#logoscarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next logoscontrolright" type="button" data-bs-target="#logoscarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
);
}


export const Whoweareblock = (props) => {
    return(
        <Styledblock1 bg='white' title='WHO WE ARE' backgroundpath={1} id="whoweare"> 
            <Row>
                <Col xs='12' lg='4'>
                    <H5 style={{lineHeight:'1.8'}} className="mt-4 text-muted">
                        NOVA Engineering provides a comprehensive portfolio of industrial solutions to our
                        customers in the field of Pharma, Chemical, Cosmetics, Food and Beverages to create the
                        future of industrial automation through precision, innovation and customer insight.  
                    </H5>
                </Col>
                <Col xs='12' lg='4'>
                    <H5 style={{lineHeight:'1.8'}} className="mt-4 text-muted">
                        We provide our expertise to various industries and Technologies from single machines to
                        complete production lines and turnkey solutions. This is coupled with pioneering technology
                        leaders in the Market.
                    </H5>
                </Col>
                <Col xs='12' lg='4'>
                    <H5 style={{lineHeight:'1.8'}} className="mt-4 text-muted">
                        Our Sales and technical services Team are always tailored to your
                        specific needs as well as the operating scenarios. We continue to be driven and defined by
                        passion, perseverance and pursuit of perfection to be problem solvers and true partners.
                    </H5>
                </Col>
            </Row>
        </Styledblock1>
    );
}


export const Partnershipblock = (props) => {
    return(
        <>
        <Container style={{minHeight:'70vh'}} fluid={true} className={"px-0 d-flex align-items-stretch"} id={props.id}>

            <Row className="text-center mx-0 mt-5" style={{width:'100%'}}>
                    <Col xs="12" lg='6' className="text-black">
                        <Row style={{height:'100%'}} className="align-items-center">
                        {//<img src="/assets/images/ba8.jpg" style={{position: 'absolute', top:0, width: '100%',height: '100%',left: 0,objectFit: 'cover', opacity:'0.15'}} />
                        }

                            <Col xs='12' className="my-5">
                                <Zoom>
                                    <BlockTitleBig color="black" className="">
                                        Partnership
                                    </BlockTitleBig>
                                    <hr className='justify-self-center mx-auto' style={{width:'40%', backgroundColor:'#333333'}}/>
                                    <Secondary3 style={{fontFamily:"secondary-italic"}} className="text-black px-lg-5 px-4 py-4 text-start">
                                SORGENTE SRL is located in MILANO, ITALY and is part of the Direct Selling Industry. 
                                Nova Engineering and SORGENTE SRL have created a partnership inside the Egyptian and 
                                international market to enhance the quality of services introduced to the Clients and 
                                ensure that the market receives the best quality available. Together ensure a 360° service
                                with a strong presence in Europe-Italy.
                                </Secondary3>
                                <div className='d-lg-none text-center my-4'>
                                    <img src ='/assets/images/Group -11.png' className='imglogofit'/>
                                </div>
                                </Zoom>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" lg='6' className="bg-white d-lg-flex d-none align-items-center justify-content-center">
                        <Zoom>                        
                            <img src ='/assets/images/Group -11.png' className='imglogofit'/>
                        </Zoom>
                    </Col>
            </Row>
        </Container>
    </>
    )
}

export const OurTeamBlock = (props) => {
    return(
    <Styledblock1 bg='black' title='OUR TEAM' subtitle='' backgroundpath={5} id="ourteam" backimage="/assets/images/ba3.jpg">
        
        <Container className="mt-5">
            <Row>
                <Col xs='12' sm='12' md='12' lg='12' xl='3' className="text-white my-3">
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
    </Styledblock1>
    )
}

export const Clientsblock = (props) => {
    const logosbig = clientslogos.map((item)=>{
        return(
            <Col xs='6' md='3' lg='2' className="d-md-flex d-none align-items-center justify-content-center my-2">
                <div className="imgfit">
                    <Link to={"/products?id=" + item.id}><img src={`${item.path}`} className='imgfit100 zoom-on-hover-100'/></Link>
                </div>
            </Col>
        );
    });
    const logossmall =  <Col xs='12' className='d-block d-md-none'> <BootstrapCarousel items={clientslogos} /></Col>
    return(
    <Styledblock1 bg='white' title='OUR PARTNERS' subtitle='We have worked with some amazing companies around the world' backgroundpath={4} id="clients">
        <Container style={{backdropFilter: 'blur(3px)',backgroundColor: '#FFFFFF2F'}}>
            <Row className='mt-5'>
                <Col xs='12' className="text-center">
                    <Row>
                        {logosbig}
                        {logossmall}
                    </Row>
                </Col>
            </Row>
        </Container>
    </Styledblock1>
    )
}

export const Features = (props)=>{
    return(
    <Styledblock bg={props.color} title='FEATURES' subtitle='' backimage="/assets/images/ba5.jpg">
        <Container style={{backdropFilter: 'blur(3px)'}}>
            <Row className='mt-5 p-5' style={{backdropFilter: 'blur(3px)',backgroundColor: 'rgba(0,0,0,0.384)'}}>
                <Col xs="6">
                    <H5>
                        We Provide plenty of Features Labore ullamco esse commodo enim do labore amet pariatur in consequat sint.Qui non aliqua incididunt in nulla laboris cillum tempor aliqua adipisicing labore sunt voluptate. Ex eiusmod culpa pariatur dolor sunt dolore dolor anim magna et nulla. Pariatur sunt officia nulla deserunt dolore anim esse laboris aliqua reprehenderit id est elit. Amet sunt cillum nostrud adipisicing sit sint commodo. Culpa ex ut ea adipisicing deserunt labore est tempor.
                    </H5>
                    <GoldButton className="mt-4">
                        <Link to="/contactus" className="unstyled" >
                          Get in Touch
                        </Link> 
                    </GoldButton>
                </Col>
                <Col xs='6' className="text-center p-3 d-flex flex-column" >
                    <Row className="my-auto" style={{fontSize:"1.3rem"}}>
                        <Col xs='12' lg='6'>
                            <i class="fas fa-universal-access fa-lg text-gold"> </i>
                            <span className="text-primary text-white"> After Sales</span>
                        </Col>
                        <Col xs='12' lg='6' >
                            <i class="fas fa-info-circle fa-lg text-gold"> </i>
                            <span className="text-primary text-white"> Customer support</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </Styledblock>  
    );
}
