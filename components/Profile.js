import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Pageloader from './Pageloader';

import "../js/main.js"
import $ from 'jquery'


const Profile = () => {



  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [profilepicture, setprofilepicture ] = useState("/images/user.svg");
  const [ profilepictureurl, setprofilepictureurl ] = useState("");

  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [email, setemail] = useState("")
  const [phone, setphone] = useState("")
  const [dateofbirth, setdateofbirth] = useState("")
  const [residentialaddress, setresidentialaddress] = useState("")
  const [maritalstatus, setmaritalstatus] = useState("")
  const [stateofresidence, setstateofresidence] = useState("")
  const [bvn, setbvn] = useState("")



      // UPLOAD PROFILE PICTURE
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
     
      const data = new FormData()
      console.log(data)
      data.append("file", profilepicture)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
        beforeSend: function(){
       
         
          },

          
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
      setprofilepictureurl(data.url)
      console.log(profilepictureurl)
      if(data.error){
        document.getElementById("profilepictureid").src = "/images/user.svg"
        $(".overlay").fadeOut(0);
      }
      else{

        document.getElementById("profilepictureid").src = data.url
        var settingsthree = {
          "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
          "method": "PATCH",
          "timeout": 0,
          "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
          "data":
          {
          "profile_picture" : data.url

          
          },
          error: function (xhr, status, error) {
            console.log(xhr)
         
            // if(xhr.status === 401){
            //   window.location.replace("/");
            // }
          },
        }
        
        $.ajax(settingsthree).done(function (responsethree) {
          console.log(responsethree)
          $(".overlay").fadeOut(0);
          
        })
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
  
  
      })
      .catch(err => console.log(err))
       
    
    
    },[profilepicture])
      // UPLOAD PROFILE PICTURE



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
      setfirstname(response.first_name)
      setlastname(response.last_name)
      setphone(response.phone_number)
      setemail(response.email)
      setdateofbirth(response.date_of_birth)
      setresidentialaddress(response.residential_address)
      setbvn(response.bvn)
      setmaritalstatus(response.marital_status)
      setstateofresidence(response.state_of_residence)
      setprofilepicture(response.profile_picture)
      $(".overlay").fadeOut(1500);
    })
  
  
  }, [])
  
  console.log(stateofresidence)
  if (dateofbirth){
    $("#dateofbirth").prop("disabled", true);
    $(".loanbutton").css({ 'display': 'none' });
  }
   if (residentialaddress){
    $("#residentialaddress").prop("disabled", true);
  }
  if (bvn){
    $("#bvn").prop("disabled", true);
  }
  if (maritalstatus){
    $("#maritalstatus").prop("disabled", true);
  }
  if (stateofresidence){
    $("#stateofresidence").prop("disabled", true);
  }




const savechanges = () => {

  if( document.getElementById("dateofbirth").value ===""){
    setnotify("Input date of birth")
  }

  else if( document.getElementById("residentialaddress").value ===""){
    setnotify("Input residential address")
  }

  else if( document.getElementById("maritalstatus").value ===""){
    setnotify("Input marital status")
  }

  else if( document.getElementById("stateofresidence").value ===""){
    setnotify("Input state of residence")
  }

  else if( document.getElementById("bvn").value ===""){
    setnotify("Input BVN")
  }

  else if( (document.getElementById("bvn").value).length < 11){
    setnotify("Incomplete BVN")
  }

  else{
    $(".spinner-border").css({ 'display': 'inline-block' });
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
      "method": "PATCH",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      "data":
      {
      "date_of_birth" : document.getElementById("dateofbirth").value,
      "residential_address" : document.getElementById("residentialaddress").value,
      "marital_status" : document.getElementById("maritalstatus").value,
      "state_of_residence" : document.getElementById("stateofresidence").value,
      "bvn" : document.getElementById("bvn").value,
      
      },
      error: function (xhr, status, error) {
        console.log(xhr)
        // if(xhr.status === 401){
        //   window.location.replace("/");
        // }
      },
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      window.location.replace("/profileoptions");
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
              <p className="loansareavailable2 " style={{paddingLeft:"20px"}}><img className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>

              <div className="row director1row">
  <div className="col-md-2 col-12">
    <p className="mobilecenterpicture">
    <div className="image-upload">
  <label for="file">
    <img className="" style={{marginBottom:"0px", cursor:"pointer "}} 
     id="profilepictureid" width="40"  src={ profilepicture} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setprofilepicture(e.target.files[0])}></input>
</div>
    <br/>
    <span className="loansareavailablenote2" style={{}}>Tap the image to change.</span>
    </p>

  </div>
    <div className="col-md-5">
    <p className="wallethead" >Personal Information </p>
        <div className="row">
            <div className="col-md-12">
            <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>First Name</Form.Label>
      <Form.Control   id="emailaddress" width="60px" value={firstname} type="text" placeholder=""disabled />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Last Name</Form.Label>
      <Form.Control   id="emailaddress" width="60px" value={lastname}  type="text" placeholder="" disabled/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Date of Birth</Form.Label>
      <Form.Control   id="dateofbirth" value={dateofbirth} width="60px"  type="date" placeholder="Input date of birth" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Marital Status</Form.Label>
      {/* <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input organization" /> */}
      <div className="form-group">
<select className="form-control" id="maritalstatus"  value={maritalstatus}>
<option>- Select Status -</option>
<option value="s">Single</option>
<option value="m">Married</option>

</select>
</div>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>BVN</Form.Label>
      <Form.Control   id="bvn" value={bvn}  width="60px" type="text" maxlength="11" placeholder="Input BVN" />
  </Form.Group>
            </div>
        </div>


    </div>

    <div className="col-md-5">
    <p className="wallethead" >Contact Information </p>
    <div className="pprow2">
    <div className="">
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Email Address</Form.Label>
      <Form.Control   id="emailaddress" width="60px" value={email}  type="text" placeholder="Input organization"disabled />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Phone Number</Form.Label>
      <Form.Control   id="emailaddress" width="60px" value={phone}  type="text" placeholder="Input phone number" disabled/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Residential Address</Form.Label>
      <Form.Control   id="residentialaddress" value={residentialaddress} width="60px" type="text" placeholder="Input residential address" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>State of Residence</Form.Label>
      {/* <Form.Control   id="stateofresidence" value={stateofresidence} width="60px" type="text" placeholder="Input state of residence" /> */}
  
  
  
      <div className="form-group">
<select className="form-control" id="stateofresidence"  value={stateofresidence}>
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


export {Profile as default}