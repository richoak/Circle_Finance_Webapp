import React, { useEffect, useState, useContext, useRef } from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import jwt from 'jsonwebtoken';
// import Footer from './Footer';
import Header from './Header';
import Image from 'next/image';

import "../js/main.js"
import $ from 'jquery'
import AuthContext from '../store/auth-context';
import { useRouter } from 'next/router';
import useHttp from '../hooks/use-http';

const Login = () => {
  
  const emailRef = useRef()
   const resetemailRef = useRef()
  const passwordRef = useRef()
  const router = useRouter();
  const authCtx = useContext(AuthContext)
  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [uid, setuid] = useState("")

  const [loading, setLoading ] = useState(false)
  const [deviceId, setdeviceId ] = useState()
  const [deviceType, setdeviceType ] = useState()
  const [verifytoken, setverifytoken ] = useState()



  const newpasswordRef = useRef()
  const confirmresetpasswordRef = useRef()
  const verifycode1Ref = useRef()
  const verifycode2Ref = useRef()
  const verifycode3Ref = useRef()
  const verifycode4Ref = useRef()


  useEffect(() => {
    setdeviceId(window.navigator.userAgent)

    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
      }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
      }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
      }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
      } else if(userAgent.match(/edg/i)){
        browserName = "edge";
      }else{
        browserName="No browser detection";
      }
      setdeviceType(browserName)
  }, [])
  
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
    $(".forgotpassword2").css({ 'display': 'none' });
    $(".forgotpassword2").toggle("slide");
    $(".forgotpassword1").css({ 'display': 'block' });
  }

  const gobackforgotpassword1a = () => {
    setnotify("")
  
    $(".forgotpassword2a").toggle("slide");
    $(".forgotpassword2a").css({ 'display': 'none' });
    $(".forgotpassword2").css({ 'display': 'block' });
  }

  const gobackforgotpassword2 = () => {
    setnotify("")
    $(".forgotpassword3").toggle("slide");
    $(".forgotpassword0").css({ 'display': 'block' });
  }

  useEffect(() => {
    $(document).ready(function() {
      $("#show_hide_password a").on('click', function(event) {
          event.preventDefault();
          if($('#show_hide_password input').attr("type") == "text"){
              $('#show_hide_password input').attr('type', 'password');
              $('#show_hide_password i').addClass( "fa-eye-slash" );
              $('#show_hide_password i').removeClass( "fa-eye" );
          }else if($('#show_hide_password input').attr("type") == "password"){
              $('#show_hide_password input').attr('type', 'text');
              $('#show_hide_password i').removeClass( "fa-eye-slash" );
              $('#show_hide_password i').addClass( "fa-eye" );
          }
      });
  });
  }, [])


  async function resetpasswordstep1 () {
    setLoading(true)
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!resetemailRef.current.value.match(mailformat)) {
      setnotify("Invalid email")
      setLoading(false)
      return
    }
    let obj = {
       email:resetemailRef.current.value,
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/reset-password",{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj'
            },
      })
      responsedata = await response.json()
            console.log("data",responsedata)
       if (response.status == "400"){
        setnotify(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setnotify("")
        setLoading(false)
        $(".forgotpassword1").toggle("slide");
        $(".forgotpassword2").css({ 'display': 'block' });
        $(".spinner-border").css({ 'display': 'none' });
      }
} catch (error){
        // console.log(error)
      return
    }
  }

  const forgotpassword1 = () => {
    resetpasswordstep1()
    // $(".spinner-border").css({ 'display': 'block' });
    // var email = document.getElementById("resetemailaddress").value
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if (email.match(mailformat)) {
    //   setnotify("Processing...")

    //   var settingsthree = {
    //     "url": "https://credisol-main.herokuapp.com/v1/registration/password_reset_email/",
    //     "method": "POST",
    //     "timeout": 0,
    //     "data":
    //     {
    //       "email": document.getElementById("resetemailaddress").value,

    //     },
    //     error: function (xhr, status, error) {
    //       // console.log(xhr)
    //       if (xhr.status === 404) {
    //         setnotify("Email not found")
    //         $(".spinner-border").css({ 'display': 'none' });
    //       }
    //     },
    //   }
    //   $.ajax(settingsthree).done(function (responsetwo) {
    //     // console.log(responsetwo)
    //     setuid(responsetwo.uid)

    //     setnotify("")
    //     setemail(document.getElementById("resetemailaddress").value)
    //     $(".forgotpassword1").toggle("slide");
    //     $(".forgotpassword2").css({ 'display': 'block' });
    //     $(".spinner-border").css({ 'display': 'none' });


    //   })
    //   return true;

    // }
    // else {
    //   setnotify("Invalid E-mail Address")
    //   $(".spinner-border").css({ 'display': 'none' });
    //   return false;
    // }
  }

  const inputpassword = () => {
    var password = newpasswordRef.current.value
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

  async function handleResetPassword() {
    setLoading(true)
    var pinone = verifycode1Ref.current.value
    + verifycode2Ref.current.value
    + verifycode3Ref.current.value
    + verifycode4Ref.current.value

    if(pinone === "" || pinone < 4){
      setnotify("Input a 4 digit pin")
      setLoading(false)
      return
    }
    // console.log(pinone)
    let obj = {
        code:pinone,
        email:resetemailRef.current.value
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/verify-code",{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj'
            },
      })
      responsedata = await response.json()
      console.log(responsedata.data)
      setverifytoken(responsedata.data.token)
 

       if (response.status == "400"){
        setnotify(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setLoading(false)
        $(".forgotpassword2").toggle("slide");
        $(".forgotpassword2a").css({ 'display': 'block' });
      }
} catch (error){
        // console.log(error)
      return
    }
  }


  const forgotpassword2 = () => {
    handleResetPassword()
   
    

  }

  async function handleResetPassword2() {
    setLoading(true)

    // console.log(pinone)
    let obj = {
      password: confirmresetpasswordRef.current.value,
      uuid: resetemailRef.current.value,
      token:verifytoken
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/update-password",{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj'
            },
      })
      responsedata = await response.json()
      // console.log(responsedata)
 

       if (response.status == "400"){
        setnotify(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setLoading(false)
        $(".forgotpassword2a").toggle("slide");
        $(".forgotpassword2a").css({ 'display': 'none' });
        $(".forgotpassword3").css({ 'display': 'block' });
      }
} catch (error){
        // console.log(error)
      return
    }
  }

  const forgotpassword2a = () => {
        // console.log(passwordpass)
        var pattern = new RegExp(
          "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
        );
    
    
    
        if(newpasswordRef.current.value == ""){
          setnotify("Input a password")
          return
        }
    
        // else if(!passwordpass){
        //   setnotify3("Password not secure enough")
        // }
    
        else if(confirmresetpasswordRef.current.value == ""){
          setnotify("Repeat your password")
          return
        }
    
        else if(confirmresetpasswordRef.current.value !== newpasswordRef.current.value){
          setnotify("Passwords do not match")
          return
        }
    
      if (pattern.test(passwordRef.current.value)) {
      handleResetPassword2()
      setnotify("")
      }   
    
        else {
          setnotify3("Password not secure enough")
         
        }

  }


  const { isLoading, error, sendRequest:sendLoginRequest }  = useHttp();

  async function handleSignIn() {
    setLoading(true)
    let obj = {
       email:emailRef.current.value,
        password:passwordRef.current.value,
        deviceId,
        deviceType
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/login",{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj'
            },
      })
      responsedata = await response.json()
            console.log("data",responsedata)
       if (response.status == "400"){
        setnotify(responsedata.message)
        setLoading(false)
        return
      }
      else{
        console.log(responsedata)
        setnotify("")
          localStorage.setItem("accesstoken", responsedata.data.accessToken)
        router.push(`/home`)
      }
} catch (error){
        // console.log(error)
      return
    }
  }


  const signin = () => {

    if (emailRef.current.value === "") {
      setnotify("Input your E-mail")
    }

    else if (passwordRef.current.value === "") {
      setnotify("Input your Password")
    }

    else {
      setLoading(true)
      setnotify("")
      handleSignIn()

    //   const email = emailRef.current.value.toLowerCase()
    //   const password = passwordRef.current.value

    //   const loginResponse = ((data) => {
    //     console.log(data.error_code)
    //     if(data.error_code === "validation_error"){
    //       setnotify("Email account does not exist")
    //       $(".spinner-border").css({ 'display': 'none' });
    //     }

    //     else if (data.error_code === "unconfirmed_user"){
    //       setnotify("Email account not confirmed yet")
    //       $(".spinner-border").css({ 'display': 'none' });
    //     }
    //     else{
    //       localStorage.setItem("email", data.user.email)
    //       localStorage.setItem("firstname", data.user.first_name)
    //       localStorage.setItem("lastname", data.user.last_name)
    //       localStorage.setItem("phone", data.user.phone_number)
    //       localStorage.setItem("creditofficer", data.user.credit_officer)
    //       localStorage.setItem("userid", data.user.id)
    //       localStorage.setItem("access_token", data.tokens.access)
    //       localStorage.setItem("pin", data.user.transaction_pin)
    //       localStorage.setItem("bank", data.user.bank_name)
    //       localStorage.setItem("providusid", data.user.va_id)
    //       localStorage.setItem("providusaccountnumber", data.user.va_acc_num)
    //       localStorage.setItem("accountnumber", data.user.account_number)

    //       setnotify2("")
    //       $(".spinner-border").css({ 'display': 'none' });
    //       router.push('/home');
    //     }
          
    // })

    // sendLoginRequest({
    //     "url": "https://credisol-main.herokuapp.com/v1/registration/sign_in/",
    //     method: "POST",
    //     headers: { 
    //       'Content-Type': 'application/json',
    //   },
    //     body: {
    //                 email:email,
    //                 password:password
    //             },
    // }, loginResponse)
   
} 
    }

  return (

    <div>
      <Header />
      <Container>
        <div>
          <Row>
            <div className="col-md-6 homepage1box fordesktoponly">
              <p style={{ textAlign: "center" }} ><Image src="/images/signupbg.svg" width="375" height="309" /></p>
              <h1 className="homepageherotitle fordesktoponly">
                Building <span className='makereddish'>Wealth</span>, the easy <br/>and reliable way.
              </h1>

              <h1 className="homepageherotitle formobileonly">
              Building <span className='makereddish'>Wealth</span>, the easy <br/>and reliable way.
              </h1>
              <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
              Building wealth should not be nerve racking. With Oak Finance, <br/>you can now make the most of your finances and <br/>build wealth with ease.
                            </p>

              <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
              Building wealth should not be nerve racking. With Oak Finance, you can now make the most of your finances and build wealth with ease.
               </p>

              <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
              Building wealth should not be nerve racking. With Circle Finance, you can now make the most of your finances and build wealth with ease.
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

              <img className="" style={{marginBottom:"30px"}}  alt="logo" src="/images/logo.svg" />
                <h1 className="letsgetstarted ">
                  Welcome back
                </h1>
                <p className="homepagesubtitle fordesktoponly hideipad">
                Please fill in your information below to access your account.
                </p>

                <p className="homepagesubtitle foripadonly">
                Please fill in your information below to access your account.
                </p>

                <p className="homepagesubtitle formobileonly">
                Please fill in your information below to access your account.
                </p>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>Your Email Address</Form.Label>
                  <div className="row">
            
                    <div className="col-md-12 col-12">
                      <Form.Control ref={emailRef} id="emailaddress" type="text" placeholder="Enter your email address" />

                    </div>
                  </div>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>Password</Form.Label>
                  <div className="row">
                 
                    <div className="col-md-12 col-12">
                      {/* <Form.Control ref={passwordRef} id="password" type="password" placeholder="Enter your password" /> */}
                      <div className="form-group">
              
               <div className="input-group" id="show_hide_password">
      <input className="form-control" type="password"  ref={passwordRef}  placeholder="Enter a password" />
      <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px"}}>
        <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
      </div>
    </div>
              
                </div>
                    </div>
                  </div>
                </Form.Group>

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={signin} className="continuebutton accessbutton">Login
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>

                </p>
                <p style={{fontSize:"14px", color:"#687181" }}>Dont have an account? 

                  <Link href="/signup" style={{ textDecoration: "none" }}> 
                  <span style={{paddingLeft:"5px", color: "#2F6D67", fontWeight:"600", cursor:"pointer" }}>
                    Sign up here</span></Link> 
                    <i style={{marginLeft:"5px"}} className="fas fa-chevron-right"></i>
                    <span style={{ float: "right", color: "#2F6D67", fontWeight:"600", cursor: "pointer" }} 
                    onClick={forgotpassword0} >Forgot password</span>
                    </p>

              </div>

            </div>









            <div className="col-md-4  forgotpassword1">
              <div className="signinbox1">

              <p onClick={gobackforgotpassword0}  className="loansareavailable2 forgotpasswordbackbutton1" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>

                <p className="homepagesubtitle fordesktoponly hideipad">
                  Please type in your email address to reset your account
                </p>

                <p className="homepagesubtitle foripadonly">
                  Please type in your email address to reset your account
                </p>

                <p className="homepagesubtitle formobileonly">
                  Please type in your email address to reset your account
                </p>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "20px" }}>Your Email Address</Form.Label>
                  <div className="row">
              
                    <div className="col-md-12 col-12">
                      <Form.Control id="resetemailaddress" type="text" placeholder="Enter your email address" ref={resetemailRef} />

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
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>

                </p>
                {/* <p> <a style={{ textDecoration: "none", cursor: "pointer" }}> <span onClick={gobackforgotpassword0} style={{ color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px" }}>Go back</span>
                </a>
                </p> */}

              </div>

            </div>

            <div className="col-md-4 forgotpassword2">
              <div className="">
              <p onClick={gobackforgotpassword1}  className="loansareavailable2 forgotpasswordbackbutton2" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>

                <p className="homepagesubtitle fordesktoponly hideipad">
                  An OTP has been sent to your email, Kindly input it below.
                </p>

                <p className="homepagesubtitle foripadonly">
                  An OTP has been sent to your email, Kindly input it below.
                </p>

                <p className="homepagesubtitle formobileonly">
                  An OTP has been sent to your email. Kindly input it below.
                </p>


                <div className="row otp-screen" id="otp-screen">

                  <input type="password" className="otp1" id="otpstep1one"  ref={verifycode1Ref}  placeholder="" maxLength="1" />
                  <input type="password" className="otp1" id="otpstep1two" ref={verifycode2Ref}  placeholder="" maxLength="1" />
                  <input type="password" className="otp1" id="otpstep1three" ref={verifycode3Ref}  placeholder="" maxLength="1" />
                  <input type="password" className="otp1" id="otpstep1four" ref={verifycode4Ref}  placeholder="" maxLength="1" />


                </div>

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

