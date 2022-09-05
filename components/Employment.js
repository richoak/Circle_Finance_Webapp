import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'


import "../js/main.js"
import $ from 'jquery'

import Pageloader from './Pageloader';

const Employment = () => {




  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("Tap the image to upload.")
  const [notify3, setnotify3] = useState("Tap the image to upload")
  const [email, setemail] = useState("")
  const [staffidcard, setstaffidcard ] = useState("/images/staffid.svg");
  const [photograph, setphotograph ] = useState("/images/photograph.svg");
  const [ staffidurl, setstaffidcardurl ] = useState("");
  const [ photographurl, setphotographurl ] = useState("");


    // UPLOAD STAFF I.D CARD
  useEffect(() =>{
    // $('.loading').css("visibility", "visible");
   
    const data = new FormData()
    console.log(data)
    data.append("file", staffidcard)
    data.append("upload_preset", "wzqbt0tn")
    data.append("cloud_name","dbvhyaqgg")
    $(".overlay").fadeIn(1);
    fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
      // beforeSend: function(){
      //   $('.loading').css("visibility", "visible");
      //   },
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setstaffidcardurl(data.url)
    console.log(data)
    if(data.error){
      document.getElementById("staffidcardid").src = "/images/staffid.svg"
      $(".overlay").fadeOut(0);
      // $('.loading').css("visibility", "hidden");
    }
    else{
      document.getElementById("staffidcardid").src = data.url
      $(".overlay").fadeOut(0);
      // localStorage.setItem("songart", data.secure_url);
      // $('.loading').css("visibility", "hidden");
    }


    })
    .catch(err => console.log(err))
     
  
  
  },[staffidcard])
    // UPLOAD STAFF I.D CARD


  // UPLOAD PHOTOGRAPH
  useEffect(() =>{
    // $('.loading').css("visibility", "visible");
    const data = new FormData()
    data.append("file", photograph)
    data.append("upload_preset", "wzqbt0tn")
    data.append("cloud_name","dbvhyaqgg")
    $(".overlay").fadeIn(1);
    fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
      // beforeSend: function(){
      //   $('.loading').css("visibility", "visible");
      //   },
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    setphotographurl(data.url)
    console.log(data)
    if(data.error){
      document.getElementById("photographid").src = "/images/photograph.svg"
      $(".overlay").fadeOut(0);
      // $('.loading').css("visibility", "hidden");
    }
    else{
      document.getElementById("photographid").src = data.url
      $(".overlay").fadeOut(0);
      // localStorage.setItem("songart", data.secure_url);
      // $('.loading').css("visibility", "hidden");
    }
    })
    .catch(err => console.log(err))
  },[photograph])
  // UPLOAD PHOTOGRAPH


