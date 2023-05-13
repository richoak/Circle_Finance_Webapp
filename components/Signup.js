import React, { useEffect, useState, useRef, useReducer } from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import Link from 'next/link';
import jwt from 'jsonwebtoken';
import Header from './Header';
import Image from 'next/image';
import "../js/main.js"
import $ from 'jquery'
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const verifyRef = useRef()
  const passwordRef = useRef()
  const confirmpasswordRef = useRef()

  const verifycode1Ref = useRef()
  const verifycode2Ref = useRef()
  const verifycode3Ref = useRef()
  const verifycode4Ref = useRef()

  const stageonepin1Ref = useRef()
  const stageonepin2Ref = useRef()
  const stageonepin3Ref = useRef()
  const stageonepin4Ref = useRef()

  const stagetwopin1Ref = useRef()
  const stagetwopin2Ref = useRef()
  const stagetwopin3Ref = useRef()
  const stagetwopin4Ref = useRef()


  const [loading, setLoading ] = useState(false)
  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [tokenurl, settokenurl] = useState("")
  const [accesstoken, setaccesstoken] = useState("")
  const [passwordcheck, setpasswordcheck] = useState(false)
  const [passwordpass, setpasswordpass] = useState(false)
  const [pin1, setpin1] = useState("")
  const [userid, setuserid] = useState("")
  const [pin2, setpin2] = useState("")
  const [fourdigitpin, setfourdigitpin] = useState("")
  const [confirmfourdigitpin, setconfirmfourdigitpin] = useState("")


  const gobacktostep1 = () => {
    $(".registerbox2").slideDown();
    $(".registerbox2").css({ 'display': 'none' });
    $(".registerbox1").toggle("slide");
  }

  const gobacktostep2= () => {
    $(".registerbox3").slideDown();
    $(".registerbox3").css({ 'display': 'none' });
    $(".registerbox2").toggle("slide");
  }

  const checkStageOne = () => {
    if( firstnameRef.current.value !== "" &&
    lastnameRef.current.value !== ""
    &&  emailRef.current.value !== "" 
    &&  phoneRef.current.value !== ""){
      $(".continuebutton").removeClass("accessbutton2");
      $(".continuebutton").addClass("accessbutton2active");
    }
  }

  const inputemail = () => {
    // $('.emaillabel').css("color", "#DD3737");
    $(".continuebutton").removeClass("accessbutton2");
    $(".continuebutton").addClass("accessbutton2active");

  }

  const inputpassword = () => {
    var password = passwordRef.current.value
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
      $(".circle2").addClass("redcheck");
      $(".circle3").addClass("redcheck");
      $(".circle4").addClass("redcheck");
      setpasswordcheck(true)
      $("#agreebutton").removeClass("accessbutton3");
      $("#agreebutton").addClass("accessbutton3active");
    } else {
      $(".circle2").removeClass("redcheck");
      $(".circle3").removeClass("redcheck");
      $(".circle4").removeClass("redcheck");
      

    }

    // console.log(password.length)
    // console.log(passwordcheck)
    if (password.length >=8 && passwordcheck){
      setpasswordpass(true)
    }

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

  useEffect(() => {
    let otp = document.querySelector('#otp-screen3');
  
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

  async function loadRegister1() {
    
    let obj = {
        firstName:firstnameRef.current.value,
        lastName:lastnameRef.current.value,
        email:emailRef.current.value,
        phoneNumber: phoneRef.current.value
    }
    // console.log(obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/register",{
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
        $(".registerbox1").toggle("slide");
        $(".registerbox2").css({ 'display': 'block' });
      }
} catch (error){
        // console.log(error)
      return
    }
  }


  const register1 = () => {
    var email = emailRef.current.value
    // console.log(email)
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(mailformat)) {
      setnotify("")
      setemail(email)
      loadRegister1()
      // $(".registerbox1").toggle("slide");
      // $(".registerbox2").css({ 'display': 'block' });

      return true;

    }
    else {
      setnotify("Invalid E-mail Address")

      return false;
    }
    loadData()

  }


  const register2 = () => {
    $(".registerbox2").toggle("slide");
    $(".registerbox3").css({ 'display': 'block' });
    $(".spinner-border").css({ 'display': 'none' });
    // $(".spinner-border").css({ 'display': 'inline-block' });
    // var firstname = document.getElementById("firstname").value
    // var lastname = document.getElementById("lastname").value
    // var password = document.getElementById("password").value

    // if (firstname === "") {
    //   setnotify2("Input first name")
    // }

    // else if (lastname === "") {
    //   setnotify2("Input last name")
    // }

    // else if (password === "") {
    //   setnotify2("Input password")
    // }
    // else {
    //   var settingsthree = {
    //     "url": "https://credisol-main.herokuapp.com/v1/registration/sign_up/",
    //     "method": "POST",
    //     "timeout": 0,
    //     //  "headers": { "X-ApiKey": "SfeILETE0TcCFOziCtTXBPxfqsmTR6aO5F+3cJRmobMf/w8HEVw7xqAvAyNPlD0O"},
    //     "data":
    //     {
    //     "email" : document.getElementById("emailaddress").value.toLowerCase(),
    //       "password" : document.getElementById("password").value,
    //       "confirm_password" : document.getElementById("password").value,
    //       "phone_number" : document.getElementById("phone").value,
    //       "first_name" : document.getElementById("firstname").value,
    //       "last_name" : document.getElementById("lastname").value,
   
    //     },
    //     error: function (xhr, status, error) {
    //       console.log(xhr)
    //       if(xhr.status === 409){
    //         setnotify2("User with phone number/email exists.")
    //         $(".spinner-border").css({ 'display': 'none' });
    //       }

    //       else if(xhr.status === 400){
    //         setnotify2("Email already exists.")
    //         $(".spinner-border").css({ 'display': 'none' });
    //       }
    //     },
    //   }
    //   $.ajax(settingsthree).done(function (responsetwo) {
    //     // console.log(responsetwo)
    //     localStorage.setItem("email", responsetwo.email)
    //     localStorage.setItem("firstname", responsetwo.first_name)
    //     localStorage.setItem("lastname", responsetwo.last_name)
    //     localStorage.setItem("phone", responsetwo.phone_number)
    //     localStorage.setItem("userid", responsetwo.id)
    //     localStorage.setItem("creditofficer", responsetwo.credit_officer)
    //     localStorage.setItem("providusid", responsetwo.va_id)
    //     localStorage.setItem("providusaccountnumber", responsetwo.va_acc_num)
    //     localStorage.setItem("accountnumber", responsetwo.account_number)
     
    //     setuserid(responsetwo.id)
    //     settokenurl(responsetwo.pin_confirmation_url)
    //     setnotify2("")
    //     $(".registerbox2").toggle("slide");
    //     $(".registerbox3").css({ 'display': 'block' });
    //     $(".spinner-border").css({ 'display': 'none' });
    //     // setNotify(`A pin has been sent to ${localStorage.getItem("useremail")}`)
  
    //   })
  
    // }



  }

  async function loadRegister3() {
    setLoading(true)
    var pinone = verifycode1Ref.current.value
    + verifycode2Ref.current.value
    + verifycode3Ref.current.value
    + verifycode4Ref.current.value
    // console.log(pinone)
    let obj = {
        code:pinone,
        email
    }
    // console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/verify-user",{
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
        setnotify3(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setLoading(false)
        setuserid(responsedata.data.user_id)
        $(".registerbox3").toggle("slide");
        $(".registerbox4").css({ 'display': 'block' });
      }
} catch (error){
        // console.log(error)
      return
    }
  }


  const register3 = () => {
    setnotify3("")

  // setpin1(pinone)
  loadRegister3()

  }

  async function loadRegister4() {
    setLoading(true)
    let obj = {
        password:passwordRef.current.value,
        userId:userid
    }
    // console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/create-account",{
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
        setnotify3(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setnotify3("")
        $(".registerbox4").toggle("slide");
        $(".registerbox5").css({ 'display': 'block' });
        $(".spinner-border").css({ 'display': 'none' });
      }
} catch (error){
        // console.log(error)
      return
    }
  }

  const passwordHandler = () => {
    // if(confirmpasswordRef.current.value !== ""){
    //   $(".continuebutton").removeClass("accessbutton2");
    //   $(".continuebutton").addClass("accessbutton2active");
    // }
 
  }

  const register4 = () => {
    // console.log(passwordpass)
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
    );



    if(passwordRef.current.value == ""){
      setnotify3("Input a password")
      return
    }

    // else if(!passwordpass){
    //   setnotify3("Password not secure enough")
    // }

    else if(confirmpasswordRef.current.value == ""){
      setnotify3("Repeat your password")
      return
    }

    else if(confirmpasswordRef.current.value !== passwordRef.current.value){
      setnotify3("Passwords do not match")
      return
    }

  if (pattern.test(passwordRef.current.value)) {
    loadRegister4()
  }   

    else {
      setnotify3("Password not secure enough")
     
    }

  }

  const gobacktostep5= () => {
    $(".registerbox6").slideDown();
    $(".registerbox6").css({ 'display': 'none' });
    $(".registerbox5").toggle("slide");
  }

  const register5 = () => {
    var code = stageonepin1Ref.current.value
    + stageonepin2Ref.current.value
    + stageonepin3Ref.current.value
    + stageonepin4Ref.current.value

    if (code.length < 4 || code == ""){
      setnotify3("Input a 4 digit pin")
      return
    }
else{
  setnotify3("")
  setfourdigitpin(code)
  $(".registerbox5").toggle("slide");
  $(".registerbox6").css({ 'display': 'block' });
  $(".spinner-border").css({ 'display': 'none' });
}

  }



  async function loadRegister6() {
   
    setLoading(true)
    var code = stagetwopin1Ref.current.value
    + stagetwopin2Ref.current.value
    + stagetwopin3Ref.current.value
    + stagetwopin4Ref.current.value

    if (code.length < 4 || code == ""){
      setnotify3("Re-enter  4 digit pin")
      return
    }
    else if(fourdigitpin != code){
      setnotify3("Pins do not match")
      return
    }
    let obj = {
        pin:code,
        userId:userid
    }
    // console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/set-pin",{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj'
            },
      })
      responsedata = await response.json()
      console.log(responsedata)
 

       if (response.status == "400"){
        setnotify3(responsedata.message)
        setLoading(false)
        return
      }
      else{
        setnotify3("")
        $(".registerbox6").toggle("slide");
        $(".registerbox7").css({ 'display': 'block' });
        setLoading(false)
      }
} catch (error){
        console.log(error)
      return
    }


  }


  const register6 = () => {


  setnotify3("")
  loadRegister6()
  }





  const register7 = () => {
    // $(".spinner-border").css({ 'display': 'inline-block' });
          router.push(`/`)
  }

  
  async function requestWhatsapp() {

    let obj = {
        email,
    }
    // console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/onboarding/request-code",{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj'
            },
      })
      responsedata = await response.json()
      console.log(responsedata)
 

       if (response.status == "400"){
        setnotify3(responsedata.message)
      
        return
      }
      else{
        setnotify3(responsedata.message)
      }
} catch (error){
        // console.log(error)
      return
    }
  }

  const requestpin = () => {
    setnotify3("Requesting...")
    requestWhatsapp()
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
            <div className="col-md-4 homepage1box2">
              <div className="registerbox1">
              <h1 className="letsgetstartedstepheading">
                  Step 1/3
                </h1>
              <Image className="" style={{marginBottom:"40px"}}  alt="logo" src="/images/logo.svg" />
           
                <h1 className="letsgetstarted">
                  Hi there! Lets get started
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
                  <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>FirstName</Form.Label>
                  <div className="row">
      

                    <div className="col-md-12 col-12">
                      <Form.Control ref={firstnameRef} onKeyDown={checkStageOne}  type="text" placeholder="Enter your first name" />
                  </div>
                  </div>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Last Name</Form.Label>
                  <div className="row">
      

                    <div className="col-md-12 col-12">
                      <Form.Control ref={lastnameRef} onKeyDown={checkStageOne}  type="text" placeholder="Enter your last name" />
                  </div>
                  </div>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Email Address</Form.Label>
                  <div className="row">

                    <div className="col-md-12 col-12">
                      <Form.Control  ref={emailRef}   onKeyDown={checkStageOne} type="text" placeholder="Enter your email address" />
                  </div>
                  </div>

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "0px", paddingBottom: "0px" }}>Phone Number</Form.Label>
                  <div className="row">

                    <div className="col-md-12 col-12">
                      <Form.Control  ref={phoneRef}  onKeyDown={checkStageOne} type="number" placeholder="Enter your phone number" />
                  </div>
                  </div>

                </Form.Group>

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register1} className="continuebutton accessbutton2">Continue
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>


                </p>
                <p style={{fontSize:"14px",color:"#687181", }}>Already have an account? 

