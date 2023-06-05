import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Profile.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import Pageloader from '../Pageloader';
// import "../js/main.js"


const GovernmentTab = () => {
  const router = useRouter();
  const idtypeRef = useRef()
  const idnumberRef = useRef()
  const iddateRef = useRef()

  const [idtype, setidtype ] = useState()
  const [idnumber, setidnumber ] = useState()
  const [iddate, setiddate ] = useState()
  const [idfrontcopy, setidfrontcopy ] = useState()
  const [idbackcopy, setidbackcopy ] = useState()

  const [loading, setLoading ] = useState(false)
  const [notify, setnotify ] = useState()

  useEffect(() => {
    if(localStorage.getItem("idtype") == "null" || localStorage.getItem("idtype") == "" ){
      setidtype("")
    }

    else{
      setidtype(localStorage.getItem("idtype") )
    }

    if(localStorage.getItem("idnumber") == "null" || localStorage.getItem("idnumber") == "" ){
      setidnumber("")
    }

    else{
      setidnumber(localStorage.getItem("idnumber") )
    }

    if(localStorage.getItem("idissuedate") == "null" || localStorage.getItem("idissuedate") == "" ){
      setiddate("")
    }

    else{
      setiddate(localStorage.getItem("idissuedate") )
    
    }

    if(localStorage.getItem("idfrontcopy") == "null" | localStorage.getItem("idfrontcopy") == "" ){
      setidfrontcopy("/images/frontcopy.svg")
    }

    else{
      setidfrontcopy(localStorage.getItem("idfrontcopy") )
    }

    if(localStorage.getItem("idbackcopy") == "null" || localStorage.getItem("idbackcopy") == "" ){
      setidbackcopy("/images/backcopy.svg")

    }

    else{
      setidbackcopy(localStorage.getItem("idbackcopy") )
    }
    $(".overlay").fadeOut(0);
  },[])


  // UPLOAD IMAGES

    const uploadFrontCopy = (e) => {
      $(".overlay").fadeOut(1);
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
    $(".overlay").fadeOut(0);

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
//     fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload`,{
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
    "type": idtypeRef.current.value,
    "idNumber": idnumberRef.current.value,
    "issueDate": iddateRef.current.value,
    "frontCopy": idfrontcopy,
    "backCopy": idbackcopy,

  }
  console.log("obj", obj)
  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)
  let response
  let responsedata
  try{
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/account/government-id`,{
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
  if(idtypeRef.current.value == "" 
  || idnumberRef.current.value == ""
  || iddateRef.current.value == ""
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
                <Pageloader/>
         <div style={{marginTop:"40px", width:"400px"}}>
         <p  className={classes.optiontitle}>Legal ID Information</p>

    

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-12">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Your ID Type</Form.Label>
          <select className="form-select" ref={idtypeRef} onInput={(e)=>{setidtype(e.target.value)}}  value={idtype}>
          <option selected>- Select -</option>
          <option value="National Identity Card">National Identity Card</option>
         
       
        </select>
          </div>
        
         </div>

         <div className="row"  style={{marginTop:"24px"}}>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>ID Number</Form.Label>
          <Form.Control ref={idnumberRef} onInput={(e)=>{setidnumber(e.target.value)}} value={idnumber}  type="text" placeholder="Enter ID Number" />
          </div>
          <div className="col-md-6">
          <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Issue Date</Form.Label>
          <Form.Control ref={iddateRef} onInput={(e)=>{setiddate(e.target.value)}} value={iddate}  type="date" placeholder="" />
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


export {GovernmentTab as default}