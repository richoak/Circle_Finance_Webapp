import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Profile.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
// import "../js/main.js"


const Security = () => {
  const router = useRouter();
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const dateRef = useRef()
  const passwordRef = useRef()
  const oldpasswordRef = useRef()
  const confirmpasswordRef = useRef()

  const stageonepin1Ref = useRef()
  const stageonepin2Ref = useRef()
  const stageonepin3Ref = useRef()
  const stageonepin4Ref = useRef()

  const stagetwopin1Ref = useRef()
  const stagetwopin2Ref = useRef()
  const stagetwopin3Ref = useRef()
  const stagetwopin4Ref = useRef()

  const stagethreepin1Ref = useRef()
  const stagethreepin2Ref = useRef()
  const stagethreepin3Ref = useRef()
  const stagethreepin4Ref = useRef()

  const [loading, setLoading ] = useState(false)
  const [loadingpassword, setLoadingPassword ] = useState(false)
  const [notify, setnotify ] = useState()
  const [notifypassword, setnotifypassword ] = useState()
  const [passwordcheck, setpasswordcheck] = useState(false)

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

  $(document).ready(function() {
    $("#show_hide_password2 a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password2 input').attr("type") == "text"){
            $('#show_hide_password2 input').attr('type', 'password');
            $('#show_hide_password2 i').addClass( "fa-eye-slash" );
            $('#show_hide_password2 i').removeClass( "fa-eye" );
        }else if($('#show_hide_password2 input').attr("type") == "password"){
            $('#show_hide_password2 input').attr('type', 'text');
            $('#show_hide_password2 i').removeClass( "fa-eye-slash" );
            $('#show_hide_password2 i').addClass( "fa-eye" );
        }
    });
});