// GET PRESENT EMPLOYMENT DETAILS
  useEffect(() => {
    var settings = {
      "url": "https://credisol-app.herokuapp.com/v1/user_employment/" + localStorage.getItem("userid") + "/",
      "method": "GET",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      error: function (xhr, status, error) {
        if(xhr.status === 404){
          $(".saveemploymentbutton").css({ 'display': 'block' });
                   $(".overlay").fadeOut(1500);
        }
      },
    }
    
    $.ajax(settings).done(function (response) {
  //  console.log(response)
          document.getElementById("employmenttype").value = response.employment_type
          document.getElementById("organization").value = response.organization
          document.getElementById("ippis").value = response.ippis_number
          document.getElementById("title").value = response.job_title
          document.getElementById("office").value = response.office_address
          document.getElementById("state").value = response.state
      
      
            $(".editemploymentbutton").css({ 'display': 'block' });
       
            setstaffidcard(response.id_card)
            setphotograph(response.photograph)
            $(".overlay").fadeOut(1500);
    })
  
  
  }, [])
  // GET PRESENT EMPLOYMENT DETAILS


  const savechanges = () => {
    console.log( document.getElementById("employmenttype").value)
    setnotify("Processing...")
    
  if ( document.getElementById("employmenttype").value === ""){
    setnotify("Input employment type")
  }
  
  else if ( document.getElementById("organization").value === ""){
    setnotify("Input organization")
  }
  
  else if ( document.getElementById("ippis").value === ""){
    setnotify("Input IPPIS")
  }
  
  else if ( document.getElementById("title").value === ""){
    setnotify("Input job title")
  }
  
  else if ( document.getElementById("office").value === ""){
    setnotify("Input office address")
  }
  
  else if ( document.getElementById("state").value === ""){
    setnotify("Input state")
  }

  else if(staffidcard==="/images/staffid.svg"){
    setnotify("Upload your staff I.D card")
  }

  else if(photograph ==="/images/photograph.svg"){
    setnotify("Upload your photograph")
  }
  
  
  else{
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/user_employment/",
      "method": "POST",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      "data":
      {
        "user": localStorage.getItem("userid") ,
      "employment_type" : document.getElementById("employmenttype").value,
      "organization" : document.getElementById("organization").value,
      "ippis_number" : document.getElementById("ippis").value,
      "job_title" : document.getElementById("title").value,
      "office_address" : document.getElementById("office").value,
      "id_card" : staffidurl ,
      "state" : document.getElementById("state").value,
      "photograph" : photographurl,
      
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
      window.location.replace("/employment");
    })
  }
  
  }

  const editchanges = () => {
    setnotify("Processing...")
    
  if ( document.getElementById("employmenttype").value === ""){
    setnotify("Input employment type")
  }
  
  else if ( document.getElementById("organization").value === ""){
    setnotify("Input organization")
  }
  
  else if ( document.getElementById("ippis").value === ""){
    setnotify("Input IPPIS")
  }
  
  else if ( document.getElementById("title").value === ""){
    setnotify("Input job title")
  }
  
  else if ( document.getElementById("office").value === ""){
    setnotify("Input office address")
  }
  
  else if ( document.getElementById("state").value === ""){
    setnotify("Input state")
  }
  
  
  else{
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/user_employment/"  + localStorage.getItem("userid") + "/",
      "method": "PATCH",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      "data":
      {
        "user": localStorage.getItem("userid") ,
      "employment_type" : document.getElementById("employmenttype").value,
      "organization" : document.getElementById("organization").value,
      "ippis_number" : document.getElementById("ippis").value,
      "job_title" : document.getElementById("title").value,
      "office_address" : document.getElementById("office").value,
      "id_card" : staffidurl,
      "state" : document.getElementById("state").value,
      "photograph" :photographurl,
      
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
      window.location.replace("/employment");
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
    <Link className="goback" href="/profileoptions"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px"}}><Image className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>

              <div className="row director1row">

<div className="col-md-5">
<p className="wallethead" >Employment status </p>
    <div className="row">
        <div className="col-md-12">

        <div className="form-group">
<label for="sel1" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Employment Type</label>
<select className="form-control" id="employmenttype">
<option>- Select Employment Type -</option>
<option value="cs">Civil Servant</option>
<option value="ncs">Non Civil Servant</option>
<option value="priv">Private</option>

</select>
</div>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Input Organization</Form.Label>
  <Form.Control   id="organization" width="60px" type="text" placeholder="Input organization" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>IPPIS Number</Form.Label>
  <Form.Control   id="ippis" width="60px" type="number" placeholder="IPPIS Number" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Job Title</Form.Label>
  <Form.Control   id="title" width="60px" type="text" placeholder="Input job title" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Office Address</Form.Label>
  <Form.Control   id="office" width="60px" type="text" placeholder="Input office adddress" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>State</Form.Label>
      {/* <Form.Control   id="stateofresidence" value={stateofresidence} width="60px" type="text" placeholder="Input state of residence" /> */}
  
  
  
      <div className="form-group">
<select className="form-control" id="state">
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


        </div>
    </div>


</div>

<div className="col-md-5">
<p className="wallethead uploadempdocmobile" >Upload documents </p>
<div className="pprow2">
<div className="row">
    <div className="col-md-6 col-6">

    <span className="loansareavailablenote2 mobileuploadimagetext" style={{textAlign:"center",fontSize:"15px"}}>{notify2}</span>

    <div className="image-upload empimgupload">
  <label for="file">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="staffidcardid"  width="183" height="100" src={ staffidcard} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setstaffidcard(e.target.files[0])}></input>
</div>
    </div>

    <div className="col-md-6 col-6">
    <span className="loansareavailablenote2 mobileuploadimagetext" style={{textAlign:"center",fontSize:"15px"}}>{notify3}</span>
    <div className="image-upload empimgupload">
  <label for="file2">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="photographid" width="183" height="100" src={ photograph} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setphotograph(e.target.files[0])}></input>
</div>

        </div>


    </div>
 
    </div>



    </div>
</div>

<p className=""style={{textAlign:"center", color:"#DD3737", fontWeight:"bold"}}>{notify}</p>

<p className="saveemploymentbutton" style={{textAlign:"center"}}  onClick={savechanges}  >
<button  className="loanbutton">Save employment details
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>

<p className="editemploymentbutton" style={{textAlign:"center"}}  onClick={editchanges}  >
<button  className="loanbutton">Edit employment detail
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


export {Employment as default}