import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

import "../js/main.js"
import $ from 'jquery'

const Document = () => {
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
    document.title = "Profile | Credisol"
},[])
 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")



  const addbankaccount = () =>{

    $(".paymentbox1").slideDown();
    $(".paymentbox1").css({ 'display': 'none' });
    $(".paymentbox2").toggle( "slide" );
}

const addbank = () =>{
    $(".paymentbox2").slideDown();
    $(".paymentbox2").css({ 'display': 'none' });
    $(".paymentbox1").toggle( "slide" );

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
 
    <div className="col-md-10 tabs webapptabs paymenttabs">
    <Link className="goback" href="/profileoptions"  activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px"}}><Image className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>

              <div className="row director1row">

<div className="col-md-5">
<p className="wallethead" >Legal ID </p>
    <div className="row">
        <div className="col-md-12">

        <div className="form-group">
<label for="sel1" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Select your ID type</label>
<select className="form-control" id="sel1">
<option>- Select Purpose -</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
</select>
</div>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>ID Number</Form.Label>
  <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input organization" />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
<Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"0px",paddingBottom:"0px"}}>Date Issued</Form.Label>
  <Form.Control   id="emailaddress" width="60px" type="text" placeholder="Input organization" />
</Form.Group>




        </div>
    </div>


</div>

<div className="col-md-5">
<p className="wallethead" >Upload documents </p>
<div className="pprow2">
<div className="row">
    <div className="col-md-6 col-6">
    <Image width="150px" src="images/passport.svg"/>
    </div>

    <div className="col-md-6 col-6">
    <Image width="150px" src="images/passport.svg"/>
        </div>


    </div>
 
    </div>



    </div>
</div>
<p className="" style={{textAlign:"center"}} >
<button  className="loanbutton">Save changes
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


export {Document as default}