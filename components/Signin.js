import React, { useEffect, useState, useContext, useRef } from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
// import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';

import "../js/main.js"
import $ from 'jquery'
import AuthContext from '../store/auth-context';
import { useRouter } from 'next/router';
import useHttp from '../hooks/use-http';

const SignIn = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter();
  const authCtx = useContext(AuthContext)
  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [uid, setuid] = useState("")

  const forgotpassword0 = () => {
    setnotify("")
    $(".forgotpassword0").toggle("slide");
    $(".forgotpassword1").css({ 'display': 'block' });
  }

  const gobackforgotpassword0 = () => {
    setnotify("")
    $(".forgotpassword1").toggle("slide");
    $(".forgotpassword0").css({ 'display': 'block' });
  }

  const gobackforgotpassword1 = () => {
    setnotify("")
    $(".forgotpassword2").toggle("slide");
    $(".forgotpassword1").css({ 'display': 'block' });
  }

  const gobackforgotpassword2 = () => {
    setnotify("")
    $(".forgotpassword3").toggle("slide");
    $(".forgotpassword0").css({ 'display': 'block' });
  }

  const forgotpassword1 = () => {

    // $(".spinner-border").css({ 'display': 'block' });
    var email = document.getElementById("resetemailaddress").value
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      setnotify("Processing...")

      var settingsthree = {
        "url": "https://credisol-app.herokuapp.com/v1/registration/password_reset_email/",
        "method": "POST",
        "timeout": 0,
        "data":
        {
          "email": document.getElementById("resetemailaddress").value,

        },
        error: function (xhr, status, error) {
          // console.log(xhr)
          if (xhr.status === 404) {
            setnotify("Email not found")
            $(".spinner-border").css({ 'display': 'none' });
          }
        },
      }
      $.ajax(settingsthree).done(function (responsetwo) {
        // console.log(responsetwo)
        setuid(responsetwo.uid)

        setnotify("")
        setemail(document.getElementById("resetemailaddress").value)
        $(".forgotpassword1").toggle("slide");
        $(".forgotpassword2").css({ 'display': 'block' });
        $(".spinner-border").css({ 'display': 'none' });


      })
      return true;

    }
    else {
      setnotify("Invalid E-mail Address")
      $(".spinner-border").css({ 'display': 'none' });
      return false;
    }
  }

  const inputpassword = () => {
    var password = document.getElementById("newpassword").value
    // console.log(password)

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


  const forgotpassword2 = () => {

    var pin1 = document.getElementById("otpstep1one").value
      + document.getElementById("otpstep1two").value
      + document.getElementById("otpstep1three").value
      + document.getElementById("otpstep1four").value

    var confirmpassword = document.getElementById("confirmpassword").value
    var password = document.getElementById("newpassword").value

    if (pin1 === "") {
      setnotify("Input your OTP")
    }

    else if (confirmpassword !== password) {
      setnotify("Passwords do not match")
    }

    else {
      setnotify("Processing...")
      var settingsthree = {

        "url": "https://credisol-app.herokuapp.com/v1/registration/reset_password/" + uid + "/" + pin1 + "/",
        "method": "POST",
        "timeout": 0,
        "data":
        {

          "password": document.getElementById("newpassword").value,
        },
        error: function (xhr, status, error) {
          // console.log(xhr)
          if (xhr.status === 401) {
            setnotify("Incorrect OTP")

          }
        },
      }

      $.ajax(settingsthree).done(function (responsetwo) {
        // console.log(responsetwo)
        setnotify("")
        // $(".forgotpassword2").toggle("slide");
        // $(".forgotpassword0").css({ 'display': 'block' });
        window.location.replace("/");
      })
      // $(".forgotpassword1").toggle("slide");
      // $(".forgotpassword2").css({ 'display': 'block' });
    }


  }


  const { isLoading, error, sendRequest:sendLoginRequest }  = useHttp();

  const signin = () => {

    if (emailRef.current.value === "") {
      setnotify("Input your E-mail")
    }

    else if (passwordRef.current.value === "") {
      setnotify("Input your Password")
    }

    else {
      $(".spinner-border").css({ 'display': 'inline-block' });
      setnotify("")

      const email = emailRef.current.value
      const password = passwordRef.current.value

      const loginResponse = ((data) => {
        console.log(data.error_code)
        if(data.error_code === "validation_error"){
          setnotify("Email account does not exist")
          $(".spinner-border").css({ 'display': 'none' });
        }

        else if (data.error_code === "unconfirmed_user"){
          setnotify("Email account not confirmed yet")
          $(".spinner-border").css({ 'display': 'none' });
        }
        else{
          localStorage.setItem("email", data.user.email)
          localStorage.setItem("firstname", data.user.first_name)
          localStorage.setItem("lastname", data.user.last_name)
          localStorage.setItem("phone", data.user.phone_number)
          localStorage.setItem("creditofficer", data.user.credit_officer)
          localStorage.setItem("userid", data.user.id)
          localStorage.setItem("access_token", data.tokens.access)
          localStorage.setItem("pin", data.user.transaction_pin)
          localStorage.setItem("bank", data.user.bank_name)
          localStorage.setItem("providusid", data.user.va_id)
          localStorage.setItem("providusaccountnumber", data.user.va_acc_num)
          localStorage.setItem("accountnumber", data.user.account_number)

          setnotify2("")
          $(".spinner-border").css({ 'display': 'none' });
          router.push('/home');
        }
          
    })

    sendLoginRequest({
        "url": "https://credisol-app.herokuapp.com/v1/registration/sign_in/",
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
      },
        body: {
                    email:email,
                    password:password
                },
    }, loginResponse)
   
} 
    }

  return (

    <div>
      <Header />
      <Container>
        <div>
          <Row>
            <div className="col-md-6 homepage1box fordesktoponly">
              <p style={{ textAlign: "center" }} ><Image src="/images/signupbg.svg" layout="fill" /></p>
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
            
            <div className="col-md-4 forgotpassword0">
              <div className="signinbox1">


                <h1 className="letsgetstarted ">
                  Welcome back !
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


                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>Your Email Address</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/sms.svg" layout="fill" />
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control ref={emailRef} id="emailaddress" type="text" placeholder="Enter your email address" />

                    </div>
                  </div>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>Password</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control ref={passwordRef} id="password" type="password" placeholder="Enter your password" />

                    </div>
                  </div>
                </Form.Group>

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={signin} className="continuebutton accessbutton">Login
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>

                </p>
                <p>No Account? 
                  <Link href="/signup" style={{ textDecoration: "none" }}> 
                  <span style={{ color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px" }}>Sign up now</span></Link> <span style={{ float: "right", color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px", cursor: "pointer" }} onClick={forgotpassword0} >Forgot password</span></p>

              </div>

            </div>

            <div className="col-md-4  forgotpassword1">
              <div className="signinbox1">


                <p className="homepagesubtitle fordesktoponly hideipad">
                  Please type in your email address to continue to your account
                </p>

                <p className="homepagesubtitle foripadonly">
                  Please type in your email address to continue to your account
                </p>

                <p className="homepagesubtitle formobileonly">
                  Please type in your email address to continue to your account
                </p>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>Your Email Address</Form.Label>
                  <div className="row">
                    <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/sms.svg" layout="fill" />
                    </div>
                    <div className="col-md-11 col-11">
                      <Form.Control id="resetemailaddress" type="text" placeholder="Enter your email address" />

                    </div>
                  </div>

                </Form.Group>



                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                <p className="" style={{ textAlign: "center" }}>

                  {/* <button style={{marginTop:"25px", marginBottom:"20px"}} onClick={forgotpassword1}  className="continuebutton accessbutton">Next
    <div class="spinner-border spinner-border-sm" role="status">
  <span class="sr-only">Loading...</span>
</div>
     
     </button> */}

                  <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={forgotpassword1} className="continuebutton accessbutton">Continue
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>

                </p>
                <p> <a style={{ textDecoration: "none", cursor: "pointer" }}> <span onClick={gobackforgotpassword0} style={{ color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px" }}>Go back</span>
                </a>
                </p>

              </div>

            </div>

            <div className="col-md-4 forgotpassword2">
              <div className="">


                <p className="homepagesubtitle fordesktoponly hideipad">
                  An OTP has been sent to <span style={{ fontWeight: "bold" }}>{email}</span>. kindly input it below.
                </p>

                <p className="homepagesubtitle foripadonly">
                  An OTP has been sent to <span style={{ fontWeight: "bold" }}>{email}</span>. kindly input it below.
                </p>

                <p className="homepagesubtitle formobileonly">
                  An OTP has been sent to<span style={{ fontWeight: "bold" }}>{email}</span>. kindly input it below.
                </p>


                <div className="row otp-screen" id="otp-screen">

                  <input type="text" className="otp1" id="otpstep1one" placeholder="0" maxLength="1" />
                  <input type="text" className="otp1" id="otpstep1two" placeholder="0" maxLength="1" />
                  <input type="text" className="otp1" id="otpstep1three" placeholder="0" maxLength="1" />
                  <input type="text" className="otp1" id="otpstep1four" placeholder="0" maxLength="1" />


                </div>

                <div className="">

                  <p className="homepagesubtitle fordesktoponly hideipad">
                    Please type in your new password to continue to your account
                  </p>

                  <p className="homepagesubtitle foripadonly">
                    Please type in your new password to continue to your account
                  </p>

                  <p className="homepagesubtitle formobileonly">
                    Please type in your new password to continue to your account
                  </p>


                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>New Password</Form.Label>
                    <div className="row">
                      <div className="col-md-1 col-1">
                        <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                      </div>
                      <div className="col-md-11 col-11">
                        <Form.Control id="newpassword" onKeyUp={inputpassword} type="password" placeholder="Enter your password" />

                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Confirm Password</Form.Label>
                    <div className="row">
                      <div className="col-md-1 col-1">
                        <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                      </div>
                      <div className="col-md-11 col-11">
                        <Form.Control id="confirmpassword" type="password" placeholder="Enter your password" />

                      </div>
                    </div>
                  </Form.Group>
                  <p className=" instruction2" style={{ color: "#666666", paddingTop: "30px" }}><i className="fas fa-check-circle circle1"></i> Use from 8 characters</p>
                  <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle2"></i> Use at least 1 uppercase letter</p>
                  <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle3"></i> Use at least 1 numeric value</p>
                  <p className=" instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle4"></i> Use a combination of numbers and English letters</p>


                  <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                  <p className="" style={{ textAlign: "center" }}>

                    <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={forgotpassword2} className="continuebutton accessbutton">Next
                      <div className="spinner-border spinner-border-sm" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>

                    </button>

                  </p>


                </div>




              </div>

            </div>



            <div className="col-md-4  forgotpassword3">
              <div className="signinbox1">


                <p className="homepagesubtitle fordesktoponly hideipad">
                  Your password has been reset successfully. Click the button below to login
                </p>

                <p className="homepagesubtitle foripadonly">
                  Your password has been reset successfully. Click the button below to login
                </p>

                <p className="homepagesubtitle formobileonly">
                  Your password has been reset successfully. Click the button below to login
                </p>





                <p className="" style={{ textAlign: "center" }}>

                  <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={gobackforgotpassword2} className="continuebutton accessbutton">Sign In
                    <div className="spinner-border spinner-border-sm" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>

                  </button>

                </p>


              </div>

            </div>


          </Row>
        </div>
      </Container>


    </div>




  )


}


export { SignIn as default }