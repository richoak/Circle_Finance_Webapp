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


const EmploymentTab = () => {
  const router = useRouter();
  const organizationtypeRef = useRef()
  const organizationnameRef = useRef()
  const ippisRef = useRef()
  const jobtitleRef = useRef()
  const officeaddressRef = useRef()
  const stateRef = useRef()


  const [organizationtype, setorganizationtype ] = useState()
  const [organizationname, setorganizationname ] = useState()
  const [ippis, setippis ] = useState()
  const [jobtitle, setjobtitle ] = useState()
  const [officeaddress, setofficeaddress ] = useState()
  const [state, setstate ] = useState()

  const [idfrontcopy, setidfrontcopy ] = useState()
  const [idbackcopy, setidbackcopy ] = useState()

  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()

  useEffect(() => {
    if(localStorage.getItem("setorganizationtype") == "null" || localStorage.getItem("organizationtype") == "" ){
      setorganizationtype("")
    }

    else{
      setorganizationtype(localStorage.getItem("organizationtype") )
    }

    if(localStorage.getItem("setorganizationname") == "null" || localStorage.getItem("organizationname") == "" ){
      setorganizationname("")
    }

    else{
      setorganizationname(localStorage.getItem("organizationname") )
    }


    if(localStorage.getItem("ippisnumber") == "null" || localStorage.getItem("ippisnumber") == "" ){
      setippis("")
    }

    else{
      setippis(localStorage.getItem("ippisnumber") )
    }


    if(localStorage.getItem("jobtitle") == "null" || localStorage.getItem("jobtitle") == "" ){
      setjobtitle("")
    }

    else{
      setjobtitle(localStorage.getItem("jobtitle") )
    }

    if(localStorage.getItem("officeaddress") == "null" || localStorage.getItem("officeaddress") == "" ){
      setofficeaddress("")
    }

    else{
      setofficeaddress(localStorage.getItem("officeaddress") )
    }

    if(localStorage.getItem("employmentidfrontcopy") == "null" | localStorage.getItem("employmentidfrontcopy") == "" ){
      setidfrontcopy("/images/frontcopy.svg")
    }

    else{
      setidfrontcopy(localStorage.getItem("employmentidfrontcopy") )
    }

    if(localStorage.getItem("employmentidbackcopy") == "null" || localStorage.getItem("employmentidbackcopy") == "" ){
      setidbackcopy("/images/backcopy.svg")

    }

    else{
      setidbackcopy(localStorage.getItem("idbackcopy") )
    }

    if(localStorage.getItem("stateofoffice") == "null" || localStorage.getItem("stateofoffice") == "" ){
      setstate("")
    }

    else{
      setstate(localStorage.getItem("stateofoffice") )
    }

  },[])


  // UPLOAD IMAGES

    const uploadFrontCopy = (e) => {

      let uploadedFile = e.target.files[0]
    setLoading(true)
    setnotify("Uploading...")
    const data = new FormData()
    data.append("file", uploadedFile)
    data.append("upload_preset", "wzqbt0tn")
    data.append("cloud_name","dbvhyaqgg")
    fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
    method:"post",
    body: data
    })
    .then(resp => resp.json())
    .then(data => {
    // setUrl(data.url)
    console.log(data)
    if(data.error){
      setidfrontcopy("/images/frontcopy.svg")
      setLoading(false)
      setnotify("An error occured, try again")
    }
    else{
      setidfrontcopy(data.url)
      localStorage.setItem("idfrontcopy", data.secure_url);
      setLoading(false)
      setnotify("")
    }


    })
    .catch(err => console.log(err))
     
    }