<Link href="/" style={{ textDecoration: "none" }}> 
<span style={{paddingLeft:"5px", color: "#2F6D67", fontWeight:"600", cursor:"pointer" }}>
  Log In</span>
  </Link> 
  <i style={{marginLeft:"5px"}} className="fas fa-chevron-right"></i>
  {/* <span style={{ float: "right", color: "#DD3737", textDecoration: "underline", textUnderlineOffset: "2px", cursor: "pointer" }} 
  onClick={forgotpassword0} >Forgot password</span> */}
  </p>

              </div>

              <div className="registerbox2">
              <p onClick={gobacktostep1}  className="loansareavailable2" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
                
                {/* <h1 className="letsgetstartedstepheading">
                  Step 1/3
                </h1> */}
                <p className="imageverify" style={{textAlign:"center"}}>
                <Image  src="/images/emailverify.svg" alt="" />
                </p>
               
                <h1 className="letsgetstarted">
                  We`ve sent you an email
                </h1>
                <p  className="homepagesubtitle fordesktoponly hideipad" style={{ fontSize: "13px", textAlign:"center" }}>
                Kindly click on the link to verify your <br/> account and access the App.
                </p>

                <p className="homepagesubtitle foripadonly"  style={{ fontSize: "13px", textAlign:"center" }}>
                Kindly click on the link to verify your account and access the App.
                </p>

                <p className="homepagesubtitle formobileonly"  style={{ fontSize: "13px", textAlign:"center" }} >
                Kindly click on the link to verify your account and access the App.
                </p>


             

                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify2}</p>

               

                  <button onClick={register2} id="agreebutton" className="accessbutton3active">Enter the code manually
  

                  </button>

                  {/* <p onClick={register2}  className="entercode" style={{ textAlign: "center", cursor:"pointer" }}>
                    Enter the code manually
                    <i style={{marginLeft:"5px", fontSize:"13px"}} class="fas fa-chevron-right"></i>
                </p> */}


              </div>

              <div className="registerbox3">
              <p onClick={gobacktostep2}  className="loansareavailable2" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>

                {/* <h1 className="letsgetstartedstepheading fordesktoponly">
                  Step 2/3
                </h1> */}
                <p className="emailverify" style={{textAlign:"center"}}>
                <img  src="/images/emailverify.svg" alt="" />
                </p>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Verify account
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                  Please enter the verification sent to<br/> your email <span style={{ fontWeight: "bold" }}>{email}</span>.
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                Please enter the verification sent to your email  {email}.
                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                Please enter the verification sent to your email  {email}.
                </p>
                {/* <hr /> */}


<div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-10">
  <div className="row otp-screen" id="otp-screen">
<input type="password" className="otp1"  id="otpstep1one" ref={verifycode1Ref} placeholder="" maxLength="1" />
<input type="password" className="otp1" id="otpstep1two" ref={verifycode2Ref}  placeholder="" maxLength="1" />
<input type="password" className="otp1"  id="otpstep1three" ref={verifycode3Ref}  placeholder="" maxLength="1" />
<input type="password" className="otp1" id="otpstep1four" ref={verifycode4Ref}  placeholder="" maxLength="1" />


</div>
  </div>
  <div className="col-md-1"></div>
</div>
          






                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify3}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register3} style={{width:"80%"}} className="continuebutton accessbutton">Verify and continue
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>
                  <p style={{ color: "#687181", paddingTop: "10px" }}> 
                  <span style={{ color: "#687181", fontSize:"14px" }} >
                  Didn`t get an OTP? 
                  </span>
                  <span style={{ color: "#2F6D67", fontWeight:"600", cursor:"pointer", paddingLeft:"10px" }} 
                  onClick={requestpin}> Request via whatsapp</span>
                  </p>


                </p>


              </div>

              <div className="registerbox4">
              <h1 className="letsgetstartedstepheading">
                  Step 2/3
                </h1>
              <h1 className="letsgetstarted">
                  Hi there! Lets get started
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
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Password</Form.Label>
                  <div className="row">
                    <div className="col-md-12 col-12">
                 
                      <div className="form-group">
              
               <div className="input-group" id="show_hide_password">
      <input className="form-control form-control-sm" onKeyUp={inputpassword}  type="password"  ref={passwordRef}  placeholder="Enter a password" />
      <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px"}}>
        <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
      </div>
    </div>
              
                </div>


                    </div>
                  </div>
                </Form.Group>
                <p className=" instruction2" style={{ color: "#666666", paddingTop: "5px" }}><i className="fas fa-check-circle circle1"></i> Use from 8 characters</p>
                <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle2"></i> Use at least 1 uppercase letter</p>
                <p className="instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle3"></i> Use at least 1 numeric value</p>
                <p className=" instruction2" style={{ color: "#666666" }}><i className="fas fa-check-circle circle4"></i> Use a combination of numbers and English letters</p>

                {/* <p style={{ color: "#666666" }} className="byselecting"> By selecting agree and continue button below, I agree to the  <span style={{ color: "#DD3737" }}>Terms of services</span> and the  <span style={{ color: "#DD3737" }}>Privacy Policy</span>.</p> */}
                <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Repeat Password</Form.Label>
                  <div className="row">
                    {/* <div className="col-md-1 col-1">
                      <Image style={{ marginTop: "8px" }} src="/images/lock.svg" layout="fill" />
                    </div> */}
                    <div className="col-md-12 col-12">
                      {/* <Form.Control id="password"  onKeyUp={passwordHandler}  ref={confirmpasswordRef}  type="password" placeholder="Repeat password" /> */}
                      <div className="form-group">
              
              <div className="input-group" id="show_hide_password">
     <input className="form-control form-control-sm" onKeyUp={passwordHandler}  type="password" placeholder="Repeat password"  ref={confirmpasswordRef}   />
     <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px", color:"red"}}>
       <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
     </div>
   </div>
             
               </div>
                    </div>
                  </div>