<p className="" style={{ textAlign: "center" }}>

  <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={forgotpassword2} className="continuebutton accessbutton">Continue
  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

  </button>

</p>





              </div>

            </div>

            <div className="col-md-4 forgotpassword2a">
              <div className="">
              <p onClick={gobackforgotpassword1a}  className="loansareavailable2 forgotpasswordbackbutton3" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>

      
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
                      {/* <div className="col-md-1 col-1">
                        <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                      </div> */}
                      <div className="col-md-12 col-12">
                        {/* <Form.Control id="newpassword" onKeyUp={inputpassword} type="password" placeholder="Enter your password" /> */}
                        <div className="form-group">
              
              <div className="input-group" id="show_hide_password">
     <input className="form-control" type="password" onKeyUp={inputpassword}   ref={newpasswordRef}  placeholder="Enter a password" />
     <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px"}}>
       <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
     </div>
   </div>
             
               </div>
                      </div>
                    </div>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Confirm Password</Form.Label>
                    <div className="row">
                      {/* <div className="col-md-1 col-1">
                        <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                      </div> */}
                      <div className="col-md-12 col-12">
                        {/* <Form.Control id="confirmpassword" type="password" placeholder="Enter your password" /> */}
                        <div className="form-group">
              
              <div className="input-group" id="show_hide_password">
     <input className="form-control" type="password"  ref={confirmresetpasswordRef}  placeholder="Confirm password" />
     <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px"}}>
       <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
     </div>
   </div>
             
               </div>
                      </div>
                    </div>
                  </Form.Group>
                  <p className=" instruction2" style={{ color: "#666666", paddingTop: "30px" }}><i className="fas fa-check-circle circle1"></i> Use from 8 characters</p>
                  <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle2"></i> Use at least 1 uppercase letter</p>
                  <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle3"></i> Use at least 1 numeric value</p>
                  <p className=" instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle4"></i> Use a combination of numbers and English letters</p>


                  <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                  <p className="" style={{ textAlign: "center" }}>

                    <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={forgotpassword2a} className="continuebutton accessbutton">Continue
                    {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                    </button>

                  </p>


                </div>




              </div>

            </div>



            <div className="col-md-4  forgotpassword3">
              <div className="signinbox1 successfulbox">


          

           
                <p style={{textAlign:"center"}}><img src="/images/badge-check.svg" alt="" /></p>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Successful
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                Your password has been reset successfully. Click the button below to login
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                Your password has been reset successfully. Click the button below to login
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                Your password has been reset successfully. Click the button below to login
                                </p>




                <p className="" style={{ textAlign: "center" }}>

                  <button style={{ marginTop: "25px", marginBottom: "20px" }} onClick={gobackforgotpassword2} className="continuebutton accessbutton">Sign In
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

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


export { Login as default }