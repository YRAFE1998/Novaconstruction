import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Colortransition, Fadetransition } from '../utils/animations';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
  
export const HeaderBar = (props) => {
    const activeitem = props.activeitem;
    const [navitems, setnavitems] = useState(); 
    /*useEffect(() =>{
        getNavitems();
    }    
    ,[])*/

    /*const getNavitems = () => {
        const menuitems = props.menuitems.map((item, index) => {
            const classname = index == activeitem? "collapsednavitem active" : "collapsednavitem";
            return (
                <NavItem>
                    <NavLink href="/components/" className={classname}>{item}</NavLink>
                </NavItem>
            );
        });
        setnavitems(menuitems);
        
    }*/
    return (
        
        <div >
        {/*<Navbar color="light" fixed="top" expand="md" light className="d-none custom-navbar bg-transparent">
          <NavbarBrand href="/" className="mx-3">Nova</NavbarBrand>
            <Nav className="mx-auto" navbar>
              {navitems}
            </Nav>
            <NavbarText className="mx-3">Simple Text</NavbarText>
        </Navbar>*/}
            <Collapsedheader className="" activeitem={activeitem} />
        </div>
    );

}

export const Collapsedheader = (props) => {
    const activeitem = props.activeitem;
    const [collapsedmenuisopen, setcollapsedmenuisopen] = useState();    
    const opencollapsedmenu = () =>{
        setcollapsedmenuisopen(!collapsedmenuisopen);
    }
    const navigationmap = require('../mocks/navigation').navigationmap;
    return(
        <>
        <AppBar position="fixed" color="transparent" style={{boxShadow:'none',zIndex:'999999'}} >
          <Toolbar variant="dense">
            <IconButton edge="start" className="" color="inherit" aria-label="menu">
              <button className="unstyledbutton" onClick={() => opencollapsedmenu()}>
                <Colortransition transitioncolor="white" initialcolor='#cdb068' open={collapsedmenuisopen}>
                  <span className="fas fa-bars" style={{color:'inherit'}} style={{filter:'drop-shadow'}}> </span>
                </Colortransition>
              </button>
            </IconButton>
            <Typography variant="h6" color="inherit">
              
            </Typography>
          </Toolbar>
        </AppBar>
            <Collapsedmenu open={collapsedmenuisopen} menuitems={navigationmap} activeitem={activeitem} />
        </>
    )
}


export const Collapsedmenu = (props) => {
    const [navitems, setnavitems] = useState();
    const activeitem = props.activeitem;
    useEffect(() =>{
        getNavitems();
    }    
    ,[])
    const getNavitems = () => {
        const menuitems = props.menuitems.map((item, index) => {
            const classname = index == activeitem? "collapsednavitem active  my-3" : "collapsednavitem my-3";
            return (
                <Col xs="12" className={classname} >
                    <Link to={item.path} style={{color:'white', textDecoration:'none'}}><h1 class="biggerhover">{item.name}</h1></Link>
                </Col>
            );
        })
        setnavitems(menuitems);
    }
      
    return (
        <Fadetransition open={props.open}>
            <Container fluid={true} className="prep collapsedmenucontainer text-white pt-5 container-fluid d-flex justify-content-start flex-column align-items-center">
                <Row>
                    {navitems}
                </Row>
            </Container>            
        </Fadetransition>
    );
}

export default HeaderBar;