<p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify3}</p>

<p className="" style={{ textAlign: "center" }}>

  <button onClick={register4} style={{marginTop:"20px"}} className="continuebutton  accessbutton">Continue
  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

  </button>
  {/* <p style={{color:"#666666",paddingTop:"30px"}}> Didn`t get an OTP? <span style={{color:"#DD3737"}}>Request again</span>.</p> */}


</p>


</div>

              <div className="registerbox5">

                <h1 className="letsgetstartedstepheading fordesktoponly">
                  Step 3/3
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
                {/* <hr /> */}


                <div className="row">
  <div className="col-md-1"></div>
  <div className="col-md-10">
  <div className="row otp-screen" id="otp-screen2">

<input type="password" className="otp2" id="otpstep2one" ref={stageonepin1Ref}  placeholder="" maxLength="1" />
<input type="password" className="otp2" id="otpstep2two"  ref={stageonepin2Ref}  placeholder="" maxLength="1" />
<input type="password" className="otp2" id="otpstep2three"  ref={stageonepin3Ref} placeholder="" maxLength="1" />
<input type="password" className="otp2" id="otpstep2four" ref={stageonepin4Ref}  placeholder="" maxLength="1" />


</div>
  </div>
  <div className="col-md-1"></div>
</div>

                {/* <div className="row otp-screen" id="otp-screen2">

                  <input type="text" className="otp2" id="otpstep2one"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp2" id="otpstep2two"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp2" id="otpstep2three"  placeholder="0" maxLength="1" />
                  <input type="text" className="otp2" id="otpstep2four"  placeholder="0" maxLength="1" />


                </div> */}






                <p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify3}</p>

                <p className="" style={{ textAlign: "center" }}>

                  <button onClick={register5} className="continuebutton accessbutton">Continue
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>
                  {/* <p style={{color:"#666666",paddingTop:"30px"}}> Didn`t get an OTP? <span style={{color:"#DD3737"}}>Request again</span>.</p> */}


                </p>


              </div>
              <div className="registerbox6">
              <p onClick={gobacktostep5}  className="loansareavailable2" style={{cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
<h1 className="letsgetstartedstepheading fordesktoponly">
  Step 3/3
</h1>
<h1 style={{ textAlign: "center" }} className="letsgetstarted">
  Re-enter your 4 digit pin
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
{/* <hr /> */}


<div className="row">
<div className="col-md-1"></div>
<div className="col-md-10">
<div className="row otp-screen" id="otp-screen3">

<input type="password" className="otp2" id="otpstep2one" ref={stagetwopin1Ref}    placeholder="" maxLength="1" />
<input type="password" className="otp2" id="otpstep2two" ref={stagetwopin2Ref}   placeholder="" maxLength="1" />
<input type="password" className="otp2" id="otpstep2three" ref={stagetwopin3Ref}   placeholder="" maxLength="1" />
<input type="password" className="otp2" id="otpstep2four" ref={stagetwopin4Ref}   placeholder="" maxLength="1" />


</div>
</div>
<div className="col-md-1"></div>
</div>

{/* <div className="row otp-screen" id="otp-screen2">

  <input type="text" className="otp2" id="otpstep2one"  placeholder="0" maxLength="1" />
  <input type="text" className="otp2" id="otpstep2two"  placeholder="0" maxLength="1" />
  <input type="text" className="otp2" id="otpstep2three"  placeholder="0" maxLength="1" />
  <input type="text" className="otp2" id="otpstep2four"  placeholder="0" maxLength="1" />


</div> */}






<p className="" style={{ textAlign: "center", color: "#DD3737", fontWeight: "bold" }}>{notify3}</p>

<p className="" style={{ textAlign: "center" }}>

  <button onClick={register6} className="continuebutton accessbutton">Continue
  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

  </button>
  {/* <p style={{color:"#666666",paddingTop:"30px"}}> Didn`t get an OTP? <span style={{color:"#DD3737"}}>Request again</span>.</p> */}


</p>


</div>

              <div className="registerbox7">
<div className="successfulbox">
<h1 className="letsgetstartedstepheading fordesktoponly">
                  {/* Step 2/3 */}
                </h1>
                <p style={{textAlign:"center"}}><img src="/images/badge-check.svg" alt="" /></p>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Successful
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                Account creation successful. Kindly cliick the button below to proceed 
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                Account creation successful. Kindly click the button below to proceed 
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                Account creation successful. Kindly click the button below to proceed 
                                </p>

                <p className="" style={{ textAlign: "center" }}>
                  <button onClick={register7} style={{width:"80%", marginTop:"30px"}}  className="accessbutton">Continue to account
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


          </Row>
        </div>
      </Container>


    </div>




  )


}


export { Signup as default }