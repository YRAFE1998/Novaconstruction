import React from 'react';
import { Row,Col, Container } from "reactstrap";
import { BlockTitle, BlockTitlesmall, H6} from '../styledcomponents/text';


export const DigitalSolutions = (props) => {

  const singleitem = ()=>{
    var classnames = 'text-start m-0 pt-5 px-lg-5 text-white align-items-xl-center align-items-stretch';
    return (
    <Row className={classnames} >
      <Col xs='12' className='text-center mb-5'>
        <img className='imgfitpx' src="/assets/images/Logo1.png"/>

      </Col>
      <Col xs="12" className="align-self-center mt-5 mt-lg-0">
        <Row>
          <Col xs="12">
            <BlockTitle color="white">
              Digital Solutions
            </BlockTitle>
          </Col>
          <Col xs="12" className="text-start mt-2">
            <H6 className="text-white">Why do you need to go digital?</H6>
                <ul className="unstyled">
                    <li>Fast tool to store and analyze data faster and easier</li>
                    <li>Easy / Fast / Precise access to any business records without wasting time</li>
                    <li>Practical system to make technical and financial decisions</li>
                    <li>Supported figures and charts are great indicators for optimization</li>
                    <li>Enable the user to deep dive into historical data and identify patterns and relationships among discrete inputs</li>
                    <li>Enable the user to optimize the factors that have greatest effect on the business</li>
                    <li>Complete and essential reference for newcomers </li>
                </ul>
          </Col>

          <Col xs="12" className="mt-4">
            <BlockTitle color="white">
              Advantages
            </BlockTitle>
          </Col>
          <Col xs="12" className="text-start mt-2">
            <H6 className="text-white">Why do you need to go digital?</H6>
                <ul className="unstyled">
                    <li>Simple design and customized based on business need</li>
                    <li>Extended access for all users at the same time</li>
                    <li>Password protected & Audit Trail system for critical data</li>
                    <li>User privileges for each user level</li>
                    <li>Modular structure which allow modifying or upgrading the system in easy manner without losing any data</li>
                    <li>Affordable software solution </li>
                </ul>
          </Col>

          <Col xs="12" className="mt-4">
            <BlockTitle color="white">
            Software description:<br/>
            
            </BlockTitle>
          </Col>
          <Col xs="12" className="text-start mt-2">
            <H6 className="text-white">Computerized X Management System with the following structure:</H6>
                <ul className="unstyled">
                    <li>User Login Screen</li>
                    <li>Main Menu</li>
                    <li>n x Management modules</li>
                    <li>Admin control</li>
                </ul>
          </Col>
          <Col xs="12" className="mt-4">
            <BlockTitle color="white">
            System requirement:           
            </BlockTitle>
          </Col>
          <Col xs="12" className="text-start mt-2">
                <ul className="unstyled">
                    <li>MS Access 2013 or later (Access – Outlook)</li>
                    <li>Microsoft windows 7 or later</li>
                    <li>Microsoft windows 7 or later</li>
                    <li>Required HD space for front end users: approx. 10.0 MB</li>
                    <li>Required HD space for back end (Server or PC): 2 GB</li>
                    <li>Outlook app configured with at least 1 account + Internet connection (Automatic Email)</li>
                    <li>Software runs on 32-bit or 64-bit architecture based on customer choice</li>
                </ul>
          </Col>
        </Row>
      </Col>
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
        {singleitem()}
        
      </Col>
    </Row>
  </Container>
  return(
      <>
      {content}
      
      </>
  );
}