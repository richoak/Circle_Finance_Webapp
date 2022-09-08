import React, { useState, useEffect } from 'react';
import { Container, NavDropdown, Nav, Navbar, Form, FormControl, Button, Modal, Row, Offcanvas } from 'react-bootstrap'
import $ from "jquery"
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import Image from 'next/image';

import "../js/main.js"
const Topbar = () => {

  const [firstname, setfirstname] = useState("")
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [greeting, setGreeting] = useState()

const continueButton = () => {
  $(".spinner-border").css({ 'display': 'inline-block' });
}

  const sidebarmenu = () => {

    $('#sidebarMenu').on('hidden.bs.collapse', function () {
      $("body").removeClass("overflow-hidden");
    });
    $('#sidebarMenu').on('shown.bs.collapse', function () {
      $("body").addClass("overflow-hidden");
    });

    $(document).mouseup(function (e) {
      var container = $("#sidebarMenu .menuList");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#sidebarMenu").collapse("hide")
      }
    });

  }

  useEffect(() => {
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
      "method": "GET",
      "timeout": 0,

      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token") },
      error: function (xhr, status, error) {
        // console.log(xhr)
        if (xhr.status === 401) {
          window.location.replace("/");
        }
      },
    }

    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)

      let pathname = window.location.pathname
      setfirstname(responsethree.first_name)
      if (responsethree.profile_updated === false
        && responsethree.marital_status === null
        && pathname !== "/profile"
        && pathname !== "/support"
        && pathname !== "/about"
        && pathname !== "/settings"
        && pathname !== "/profileoptions"
        && pathname !== "/payments"
      ) {
        setShow(true)
      }

      else if (responsethree.bank_name === null
        && pathname !== "/profile"
        && pathname !== "/support"
        && pathname !== "/about"
        && pathname !== "/settings"
        && pathname !== "/profileoptions"
        && pathname !== "/payments"
      ) {
        setShow2(true)
      }
    })


    const time = new Date().getHours();
    console.log(time)

    if (time > 8 && clearTimeout < 12) {
      setGreeting("Top of the morning to you!")
    }

    else if (time > 12 && time < 16) {
      console.log("yea")
      setGreeting("Good day")
    }

    else if (time > 16 && time < 22) {
      setGreeting("Good day")
    }

    else if (time > 16 && time < 22) {
      setGreeting("Good day")
    }


    // else {

    //   setGreeting("Good evening")
    // }
  }, [])





  return (
    <header>

      <Modal show={show} className="theactivatedmodal">

        <Modal.Body className="activatemodalbody">
          <p style={{ textAlign: "center" }}><Image className="" src="/images/warning.svg" width="104" height="104" /></p>
          <p style={{ textAlign: "center" }} className="loansareavailable2">Your account is yet to be activated </p>
          <p className="loansareavailablenote2" style={{ textAlign: "center" }}>
            Your profile is incomplete. Fill up the necessary information<br /> to verify and gain full access to your account.
          </p>


          <p className="" style={{ textAlign: "center" }}>
            <Link href="/profile" eventKey="1" activeClassName="is-active">
              <button style={{ marginTop: "40px", }} className="activatedbutton" onClick={continueButton}>
                Continue
                <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
              </button>
            </Link>

          </p>
        </Modal.Body>

      </Modal>

      <Modal show={show2} className="theactivatedmodal">

        <Modal.Body className="activatemodalbody">
          <p style={{ textAlign: "center" }}><Image className="" src="/images/warning.svg" width="104" height="104" /></p>
          <p style={{ textAlign: "center" }} className="loansareavailable2">Your account is yet to be activated </p>
          <p className="loansareavailablenote2" style={{ textAlign: "center" }}>
            Your profile is incomplete. Fill up the necessary information<br /> to verify and gain full access to your account.
          </p>


          <p className="" style={{ textAlign: "center" }}>
            <Link href="/payments" eventKey="1" activeClassName="is-active" >
              <button style={{ marginTop: "40px", }} className="activatedbutton">
                Continue

              </button>
            </Link>

          </p>
        </Modal.Body>

      </Modal>
      {/* <Navbar bg="light" expand="lg">
  <Container fluid>

    <p className='username1'>
    <span class="username">Hi </span>
    <span class="usernamespan">Username</span>
    <br/><span class="usernamespan2">Welcome to your credisol account</span></p>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
     
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '200px' }}
        navbarScroll
      >
        <Nav.Link>
        <p className='thenavbarmenu thenavbarmenumobile  thenavbarmenumobile1'> <Image className="" src="images/home.svg"/> <span className="thenavbarmenuspan">   Home</span> </p>
            </Link>

            <Nav.Link>
            <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="images/loans.svg"/> <span className="thenavbarmenuspan"> Loans</span></p>
            </Link>

            <Nav.Link>
            <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="images/payments.svg"/><span className="thenavbarmenuspan"> Payments</span></p>
            </Link>

            <Nav.Link>
            <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="images/support.svg"/><span className="thenavbarmenuspan"> Support</span></p>
            </Link>

            <Nav.Link>
            <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="images/referrals.svg"/> <span className="thenavbarmenuspan">Referrals</span></p>
            </Link>

            <Nav.Link>
            <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="images/about.svg"/> <span className="thenavbarmenuspan">About Credisol</span></p>
            </Link>

            <ul class="navbar-nav mr-auto">

</ul>

     
     
      </Nav>
    </Navbar.Collapse>
  </Container>
  
</Navbar>
<hr style={{marginTop:"0px"}} /> */}



      <nav className="navbar navbar-expand-lg navbar-light bg-light thenavbar">
        <p className='username1'>
          <span className="username">Hi </span>
          <span className="usernamespan">{firstname}</span>
          <br /><span className="usernamespan2">{greeting}</span></p>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

          </ul>



          <ul className="navbar-nav" id="thenavbarmenumobilex">
            <Link href="/home" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile  thenavbarmenumobile1'>
                <Image style={{marginTop:"0px"}} className="" src="/images/home.svg" width="20" height="20"/> <span className="thenavbarmenuspan">   Home</span> </p>
            </Link>

            <Link href="/loan" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="/images/loans.svg" width="24" height="24"/> <span className="thenavbarmenuspan"> Loans 
              <p style={{ float: "right" }} >
              <Image className="" src="/images/arrow-right2.svg" width="24" height="24"/>

              </p>
              </span>
              </p>
            </Link>

            <Link href="/payments" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="/images/payments.svg" width="24" height="24"/><span className="thenavbarmenuspan"> Payments 
              <p style={{ float: "right" }}>
              <Image  className="" src="/images/arrow-right2.svg" width="24" height="24"/>
              </p>
             
              </span>
              </p>
            </Link>

            <Link href="/profileoptions" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="/images/user2.svg" width="24" height="24"/> <span className="thenavbarmenuspan"> Profile 
              <p style={{ float: "right" }}>
              <Image  className="" src="/images/arrow-right2.svg" width="24" height="24"/>
              </p>
             
              </span></p>
            </Link>

            <Link href="/settings" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="/images/setting-2.svg" width="24" height="24"/><span className="thenavbarmenuspan"> Settings
               <p style={{ float: "right" }} >
               <Image className="" src="/images/arrow-right2.svg" width="24" height="24"/>
               </p>
              
               </span></p>
            </Link>


            <Link href="/support" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile" >
              <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="/images/support.svg" width="24" height="24"/><span className="thenavbarmenuspan"> Support 
              <p style={{ float: "right" }}>
              <Image  className="" src="/images/arrow-right2.svg" width="24" height="24"/>
              </p>
             
              </span></p>
            </Link>


            {/* <Link href="/about" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile'><Image className="" src="/images/about.svg" width="24" height="24"/> <span className="thenavbarmenuspan">About Credisol
              <p style={{ float: "right" }} >
              <Image className="" src="/images/arrow-right2.svg" width="24" height="24"/>
              </p>
              
              </span></p>
            </Link> */}

            <Link href="/" eventKey="1" activeClassName="is-active" id="thenavbarmenumobile">
              <p className='thenavbarmenu thenavbarmenumobile'>
                <Image className="" src="/images/logout.svg" width="24" height="24"/> <span className="thenavbarmenuspan">Sign Out</span>
                </p>
            </Link>




            {/* <li class="nav-item  rightnavmenu notify notifybell">
      <a class="nav-link" href="#">
      <Image width="24px" src="/images/notification.svg"/>
      </a>
      </li> */}


            <li className="nav-item dropdown dropdownmobile">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              </a>

              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link href="/settings" eventKey="10">
                  <a className="dropdown-item" > <Image className="avatarnavbar" src="/images/setting-2.svg" height="20" width="20"/> Settings</a>
                </Link>

                <Link href="/profileoptions" eventKey="10">
                  <a className="dropdown-item" > <Image className="avatarnavbar" src="/images/user2.svg" height="20" width="20"/> Account</a>
                </Link>

                <Link href="/" eventKey="10">
                  <a className="dropdown-item" > <Image className="avatarnavbar" src="/images/logout.svg" height="20" width="20"/> Sign out</a>
                </Link>

              </div>
            </li>

            <li className="nav-item dropdownmobile">
              <a className="nav-link" href="#"> <Image className="avatar" src="/images/user.svg" width="24" height="24" /></a>

            </li>
          </ul>
        </div>
      </nav>
      <hr style={{ marginTop: "0px" }} />
    </header>
  )

};


export default Topbar;