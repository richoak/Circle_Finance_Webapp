import React, { useEffect, useState, useRef } from 'react';
import { Form } from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';

import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
const Limited = () => {
  



 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [bvn, setBvn] = useState("")
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
        document.getElementById("certificate").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
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
        document.getElementById("collateral").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
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
            document.getElementById("ownership").src = data.url
            $(".overlay").fadeOut(0);
            // localStorage.setItem("songart", data.secure_url);
            // $('.loading').css("visibility", "hidden");
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
                  document.getElementById("photograph").src = data.url
                  $(".overlay").fadeOut(0);
                  // localStorage.setItem("songart", data.secure_url);
                  // $('.loading').css("visibility", "hidden");
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
                  document.getElementById("identification").src = data.url
                  $(".overlay").fadeOut(0);
                  // localStorage.setItem("songart", data.secure_url);
                  // $('.loading').css("visibility", "hidden");
                }
                })
                .catch(err => console.log(err))
              },[identification])
              // UPLOAD IDENTIFICATION

  // GET LOAN OFFER ID
  useEffect(() =>{
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/loans/offers/business_loan/",
      "method": "GET",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      error: function (xhr, status, error) {
        console.log(xhr)
     
      },
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      // setLoanofferid(responsethree.id)
      setLoanofferid(responsethree.id)
      $(".overlay").fadeOut(0);
    })
  },[])
  // GET LOAN OFFER ID

    // GET USER BVN
  useEffect(() => {
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("userid") + "/",
      "method": "GET",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")}
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      var name = responsethree.first_name + " " + responsethree.last_name
 setFirstname(name)
 setBvn(responsethree.bvn)
 
    })
    
  }, [])
    // GET USER BVN

    
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
      $(".loanapplysteptwo").slideDown();
      $(".loanapplysteptwo").css({ 'display': 'none' });
      $(".loanapplystepthree").toggle( "slide" );
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
      

      console.log(dateRef.current.value)
      const obj ={
     
        // "country_of_visit" : document.getElementById("country").value,
        // "travel_reason" : document.getElementById("reason").value,
        // "foreign_currency" : document.getElementById("currency").value,
        // "amount_requested_local" : document.getElementById("amountlocal").value,
        // "principal" : document.getElementById("amountlocal").value,
        // "amount_requested_foreign" : document.getElementById("amountforeign").value,
     
        "user":  localStorage.getItem("userid"),
        "loan_offer" : loanofferid,
        "principal" : amountRef.current.value,
        "duration" : durationRef.current.value,
        "annual_turnover" : annualRef.current.value,
        "loan_purpose" :  purposeRef.current.value,
        "registration_type" : "ltd",
        "name_of_business" : businessnameRef.current.value,
        "reg_number" : rcnumberRef.current.value,
        "registration_date" : dateRef.current.value,
        "number_of_directors" : parseInt(document.getElementById("noofdirectors").value),
        "city_of_incorporation" : cityRef.current.value,
       
        "additional_documents":  [
          {
           'name': 'certificate',
            'document_url': certificateurl
        },
        {
          'name': 'collateral',
           'document_url': collateralurl
       },
       {
        'name': 'ownership',
         'document_url': ownershipurl
     },
     {
      'name': 'photograph',
       'document_url': photographurl
   },
   {
    'name': 'identification',
     'document_url': identificationurl
 }
      ],

      "directors":  [
        {
         'full_name': document.getElementById("director1name").value,
          'bvn': document.getElementById("director1bvn").value
      },
      {
        'full_name': document.getElementById("director2name").value,
         'bvn': document.getElementById("director2bvn").value
     },
    ]
      }
      
      console.log(JSON.stringify(obj))
          var settingsthree = {
            "url": "https://credisol-app.herokuapp.com/v1/business_loans/",
            "method": "POST",
            "timeout": 0,
            "headers": {
               "Authorization": "Bearer " + localStorage.getItem("access_token"),
             
              },
              "processData": false,
             "contentType": "application/json; charset=UTF-8",
            "data": JSON.stringify(obj),
            error: function (xhr, status, error) {
              console.log(xhr)
           
            },
          }
          
          $.ajax(settingsthree).done(function (responsethree) {
            console.log(responsethree)
            $(".loanapplystepthree").slideDown();
            $(".loanapplystepthree").css({ 'display': 'none' });
            $(".loanapplystepfive").toggle( "slide" );
          })

    }
  
}

