import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import classes from './Loan.module.css'
import Image from 'next/image';

// import "../js/main.js"
import $ from 'jquery'

const Consumerloan = () => {
      // TABS
  class Tabs extends React.Component{
    state ={
      activeTab: this.props.children[0].props.label
   
    }
    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
     
    };
    render(){
      
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
          <div className="tab-content">{content}</div>
          
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
    return(
        <div className="tab-buttons">
        {buttons.map(button =>{
           return <button key={button} className={ button === activeTab? 'tabactive': "consumerloanbutton"} onClick={()=>changeTab(button)}>{button}</button>
        })}
        </div>
      
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }
   
// TABS

  useEffect(() =>{
    document.title = "Personal Loan Application | Credisol"
},[])
 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")

    const [isorganizationactive, setisorganizationactive ] = useState(true)
      const [isloanactive, setisloanactive ] = useState(false)
  const [issummaryactive, setissummaryactive ] = useState(false)
  const [isdocumentationactive, setisdocumentationactive ] = useState(false)



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
  $(".loanapplystepfour").slideDown();
  $(".loanapplystepfour").css({ 'display': 'none' });
  $(".loanapplystepfive").toggle( "slide" );
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
 
    <div className="col-md-6 tabs webapptabs  loanapplystepone">
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

<Tabs className="">
  <Tab className="accounttablabel" label="Government">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Input Organization</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input organization" />
  </Form.Group>
   
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Your IPPIS Number</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input IPPIS number" />
  </Form.Group>

<p className="" style={{textAlign:"center"}} >
<button  className={classes.continuebutton} onClick={nextstep1}>Continue 


</button>
</p>
  </Tab>

  <Tab   label="Private">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Input Organization</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input Organization" />
  </Form.Group>
   
  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Your IPPIS Number</Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Your IPPIS Number" />
  </Form.Group> */}

<p className="" style={{textAlign:"center"}}>
<button   className={classes.continuebutton}  onClick={nextstep1}>Continue 


</button>
</p>
  </Tab>
</Tabs>
</div>


<div className="col-md-6 loanapplysteptwo">
    
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
  <select className="form-control" id="sel1">
    <option>- Select Purpose -</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Your Net Earnings (&#8358;) </Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input Net Earnings" />
  </Form.Group>

  <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Duration</label>
  <select className="form-control" id="sel1">
  <option>- Select Duration -</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>
</div>



  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Amount (&#8358;) </Form.Label>
      <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input Amount" />
  </Form.Group>

  <p className="" style={{textAlign:"center"}} >
<button   className={classes.continuebutton}  onClick={nextstep2}>Continue 


</button>
</p>
</div>

<div className="col-md-6 loanapplystepthree">
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
        <p className="summaryhead">200,000.00</p>
        <p  className="loansareavailablenote2">Loan duration</p>
        <p className="summaryhead">1 Month(s)</p>
        <p  className="loansareavailablenote2">Loan interest</p>
        <p className="summaryhead">16.0%</p>
        <p  className="loansareavailablenote2">Loan repayment</p>
        <p className="summaryhead">204,000.00</p>
    </div>

    <div className="col-md-6"style={{paddingLeft:"30px"}}>
    <p  className="loansareavailablenote2">Loan Type</p>
    <p className="summaryhead">Consumer Loan</p>
    <p  className="loansareavailablenote2">Start Date</p>
    <p className="summaryhead">21-May-2022</p>
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

<div className="row">
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


</div>

  <p className="" style={{marginTop:"30px"}} >
<button  className={classes.submitbutton} onClick={submitbutton}>Submit loan application

</button>
</p>




</div>

<div className="col-md-5 loanapplystepfive">
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