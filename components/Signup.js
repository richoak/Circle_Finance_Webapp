import React, { useEffect, useState, useRef, useReducer } from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import Link from 'next/link';

import Header from './Header';
import Image from 'next/image';

import "../js/main.js"
import $ from 'jquery'

const Signup = () => {



  // $(function () {
  //   $('.example-popover').popover({
  //     container: 'body'
  //   })
  // })


  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [tokenurl, settokenurl] = useState("")
  const [accesstoken, setaccesstoken] = useState("")
  const [pin1, setpin1] = useState("")
  const [userid, setuserid] = useState("")
  const [pin2, setpin2] = useState("")


  const gobacktostep1 = () => {
    $(".registerbox2").slideDown();
    $(".registerbox2").css({ 'display': 'none' });
    $(".registerbox1").toggle("slide");
  }
  
  const inputemail = () => {
    // $('.emaillabel').css("color", "#DD3737");
    $(".continuebutton").removeClass("accessbutton2");
    $(".continuebutton").addClass("accessbutton2active");

  }

  const inputpassword = () => {
    var password = document.getElementById("password").value
    if (password.length >= 8) {
      $(".circle1").addClass("redcheck");
    }
    else {
      $(".circle1").removeClass("redcheck");
    }

    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );

    if (pattern.test(password)) {
      // console.log("Yes" + "<br>");
      $(".circle2").addClass("redcheck");
      $(".circle3").addClass("redcheck");
      $(".circle4").addClass("redcheck");

      $("#agreebutton").removeClass("accessbutton3");
      $("#agreebutton").addClass("accessbutton3active");
    } else {
      // console.log("No" + "<br>");
      $(".circle2").removeClass("redcheck");
      $(".circle3").removeClass("redcheck");
      $(".circle4").removeClass("redcheck");


    }

  }

  const inputotp = () => {
    var elts = document.getElementsByClassName('test')
    Array.from(elts).forEach(function (elt) {
      elt.addEventListener("keyup", function (event) {

        // Number 13 is the "Enter" key on the keyboard
        if (event.keyCode === 13 || elt.value.length == 3) {
          // Focus on the next sibling
          elt.nextElementSibling.focus()
        }
      });
    })
  }

  useEffect(() => {
    let otp = document.querySelector('#otp-screen');
  
    for (let pin of otp.children) {
      pin.onkeyup = function () {
        if (pin.nextElementSibling) {
          pin.nextElementSibling.focus();
        }
      }
    }
  })

  useEffect(() => {
    let otp = document.querySelector('#otp-screen2');
  
    for (let pin of otp.children) {
      pin.onkeyup = function () {
        if (pin.nextElementSibling) {
          pin.nextElementSibling.focus();
        }
      }
    }
  })

  // $(document).ready(function () {
  //   let otp = document.querySelector('#otp-screen');

  //   for (let pin of otp.children) {
  //     pin.onkeyup = function () {
  //       if (pin.nextElementSibling) {
  //         pin.nextElementSibling.focus();
  //       }
  //     }
  //   }
  // });

  // $(document).ready(function () {
  //   let otp = document.querySelector('#otp-screen2');

  //   for (let pin of otp.children) {
  //     pin.onkeyup = function () {
  //       if (pin.nextElementSibling) {
  //         pin.nextElementSibling.focus();
  //       }
  //     }
  //   }
  // });



  const register1 = () => {
    var email = document.getElementById("emailaddress").value.toLowerCase()
    console.log(email)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      setnotify("")
      setemail(email)
      $(".registerbox1").toggle("slide");
      $(".registerbox2").css({ 'display': 'block' });

      return true;

    }
    else {
      setnotify("Invalid E-mail Address")

      return false;
    }


  }


  const register2 = () => {
    $(".spinner-border").css({ 'display': 'inline-block' });
    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var password = document.getElementById("password").value

    if (firstname === "") {
      setnotify2("Input first name")
    }

    else if (lastname === "") {
      setnotify2("Input last name")
    }

    else if (password === "") {
      setnotify2("Input password")
    }
    else {
      var settingsthree = {
        "url": "https://credisol-main.herokuapp.com/v1/registration/sign_up/",
        "method": "POST",
        "timeout": 0,
        //  "headers": { "X-ApiKey": "SfeILETE0TcCFOziCtTXBPxfqsmTR6aO5F+3cJRmobMf/w8HEVw7xqAvAyNPlD0O"},
        "data":
        {
        "email" : document.getElementById("emailaddress").value.toLowerCase(),
          "password" : document.getElementById("password").value,
          "confirm_password" : document.getElementById("password").value,
          "phone_number" : document.getElementById("phone").value,
          "first_name" : document.getElementById("firstname").value,
          "last_name" : document.getElementById("lastname").value,
   
        },
        error: function (xhr, status, error) {
          console.log(xhr)
          if(xhr.status === 409){
            setnotify2("User with phone number/email exists.")
            $(".spinner-border").css({ 'display': 'none' });
          }

          else if(xhr.status === 400){
            setnotify2("Email already exists.")
            $(".spinner-border").css({ 'display': 'none' });
          }
        },
      }
      $.ajax(settingsthree).done(function (responsetwo) {
        // console.log(responsetwo)
        localStorage.setItem("email", responsetwo.email)
        localStorage.setItem("firstname", responsetwo.first_name)
        localStorage.setItem("lastname", responsetwo.last_name)
        localStorage.setItem("phone", responsetwo.phone_number)
        localStorage.setItem("userid", responsetwo.id)
        localStorage.setItem("creditofficer", responsetwo.credit_officer)
        localStorage.setItem("providusid", responsetwo.va_id)
        localStorage.setItem("providusaccountnumber", responsetwo.va_acc_num)
        localStorage.setItem("accountnumber", responsetwo.account_number)
     
        setuserid(responsetwo.id)
        settokenurl(responsetwo.pin_confirmation_url)
        setnotify2("")
        $(".registerbox2").toggle("slide");
        $(".registerbox3").css({ 'display': 'block' });
        $(".spinner-border").css({ 'display': 'none' });
        // setNotify(`A pin has been sent to ${localStorage.getItem("useremail")}`)
  
      })
  
    }



  }

  const register3 = () => {
    setnotify3("")
  // console.log(tokenurl)
  var pin1 = document.getElementById("otpstep1one").value 
  + document.getElementById("otpstep1two").value 
  + document.getElementById("otpstep1three").value 
  + document.getElementById("otpstep1four").value

setpin1(pin1)




    var settingsthree = {
      "url": tokenurl,
      "method": "POST",
      "timeout": 0,
      //  "headers": { "X-ApiKey": "SfeILETE0TcCFOziCtTXBPxfqsmTR6aO5F+3cJRmobMf/w8HEVw7xqAvAyNPlD0O"},
      "data":
      {
      "pin": pin1,
      },
      error: function (xhr, status, error) {
        if(xhr.status === 401){
          setnotify3("Incorrect Pin")
        }
      },
    }
    $.ajax(settingsthree).done(function (responsetwo) {
      // console.log(responsetwo)
      setaccesstoken(responsetwo.access)
      localStorage.setItem("access_token", responsetwo.access)
      setnotify3("")
      $(".registerbox3").toggle("slide");
      $(".registerbox4").css({ 'display': 'block' });
      // setNotify(`A pin has been sent to ${localStorage.getItem("useremail")}`)

    })
  }

  const register4 = () => {
    // console.log(accesstoken)
    var pin2 = document.getElementById("otpstep2one").value 
    + document.getElementById("otpstep2two").value 
    + document.getElementById("otpstep2three").value 
    + document.getElementById("otpstep2four").value


    $(".registerbox4").toggle("slide");
    $(".registerbox5").css({ 'display': 'block' });

    var settingsthree = {
      "url": "https://credisol-main.herokuapp.com/v1/users/" + userid + "/",
      "method": "PATCH",
      "timeout": 0,
      error: function (xhr, status, error) {
        // console.log(xhr)
      },
               "headers": { "Authorization": "Bearer " +accesstoken},

      "data":
      {
      "transaction_pin" : pin2,
    
      },
      error: function (xhr, status, error) {
      },
    }

    $.ajax(settingsthree).done(function (responsethree) {
   
    
      localStorage.setItem("pin", responsethree.transaction_pin)

    })



  }

  const register5 = () => {
    $(".spinner-border").css({ 'display': 'inline-block' });
    window.location.replace("/home");
  }

  const requestpin = () => {
    setnotify3("Requesting...")
    // console.log(email)
    var settingsthree = {
      "url": "https://credisol-main.herokuapp.com/v1/registration/resend_confirmation_pin/",
      "method": "POST",
      "timeout": 0,
      "data":
      {
      "email" : email,
    
      },
      error: function (xhr, status, error) {
      },
    }
    $.ajax(settingsthree).done(function (responsetwo) {
   
      setnotify3("Pin has been sent. Kindly check your e-mail")
      // setNotify(`A pin has been sent to ${localStorage.getItem("useremail")}`)

    })

   
  }


  // TABS
  class Tabs extends React.Component {
    state = {
      activeTab: this.props.children[0].props.label

    }
    changeTab = (tab) => {

      this.setState({ activeTab: tab });

    };
    render() {

      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child => {
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}

          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
          <div className="tab-content">{content}</div>

        </div>
      );
    }
  }

  const TabButtons = ({ buttons, changeTab, activeTab }) => {



    return (
      <div className="tab-buttons">
        {buttons.map(button => {
          return <button key={button} className={button === activeTab ? 'tabactive' : ''} onClick={() => changeTab(button)}>{button}</button>
        })}
      </div>

    )
  }

  const Tab = props => {
    return (
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }

  // TABS

  return (

    <div>
      <Header />
      <Container>
        <div>
          <Row>
            <div className="col-md-6 homepage1box fordesktoponly">
              <p style={{ textAlign: "center" }} ><Image className="mainimagemobile" src="/images/signupbg.svg" width="375" height="309" /></p>
              <h1 className="homepageherotitle fordesktoponly">
                Seamless loans now at the lowest interest rates.
              </h1>

              <h1 className="homepageherotitle formobileonly">
                Get seamless loans at
                the <span className="spanred">lowest</span> interest rates.
              </h1>
              <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                We take care of you financially, assisting you with funds and the best business advice to grow and scale your business at affordable interest rates.
              </p>

              <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                We take care of you financially, assisting you with funds and the best business advice to grow and scale your business at affordable interest rates.
              </p>

              <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                We take care of you financially, assisting you with funds and the best business advice to grow and scale your business at affordable interest rates.
              </p>

              {/* <div class="accessbuttons">
                  <a target="_blank" href="http://app.credisol.com"><button className="accessbutton sidebyside" >Get access to loans</button></a> 
                    <a href="#faq">
                      <p className="createaccountbuttons learnmore sidebyside" onMouseEnter={rotatedown} onMouseLeave={stoprotatedown} >Learn more  <Image style={RotateDown}  src="images/rightarrow.png"/></p>
                      </a>
                 
                  </div> */}

              {/* <Image className='disbursedimg' src="images/loans.png" alt="" /> */}

            </div>

            <div className="col-md-1">

            </div>
            <div className="col-md-4 homepage1box2">
              <div className="registerbox1">


                <h1 className="letsgetstarted">
                  Hi! Let`s get started
                </h1>
                <p className="homepagesubtitle fordesktoponly hideipad">
                  Please type in your email address to continue to your account
                </p>

                <p className="homepagesubtitle foripadonly">
                  Please type in your email address to continue to your account
                </p>

                <p className="homepagesubtitle formobileonly">
                  Please type in your email address to continue to your account
                </p>

                {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label class="emaillabel" style={{ color: "#666666", paddingTop: "20px", paddingBottom: "0px" }}>Your Phone Number</Form.Label>
                  <div class="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/sms.svg"></img>
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control id="phonenumber" onKeyDown={inputemail} type="text" placeholder="Enter your email address" />

                    </div>
                  </div>

                </Form.Group> */}

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px", paddingBottom: "0px" }}>Your Email Address</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      {/* <Image style={{ marginTop: "8px" }} src="/images/sms.svg" layout="fill" /> */}
                      <div className="loginlock" >
                      <Image style={{ marginTop: "8px" }} 
                      src="/images/sms.svg" width="24" height="24"
                      />
                      </div>
                      
                    </div>

                    <div className="col-md-11 col-11">
                      <Form.Control id="emailaddress" onKeyDown={inputemail} type="text" placeholder="Enter your email address" />

                    </div>
                  </div>

                </Form.Group>

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register1} className="continuebutton accessbutton2">Continue
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>


                </p>
                <p style={{fontSize:"14px", }}>Have An Account? 

<Link href="/" style={{ textDecoration: "none" }}> 
<span style={{paddingLeft:"5px", color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px", cursor:"pointer" }}>
  Sign in now</span>
  </Link> 
  {/* <span style={{ float: "right", color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px", cursor: "pointer" }} 
  onClick={forgotpassword0} >Forgot password</span> */}
  </p>

              </div>

              <div className="registerbox2">
              <p onClick={gobacktostep1}  className="loansareavailable2" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
                
                <h1 className="letsgetstartedstepheading">
                  Step 1/3
                </h1>
                <h1 className="letsgetstarted">
                  Create your account
                </h1>
                <p className="homepagesubtitle fordesktoponly hideipad" style={{ fontSize: "13px" }}>
                  It looks like you don’t have an account, Let’s create a new account for {email}
                </p>

                <p className="homepagesubtitle foripadonly">
                  It looks like you don’t have an account, Let’s create a new account for {email}
                </p>

                <p className="homepagesubtitle formobileonly" >
                  It looks like you don’t have an account, Let’s create a new account for {email}
                </p>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "0px", paddingBottom: "0px" }}>Your first name</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/user.svg" layout='fill'/>
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control id="firstname" onKeyDown={inputemail} type="text" placeholder="Enter your first name" />

                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Your last name</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/user.svg" layout='fill'/>
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control id="lastname" onKeyDown={inputemail} type="text" placeholder="Enter your last name" />

                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Phone</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/user.svg" layout='fill'/>
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control id="phone" onKeyDown={inputemail} type="tel" placeholder="Enter your phone number" />

                    </div>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Password</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control id="password" onKeyUp={inputpassword} type="password" placeholder="Enter your password" />

                    </div>
                  </div>
                </Form.Group>
                <p className=" instruction2" style={{ color: "#666666", paddingTop: "30px" }}><i className="fas fa-check-circle circle1"></i> Use from 8 characters</p>
                <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle2"></i> Use at least 1 uppercase letter</p>
                <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle3"></i> Use at least 1 numeric value</p>
                <p className=" instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle4"></i> Use a combination of numbers and English letters</p>

                <p style={{ color: "#666666" }} className="byselecting"> By selecting agree and continue button below, I agree to the  <span style={{ color: "#DD3737" }}>Terms of services</span> and the  <span style={{ color: "#DD3737" }}>Privacy Policy</span>.</p>

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify2}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register2} id="agreebutton" className="accessbutton3">Agree and Continue
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>


                </p>


              </div>

              <div className="registerbox3">

                <h1 className="letsgetstartedstepheading fordesktoponly">
                  {/* Step 2/3 */}
                </h1>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  OTP Request
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                  An OTP has been sent to your email <span style={{ fontWeight: "bold" }}>{email}</span>. kindly input it below.
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                  An OTP has been sent to your email {email}. kindly input it below.
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                  An OTP has been sent to your email {email}. kindly input it below.
                </p>
                <hr />




                <div className="row otp-screen" id="otp-screen">

                  <input type="text" className="otp1" id="otpstep1one"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp1" id="otpstep1two" placeholder="0" maxLength="1" />
                  <input type="text" className="otp1" id="otpstep1three" placeholder="0" maxLength="1" />
                  <input type="text" className="otp1" id="otpstep1four" placeholder="0" maxLength="1" />


                </div>






                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify3}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register3} className="continuebutton accessbutton">Verify and continue
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>
                  <p style={{ color: "#666666", paddingTop: "30px" }}> Didn`t get an OTP? <span style={{ color: "#DD3737",cursor:"pointer" }} onClick={requestpin}>Request again</span>.</p>


                </p>


              </div>

              <div className="registerbox4">

                <h1 className="letsgetstartedstepheading fordesktoponly">
                  {/* Step 2/3 */}
                </h1>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Secure your transactions
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                  Create your 4 digit pin which would be used to authorize transactions on your account
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                  Create your 4 digit pin which would be used to authorize transactions on your account
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                  Create your 4 digit pin which would be used to authorize transactions on your account
                </p>
                <hr />




                <div className="row otp-screen" id="otp-screen2">

                  <input type="text" className="otp2" id="otpstep2one"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp2" id="otpstep2two"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp2" id="otpstep2three"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp2" id="otpstep2four"  placeholder="0" maxLength="1" />


                </div>






                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify3}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register4} className="continuebutton accessbutton">Continue
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>
                  {/* <p style={{color:"#666666",paddingTop:"30px"}}> Didn`t get an OTP? <span style={{color:"#DD3737"}}>Request again</span>.</p> */}


                </p>


              </div>

              <div className="registerbox5">

                <h1 className="letsgetstartedstepheading fordesktoponly">
                  {/* Step 2/3 */}
                </h1>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Account Created
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                  Your account has been created. Kindly click  on continue to access your account.
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                  Your account has been created. Kindly click  on continue to access your account.
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                  Your account has been created. Kindly click  on continue to access your account.
                </p>











                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register5} className="accessbutton">Continue
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>
                  {/* <p style={{color:"#666666",paddingTop:"30px"}}> Didn`t get an OTP? <span style={{color:"#DD3737"}}>Request again</span>.</p> */}


                </p>


              </div>
            </div>


          </Row>
        </div>
      </Container>


    </div>




  )


}


export { Signup as default }