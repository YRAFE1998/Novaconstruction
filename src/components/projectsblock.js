import Zoom from 'react-reveal/Zoom';
import React from 'react';
import { Row,Col, Container } from "reactstrap";
import { BlockTitle, H5, H6, P, Secondary, Secondary2, Secondary3, Secondary4} from '../styledcomponents/text';
import {items} from '../mocks/partners';
import { BoxatSmall, MachineStyles } from '../styledcomponents/machinestyles';
import MachineModal from './MachineModal';
import { useLocation} from 'react-router-dom';


export const BootstrapCarousel = (props) => {
  
  const carouselInneritems = props?.items || [];

    const indicators = carouselInneritems.map((item, index) =>{
    const classnames = index == 0 ?"active":"";
    const ariaCurrent = index == 0 ?"true":"";
    return (
      <button type="button" className={classnames} aria-current={ariaCurrent} data-bs-target={`#productscarousel${props.id}`} data-bs-slide-to={`${index}`}  aria-label={`Slide ${index+1}`}></button>
    );
  });
  const carouselInner = carouselInneritems.map((item,index)=>{
    const classnames = index == 0?"carousel-item active":"carousel-item";
    return(
      
      <MachineStyles className={classnames}>
      <MachineModal classNames="mt-5" src={item} id={`${item.name}${index}`} />
      </MachineStyles>      
    )
  })
  
  


return(
<div id={`productscarousel${props.id}`} className="carousel slide carousel-dark" data-bs-ride="carousel" >
      {<div className="carousel-indicators">
        {indicators}
      </div>}
      <div className="carousel-inner">
        {carouselInner}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target={`#productscarousel${props.id}`} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={`#productscarousel${props.id}`}data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
);
}




function useQuery() {
  return new URLSearchParams(useLocation().search);
}


export const Projectsblock = (props) => {
  var query = useQuery();
  const company_Id = query.get('id');

  const currentpartner = function(){ 
      return(items.filter((item) => item.id == company_Id)[0] || {});
    }();
  const singleitem = (item)=>{
    var classnames = 'text-start m-0 pt-3 pt-xl-0 px-xl-5 text-white align-items-xl-start align-items-stretch';
    const list =!!item.list && item.list.map((item) => {
      return <li>{item}</li>
    })
    const cards = item.machines.map((machineitem,index) =>{
      return(
      <BoxatSmall>
      <Row>
    <Col xs='12' lg='8' className="mb-3 mt-0 mb-lg-5 px-0 px-lg-4">
      <BootstrapCarousel items={machineitem.src} id={index}/>
    </Col>
    <Col xs="12" lg="4" className="mt-3 mt-lg-0 mb-5">
      <div className="" >
          <Secondary3 fontweight="bold" className="card-title text-white text-center text-lg-start" style={{color:'black'}}>{machineitem.name}</Secondary3>
          <P className="card-text mt-3" style={{color:'#f8f8f8'}}>{machineitem.description}</P>
          <ul className="unstyled" style={{color:'#f8f8f8'}}>
            {!!machineitem.list && machineitem?.list.map((item) => {
              return <li>{item}</li>
            })}
          </ul>
        </div>

    </Col>
    </Row>
    </BoxatSmall>
      );
    });

    
    return (
    <Row className={classnames} >
      <Col xs='12' className='text-center mb-5'>
        <img className='imgfitpx' src={item.logo}/>

      </Col>
      <Col xs="12" className="align-self-center mt-5 mb-5 mt-lg-0">
        <Row>
          <Col xs="12">
            <BlockTitle color="white">
              {item.name}
            </BlockTitle>
          </Col>
          <Col xs="12" className="text-start mt-2">
            <H6 className="text-white">{item.caption}</H6>
            <ul className="unstyled">
              {list}
            </ul>
          </Col>
        </Row>
      </Col>
      {cards}
    </Row>
    )
  };
  
  const blockclasses = props.paddingtop ? "text-center align-self-start mx-auto pt-5 my-5": "text-center align-self-start mx-auto my-5";
  var showbg = true;
  const content = 
  <Container style={{minHeight:'100vh', position:'relative'}} fluid={true} className={"py-xl-5 px-md-5 d-flex flex-column justify-content-around " + (showbg ? "my-bg-dark":"force-text-dark")} id="products">
    {showbg &&<img src="/assets/images/ba6.jpg" style={{position: 'absolute', top:0, width: '100%',height: '100%',left: 0,objectFit: 'cover', filter:'blur(5px)',opacity:'0.7', zIndex:'1'}} />
    }
    <Row className={blockclasses} style={{width:'100%', zIndex:'2', backdropFilter: 'blur(3px)',backgroundColor: 'rgba(0,0,0,0.384)'}}>
      <Col xs='12' style={{height:''}} className="text-black">
        {singleitem(currentpartner)}
        
      </Col>
    </Row>
  </Container>
  return(
      <>
      {content}
      
      </>
  );
}