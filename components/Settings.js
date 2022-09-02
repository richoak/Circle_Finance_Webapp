import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

const Settings = () => {




  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [pin, setpin] = useState("")

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

  const updatepasswordpage= () =>{

    $(".password1").slideDown();
    $(".password1").css({ 'display': 'none' });
    $(".password2").toggle( "slide" );
}

const updatepinpage= () =>{

    $(".password1").slideDown();
    $(".password1").css({ 'display': 'none' });
    $(".pin2").toggle( "slide" );
}
useEffect(() => {
  var settings = {
    "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
    "method": "GET",
    "timeout": 0,
    "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
    error: function (xhr, status, error) {
      // console.log(xhr)
    },
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response)
    setpin(response.transaction_pin)

  })


}, [])





console.log(pin)
// $(document).ready(function () {
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
// });

// $(document).ready(function () {
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
// });

const savechanges = () => {
  setnotify("Processing...")
  var oldpin = document.getElementById("otpstep1one").value 
  + document.getElementById("otpstep1two").value 
  + document.getElementById("otpstep1three").value 
  + document.getElementById("otpstep1four").value

  var newpin = document.getElementById("otpstep2one").value 
  + document.getElementById("otpstep2two").value 
  + document.getElementById("otpstep2three").value 
  + document.getElementById("otpstep2four").value

  console.log(oldpin)
  console.log(newpin)
  if (oldpin === ""){
    setnotify("Input old pin")
  }

  else if(newpin === ""){
    setnotify("Input new pin")
  }

else if ( pin !== oldpin){
  setnotify("Old pin is wrong")
}

else if ( oldpin === newpin){
  setnotify("Old and New pin are the same")
}



else{
  var settingsthree = {
    "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
    "method": "PATCH",
    "timeout": 0,
    "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
    "data":
    {
      "transaction_pin": newpin ,

    
    },
    error: function (xhr, status, error) {
      console.log(xhr)
      // if(xhr.status === 400){
      //   setnotify("Enter a valid E-mail address/Phone Number")
      // }
    },
  }
  
  $.ajax(settingsthree).done(function (responsethree) {
    console.log(responsethree)
    window.location.replace("/settings");
  })
}

}

