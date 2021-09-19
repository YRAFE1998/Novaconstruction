import React, {useState, useEffect, useContext} from 'react';
import { Col, Container, Row } from 'reactstrap';
import { AppBar, IconButton, Toolbar, Typography, Paper } from '@material-ui/core';
import { Colortransition } from '../utils/animations';
import { Link } from 'react-router-dom';
import { Offsetcontext } from "../context";

export const HeaderBar = (props) => {
    const activeitem = props.activeitem;
    return (
        
        <div >
            <Collapsedheader activeitem={activeitem} notransition={props.notransition}/>
        </div>
    );

}



export const Collapsedheader = (props) => {
    const activeitem = props.activeitem;
    var opacity;
    const offsetY=useContext(Offsetcontext);
    opacity = (offsetY/100);
    const [navitems, setnavitems] = useState();
    useEffect(() =>{
        getNavitems();
    }    
    ,[]);


    const navigationmap = require('../mocks/navigation').navigationmap;
    const ulclassnames = props.notransition ? "navbar-nav mx-auto py-1 px-5 header-notransition-bg-color" : "navbar-nav mx-auto py-1 px-5";
    
    function getNavitems2(navitem) {
        const navigation = navitem.map((parentitem) => {
          const children = parentitem.children;
          var childrenjsx;
          if(!!children && !!children.length){
            childrenjsx = getNavitems2(children);
          }
          else{
            childrenjsx = navitem.map((item) => {
              return (
              <li className="ps-1 fs-5">
                <Link className="dropdown-item" to={`${item.path}?id=${item?.id}`}>
                  {item.name}
                </Link>
              </li>
              );
            })
          }
  
  
          return(
            <li className="ps-1 fs-5 dropdown-menu-head" style={{position:'relative'}}>
              <Link className="dropdown-item" to ={`${parentitem.path}?id=${parentitem?.id}`}>
                  {parentitem.name}
              </Link>
              { parentitem.children.length>0 &&
              <ul className="drop-down-hover-menu dropdown-left">
                  {childrenjsx}
              </ul>
              }
            </li>
            
          );  
        })
        return(navigation);

    }
    const getNavitems = () => {
      const menuitems = navigationmap.map((item, index) => {
          const classname = (index === activeitem? "nav-item active" : "nav-item") + " " + (item.children.length>0?"dropdown" : "");
          const classname1 = (index === activeitem? "nav-link active" : "nav-link");
          var childrenlist = !!item.children.length?getNavitems2(item.children):<></>;
          return (
              <li className={classname + " mx-5 fs-5 dropdown-menu-head"}>
                  <Link className={classname1} to={item.path} style={{textDecoration:'none'}}>
                      {item.name}
                  </Link>
                  {item.children.length > 0 &&
                  <ul className="drop-down-hover-menu list-unstyled p-0 text-start">
                    {childrenlist}
                  </ul>
                  }
              </li>
          );
      })
      setnavitems(menuitems);
  }

    return(
        <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent d-none d-lg-flex pt-0">
          <Container fluid={true}>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className={ulclassnames} id="navbar">
                {navitems}
              </ul>
            </div>
          </Container>
        </nav>
        
        <AppBar className="d-lg-none" position="fixed" color="secondary" style={{boxShadow:'none',zIndex:'999999',backgroundColor:`rgba(34,34,34,${opacity})`}} >
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" style={{opacity:1}}>
              <button className="unstyledbutton" data-bs-toggle="offcanvas" data-bs-target="#offcanvasmenu" aria-controls="offcanvasmenu">
                <Colortransition transitioncolor="transparent" initialcolor='#ffbd00'>
                  <span className="fas fa-bars" style={{color:'inherit'}} style={{filter:'drop-shadow'}}> </span>
                </Colortransition>
              </button>
            </IconButton>
            <Collapsedmenu menuitems={navigationmap} activeitem={activeitem} />
          </Toolbar>
        </AppBar>
        </>
    )
}


