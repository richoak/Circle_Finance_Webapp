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


const NextofkinTab = () => {
  const router = useRouter();

  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const relationshipRef = useRef()
  const genderRef = useRef()
  const emailRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()
  const stateRef = useRef()


  const [loading, setLoading ] = useState(false)

  const [firstname, setfirstname ] = useState()
  const [lastname, setlastname ] = useState()
  const [relationship, setrelationship ] = useState()
  const [gender, setgender ] = useState()
  const [email, setemail ] = useState()
  const [phone, setphone ] = useState()
  const [address, setaddress ] = useState()
  const [state, setstate ] = useState()

  const [notify, setnotify ] = useState()


  useEffect(() => {
    
    // FIRSTNAME
    if(localStorage.getItem("nokfirstname") == "null" ){
      setfirstname("")
    }

    else{
      setfirstname(localStorage.getItem("nokfirstname") )
    }

        // LASTNAME
    if(localStorage.getItem("noklastname") == "null" ){
      setlastname("")
    }
    else{
      setlastname(localStorage.getItem("noklastname") )
    }

            // EMAIL
            if(localStorage.getItem("nokemail") == "null" ){
              setemail("")
            }
            else{
              setemail(localStorage.getItem("nokemail") )
            }

                       // PHONE
                       if(localStorage.getItem("nokphone") == "null" ){
                        setphone("")
                      }
                      else{
                        setphone(localStorage.getItem("nokphone") )
                      }

// RELATIONSHIP
    if(localStorage.getItem("nokrelationship") == "null" ){
      setrelationship("")
    }
    else{
      setrelationship(localStorage.getItem("nokrelationship"))
    }

    // NOK GENDER
    if(localStorage.getItem("nokgender") == "null"){
      setgender("")
    }
    else{
      setgender(localStorage.getItem("nokgender"))
    }
    
 // NOK STATE
    if( localStorage.getItem("nokstate") == "null"){
      setstate("")
    }
    else{
      setstate(localStorage.getItem("nokstate"))
    }
  


   // NOK ADDRESS
   if( localStorage.getItem("nokaddress") == "null"){
    setaddress("")
  }
  else{
    setaddress(localStorage.getItem("nokaddress"))
    console.log(address)
  }

}, [])

async function submitData() {
  setLoading(true)
  let obj = {
    "firstName": firstnameRef.current.value,
    "lastName": lastnameRef.current.value,
    "email": emailRef.current.value,
    "phoneNumber": phoneRef.current.value,
    "relationship": relationshipRef.current.value,
    "gender": genderRef.current.value,
    "address": addressRef.current.value,
    "state": stateRef.current.value
}
  
  console.log("obj", obj)
  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)
  let response
  let responsedata
  try{
    response = await fetch("http://3.209.81.171:8000/api/v1/account/next-of-kin",{
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


const saveChanges = () => {
 if(firstnameRef.current.value == "" 
 || lastnameRef.current.value == ""
 || relationshipRef.current.value == ""
 || genderRef.current.value == ""
 || emailRef.current.value == ""
 || phoneRef.current.value == ""
 || addressRef.current.value == ""
 || stateRef.current.value == ""
 ){
  setnotify("Missing details")
  setLoading(false)
  return
 }
 setnotify("")
submitData()
}





    return (
      <>
         <div style={{marginTop:"40px", width:"400px"}}>
         <p  className={classes.optiontitle}>Next of kin Personal Information</p>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>First Name</Form.Label>
          <Form.Control ref={firstnameRef} onInput={(e)=>{setfirstname(e.target.value)}} type="text" placeholder="Enter first name" value={firstname} />
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Last Name</Form.Label>
          <Form.Control ref={lastnameRef} onInput={(e)=>{setlastname(e.target.value)}} type="text" placeholder="Enter last name" value={lastname}/>
            </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Relationship</Form.Label>
          <select className="form-select" ref={relationshipRef} value={relationship} onInput={(e)=>{setrelationship(e.target.value)}} >
          <option selected>- Select -</option>
          <option value="brother">Brother</option>
          <option value="sister">Sister</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="son">Son</option>
          <option value="daughter">Daughter</option>
       
        </select>
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Gender</Form.Label>
          <select className="form-select" onInput={(e)=>{setgender(e.target.value)}}   ref={genderRef} value={gender} >
          <option value="">- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
       
        </select>
            </div>
         </div>
    </div>

    <div style={{marginTop:"40px", width:"400px", paddingBottom:"40px"}}>
         <p className={classes.optiontitle}>Contact Information</p>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Email Address</Form.Label>
          <Form.Control ref={emailRef} value={email} onInput={(e)=>{setemail(e.target.value)}}  type="text" placeholder="Enter email address" />
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Phone Number</Form.Label>
          <Form.Control ref={phoneRef} value={phone} onInput={(e)=>{setphone(e.target.value)}}  type="number" placeholder="Enter phone number" />
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Residential Address</Form.Label>
          <Form.Control ref={addressRef} value={address} onInput={(e)=>{setaddress(e.target.value)}}  type="text" placeholder="Enter your residential address"/>
         </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Marital Status</Form.Label>
          <select className="form-select" ref={stateRef} onInput={(e)=>{setstate(e.target.value)}}  value={state}>
          <option selected>- Select -</option>
          <option value="Abia">Abia</option>
    <option value="Adamawa">Adamawa</option>
    <option value="Akwa Ibom">Akwa Ibom</option>
    <option value="Anambra">Anambra</option>
    <option value="Bauchi">Bauchi</option>
    <option value="Bayelsa">Bayelsa</option>
    <option value="Benue">Benue</option>
    <option value="Borno">Borno</option>
    <option value="Cross River">Cross River</option>
    <option value="Delta">Delta</option>
    <option value="Ebonyi">Ebonyi</option>
    <option value="Edo">Edo</option>
    <option value="Ekiti">Ekiti</option>
    <option value="Enugu">Enugu</option>
    <option value="FCT">Federal Capital Territory</option>
    <option value="Gombe">Gombe</option>
    <option value="Imo">Imo</option>
    <option value="Jigawa">Jigawa</option>
    <option value="Kaduna">Kaduna</option>
    <option value="Kano">Kano</option>
    <option value="Katsina">Katsina</option>
    <option value="Kebbi">Kebbi</option>
    <option value="Kogi">Kogi</option>
    <option value="Kwara">Kwara</option>
    <option value="Lagos">Lagos</option>
    <option value="Nasarawa">Nasarawa</option>
    <option value="Niger">Niger</option>
    <option value="Ogun">Ogun</option>
    <option value="Ondo">Ondo</option>
    <option value="Osun">Osun</option>
    <option value="Oyo">Oyo</option>
    <option value="Plateau">Plateau</option>
    <option value="Rivers">Rivers</option>
    <option value="Sokoto">Sokoto</option>
    <option value="Taraba">Taraba</option>
    <option value="Yobe">Yobe</option>
    <option value="Zamfara">Zamfara</option>
       
        </select>
          </div>
    
         </div>
         <p className="" style={{ textAlign: "center",paddingTop:"40px", color: "#DD3737", fontWeight: "bold" }}>{notify}</p>

         <button onClick={saveChanges}   className={classes.continuebutton}>Save Changes
                  {loading && (
                 <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                <span className="sr-only">Loading...</span>
                </div>
                )}

                  </button>
    </div>
      </>
   
    )
    
    
}


export {NextofkinTab as default}