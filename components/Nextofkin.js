import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'


import Pageloader from './Pageloader';

const Nextofkin = () => {




  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")


  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [gender, setgender] = useState("")
  const [residentialaddress, setresidentialaddress] = useState("")
  const [relationship, setrelationship] = useState("")
  const [stateofresidence, setstateofresidence] = useState("")


// console.log(localStorage.getItem("access_token"))
  useEffect(() => {
    var settings = {
      "url": "https://credisol-app.herokuapp.com/v1/user_nok/" + localStorage.getItem("userid") + "/",
      "method": "GET",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      error: function (xhr, status, error) {
        if (xhr.status ==404){
          $(".overlay").fadeOut(1500);
        }
      },
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response)
      setfirstname(response.first_name)
      setlastname(response.last_name)
      setphone(response.phone_number)
      setemail(response.email)
      setgender(response.gender)
      setrelationship(response.relationship)
      setresidentialaddress(response.residential_address)
          setstateofresidence(response.state_of_residence)

          document.getElementById("firstname").value = response.first_name
          document.getElementById("lastname").value = response.last_name
          document.getElementById("phonenumber").value = response.phone_number
          document.getElementById("emailaddress").value = response.email
          document.getElementById("residentialaddress").value = response.residential_address
          document.getElementById("gender").value = response.gender 
          document.getElementById("stateofresidence").value = response.state_of_residence
          document.getElementById("relationship").value = response.relationship
          $(".overlay").fadeOut(1500);
    })
  
  
  }, [])
  console.log(firstname)
  if (firstname){
    $("#firstname").prop("disabled", true);
    $(".loanbutton").css({ 'display': 'none' });
  }
   if (lastname){
    $("#lastname").prop("disabled", true);
  }
  if (gender){
    $("#gender").prop("disabled", true);
  }
  if (relationship){
    $("#relationship").prop("disabled", true);
  }
  if (email){
    $("#emailaddress").prop("disabled", true);
  }
  if (phone){
    $("#phonenumber").prop("disabled", true);
  }
  if (residentialaddress){
    $("#residentialaddress").prop("disabled", true);
  }
  if (stateofresidence){
    $("#stateofresidence").prop("disabled", true);
  }



