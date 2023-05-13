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


const ProfileTab = () => {

  // const firstnameRef = useRef()
  // const lastnameRef = useRef()
  const router = useRouter();
  const dobRef = useRef()
    const addressRef = useRef()
     const maritalRef = useRef()
     const stateRef = useRef()
     const genderRef = useRef()
     const bvnRef = useRef()

  const [loading, setLoading ] = useState(false)

  const [firstname, setfirstname ] = useState()
  const [lastname, setlastname ] = useState()
  const [email, setemail ] = useState()
  const [phone, setphone ] = useState()
  const [gender, setgender ] = useState()
  const [marital, setmarital ] = useState()
  const [bvn, setbvn ] = useState()
  const [address, setaddress ] = useState()
  const [state, setstate ] = useState()
  const [dob, setdob ] = useState()



  const [notify, setnotify ] = useState()
 
useEffect(() => {
  setfirstname(localStorage.getItem("firstname") )
  setlastname(localStorage.getItem("lastname") )
  setemail(localStorage.getItem("email") )
  setphone(localStorage.getItem("phone") )

  if(localStorage.getItem("address") == "null" ){
    setaddress("")

  }
  else{
    setaddress(localStorage.getItem("address"))
  }

  if( localStorage.getItem("bvn") == "null" ){
    setbvn("")
  }
  else{
    setbvn(localStorage.getItem("bvn"))
  }
  
  if(localStorage.getItem("dob") == "null" ){
    setdob("")
  }
  else{
    setdob(localStorage.getItem("dob"))
  }
  
  if(localStorage.getItem("gender") == "null"){
    setgender("")
  }
  else{
    setgender(localStorage.getItem("gender"))
  }
  
  if( localStorage.getItem("maritalstatus") == "null"){
    setmarital("")
  }
  else{
    setmarital(localStorage.getItem("maritalstatus"))
  }
 
  if( localStorage.getItem("state") == "null"){
    setstate("")
  }
  else{
    setstate(localStorage.getItem("state"))
  }

}, [])



  async function submitData() {
    setLoading(true)
    let obj = {
      "gender": genderRef.current.value,
      "dob": dobRef.current.value,
      "maritalStatus": maritalRef.current.value,
      "bvn": bvnRef.current.value,
      "address": addressRef.current.value,
      "state": stateRef.current.value
    }
    console.log("obj", obj)
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    let response
    let responsedata
    try{
      response = await fetch("http://3.209.81.171:8000/api/v1/account/profile",{
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
   if(genderRef.current.value == "" 
   || dobRef.current.value == ""
   || maritalRef.current.value == ""
   || bvnRef.current.value == ""
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
         <p  className={classes.optiontitle}>Personal Information</p>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>First Name</Form.Label>
          <Form.Control value={firstname} type="text" placeholder="Enter your first name" disabled/>
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Last Name</Form.Label>
          <Form.Control value={lastname} type="text" placeholder="Enter your first name" disabled/>
            </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Gender</Form.Label>
          <select className="form-select" onInput={(e)=>{setgender(e.target.value)}}  ref={genderRef} value={gender}>
          <option value="">- Select -</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
       
        </select>
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Date of Birth</Form.Label>
          <Form.Control ref={dobRef} type="date" onInput={(e)=>{setdob(e.target.value)}}  placeholder="" value={dob}/>
            </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Marital Status</Form.Label>
          <select className="form-select" onInput={(e)=>{setmarital(e.target.value)}}  ref={maritalRef} value={marital}>
          <option value="">- Select -</option>
          <option value="male">Single</option>
          <option value="female">Married</option>
       
        </select>
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>BVN</Form.Label>
          <Form.Control ref={bvnRef} type="text" onInput={(e)=>{setbvn(e.target.value)}} value={bvn} placeholder="Input BVN"/>
            </div>
         </div>
    </div>

    <div style={{marginTop:"40px", width:"400px", paddingBottom:"40px"}}>
         <p className={classes.optiontitle}>Contact Information</p>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Emaiil Address</Form.Label>
          <Form.Control value={email} type="text" placeholder="Enter your first name"disabled />
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Phone Number</Form.Label>
          <Form.Control value={phone} type="text" placeholder="Enter your first name"disabled />
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Residentiial Address</Form.Label>
          <Form.Control ref={addressRef} onInput={(e)=>{setaddress(e.target.value)}} value={address}type="text" placeholder="Enter your residential address"/>
         </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>State of Residence</Form.Label>
          <select className="form-select" onInput={(e)=>{setstate(e.target.value)}}  ref={stateRef} value={state}>
          <option value="">- Select -</option>
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

         <button onClick={saveChanges} className={classes.continuebutton}>Save Changes
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


export {ProfileTab as default}