import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import "../js/main.js"
import $ from 'jquery'

const About = () => {

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
    document.title = "About | Credisol"
},[])
 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")



  const updatepasswordpage= () =>{

    $(".password1").slideDown();
    $(".password1").css({ 'display': 'none' });
    $(".password2").toggle( "slide" );
}

const updatepinpage= () =>{

    $(".password1").slideDown();
    $(".password1").css({ 'display': 'none' });
    $(".pin2").toggle( "slide" );
}






  
    return (
      
      <div>
          <div class="row thesidebarrow">
          <div class="col-md-2 thesidebar">
          <Sidebar/>


</div>

              <div class="col-md-10">
              <Topbar/>

           
<div className="row" style={{marginTop:"50px"}}>
 
    <div className="col-md-2 tabs">
    <p className=""> <img className="" width="100" src="images/logo.svg"/></p>
    <p  className="" style={{fontSize:"14px", color:"#808080"}}>&copy; Credisol.</p>

</div>

{/* <div className="col-md-8" style={{marginTop:"20px"}}>

<Nav.Link className="" as={Link} target="_blank" to="/termsandconditions"  eventKey="2" activeClassName="is-active" >
<div className="row">
<div className="col-md-5 col-10">
<p class="outerlinks">
  <span class="viewour">View our Terms and Conditions </span>  
  <img style={{float:"right"}} className="abouthr" src="images/arrow-right.svg"/></p>  
</div>

</div>
</Nav.Link>

<hr className="abouthr" style={{marginRight:"500px",marginBottom:"30px"}}/>

<Nav.Link className="" as={Link} target="_blank" to="/privacyandpolicy" eventKey="2" activeClassName="is-active" >
<div className="row">
<div className="col-md-5 col-10">
<p class="outerlinks">
  <span class="viewour"> View our Privacy and Policy</span>  
  <img style={{float:"right"}} className="abouthr" src="images/arrow-right.svg"/></p>  
</div>

</div>
</Nav.Link>
</div> */}





</div>









                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {About as default}