export const Collapsedmenu = (props) => {
    const [navitems, setnavitems] = useState();
    const [offcanvasmenus, setoffcanvasmenus] = useState([]);
    const activeitem = props.activeitem;
    var offcanvasmenuarray=[];
    useEffect(() =>{
        getNavitems();
    }    
    ,[]);

    const getnavitems2 = (navitem,parentindex) =>{
      const childrennavitems = navitem.map((item, index) =>{
        const hasChildren = !!item.children.length;
        var childitemcanvas;
        if(hasChildren){
          childitemcanvas = getnavitems2(item.children,`${parentindex}${index}`);
          offcanvasmenuarray.push(childitemcanvas)
        }
        return(
          <Col xs="12" className="collapsednavitem text-white" >
            {hasChildren &&
              <div className={"navitem mx-auto text-center"}>
                    <button className="unstyledbutton unstyled text-center text-white" data-bs-toggle="offcanvas" 
                    data-bs-target={`#offcanvasmenu${parentindex}${index}`} aria-controls={`offcanvasmenu${parentindex}${index}`}>
                      <h5 className="text-center text-primarybold m-0">{item.name}</h5>
                    </button>
  
                </div>
          }
          {!hasChildren &&
          
                <Link className="unstyled" to={`${item.path}?id=${item?.id}`} style={{textDecoration:'none'}} data-bs-dismiss="offcanvas" aria-label="Close">
                    <div className="navitem mx-auto">
                        <h5 className="text-center text-primarybold m-0">{item.name}</h5>
                    </div>
                </Link>    
          }
        </Col>
      );
      });

      return (
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id={`offcanvasmenu${parentindex}`} aria-labelledby={`offcanvasmenuLabel${parentindex}`}>
      <div className="offcanvas-header align-items-start justify-content-start">
        <button type="button" className="unstyledbutton text-reset " data-bs-dismiss="offcanvas" aria-label="Close"> <i className="fas fa-angle-left text-gold fa-lg"></i> </button>
      </div>
      <div className="offcanvas-body d-flex flex-column justify-content-between pb-0 pt-4">
        <Row>
          {childrennavitems}
        </Row>
      </div>
      </div>
      );

    }
    const getNavitems = () => {
        const menuitems = props.menuitems.map((item, index) => {
            const classname = index == activeitem? "collapsednavitem active" : "collapsednavitem text-white";
            const classname1 = index == activeitem? "activenavitem navitem mx-auto" : "navitem mx-auto";
            const hasChildren = !!item.children.length;
            if (hasChildren){
              const childrennavitems = getnavitems2(item.children,index);

              offcanvasmenuarray.push(childrennavitems);  
            }
            setoffcanvasmenus(offcanvasmenuarray);

            return (
              <>
                <Col xs="12" className={classname} >
                    {!hasChildren &&  
                    <>
                      <Link className="unstyled" to={item.path} style={{textDecoration:'none'}}>
                        <div className={classname1}>
                            <h5 className="text-center text-primarybold m-0">{item.name}</h5>
                        </div>
                      </Link>
                      </>
                    }
                    {hasChildren &&  
                      <div className={classname1 +" text-center"}>
                        <button className="unstyledbutton unstyled text-center text-white" data-bs-toggle="offcanvas" data-bs-target={`#offcanvasmenu${index}`} aria-controls={`offcanvasmenu${index}`}>
                          <h5 className="text-center text-primarybold m-0">{item.name}</h5>
                        </button>

                      </div>
                    }
                    
                </Col>
                 
              </>
            );

        })
        setnavitems(menuitems);
    }
    
    
    return(
      <>
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasmenu" aria-labelledby="offcanvasmenuLabel">
          <div className="offcanvas-header align-items-start justify-content-center">
            <div className="offcanvas-title text-center" id="offcanvasmenuLabel">
                <img src="/assets/images/novalogo.png" className="imgfit-logo" />
            </div>
            <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body d-flex flex-column justify-content-between pb-0 pt-4">
          <Row>
            {navitems}
          </Row>
          <Row className="align-self-stretch p-4">
              <Col xs='12'>
                <div className="d-flex flex-row justify-content-evenly text-white" style={{fontSize:'1.8rem'}}>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-youtube"></i>
                    <i className="far fa-envelope"></i>
                    <h6 className="text-primaryitalic d-flex align-items-end mb-1">2021 <span className="far fa-copyright"></span> Nova Egypt</h6>
                </div>
              </Col>
              <Col xs='12' className="text-white text-center mt-3 text-primaryitalic">
              </Col>
          </Row>
          </div>
            
        </div>
        {offcanvasmenus}
        </>
    );

    
}

export default HeaderBar;