import React, { useEffect, useState, useRef} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import classes from './Loan.module.css'
import Image from 'next/image';
import jwt from 'jsonwebtoken';

// import "../js/main.js"
import $ from 'jquery'

const Consumerloan = () => {
      // TABS
  // class Tabs extends React.Component{
  //   state ={
  //     activeTab: this.props.children[0].props.label
   
  //   }
  //   changeTab = (tab) => {
  
  //     this.setState({ activeTab: tab });
     
  //   };
  //   render(){
      
  //     let content;
  //     let buttons = [];
  //     return (
  //       <div>
  //         {React.Children.map(this.props.children, child =>{
  //           buttons.push(child.props.label)
  //           if (child.props.label === this.state.activeTab) content = child.props.children
  //         })}
           
  //         <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
  //         <div className="tab-content">{content}</div>
          
  //       </div>
  //     );
  //   }
  // }
  
  // const TabButtons = ({buttons, changeTab, activeTab}) =>{
  //   return(
  //       <div className="tab-buttons">
  //       {buttons.map(button =>{
  //          return <button key={button} className={ button === activeTab? 'tabactive': "consumerloanbutton"} onClick={()=>changeTab(button)}>{button}</button>
  //       })}
  //       </div>
      
  //   )
  // }
  
  // const Tab = props =>{
  //   return(
  //     <React.Fragment>
  //       {props.children}
  //     </React.Fragment>
  //   )
  // }
   
// TABS

  useEffect(() =>{
    document.title = "Personal Loan Application | Credisol"
},[])
 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [summaryloanamount, setsummaryloanamount] = useState("0")
  const [summaryloanduration, setsummaryloanduration] = useState("0")


  const [isorganizationactive, setisorganizationactive ] = useState(true)
  const [isloanactive, setisloanactive ] = useState(false)
  const [issummaryactive, setissummaryactive ] = useState(false)
  const [isdocumentationactive, setisdocumentationactive ] = useState(false)

  const [ uploadedemploymentletter, setuploadedemploymentletter ] = useState(false);
  const [ uploadedpayslip1, setuploadedpayslip1 ] = useState(false);
  const [ uploadedpayslip2, setuploadedpayslip2 ] = useState(false);
  const [ uploadedpayslip3, setuploadedpayslip3 ] = useState(false);

  const [ employmentletterurl, setemploymentletterurl ] = useState();
  const [ payslip1url, setpayslip1url ] = useState();
  const [ payslip2url, setpayslip2url ] = useState();
  const [ payslip3url, setpayslip3url ] = useState();



  const [employmentletter, setemploymentletter ] = useState("/images/employmentletter.svg");
  const [payslip1, setpayslip1 ] = useState("/images/payslip1.svg");
  const [payslip2, setpayslip2 ] = useState("/images/payslip2.svg");
  const [payslip3, setpayslip3 ] = useState("/images/payslip2.svg");


  const organizationRef = useRef()
  const ippisnumberRef = useRef()
  const loanpurposeRef = useRef()
  const netearningsRef = useRef()
  const loandurationRef = useRef()
  const loanamountRef = useRef()




  
    // UPLOAD EMPLOYMENT
    useEffect(() =>{
      const data = new FormData()
      data.append("file", employmentletter)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setemploymentletterurl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("employmentletter").src = "/images/employmentletter.svg"
        $(".overlay").fadeOut(0);
      }
      else{
        var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
        if(getextension === "pdf"){
          document.getElementById("employmentletter").src = "/images/tick-circle.svg" 
        }
        else {
          document.getElementById("employmentletter").src = data.url
        }
        $(".overlay").fadeOut(0);
          setuploadedemploymentletter(true)
          setemploymentletterurl(data.url)
      }
      })
      .catch(err => console.log(err))   
    },[employmentletter])
      // UPLOAD EMPLOYMENT
  
  
    // UPLOAD PAYSLIP 1
    useEffect(() =>{
      const data = new FormData()
      data.append("file", payslip1)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
        // console.log(data)
      setpayslip1url(data.url)

      if(data.error){
        document.getElementById("payslip1").src = "/images/payslip1.svg"
        $(".overlay").fadeOut(0);
      }
      else{
        var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
        if(getextension === "pdf"){
          document.getElementById("payslip1").src = "/images/tick-circle.svg" 
        }
        else {
          document.getElementById("payslip1").src = data.url
        }
        $(".overlay").fadeOut(0);
          setuploadedpayslip1(true)
          setpayslip1url(data.url)
      }
      })
      .catch(err => console.log(err))   
    },[payslip1])
    // UPLOAD PAYSLIP 1
  
    // UPLOAD PAYSLIP 2
    useEffect(() =>{
      const data = new FormData()
      data.append("file", payslip2)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
        console.log("payslip2", data)
      setpayslip2url(data.url)
    
      if(data.error){
        document.getElementById("payslip2").src = "/images/payslip2.svg"
        $(".overlay").fadeOut(0);
      }
      else{
        var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
        if(getextension === "pdf"){
          document.getElementById("payslip2").src = "/images/tick-circle.svg" 
        }
        else {
          console.log("url", data.url)
          document.getElementById("payslip2").src = data.url
        }
        $(".overlay").fadeOut(0);
          setuploadedpayslip2(true)
          setpayslip2url(data.url)
      }
      })
      .catch(err => console.log(err))   
    },[payslip2])
    // UPLOAD PAYSLIP 2

    // UPLOAD PAYSLIP 3
    useEffect(() =>{
      const data = new FormData()
      data.append("file", payslip3)
      data.append("upload_preset", "wzqbt0tn")
      data.append("cloud_name","dbvhyaqgg")
      $(".overlay").fadeIn(1);
      fetch("  https://api.cloudinary.com/v1_1/dbvhyaqgg/upload",{
      method:"post",
      body: data
      })
      .then(resp => resp.json())
      .then(data => {
      setpayslip3url(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("payslip3").src = "/images/payslip2.svg"
        $(".overlay").fadeOut(0);
      }
      else{
        var getextension = data.url.split(/[#?]/)[0].split('.').pop().trim();
        if(getextension === "pdf"){
          document.getElementById("payslip3").src = "/images/tick-circle.svg" 
        }
        else {
          document.getElementById("payslip3").src = data.url
        }
        $(".overlay").fadeOut(0);
          setuploadedpayslip3(true)
          setpayslip3url(data.url)
      }
      })
      .catch(err => console.log(err))   
    },[payslip3])
    // UPLOAD PAYSLIP 3




  async function postLoan() {
    // setLoading(true)
    let response
    let responsedata

    let obj = {
      "Organization": organizationRef.current.value,
      "IPPISNumber": ippisnumberRef.current.value,
      "Purpose": loanpurposeRef.current.value,
      "NetEarnings": netearningsRef.current.value,
      "Duration": loandurationRef.current.value,
      "Amount": loanamountRef.current.value,
      "EmploymentLetter": employmentletterurl,
      "Payslip1": payslip1url,
      "Payslip2": payslip2url,
      "Payslip3": payslip3url
    }
  
  
    const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
    const data = jwt.sign(obj, privateKey)
    console.log(obj)
  
    try{
      response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT_URL}/loans/consumer/create`,{
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
      // setLoading(false)

      if (response.status == "400"){
        setnotify(responsedata.message)
        setLoading(false)
        return
      }
      else{
        $(".loanapplystepfour").slideDown();
        $(".loanapplystepfour").css({ 'display': 'none' });
        $(".loanapplystepfive").toggle("slide");
      }
    } catch (error){
        console.log(error)
      return
    }
  
  }


  const nextstep1 = () =>{

    $(".loanapplystepone").slideDown();
    $(".loanapplystepone").css({ 'display': 'none' });
    $(".loanapplysteptwo").toggle( "slide" );
          setnotify("")
    setisorganizationactive(false)
      setisloanactive(true)
      setissummaryactive(false)
      setisdocumentationactive(false)
}

const nextstep2 = () =>{
  $(".loanapplysteptwo").slideDown();
  $(".loanapplysteptwo").css({ 'display': 'none' });
  $(".loanapplystepthree").toggle( "slide" );
            setnotify("")
    setisorganizationactive(false)
      setisloanactive(false)
      setissummaryactive(true)
      setisdocumentationactive(false)
      setsummaryloanamount(loanamountRef.current.value)
      setsummaryloanduration(loandurationRef.current.value)
}

const nextstep3 = () =>{
  $(".loanapplystepthree").slideDown();
  $(".loanapplystepthree").css({ 'display': 'none' });
  $(".loanapplystepfour").toggle( "slide" );
            setnotify("")
    setisorganizationactive(false)
      setisloanactive(false)
      setissummaryactive(false)
      setisdocumentationactive(true)
    postLoan()
}









const gobacktostep1 = () =>{
  $(".loanapplysteptwo").slideDown();
  $(".loanapplysteptwo").css({ 'display': 'none' });
  $(".loanapplystepone").toggle( "slide" );
       setisorganizationactive(true)
      setisloanactive(false)
      setissummaryactive(false)
      setisdocumentationactive(false)
}

const gobacktostep2 = () =>{
  $(".loanapplystepthree").slideDown();
  $(".loanapplystepthree").css({ 'display': 'none' });
  $(".loanapplysteptwo").toggle( "slide" );
       setisorganizationactive(false)
      setisloanactive(true)
      setissummaryactive(false)
      setisdocumentationactive(false)
}

const gobacktostep3 = () =>{
  $(".loanapplystepfour").slideDown();
  $(".loanapplystepfour").css({ 'display': 'none' });
  $(".loanapplystepthree").toggle( "slide" );
      setisorganizationactive(false)
      setisloanactive(false)
      setissummaryactive(true)
      setisdocumentationactive(false)
  
}

const submitbutton = () =>{
  postLoan()
  // $(".loanapplystepfour").slideDown();
  // $(".loanapplystepfour").css({ 'display': 'none' });
  // $(".loanapplystepfive").toggle( "slide" );
}

const gohome = () =>{
window.location.replace("/home");
}
  
    return (
      
      <div>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

           
<div className="row">
              <div className="col-md-9">
              <div className="accountbox">
 
    <div className="col-md-7 tabs webapptabs  loanapplystepone">
               <div className={classes.goback} style={{marginBottom:"40px"}}>
            <Link className="" href="/loan"  eventKey="2" >
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
            </Link>
            </div>


                        <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isorganizationactive ? "#E45E5E" : "#A8B0BF"
              }}> Organization </span>
                 <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: issummaryactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Summary</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>

{/* <Tabs className=""> */}
  {/* <Tab className="accounttablabel" label="Government"> */}
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Input Organization</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" ref={organizationRef} placeholder="Input organization" />
  </Form.Group>
   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Your IPPIS Number</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="number" ref={ippisnumberRef}  placeholder="Input IPPIS number" />
  </Form.Group>

<p className="" style={{textAlign:"center"}} >
<button  className={classes.continuebutton} onClick={nextstep1}>Continue 


</button>
</p>
  {/* </Tab> */}

  {/* <Tab   label="Private">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Input Organization</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" ref={organizationRef}  placeholder="Input Organization" />
  </Form.Group>
   


<p className="" style={{textAlign:"center"}}>
<button   className={classes.continuebutton}  onClick={nextstep1}>Continue 


</button>
</p>
  </Tab> */}
{/* </Tabs> */}
</div>


<div className="col-md-7 loanapplysteptwo">
    
    <div className={classes.goback} onClick={gobacktostep1}   style={{marginBottom:"40px"}}>
        
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />

            </div>

                                    <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isorganizationactive ? "#E45E5E" : "#A8B0BF"
              }}> Organization </span>
                 <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: issummaryactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Summary</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>

  <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Purpose</label>
  <select className="form-control" id="sel1" ref={loanpurposeRef}>
    <option>- Select Purpose -</option>
    <option value="Payday">Payday</option>
    <option value="Car">Car</option>
    <option value="Emergency">Emergency</option>
    <option value="Travel">Travel</option>
    <option value="Housing">Housing</option>
    <option value="Shopping">Shopping</option>

  </select>
</div>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Your Net Earnings (&#8358;) </Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text"  ref={netearningsRef} placeholder="Input Net Earnings" />
  </Form.Group>

  <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Duration (Months)</label>
  <select className="form-control" id="sel1"  ref={loandurationRef}>
  <option>- Select Duration -</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select>
</div>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Amount (&#8358;) </Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="number" placeholder="Input Amount"  ref={loanamountRef}/>
  </Form.Group>

  <p className="" style={{textAlign:"center"}} >
<button   className={classes.continuebutton}  onClick={nextstep2}>Continue 


</button>
</p>
</div>

<div className="col-md-7 loanapplystepthree">
<div className={classes.goback} onClick={gobacktostep2}   style={{marginBottom:"40px"}}>
        
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />

            </div>

                                    <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isorganizationactive ? "#E45E5E" : "#A8B0BF"
              }}> Organization </span>
                 <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: issummaryactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Summary</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>
<p  className="loansareavailablenote2 summarynote">Here is a summary of your loan application</p>
<div className="row summarybox">
    <div className="col-md-6 summarydiv1">
        <p  className="loansareavailablenote2">Loan amount</p>
        <p className="summaryhead"> &#x20A6;{parseInt(summaryloanamount).toLocaleString()}</p>
        <p  className="loansareavailablenote2">Loan duration</p>
        <p className="summaryhead">{summaryloanduration} Month(s)</p>
        <p  className="loansareavailablenote2">Loan interest</p>
        <p className="summaryhead">16.0%</p>
     
    </div>

    <div className="col-md-6"style={{paddingLeft:"30px"}}>
    <p  className="loansareavailablenote2">Loan Type</p>
    <p className="summaryhead">Consumer Loan</p>
   <p  className="loansareavailablenote2">Loan repayment</p>
        <p className="summaryhead">204,000.00</p>
        <p  className="loansareavailablenote2">Processing Fee</p>
        <p className="summaryhead">10,000.00</p>
        </div>
</div>
  <p className="" style={{textAlign:"center"}} >
<button   className={classes.continuebutton} onClick={nextstep3}>Finalize loan application

</button>
</p>





</div>

<div className="loanapplystepfour">
<div className={classes.goback} onClick={gobacktostep3}   style={{marginBottom:"40px"}}>
        
            <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />

            </div>
                                    <p style={{display:"inline-block"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color: isorganizationactive ? "#E45E5E" : "#A8B0BF"
              }}> Organization </span>
                 <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: isloanactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Loan Details</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color: issummaryactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Summary</span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
             color: isdocumentationactive ? "#E45E5E" : "#A8B0BF"
            }}> &gt; Documentation</span>
            </p>

{/* <div className="row">
    <div className="col-md-4">
           <p style={{fontSize:"14px", color:"#687181", textAlign:""}}>- Employment Letter</p>
    <Image className="" width="183" height="100" layout="intrinsic" id="employmentletter" alt="" src="/images/employmentletter.svg"/>
    </div>

    <div className="col-md-4" style={{marginLeft:"0px"}}>
          <p style={{fontSize:"14px", color:"#687181", textAlign:""}}>- Payslip 1</p>
    <Image className="" width="183" height="100" layout="intrinsic" id="payslip1" alt="" src="/images/payslip1.svg"/>
</div>
</div>


<div className="row">
<div className="col-md-4"  style={{marginTop:"50px"}}>
        <p style={{fontSize:"14px", color:"#687181", textAlign:""}}>- Payslip 2</p>
<Image className="" width="183" height="100"  layout="intrinsic" alt=""  id="payslip2"  src="/images/payslip2.svg"/>
</div>

<div className="col-md-4" style={{marginTop:"50px"}}>
        <p style={{fontSize:"14px", color:"#687181", textAlign:""}}>- Payslip 3</p>
<Image className=""width="183" height="100"  layout="intrinsic" alt=""  id="payslip3"  src="/images/payslip2.svg"/>
</div>


</div> */}

<div className="row">

    <div className="col-md-3 col-6">
    <div className="image-upload empimgupload">

    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Employment Letter</p>
  <label htmlFor="file">
    <Image class="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="employmentletter"  width="183" height="100" src={employmentletter} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setemploymentletter(e.target.files[0])}></input>
</div>
<p style={{ textAlign:"center"}}>
{uploadedemploymentletter ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={employmentletterurl}>Preview Employment Letter</a> : <p></p>}
</p>
    </div>

    <div className="col-md-3 col-6" style={{marginLeft:"0px"}}>
  
    <div className="image-upload empimgupload">
    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Payslip 1</p>
  <label htmlFor="file2">
    <Image className="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="payslip1"  width="183" height="100" src={payslip1} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setpayslip1(e.target.files[0])}></input>

</div>
<p style={{ textAlign:"center"}}>
{uploadedpayslip1 ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={payslip1url}>Preview Payslip 1</a> : <p></p>}
</p>
</div>

</div>



<div className="row" style={{marginTop:"20px"}}>

<div className="col-md-3 col-6" style={{marginLeft:"0px"}}>
  
  <div className="image-upload empimgupload">
  <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Payslip 2</p>
<label htmlFor="file3">
  <Image className="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
   id="payslip2"  width="183" height="100" src={payslip2} />
</label>
<input type="file" id="file3" onChange= {(e)=> setpayslip2(e.target.files[0])}></input>

</div>
<p style={{ textAlign:"center"}}>
{uploadedpayslip2 ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={payslip2url}>Preview Payslip 2</a> : <p></p>}
</p>
</div>

    <div className="col-md-3 col-6" style={{marginLeft:"0px"}}>
  
    <div className="image-upload empimgupload">
    <p style={{fontSize:"14px", color:"#687181", textAlign:"center"}}>- Payslip 3</p>
  <label htmlFor="file4">
    <Image className="mobileuploadimages"  alt=""  style={{marginBottom:"40px", cursor:"pointer "}} 
     id="payslip3"  width="183" height="100" src={payslip3} />
  </label>
  <input type="file" id="file4" onChange= {(e)=> setpayslip3(e.target.files[0])}></input>

</div>
<p style={{ textAlign:"center"}}>
{uploadedpayslip3 ? <a style={{textDecoration:"none", color:"#DD3737", fontSize:"12px"}} target="_blank" rel="noreferrer" href={payslip3url}>Preview Payslip 3</a> : <p></p>}
</p>
</div>
</div>


  <p className="" style={{marginTop:"30px"}} >
<button  className={classes.submitbutton} onClick={submitbutton}>Submit loan application

</button>
</p>




</div>

<div className="col-md-5 loanapplystepfive" style={{paddingTop:"35px"}}>
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


export {Consumerloan as default}