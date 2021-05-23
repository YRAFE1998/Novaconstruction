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
  
export const HeaderBar = (props) => {
    const activeitem = props.activeitem
    const [navitems, setnavitems] = useState(); 
    useEffect(() =>{
        getNavitems();
    }    
    ,[])

    const getNavitems = () => {
        const menuitems = props.menuitems.map((item, index) => {
            const classname = index == activeitem? "collapsednavitem active" : "collapsednavitem";
            return (
                <NavItem>
                    <NavLink href="/components/" className={classname}>{item}</NavLink>
                </NavItem>
            );
        });
        setnavitems(menuitems);
        
    }
    return (
      <div>
        <Navbar color="light" fixed="top" expand="md" light className="d-none custom-navbar bg-transparent"> {/* d-md-flex" */} 
          <NavbarBrand href="/" className="mx-3">Nova</NavbarBrand>
            <Nav className="mx-auto" navbar>
              {navitems}
            </Nav>
            <NavbarText className="mx-3">Simple Text</NavbarText>
        </Navbar>
        <div className="">
            <Collapsedheader className="" menuitems={props.menuitems} activeitem={activeitem} />
        </div>
      </div>
    );

}

export const Collapsedheader = (props) => {
    const activeitem = props.activeitem;
    const [collapsedmenuisopen, setcollapsedmenuisopen] = useState();    
    const opencollapsedmenu = () =>{
        setcollapsedmenuisopen(!collapsedmenuisopen);
    }
    return(
        <>
        <AppBar position="fixed" color="transparent" style={{boxShadow:'none'}}>
          <Toolbar variant="dense">
            <IconButton edge="start" className="" color="inherit" aria-label="menu">
              <button className="unstyledbutton" onClick={() => opencollapsedmenu()}>
                <Colortransition transitioncolor="white" initialcolor='gold' open={collapsedmenuisopen}>
                  <span className="fas fa-bars" style={{color:'inherit'}} style={{filter:'drop-shadow'}}> </span>
                </Colortransition>
              </button>
            </IconButton>
            <Typography variant="h6" color="inherit">
              
            </Typography>
          </Toolbar>
        </AppBar>
            {/*<Collapsedmenu open={collapsedmenuisopen} menuitems={props.menuitems} activeitem={activeitem} />*/}
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
                    <h1>{item}</h1>
                </Col>
            );
        })
        setnavitems(menuitems);
    }
      
    return (
        <Fadetransition open={props.open}>
            <Container fluid={true} className="collapsedmenucontainer pt-5">
                <Row>
                    {navitems}
                </Row>
            </Container>            
        </Fadetransition>
    );
}

export default HeaderBar;