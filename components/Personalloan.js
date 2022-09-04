import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

const Personalloan = () => {
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
           return <button className={ button === activeTab? 'tabactive': ''} onClick={()=>changeTab(button)}>{button}</button>
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



  const nextstep1 = () =>{

    $(".loanapplystepone").slideDown();
    $(".loanapplystepone").css({ 'display': 'none' });
    $(".loanapplysteptwo").toggle( "slide" );
}

const nextstep2 = () =>{
  $(".loanapplysteptwo").slideDown();
  $(".loanapplysteptwo").css({ 'display': 'none' });
  $(".loanapplystepthree").toggle( "slide" );
}

const nextstep3 = () =>{
  $(".loanapplystepthree").slideDown();
  $(".loanapplystepthree").css({ 'display': 'none' });
  $(".loanapplystepfour").toggle( "slide" );
  
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
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>

</div>

              <div className="col-md-10">
              <Topbar/>

           
<div className="row">
 
    <div className="col-md-4 tabs webapptabs  loanapplystepone">
    <Link className="goback" href="/loan/loanproducts"   eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                <img className="" src="/images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>

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
<button  className="loanbutton" onClick={nextstep1}>Continue 
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

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
<button  className="loanbutton" onClick={nextstep1}>Continue 
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>
  </Tab>
</Tabs>
</div>


<div className="col-md-4 loanapplysteptwo">
    
              <p onClick={gobacktostep1} className="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <img className="" src="/images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
       

  <div className="form-group">
  <label for="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Purpose</label>
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
  <label for="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"10px"}}>Loan Duration</label>
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
<button  className="loanbutton" onClick={nextstep2}>Continue 
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>
</div>

<div className="col-md-5 loanapplystepthree">
<p onClick={gobacktostep2} class="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <img className="" src="/images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
       
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

    <div className="col-md-6"style={{paddingLeft:"50px"}}>
    <p  className="loansareavailablenote2">Loan Type</p>
    <p className="summaryhead">Consumer Loan</p>
    <p  className="loansareavailablenote2">Start Date</p>
    <p className="summaryhead">21-May-2022</p>
        <p  className="loansareavailablenote2">Fee</p>
        <p className="summaryhead">10,000.00</p>
        </div>
</div>
  <p className="" style={{textAlign:"center"}} >
<button  className="loanbutton" onClick={nextstep3}>Finalize loan application
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>

<p className="" style={{textAlign:"center"}} >
<button  className="editloanbutton" onClick={ gobacktostep2}>Edit loan application
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>



</div>

<div className="col-md-9 loanapplystepfour">
<p onClick={gobacktostep3} class="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <img className="" src="/images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
       
<div className="row">
    <div className="col-md-2">
    <img className="" src="/images/employmentletter.svg"/>
    </div>

    <div className="col-md-2" style={{marginLeft:"20px"}}>
    <img className="" src="/images/photograph1.svg"/>
</div>

<div className="col-md-2"  style={{marginLeft:"20px"}}>
<img className="" src="/images/photograph2.svg"/>
</div>

<div className="col-md-2" style={{marginLeft:"20px"}}>
<img className="" src="/images/photograph3.svg"/>
</div>


</div>

  <p className="" style={{marginTop:"30px"}} >
<button  className="loanbutton" onClick={submitbutton}>Submit loan application
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>




</div>

<div className="col-md-5 loanapplystepfive">
{/* <p onClick={gobacktostep2} class="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <img className="" src="images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
        */}
<p  className="bookingnote">Booking received</p>
<hr/>
<div className="row successbox">
    <div className="col-md-2">
    <img className="" src="/images/tick-circle.svg"/>
    </div>

    <div className="col-md-6"style={{paddingLeft:"0px"}}>
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


export {Personalloan as default}