const inputpassword = () => {
  var confirmpassword = document.getElementById("confirmpassword").value
  if (confirmpassword.length >= 8) {
    $(".circle1").addClass("redcheck");
  }
  else {
    $(".circle1").removeClass("redcheck");
  }

  var pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  if (pattern.test(confirmpassword)) {
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

const changepassword = () => {
  setnotify("Processing...")
  var oldpassword = document.getElementById("oldpassword").value
  var newpassword = document.getElementById("newpassword").value
  var confirmpassword = document.getElementById("confirmpassword").value


  if (oldpassword === ""){
    setnotify("Input old password")
  }

  else if(newpassword === ""){
    setnotify("Input new password")
  }

  else if(confirmpassword === ""){
    setnotify("Confirm your password")
  }

else if ( newpassword !== confirmpassword){
  setnotify("Passwords do not match")
}



else{
  var settingsthree = {
    "url": "https://credisol-app.herokuapp.com/v1/registration/update_password/",
    "method": "PATCH",
    "timeout": 0,
    "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
    "data":
    {
      "password": oldpassword ,
      "old_password": oldpassword ,

    
    },
    error: function (xhr, status, error) {
      console.log(xhr)
      if(xhr.status === 400){
        setnotify("Old password is incorrect")
      }
    },
  }
  
  $.ajax(settingsthree).done(function (responsethree) {
    console.log(responsethree)
    window.location.replace("/settings");
  })
}

}





  
    return (
      
      <div>
          <div class="row thesidebarrow">
          <div class="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div class="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-10 col-10 tabs webapptabs paymenttabs mobilesettings">

    <div className="password1">

      <div className="" onClick={updatepasswordpage}  activeClassName="is-active" >
<div className="row loanproductoptions">
<div className="col-md-3 col-10">
<p > <span class="loansareavailable2 ">Update Password</span> <br/><span  className="loansareavailablenote2">Personal loans available for individuals</span></p>  

</div>

<div className="col-md-1 col-1">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>

{/* <hr/> */}

</div>
</div>

<hr className="hrmarginright800"/>
<div className="" onClick={updatepinpage} activeClassName="is-active" >
<div className="row loanproductoptions" style={{marginTop:"30px"}}>
<div className="col-md-3 col-10">
<p > <span class="loansareavailable2 ">Update Pin</span> <br/><span  className="loansareavailablenote2">Personal loans available for individuals</span></p>  

</div>

<div className="col-md-1 col-1">
 <img style={{marginTop:"10px"}} className="" src="images/arrow-right.svg"/>
</div>
{/* <hr/> */}
</div>
</div>

<hr style={{marginRight:"800px"}}/>
      </div>
<div className="mobilesettings">
<div className="password2 ">
      <Link  style={{marginBottom:"45px"}} className="" href="/settings"  eventKey="2" activeClassName="is-active" >
              <p class="" style={{paddingLeft:"0px"}}>
                <img className="" src="images/arrow-left.svg"/> <span class="gobackp" style={{fontWeight:"bold",}}>Back</span></p>
              </Link>

      <p class="" style={{fontWeight:"bold"}}>Update your Password</p>  
      <p className='createapassword'>Create a new password that has not been used for <br/>your Credisol account before.</p>

      <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Your Old Password</Form.Label>
<div class="row">
<div className="col-md-1 col-1 lock">
<img style={{marginTop:"8px"}} src="/images/lock.svg"></img>
</div>
<div className="col-md-3 col-10">
<Form.Control   id="oldpassword"  type="password" placeholder="Enter your password" />

</div>
</div>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Your New Password</Form.Label>
<div class="row">
<div className="col-md-1 col-1 lock">
<img style={{marginTop:"8px"}} src="/images/lock.svg"></img>
</div>
<div className="col-md-3 col-10">
<Form.Control   id="newpassword"  type="password" placeholder="Enter your password" />

</div>
</div>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Confirm Password</Form.Label>
<div class="row">
<div className="col-md-1 col-1 lock">
<img style={{marginTop:"8px"}} src="/images/lock.svg"></img>
</div>
<div className="col-md-3 col-10">
<Form.Control   id="confirmpassword" onKeyUp={inputpassword}  type="password" placeholder="Enter your password" />

</div>
</div>
</Form.Group>
<p className=" instruction2"  style={{color:"#666666", paddingTop:"30px"}}><i class="fas fa-check-circle circle1"></i> Use from 8 characters</p>
<p  className="instruction2" style={{color:"#666666"}}><i class="fas fa-check-circle circle2"></i> Use at least 1 uppercase letter</p>
<p  className="instruction2" style={{color:"#666666"}}><i class="fas fa-check-circle circle3"></i> Use at least 1 numeric value</p>
<p  className=" instruction2" style={{color:"#666666"}}><i class="fas fa-check-circle circle4"></i> Use a combination of numbers and English letters</p>

<p class="" style={{ color:"#DD3737", fontWeight:"bold"}}>{notify}</p>
<button  id="agreebutton" className="settingscontinuebutton"onClick={changepassword}>Change password
<div class="spinner-border spinner-border-sm" role="status">
<span class="sr-only">Loading...</span>
</div>

</button>
<br/>
<br/>
<br/>
<br/>
      </div>

      <div className="pin2">
      <Link  style={{marginBottom:"25px"}} className="" href="/settings"  eventKey="2" activeClassName="is-active" >
              <p class="" style={{paddingLeft:"0px"}}>
                <img className="" src="images/arrow-left.svg"/> <span class="gobackp" style={{fontWeight:"bold",}}>Back</span></p>
              </Link>

      <p class="" style={{fontWeight:"",marginTop:"40px"}}>Old Pin</p>  
      <div class="row otp-screen" id="otp-screen" style={{marginTop:"0px"}}>

                  <input type="number" class="otp1" id="otpstep1one"  placeholder="0" maxlength="1" />
                  <input type="number" class="otp1" id="otpstep1two" placeholder="0" maxlength="1" />
                  <input type="number" class="otp1" id="otpstep1three" placeholder="0" maxlength="1" />
                  <input type="number" class="otp1" id="otpstep1four" placeholder="0" maxlength="1" />

 
</div>

<p class="" style={{fontWeight:""}}>New Pin</p>  
      <div class="row otp-screen" id="otp-screen2"  style={{marginTop:"0px"}}>

                  <input type="number" class="otp2" id="otpstep2one"  placeholder="0" maxlength="1" />
                  <input type="number" class="otp2" id="otpstep2two"  placeholder="0" maxlength="1" />
                  <input type="number" class="otp2" id="otpstep2three"  placeholder="0" maxlength="1" />
                  <input type="number" class="otp2" id="otpstep2four"  placeholder="0" maxlength="1" />

 
</div>
<p class="" style={{ color:"#DD3737", fontWeight:"bold"}}>{notify}</p>
<p style={{textAlign:""}}>
<button  id="agreebutton" className="settingscontinuebutton" onClick={savechanges}>Continue 
<div class="spinner-border spinner-border-sm" role="status">
<span class="sr-only">Loading...</span>
</div>

</button>
</p>
{/* <p style={{color:"#666666"}} className="byselecting"> By selecting agree and continue button below, I agree to the  <span style={{color:"#DD3737"}}>Terms of services</span> and the  <span style={{color:"#DD3737"}}>Privacy Policy</span>.</p> */}

{/* <hr style={{marginRight:"800px"}}/> */}

      </div>
</div>
    


</div>




</div>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Settings as default}