$(document).ready(function() {
  $("#show_hide_password3 a").on('click', function(event) {
      event.preventDefault();
      if($('#show_hide_password3 input').attr("type") == "text"){
          $('#show_hide_password3 input').attr('type', 'password');
          $('#show_hide_password3 i').addClass( "fa-eye-slash" );
          $('#show_hide_password3 i').removeClass( "fa-eye" );
      }else if($('#show_hide_password3 input').attr("type") == "password"){
          $('#show_hide_password3 input').attr('type', 'text');
          $('#show_hide_password3 i').removeClass( "fa-eye-slash" );
          $('#show_hide_password3 i').addClass( "fa-eye" );
      }
  });
});
  }, [])

  useEffect(() => {
    let otp = document.querySelector('#securityotp-screen');
  
    for (let pin of otp.children) {
      pin.onkeyup = function () {
        if (pin.nextElementSibling) {
          pin.nextElementSibling.focus();
        }
      }
    }
  })

  useEffect(() => {
    let otp = document.querySelector('#securityotp-screen2');
  
    for (let pin of otp.children) {
      pin.onkeyup = function () {
        if (pin.nextElementSibling) {
          pin.nextElementSibling.focus();
        }
      }
    }
  })

  useEffect(() => {
    let otp = document.querySelector('#securityotp-screen3');
  
    for (let pin of otp.children) {
      pin.onkeyup = function () {
        if (pin.nextElementSibling) {
          pin.nextElementSibling.focus();
        }
      }
    }
  })

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
    // if (password.length >=8 && passwordcheck){
    //   setpasswordpass(true)
    // }

  }

  async function loadResetPin() {
    setLoading(true)
    var currentpin = stageonepin1Ref.current.value
    + stageonepin2Ref.current.value
    + stageonepin3Ref.current.value
    + stageonepin4Ref.current.value

    var newpin = stagetwopin1Ref.current.value
    + stagetwopin2Ref.current.value
    + stagetwopin3Ref.current.value
    + stagetwopin4Ref.current.value
    let obj = {
      "currentPin":  currentpin,
      "newPin": newpin,
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/update-pin`,{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
             "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
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
        setnotify(responsedata.message)
        router.push(`/account`)
      }
  } catch (error){
        // console.log(error)
      return
    }
  }

  const resetPin = ()=> {
    var currentpin = stageonepin1Ref.current.value
    + stageonepin2Ref.current.value
    + stageonepin3Ref.current.value
    + stageonepin4Ref.current.value

    var newpin = stagetwopin1Ref.current.value
    + stagetwopin2Ref.current.value
    + stagetwopin3Ref.current.value
    + stagetwopin4Ref.current.value
  

  var repeatnewpin = stagethreepin1Ref.current.value
  + stagethreepin2Ref.current.value
  + stagethreepin3Ref.current.value
  + stagethreepin4Ref.current.value

  if(newpin !== repeatnewpin){
    setnotify("Pins do not match")
  }
  else{
    loadResetPin()
  }
  }


  async function loadResetPassword() {
    setLoadingPassword(true)
    var password = passwordRef.current.value
    var oldpassword = oldpasswordRef.current.value
    // var cpassword = confirmpasswordRef.current.value


    let obj = {
      "currentPassword":  oldpassword,
      "newPassword": password,
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/update-password`,{
        method: "POST",
         body: JSON.stringify({data}),
        headers: {
             'Content-Type': 'application/json',
             'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
             "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
            },
      })
      responsedata = await response.json()
            console.log("data",responsedata)
       if (response.status == "400" || response.status=="500"){
        setnotifypassword(responsedata.message)
        setLoadingPassword(false)
        return
      }
      else{
        setnotifypassword(responsedata.message)
        router.push(`/account`)
      }
  } catch (error){
        // console.log(error)
      return
    }
  }

  const resetPassword = ()=> {
  var password = passwordRef.current.value
  var oldpassword = oldpasswordRef.current.value
  var cpassword = confirmpasswordRef.current.value


  
  if(password!=cpassword){
    setnotifypassword("Entered passwords do not match")
    return
  }

  else if(oldpassword == ""){
    setnotifypassword("Enter your old password")
  }

  else{
    loadResetPassword()
  }
  }

    return (
        <div>
        <div className="row thesidebarrow">
        <div className="col-md-2 thesidebar">
        <Sidebar/>
        </div>




            <div className="col-md-10">
            <Topbar/>

            <div className="row">
              {/* <div className="col-md-1"></div> */}

              <div className="col-md-9">
              <div className="accountbox">
                
            <div className={classes.goback}>
            <Link className="" href="/account"  eventKey="2" >
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
            </Link>
            </div>
            <div style={{marginTop:"0px", width:"400px"}}>
         <p  className={classes.optiontitle}>Update your password</p>

     
         <div className="row"  style={{marginTop:"24px"}}>
         <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>Old Password</Form.Label>
                  <div className="row">

                    <div className="col-md-12 col-12">
                      <div className="form-group">
              
              <div className="input-group" id="show_hide_password">
              <input className="form-control"  type="password" placeholder="Old password"  ref={oldpasswordRef}   />
              <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px", color:"red"}}>
                <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
              </div>
            </div>
             
               </div>
                    </div>

                    
                  </div>


         {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
                  <Form.Label className="emaillabel" style={{ color: "#666666", paddingTop: "10px", paddingBottom: "0px" }}>New Password</Form.Label>
                  <div className="row">
                    <div className="col-md-12 col-12">
                 
                      <div className="form-group">
              
               <div className="input-group" id="show_hide_password2">
      <input className="form-control"  type="password"  ref={passwordRef} onKeyUp={inputpassword}   placeholder="New password" />
      <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px"}}>
        <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
      </div>
    </div>
              
                </div>


                    </div>
                  </div>
                {/* </Form.Group> */}
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
              
              <div className="input-group" id="show_hide_password3">
     <input className="form-control"  type="password" placeholder="Repeat password"  ref={confirmpasswordRef}   />
     <div className="input-group-addon"  style={{paddingTop:"4px", paddingLeft:"10px", color:"red"}}>
       <a  href=""><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
     </div>
   </div>
             
               </div>
                    </div>

                    
                  </div>


         </div>

         <p className="" style={{ textAlign: "",paddingTop:"0px", color: "#DD3737", fontWeight: "bold" }}>{notifypassword}</p>

<button onClick ={resetPassword} className={classes.securitybutton}>Save Changes
         {loadingpassword && (
        <div className= {`spinner-border spinner-border-sm spinner`} role="status">
       <span className="sr-only">Loading...</span>
       </div>
       )}

         </button>
    </div>

    <div style={{marginTop:"40px", width:"400px", paddingBottom:"40px"}}>
         <p className={classes.optiontitle}>Update your pin</p>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
         
          <div className="row otp-screen" id="securityotp-screen">
          <p className={classes.securitytitle}>Current Pin</p>
          <input type="password" className="otp2" id="otpstep2one" ref={stageonepin1Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2two"  ref={stageonepin2Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2three"  ref={stageonepin3Ref} placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2four" ref={stageonepin4Ref}  placeholder="" maxLength="1" />
            </div>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
         
          <div className="row otp-screen" id="securityotp-screen2">
          <p className={classes.securitytitle}>New Pin</p>
          <input type="password" className="otp2" id="otpstep2one" ref={stagetwopin1Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2two"  ref={stagetwopin2Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2three"  ref={stagetwopin3Ref} placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2four" ref={stagetwopin4Ref}  placeholder="" maxLength="1" />
            </div>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
       
          <div className="row otp-screen" id="securityotp-screen3">
          <p className={classes.securitytitle}>Repeat New Pin</p>
          <input type="password" className="otp2" id="otpstep2one" ref={stagethreepin1Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2two"  ref={stagethreepin2Ref}  placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2three"  ref={stagethreepin3Ref} placeholder="" maxLength="1" />
            <input type="password" className="otp2" id="otpstep2four" ref={stagethreepin4Ref}  placeholder="" maxLength="1" />
            </div>
          </div>
         </div>


         <p className="" style={{ textAlign: "",paddingTop:"40px", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

         <button onClick ={resetPin} className={classes.securitybutton}>Save Changes
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>
    </div>

            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
   
    )
    
    
}


export {Security as default}