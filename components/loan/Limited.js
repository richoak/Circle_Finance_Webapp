import React, { useEffect, useState, useRef } from 'react';
import { Form } from 'react-bootstrap'
import Link from 'next/link';

import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Loan.module.css'
import jwt from 'jsonwebtoken';

// import "../js/main.js"
import $ from 'jquery'
import Pageloader from '../Pageloader';



const Limited = () => {
  



 
    const [loading, setLoading ] = useState(false)
  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [firstname, setFirstname] = useState(localStorage.getItem("firstname") + localStorage.getItem("lastname"))
  const [lastname, setLastname] = useState("")
  const [bvn, setBvn] = useState(localStorage.getItem("bvn"))
  const [loanofferid, setLoanofferid] = useState("")

  const [certificate, setcertificate ] = useState("/images/caccertificate.svg");
  const [collateral, setcollateral ] = useState("/images/collateral.svg");
  const [ownership, setownership ] = useState("/images/ownership.svg");
  const [photograph, setphotograph ] = useState("/images/photograph.svg");
  const [identification, setidentification ] = useState("/images/identification.svg");

  const [ certificateurl, setcertificateurl ] = useState("");
  const [ collateralurl, setcollateralurl ] = useState("");
  const [ ownershipurl, setownershipurl ] = useState("");
  const [ photographurl, setphotographurl ] = useState("");
  const [ identificationurl, setidentificationurl ] = useState("");

  const [ caccertificate, setcaccertificate ] = useState(false);
  const [ proofofcollateral, setproofofcollateral ] = useState(false)
  const [ recentphotograph, setrecentphotograph ] = useState(false);
  const [ meansofid, setmeansofid ] = useState(false)
  const [ ownershipcollateral, setownershipcollateral ] = useState(false)

  const [ caccertificateurl, setcaccertificateurl ] = useState();
  const [ proofofcollateralurl, setproofofcollateralurl ] = useState()
  const [ recentphotographurl, setrecentphotographurl ] = useState();
  const [ meansofidurl, setmeansofidurl ] = useState()
  const [ ownershipcollateralurl, setownershipcollateralurl ] = useState()

  const [isbusinessactive, setisbusinessactive ] = useState(true)
  const [isloanactive, setisloanactive ] = useState(false)
  const [isdocumentationactive, setisdocumentationactive ] = useState(false)


  const businessnameRef = useRef();
const rcnumberRef = useRef();
const registrationRef = useRef();
const cityRef = useRef();
const annualRef = useRef();
const amountRef = useRef();
const purposeRef = useRef();
const durationRef = useRef()

const director2name = useRef()
const director2bvn = useRef()
const noofdirectorsRef = useRef()
const dateRef = useRef()


    // UPLOAD CERTIFICATE
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
     
      const data = new FormData()
      data.append("file", certificate)
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
      setcertificateurl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("certificate").src = "/images/caccertificate.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
        if(getextension === "pdf"){
          document.getElementById("certificate").src = "/images/tick-circle.svg"
        
        }
        else {
          document.getElementById("certificate").src = data.url
        
        }
        $(".overlay").fadeOut(0);
          setcaccertificate(true)
          setcaccertificateurl(data.url)
      }
  
  
      })
      .catch(err => console.log(err))
       
    },[certificate])
      // UPLOAD CERTIFICATE
  
  
    // UPLOAD COLLATERAL
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
      const data = new FormData()
      data.append("file", collateral)
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
      setcollateralurl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("collateral").src = "/images/collateral.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
        if(getextension === "pdf"){
          document.getElementById("collateral").src = "/images/tick-circle.svg"
        }
        else {
          document.getElementById("collateral").src = data.url
        }
        $(".overlay").fadeOut(0);
        setproofofcollateral(true)
        setproofofcollateralurl(data.url)
      }
      })
      .catch(err => console.log(err))
    },[collateral])
    // UPLOAD COLLATERAL
  
        // UPLOAD OWNERSHIP
        useEffect(() =>{
          // $('.loading').css("visibility", "visible");
          const data = new FormData()
          data.append("file", ownership)
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
          setownershipurl(data.url)
          console.log(data)
          if(data.error){
            document.getElementById("ownership").src = "/images/ownership.svg"
            $(".overlay").fadeOut(0);
            // $('.loading').css("visibility", "hidden");
          }
          else{
            var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
            if(getextension === "pdf"){
              document.getElementById("ownership").src = "/images/tick-circle.svg"
            }
            else {
              document.getElementById("ownership").src = data.url
            }
            $(".overlay").fadeOut(0);
            setownershipcollateral(true)
            setownershipcollateralurl(data.url)
            $(".overlay").fadeOut(0);
          }
          })
          .catch(err => console.log(err))
        },[ownership])
        // UPLOAD OWNERSHIP

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
                  document.getElementById("photograph").src = "/images/photograph.svg"
                  $(".overlay").fadeOut(0);
                  // $('.loading').css("visibility", "hidden");
                }
                else{
                  var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
                  if(getextension === "pdf"){
                    document.getElementById("photograph").src = "/images/tick-circle.svg"
                  }
                  else {
                    document.getElementById("photograph").src = data.url
                  }
                  $(".overlay").fadeOut(0);
                  setrecentphotograph(true)
                  setrecentphotographurl(data.url)
                }
                })
                .catch(err => console.log(err))
              },[photograph])
              // UPLOAD PHOTOGRAPH

              // UPLOAD IDENTIFICATION
              useEffect(() =>{
                // $('.loading').css("visibility", "visible");
                const data = new FormData()
                data.append("file", identification)
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
                setidentificationurl(data.url)
                console.log(data)
                if(data.error){
                  document.getElementById("identification").src = "/images/identification.svg"
                  $(".overlay").fadeOut(0);
                  // $('.loading').css("visibility", "hidden");
                }
                else{
                  var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
                  if(getextension === "pdf"){
                    document.getElementById("identification").src = "/images/tick-circle.svg"
                  }
                  else {
                    document.getElementById("identification").src = data.url
               
                  }
                  $(".overlay").fadeOut(0);
                  setmeansofid(true)
                  setmeansofidurl(data.url)
                }
                })
                .catch(err => console.log(err))
              },[identification])
              // UPLOAD IDENTIFICATION


  const nextstep1 = () =>{
    if(document.getElementById("businessname").value === ""){
      setnotify("Input your business name")
  }

  else if(document.getElementById("rcnumber").value === ""){
    setnotify("Input your RC Number")
}

else if(document.getElementById("registrationdate").value === ""){
  setnotify("Input your registration date")
}

else if(document.getElementById("city").value === ""){
  setnotify("Input your city")
}

else if(document.getElementById("director2name").value === ""){
  setnotify("Input director name")
}

else if(document.getElementById("director2bvn").value === ""){
  setnotify("Input director bvn")
}
  else{
    $(".loanapplystepone").slideDown();
    $(".loanapplystepone").css({ 'display': 'none' });
    $(".loanapplysteptwo").toggle( "slide" );
    setnotify("")
    setisbusinessactive(false)
    setisloanactive(true)
    setisdocumentationactive(false)
  }

}