//     const uploadBackCopy = (e) => {
// console.log("running")
//       let uploadedFile = e.target.files[0]
//     setLoading(true)
//     setnotify("Uploading...")
//     const data = new FormData()
//     data.append("file", uploadedFile)
//     data.append("upload_preset", "wzqbt0tn")
//     data.append("cloud_name","dbvhyaqgg")
//     fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
//     method:"post",
//     body: data
//     })
//     .then(resp => resp.json())
//     .then(data => {
//     // setUrl(data.url)
//     console.log(data)
//     if(data.error){
//       setidbackcopy("/images/backcopy.svg")
//       setLoading(false)
//       setnotify("An error occured, try again")
//     }
//     else{
//       setidbackcopy(data.url)
//       localStorage.setItem("idbackcopy", data.secure_url);
//       setLoading(false)
//       setnotify("")
//       console.log("idbackcopy",idbackcopy)
//     }


//     })
//     .catch(err => console.log(err))
     
//     }
async function submitData() {
  setLoading(true)
  let obj = {
    "organizationType":  organizationtypeRef.current.value,
    "organizationName": organizationnameRef.current.value,
      "IPPISNumber": ippisRef.current.value,
    "jobTitle": jobtitleRef.current.value,
    "officeAddress":officeaddressRef.current.value,
    "state": stateRef.current.value,
    "frontCopy": idfrontcopy,
    "backCopy": idbackcopy,

  }
  console.log("obj", obj)
  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)
  let response
  let responsedata
  try{
    response = await fetch("http://3.209.81.171:8000/api/v1/account/employment",{
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
  if(
    organizationtypeRef.current.value == "" 
  ||organizationnameRef.current.value == "" 
  || ippisRef.current.value == ""
  || jobtitleRef.current.value == ""
  || officeaddressRef.current.value == ""
  || stateRef.current.value == ""
  || idfrontcopy == "/images/frontcopy.svg"

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
         <p  className={classes.optiontitle}>Legal ID Information</p>

    

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Organization Type</Form.Label>
          <select className="form-select" ref={organizationtypeRef} onInput={(e)=>{setorganizationtype(e.target.value)}}  value={organizationtype}>
          <option selected>- Select -</option>
          <option value="Private Organization">Private Organization</option>
          <option value="Public Organization">Public Organization</option>    
        </select>
          </div>
        
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Organization Name</Form.Label>
          <Form.Control ref={organizationnameRef} onInput={(e)=>{setorganizationname(e.target.value)}}  value={organizationname} type="text" placeholder="Enter organization name" />
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>IPPIS Number</Form.Label>
          <Form.Control ref={ippisRef} type="text" placeholder="Enter IPPIS Number" onInput={(e)=>{setippis(e.target.value)}}  value={ippis}/>
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Job Title</Form.Label>
          <Form.Control ref={jobtitleRef} type="text" placeholder="Enter job title" onInput={(e)=>{setjobtitle(e.target.value)}}  value={jobtitle} />
            </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Office Address</Form.Label>
          <Form.Control ref={officeaddressRef} type="text" placeholder="Enter office address" onInput={(e)=>{setofficeaddress(e.target.value)}}  value={officeaddress}/>
          </div>
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>State of Office</Form.Label>
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

    </div>

    <div style={{marginTop:"40px", width:"400px", paddingBottom:"40px"}}>
         <p className={classes.optiontitle}>Upload documents</p>

         <div className="row"  style={{marginTop:"24px"}}>
       
          <div className="col-md-6">
          {/* <Image src={idfrontcopy} width="150px" height="150px" layout="intrinsic" alt="" /> */}
          <div className="image-upload">
  <label htmlFor="file">
    <Image className="img-fluid" alt="" style={{ cursor:"pointer "}} width="489" height="371" id="imageselectorid" src={ idfrontcopy} />
  </label>
  <input type="file" id="file" onChange= {uploadFrontCopy}></input>
</div>
         </div>

         <div className="col-md-6">
         {/* <div className="image-upload">
  <label htmlFor="file">
    <Image className="img-fluid" alt="" style={{ cursor:"pointer "}} width="489" height="371" id="imageselectorid" src={ idbackcopy} />
  </label>
  <input type="file" id="file" onChange= {uploadBackCopy}></input>
</div> */}
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


export {EmploymentTab as default}