const gobacktostep1 = () =>{
  $(".loanapplysteptwo").slideDown();
  $(".loanapplysteptwo").css({ 'display': 'none' });
  $(".loanapplystepone").toggle( "slide" );
}

const gobacktostep2 = () =>{
  $(".loanapplystepthree").slideDown();
  $(".loanapplystepthree").css({ 'display': 'none' });
  $(".loanapplysteptwo").toggle( "slide" );
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
 
    <div className="col-md-4 col-11 tabs webapptabs  loanapplystepone">
    <Link className="goback" href="/loanproducts/businessloan"  eventKey="2" activeClassName="is-active" >
    <p className="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
              </Link>


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
<button  className="loanbutton" onClick={nextstep1}>Continue 
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>



 
<br/>
<br/>
</div>


<div className="col-md-4 col-11 tabs loanapplysteptwo">
    
              <p onClick={gobacktostep1} className="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <Image className="" src="/images/arrow-left.svg" height="24" width="24"/> <span className="gobackp">Back</span></p>
       

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
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Duration</label>
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
<button  className="loanbutton" onClick={nextstep2}>Continue to file uploads
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>
</div>

<div className="col-md-12 col-10 loanapplystepthree">
<p onClick={gobacktostep2} className="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <Image className="" src="/images/arrow-left.svg" height="24" width="24"/> <span className="gobackp">Back</span></p>
       
{/* <p  className="loansareavailablenote2 summarynote">Business/Management Profile</p>
<div class="form-group">
    <textarea class="l" id="" rows="7" cols="70"></textarea>
  </div> */}
{/* <div className="row director1row"> */}
<div className="row">

    <div className="col-md-2 col-6">
    <div className="image-upload empimgupload">
    <p style={{fontSize:"12px"}}>- CAC Certificate</p>
  <label htmlFor="file">
    <Image class="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="certificate"  width="183" height="100" src={certificate} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setcertificate(e.target.files[0])}></input>
</div>
    </div>

    <div className="col-md-2 col-6" style={{marginLeft:"0px"}}>
  
    <div className="image-upload empimgupload">
    <p style={{fontSize:"12px"}}>- Collateral</p>
  <label htmlFor="file2">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="collateral"  width="183" height="100" src={collateral} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setcollateral(e.target.files[0])}></input>

</div>
</div>



</div>

<div className="row">

<div className="col-md-2 col-6" style={{marginLeft:"0px"}}>
    <div className="image-upload empimgupload">
    <p style={{fontSize:"12px"}}>- Photograph</p>
  <label htmlFor="file4">
    <Image class="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="photograph"  width="183" height="100" src={photograph} />
  </label>
  <input type="file" id="file4" onChange= {(e)=> setphotograph(e.target.files[0])}></input>

</div>
</div>

<div className="col-md-2 col-6" style={{marginLeft:"0px"}}>
    <div className="image-upload empimgupload">
    <p style={{fontSize:"12px"}}>- Means of identification</p>
  <label htmlFor="file5">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="identification"  width="183" height="100" src={identification} />
  </label>
  <input type="file" id="file5" onChange= {(e)=> setidentification(e.target.files[0])}></input>

</div>
</div>




</div>

<div className="row">
<div className="col-md-3" style={{marginLeft:"0px"}}>
    <div className="image-upload empimgupload">
    <p style={{fontSize:"12px"}}>- Collateral Ownership</p>
  <label htmlFor="file3">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="ownership"  width="183" height="100" src={ownership} />
  </label>
  <input type="file" id="file3" onChange= {(e)=> setownership(e.target.files[0])}></input>

</div>
</div>
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
  <p className="" style={{textAlign:""}} >
<button  className="loanbutton" onClick={nextstep3}>Finalize loan application
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>


<br/>
<br/>
<br/>


</div>



<div className="col-md-5 col-10 loanapplystepfive">
{/* <p onClick={gobacktostep2} class="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <Image className="" src="images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
        */}
<p  className="bookingnote">Booking received</p>
<hr/>
<div className="row successbox">
    <div className="col-md-2 col-2">
    <Image className="mobilesuccess" src="/images/tick-circle.svg" height="56" width="56"/>
    </div>

    <div className="col-md-6 col-10"style={{paddingLeft:"0px"}}>
    <p  className="bookingsubnote">
    Your loan application process has been recieved. You will receive a confirmation mail shortly.
      </p>

        </div>
</div>

<p className="" style={{marginTop:"10px"}} >
<button  className="editloanbutton" onClick={ gohome}>Go back to dashboard
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


export {Limited as default}