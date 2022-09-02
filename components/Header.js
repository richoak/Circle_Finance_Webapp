import React from 'react';
import {Container, NavDropdown, Nav, Navbar, Form, FormControl,Button, Row, Offcanvas } from 'react-bootstrap'


import "../js/main.js"
const Header = () => {
  


return(
  <header>


<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="/"><img className="brandlogo" src="images/logo.svg"/></Navbar.Brand>


    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
        className="me-auto my-2 my-lg-0"
        navbarScroll
      >
        <Nav.Link href="#aboutcredisol"  eventKey="1" activeClassName="is-active" className="navmenu hmfirstmenu" >About Credisol</Nav.Link>

        <NavDropdown  className="hmothermenu" title="Product" id="navbarScrollingDropdown">
          <div id="navbarScrollingDropdown2">
          <a style={{textDecoration:"none"}} href="#consumerloan">
          <Row className='navbarinnerrow'>
          <div className="col-md-1 col-1">

          </div>
            <div className="col-md-2 col-2">
            <img style={{width:"", height:""}} src="images/user2.svg" alt="" />
            </div>
            <div className="col-md-8 col-8">
            <h1 className='navbarhead'>Consumer loans</h1>
          <p className='navbarsublink'>Loan made available for salary earners in private or government organizations</p>
         
            </div>
          </Row>
          </a>
         
          <Container>
          <hr/>
          </Container>

          <a style={{textDecoration:"none"}} href="#traveloan">
          <Row className='navbarinnerrow'>
          <div className="col-md-1 col-1">

          </div>
            <div className="col-md-2 col-2">
            <img style={{width:"", height:""}} src="images/travel.svg" alt="" />
            </div>
            <div className="col-md-8 col-8">
            <h1 className='navbarhead'>Travel loans</h1>
          <p className='navbarsublink'>Loan made available for salary earners in private or government organizations</p>
         
            </div>
          </Row>
</a>

          <Container>
          <hr/>
          </Container>
          <a style={{textDecoration:"none"}} href="#businessloan">
          <Row className='navbarinnerrow'>
          <div className="col-md-1 col-1">

          </div>
            <div className="col-md-2 col-2">
            <img style={{width:"", height:""}} src="images/business.svg" alt="" />
            </div>
            <div className="col-md-8 col-8">
            <h1 className='navbarhead'>Business and company loans</h1>
          <p className='navbarsublink'>Loan made available for salary earners in private or government organizations</p>
         
            </div>
          </Row>
          </a>
          </div>
        

     
        </NavDropdown>

        <NavDropdown className="hmothermenu"  title="Support" id="navbarScrollingDropdown">
        <div id="navbarScrollingDropdown2">
        <a style={{textDecoration:"none"}} href="#faq">
        <Row className='navbarinnerrow'>
          <div className="col-md-1 col-1">

          </div>
            <div className="col-md-2 col-2">
            <img style={{width:"", height:""}} src="images/user2.svg" alt="" />
            </div>
            <div className="col-md-8 col-8">
            <h1 className='navbarhead'>Frequently Asked Questions </h1>
          <p className='navbarsublink'>Loan made available for salary earners in private or government organizations</p>
         
            </div>
          </Row>
          </a>
          <Container>
          <hr/>
          </Container>
          <a style={{textDecoration:"none"}} href="#footer">
          <Row className='navbarinnerrow'>
          <div className="col-md-1 col-1">

          </div>
            <div className="col-md-2 col-2">
            <img style={{width:"", height:""}} src="images/user2.svg" alt="" />
            </div>
            <div className="col-md-8 col-8">
            <h1 className='navbarhead'>Contact Us</h1>
          <p className='navbarsublink'>Loan made available for salary earners in private or government organizations</p>
         
            </div>
          </Row>
         </a>
       
          </div>
        </NavDropdown>

      </Nav>

      <Nav.Link href="#action1"  as={Link} to="/" eventKey="1" activeClassName="is-active" className="hmothermenu" >Login</Nav.Link>
      <a target="_blank" href="http://app.credisol.com"><button className="accessbutton sidebyside" >Create account</button></a> 

 
    </Navbar.Collapse>  */}

    
  </Container>
</Navbar>
<hr/>
  </header>
)

};


export default Header;