const savechanges = () => {
  setnotify("Processing...")
if ( document.getElementById("firstname").value === ""){
  setnotify("Input next of kin`s firstname")
}

else if ( document.getElementById("lastname").value === ""){
  setnotify("Input next of kin`s lastname")
}

else if ( document.getElementById("phonenumber").value === ""){
  setnotify("Input next of kin`s phone number")
}

else if ( document.getElementById("emailaddress").value === ""){
  setnotify("Input next of kin`s email address")
}

else if ( document.getElementById("residentialaddress").value === ""){
  setnotify("Input next of kin`s residential address")
}

else if ( document.getElementById("gender").value === ""){
  setnotify("Input next of kin`s gender")
}

else if ( document.getElementById("stateofresidence").value === ""){
  setnotify("Input next of kin`s state of residence")
}

else if ( document.getElementById("relationship").value === ""){
  setnotify("Input next of kin`s relationship to you")
}

else{
  var settingsthree = {
    "url": "https://credisol-app.herokuapp.com/v1/user_nok/",
    "method": "POST",
    "timeout": 0,
    "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
    "data":
    {
      "user": localStorage.getItem("userid") ,
    "first_name" : document.getElementById("firstname").value,
    "last_name" : document.getElementById("lastname").value,
    "phone_number" : document.getElementById("phonenumber").value,
    "email" : document.getElementById("emailaddress").value,
    "residential_address" : document.getElementById("residentialaddress").value,
    "gender" : document.getElementById("gender").value,
    "state_of_residence" : document.getElementById("stateofresidence").value,
    "relationship" : document.getElementById("relationship").value,
    
    },
    error: function (xhr, status, error) {
      console.log(xhr)
      if(xhr.status === 400){
        setnotify("Enter a valid E-mail address/Phone Number")
      }
    },
  }
  
  $.ajax(settingsthree).done(function (responsethree) {
    console.log(responsethree)
    window.location.replace("/nextofkin");
  })
}

}


  
    return (
      
      <div>
               <Pageloader/>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-10 tabs webapptabs paymenttabs">
    <Link className="goback" href="/profileoptions"  activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px"}}>
                <Image className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span>
                </p>
              </Link>

              <div className="row director1row">

<div className="col-md-5 ">
<p className="wallethead" >NOK personal information </p>
    <div className="row">
        <div className="col-md-12">
        <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>First Name</Form.Label>
      <Form.Control   id="firstname" width="60px" type="text" placeholder="Input firstname"  />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Last Name</Form.Label>
      <Form.Control   id="lastname" width="60px"  type="text" placeholder="Input lastname"/>
  </Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Gender</Form.Label>
<div className="form-group">
<select className="form-control" id="gender">
<option>- Select Gender -</option>
<option value="m">Male</option>
<option value="f">Female</option>

</select>
</div>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Relationship</Form.Label>
  <Form.Control   id="relationship" width="60px" type="text" placeholder="Input relationship" />
</Form.Group>


        </div>
    </div>


</div>

<div className="col-md-5">
<p className="wallethead  uploadempdocmobile" >NOK contact information </p>
<div className="pprow2">
<div className="">
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Email Address</Form.Label>
      <Form.Control   id="emailaddress" width="60px"   type="text" placeholder="Input email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Phone Number</Form.Label>
      <Form.Control   id="phonenumber" width="60px"  type="text" placeholder="Input phone number" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Residential Address</Form.Label>
      <Form.Control   id="residentialaddress" width="60px" type="text" placeholder="Input residential address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>State of Residence</Form.Label>
      {/* <Form.Control   id="stateofresidence" value={stateofresidence} width="60px" type="text" placeholder="Input state of residence" /> */}
  
  
  
      <div className="form-group">
<select className="form-control" id="stateofresidence" >
<option>- Select State -</option>
<option value="AB">Abia</option>
    <option value="AD">Adamawa</option>
    <option value="AK">Akwa Ibom</option>
    <option value="AN">Anambra</option>
    <option value="BA">Bauchi</option>
    <option value="BY">Bayelsa</option>
    <option value="BE">Benue</option>
    <option value="BO">Borno</option>
    <option value="CR">Cross River</option>
    <option value="DE">Delta</option>
    <option value="EB">Ebonyi</option>
    <option value="ED">Edo</option>
    <option value="EK">Ekiti</option>
    <option value="EN">Enugu</option>
    <option value="FC">Federal Capital Territory</option>
    <option value="GO">Gombe</option>
    <option value="IM">Imo</option>
    <option value="JI">Jigawa</option>
    <option value="KD">Kaduna</option>
    <option value="KN">Kano</option>
    <option value="KT">Katsina</option>
    <option value="KE">Kebbi</option>
    <option value="KO">Kogi</option>
    <option value="KW">Kwara</option>
    <option value="LA">Lagos</option>
    <option value="NA">Nasarawa</option>
    <option value="NI">Niger</option>
    <option value="OG">Ogun</option>
    <option value="ON">Ondo</option>
    <option value="OS">Osun</option>
    <option value="OY">Oyo</option>
    <option value="PL">Plateau</option>
    <option value="RI">Rivers</option>
    <option value="SO">Sokoto</option>
    <option value="TA">Taraba</option>
    <option value="YO">Yobe</option>
    <option value="ZA">Zamfara</option>

</select>
</div>
  </Form.Group>


{/* <Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>BVN</Form.Label>
  <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input organization" />
</Form.Group> */}

    </div>
 
    </div>



    </div>
</div>
<p className="" style={{textAlign:"center", color:"#DD3737", fontWeight:"bold"}}>{notify}</p>
<p className="" style={{textAlign:"center"}} >
<button  className="loanbutton" onClick={savechanges}>Save changes
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>

</div>




</div>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Nextofkin as default}