const nextstep2 = () =>{

    if(document.getElementById("annualturnover").value === ""){
        setnotify2("Input your annual turnover")
    }
  
    else if(document.getElementById("loanamount").value === ""){
      setnotify2("Input your loan amount")
  }
  
  else if(document.getElementById("loanpurpose").value === ""){
    setnotify2("Input loan purpose")
  }
  
  else if(document.getElementById("loanduration").value === ""){
    setnotify2("Input loan duration")
  }
    else{
        setnotify("")
      $(".loanapplysteptwo").slideDown();
      $(".loanapplysteptwo").css({ 'display': 'none' });
      $(".loanapplystepthree").toggle( "slide" );
      setisbusinessactive(false)
      setisloanactive(false)
      setisdocumentationactive(true)
    }
}

async function postLoan() {
  // setLoading(true)
  let response
  let responsedata

  let obj = {
    "BusinessName": businessnameRef.current.value,
    "RCNumber": rcnumberRef.current.value,
    "NumberOfDirectors": noofdirectorsRef.current.value,
    "Director1Name": firstname,
    "Director1BVN": bvn,
    "Director2Name": director2name.current.value,
    "Director2BVN": director2bvn.current.value,
    "DateOfRegistration": dateRef.current.value,
    "CityOfCorporation": cityRef.current.value,
    "AnnualTurnOver": annualRef.current.value,
    "Amount": amountRef.current.value,
    "Purpose": purposeRef.current.value,
    "Duration": durationRef.current.value,
    "CACCertificate": caccertificateurl,
    "ProofOfCollateral": proofofcollateralurl,
    "Photograph": recentphotographurl,
    "MeansOfId": meansofidurl,
    "OwnershipCollateral": ownershipcollateralurl
  }

console.log(obj)
  const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
  const data = jwt.sign(obj, privateKey)
  console.log(obj)

  try{
    response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/businessV2/create`,{
      method: "POST",     
      body: JSON.stringify({data}),
      headers: {
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    responsedata = await response.json()
    console.log(responsedata)
    setnotify(responsedata.message)

    if (response.status == "400"){
      setnotify(responsedata.message)
      setLoading(false)
      return
    }
    else{
      $(".loanapplystepthree").slideDown();
      $(".loanapplystepthree").css({ 'display': 'none' });
      $(".loanapplystepfive").toggle("slide");
    }



    // setLoading(false)
  } catch (error){
      console.log(error)
    return
  }

}

const nextstep3 = () =>{
  console.log(document.getElementById("noofdirectors").value)

  if (certificateurl === undefined){
    setnotify2("Upload your CAC certificate")
  }


  else if (collateralurl === undefined){
    setnotify2("Upload a proof of collateral")
  }

  else if (ownershipurl === undefined){
    setnotify2("Upload a documentation of ownership for the collateral")
  }

  else if (photographurl === undefined){
    setnotify2("Upload a photograph")
  }

  else if (identificationurl === undefined){
    setnotify2("Upload a proof of ID")
  }
    else{
      setnotify2("Processing...")
      setLoading(true)
      postLoan()
      

  
    }
  
}

const gobacktostep1 = () =>{
  $(".loanapplysteptwo").slideDown();
  $(".loanapplysteptwo").css({ 'display': 'none' });
  $(".loanapplystepone").toggle( "slide" );
  setisbusinessactive(true)
  setisloanactive(false)
  setisdocumentationactive(false)
}

const gobacktostep2 = () =>{
  $(".loanapplystepthree").slideDown();
  $(".loanapplystepthree").css({ 'display': 'none' });
  $(".loanapplysteptwo").toggle( "slide" );
  setisbusinessactive(false)
  setisloanactive(true)
  setisdocumentationactive(false)
}

const gobacktostep3 = () =>{
  $(".loanapplystepfour").slideDown();
  $(".loanapplystepfour").css({ 'display': 'none' });
  $(".loanapplystepthree").toggle( "slide" );
}

const submitbutton = () =>{
  $(".loanapplystepfour").slideDown();
  $(".loanapplystepfour").css({ 'display': 'none' });
  $(".loanapplystepfive").toggle( "slide" );
}

const gohome = () =>{

window.location.replace("/home");
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
<div className="col-md-9">
<div className="accountbox">
    <div className="col-md-5 col-11 tabs webapptabs  loanapplystepone">
    <div className={classes.goback} style={{marginBottom:"40px"}}>
            <Link className="" href="/loan/businessloan"  eventKey="2" >
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
            </Link>
            </div>

            <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isbusinessactive ? "#E45E5E" : "#A8B0BF"
              }}> Business Details </span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Business Name</Form.Label>
      <Form.Control   id="businessname" width="60px" type="text" placeholder="Business Name" ref={businessnameRef}/>
  </Form.Group>
   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>RC Number</Form.Label>
      <Form.Control   id="rcnumber" width="60px" type="number" placeholder="Input RC Number" ref={rcnumberRef} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Number of Directors/Shareholders</Form.Label>
      <Form.Control   id="noofdirectors" width="60px" type="number" placeholder="Enter Organization" ref={noofdirectorsRef} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Director 1 First and Last Name</Form.Label>
    <Form.Control   id="director1name" width="60px" type="text" value={firstname} placeholder="Enter first name and last name here" disabled/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Director 1 BVN</Form.Label>
    <Form.Control   id="director1bvn" width="60px" type="text" value={bvn} placeholder="Enter BVN" disabled/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Director 2 First and Last Name</Form.Label>
    <Form.Control   id="director2name" width="60px" type="text" ref={director2name} placeholder="Enter  firstname and lastname" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Director 2 BVN</Form.Label>
    <Form.Control   id="director2bvn" width="60px" type="text" ref={director2bvn} placeholder="Enter BVN" />
</Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Date of Registration</Form.Label>
      <Form.Control   id="registrationdate" width="60px" type="date" ref={dateRef} placeholder="" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>City of Incorporation</Form.Label>
      <Form.Control   id="city" width="60px" type="text" placeholder="City of Incorporation" ref={cityRef}/>
  </Form.Group>
  <p className="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify}</p>
<p className="" style={{textAlign:"center"}} >
<button  className={classes.continuebutton}  onClick={nextstep1}>Continue 
{loading && (
                  <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                    )}

</button>
</p>



 
<br/>
<br/>
</div>


<div className="col-md-5 col-11 tabs loanapplysteptwo">
    
    <div className={classes.goback} onClick={gobacktostep1}   style={{marginBottom:"40px"}}>
        
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />

            </div>

            <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isbusinessactive ? "#E45E5E" : "#A8B0BF"
              }}> Business Details </span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"5px"}}>Annual Turnover (&#8358;) </Form.Label>
      <Form.Control   id="annualturnover" width="60px" type="number" placeholder="Annual turnover" ref={annualRef}/>
  </Form.Group>


  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"5px"}}>Loan Amount (&#8358;) </Form.Label>
      <Form.Control   id="loanamount" width="60px" type="number" placeholder="Input Amount" ref={amountRef}/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"5px"}}>Loan Purpose  </Form.Label>
      <Form.Control   id="loanpurpose" width="60px" type="text" placeholder="Loan Purpose" ref={purposeRef}/>
  </Form.Group>

  <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Duration (Months)</label>
  <select className="form-control" id="loanduration" ref={durationRef}>
  <option value="">- Select Duration -</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>

  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"5px"}}>Loan Purpose (&#8358;) </Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input Amount" />
  </Form.Group> */}
    <p className="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify2}</p>
  <p className="" style={{textAlign:"center"}} >
<button  className={classes.continuebutton} onClick={nextstep2}>Continue to file uploads
{loading && (
                  <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                    )}

</button>
</p>
</div>

<div className="col-md-12 col-10 loanapplystepthree">
<div className={classes.goback} onClick={gobacktostep2}   style={{marginBottom:"40px"}}>
        
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />

            </div>

            <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isbusinessactive ? "#E45E5E" : "#A8B0BF"
              }}> Business Details </span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>

{/* <p  className="loansareavailablenote2 summarynote">Business/Management Profile</p>
<div class="form-group">
    <textarea class="l" id="" rows="7" cols="70"></textarea>
  </div> */}
{/* <div className="row director1row"> */}
<div className="row">

    <div className="col-md-3 col-6">
    <div className="image-upload empimgupload">

    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- CAC Certificate</p>
  <label htmlFor="file">
    <Image class="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="certificate"  width="183" height="100" src={certificate} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setcertificate(e.target.files[0])}></input>
</div>
<p style={{ textAlign:"center"}}>
{caccertificate ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={caccertificateurl}>Preview Certificate</a> : <p></p>}
</p>
    </div>

    <div className="col-md-3 col-6" style={{marginLeft:"0px"}}>
  
    <div className="image-upload empimgupload">
    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Proof of collateral</p>
  <label htmlFor="file2">
    <Image className="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="collateral"  width="183" height="100" src={collateral} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setcollateral(e.target.files[0])}></input>

</div>
<p style={{ textAlign:"center"}}>
{proofofcollateral ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={proofofcollateralurl}>Preview Proof of collateral</a> : <p></p>}
</p>
</div>

</div>

<div className="row" style={{marginTop:"20px"}}>

<div className="col-md-3 col-6" style={{marginLeft:"0px"}}>
    <div className="image-upload empimgupload">
    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Recent Photograph</p>
  <label htmlFor="file4">
    <Image class="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="photograph"  width="183" height="100" src={photograph} />
  </label>
  <input type="file" id="file4" onChange= {(e)=> setphotograph(e.target.files[0])}></input>

</div>
<p style={{ textAlign:"center"}}>
{recentphotograph ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={recentphotographurl}>Preview Recent Photograph</a> : <p></p>}
</p>
</div>

<div className="col-md-3 col-6" style={{marginLeft:"0px"}}>
    <div className="image-upload empimgupload">
    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Means of identification</p>
  <label htmlFor="file5">
    <Image className="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="identification"  width="183" height="100" src={identification} />
  </label>
  <input type="file" id="file5" onChange= {(e)=> setidentification(e.target.files[0])}></input>

</div>
<p style={{ textAlign:"center"}}>
{meansofid ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={meansofidurl}>Preview Means of ID</a> : <p></p>}
</p>
</div>
</div>





<div className="row" style={{marginTop:"20px"}}>
<div className="col-md-3" style={{marginLeft:"0px"}}>
    <div className="image-upload empimgupload">
    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Ownership of collateral</p>
  <label htmlFor="file3">
    <Image className="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="ownership"  width="183" height="100" src={ownership} />
  </label>
  <input type="file" id="file3" onChange= {(e)=> setownership(e.target.files[0])}></input>

</div>
</div>

{ownershipcollateral ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={ownershipcollateralurl}>Preview Ownership of Collateral</a> : <p></p>}

</div>
{/* </div> */}

{/* <div className="row director2row" >
    <div className="col-md-6">
    <p class="directorhead" >Director 3 </p>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>First and Last Name</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Enter first name and last name here" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Bank Verification Number</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Enter first name and last name here" />
  </Form.Group>
    </div>

    <div className="col-md-6">
    <p class="directorhead" >Director 4 </p>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>First and Last Name</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Enter first name and last name here" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"10px",paddingBottom:"0px"}}>Bank Verification Number</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Enter first name and last name here" />
  </Form.Group>
        </div>
</div> */}
  <p className="" style={{ color:"#DD3737", fontWeight:"bold"}}>{notify2}</p>
  <p style={{fontSize:"14px", paddingTop:"20px"}}> On clicking the button below you agree to the <a target="_blank" href="/images/loanagreement.pdf">Terms and Conditions</a></p>

  <p className="" style={{textAlign:""}} >
<button className={classes.submitbutton} onClick={nextstep3}>Finalize loan application
{loading && (
                  <div className= {`spinner-border spinner-border-sm spinner`} role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                    )}
</button>
</p>


<br/>
<br/>
<br/>


</div>



<div className="col-md-5 col-10 loanapplystepfive" style={{paddingTop:"35px"}}>
<div className="successfulbox">
<h1 className="letsgetstartedstepheading fordesktoponly">
                  {/* Step 2/3 */}
                </h1>
                <p style={{textAlign:"center"}}><img src="/images/badge-check.svg" alt="" /></p>
                <h1 style={{ textAlign: "center" }} className="letsgetstarted">
                  Successful
                </h1>
                <p style={{ textAlign: "center" }} className="homepagesubtitle fordesktoponly hideipad">
                Your loan application process has been received. You will receive a confirmation mail from our team shortly.
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle foripadonly">
                Your loan application process has been received. You will receive a confirmation mail from our team shortly.
                                </p>

                <p style={{ textAlign: "center" }} className="homepagesubtitle formobileonly">
                Your loan application process has been received. You will receive a confirmation mail from our team shortly.
                                </p>

                <p className="" style={{ textAlign: "center" }}>
                  <button onClick={gohome} style={{width:"80%", marginTop:"30px"}}  className="accessbutton">Go back home
     
                  </button>
                </p>
</div>


</div>

</div>
</div>
</div>








                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Limited as default}