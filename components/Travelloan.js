import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';

import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';

const Travelloan = () => {
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
           return <button key={button} className={ button === activeTab? 'tabactive': ''} onClick={()=>changeTab(button)}>{button}</button>
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



 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [amount, setAmount] = useState("")
  const [duration, setDuration] = useState("")
  const [loanrepayment, setLoanrepayment] = useState("")
  const [loanofferid, setLoanofferid] = useState("")
  const [passport, setpassport ] = useState("/images/passport.svg");
  const [additionaldocument, setadditionaldocument ] = useState("/images/offerletter.svg");
  const [ passporturl, setpassporturl ] = useState("");
  const [ additionaldocumenturl, setadditionaldocumenturl ] = useState("");
  // const [employmentletter, setemploymentletter ] = useState("/images/employmentletter.svg");
  // const [admissionletter, setadmissionletter ] = useState("/images/admissionletter.svg");

  useEffect(() =>{
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/loans/offers/proof_of_funds/",
      "method": "GET",
      "timeout": 0,
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      error: function (xhr, status, error) {
        console.log(xhr)
     
      },
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
      console.log(responsethree)
      setLoanofferid(responsethree.id)
      $(".overlay").fadeOut(0);
    })
  },[])
  
  const nextstep1 = () =>{

    $(".loanapplystepone").slideDown();
    $(".loanapplystepone").css({ 'display': 'none' });
    $(".loanapplysteptwo").toggle( "slide" );
}

const nextstep2 = () =>{

  if(document.getElementById("country").value === ""){
    setnotify("Select country of visit")
}

else if(document.getElementById("reason").value === ""){
  setnotify("Input reason for travelling")
}

else if(document.getElementById("currency").value === ""){
  setnotify("Select currency")
}

else if(document.getElementById("amountlocal").value === ""){
  setnotify("Input amount in local currency")
}

else if(document.getElementById("amountforeign").value === ""){
  setnotify("Input amount in foreign currency")
}

else if(document.getElementById("duration").value === ""){
  setnotify("Select duration")
}
else{
  setAmount(parseInt(document.getElementById("amountlocal").value).toLocaleString() )
  setDuration(document.getElementById("duration").value )
  var amount = document.getElementById("amountlocal").value * document.getElementById("duration").value * 0.05
  var theamount = parseInt(document.getElementById("amountlocal").value)
  var repayment = amount + theamount
  setLoanrepayment(parseInt(repayment).toLocaleString())

  $(".loanapplystepone").slideDown();
  $(".loanapplystepone").css({ 'display': 'none' });
  $(".loanapplystepthree").toggle( "slide" );
} 
}

const nextstep3 = () =>{
  setnotify("")
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
  $(".loanapplystepone").toggle( "slide" );
}

const gobacktostep3 = () =>{
  $(".loanapplystepfour").slideDown();
  $(".loanapplystepfour").css({ 'display': 'none' });
  $(".loanapplystepthree").toggle( "slide" );
}

const submitbutton = () =>{
  console.log(passporturl)
  console.log(typeof(additionaldocumenturl))
  if (passporturl === undefined){
    setnotify("Upload your international passport")
  }

  else if (additionaldocumenturl === undefined){
    setnotify("Upload an additional document")
  }

  else{
    setnotify("Processing...")
console.log(duration)
let adoc = [{
  'name': 'Additional Document',
  'document_url': additionaldocumenturl
}]

const obj ={
  "principal" : document.getElementById("amountlocal").value,
  "duration" : document.getElementById("duration").value,
  "country_of_visit" : document.getElementById("country").value,
  "travel_reason" : document.getElementById("reason").value,
  "foreign_currency" : document.getElementById("currency").value,
  "amount_requested_local" : document.getElementById("amountlocal").value,
  "principal" : document.getElementById("amountlocal").value,
  "amount_requested_foreign" : document.getElementById("amountforeign").value,
  "loan_offer" : loanofferid,
  "user":  localStorage.getItem("userid"),
  "passport": passporturl,
  "additional_documents":  [{
    'name': 'Additional Document',
    'document_url': additionaldocumenturl
  }]
}

console.log(JSON.stringify(obj))
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/loans/pof/",
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
      $(".loanapplystepfour").slideDown();
      $(".loanapplystepfour").css({ 'display': 'none' });
      $(".loanapplystepfive").toggle( "slide" );
    })

    
  }


}

const gohome = () =>{
window.location.replace("/home");
}

    // UPLOAD PASSPORT
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
     
      const data = new FormData()
      console.log(data)
      data.append("file", passport)
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
      setpassporturl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("passport").src = "/images/passport.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        document.getElementById("passport").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
  
  
      })
      .catch(err => console.log(err))
       
    
    
    },[passport])
      // UPLOAD PASSPORT
  
  
    // UPLOAD ADDITIONAL DOCUMENT
    useEffect(() =>{
      // $('.loading').css("visibility", "visible");
      const data = new FormData()
      data.append("file", additionaldocument)
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
      setadditionaldocumenturl(data.url)
      console.log(data)
      if(data.error){
        document.getElementById("additionaldocument").src = "/images/additionaldocument.svg"
        $(".overlay").fadeOut(0);
        // $('.loading').css("visibility", "hidden");
      }
      else{
        document.getElementById("additionaldocument").src = data.url
        $(".overlay").fadeOut(0);
        // localStorage.setItem("songart", data.secure_url);
        // $('.loading').css("visibility", "hidden");
      }
      })
      .catch(err => console.log(err))
    },[additionaldocument])
    // UPLOAD ADDITIONAL DOCUMENT
  




  
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
 



<div className="col-md-4  tabs webapptabs loanapplystepone">
    
<Link className="goback" href="/loanproducts"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"0px", cursor:"pointer"}}>
                <Image className="" src="/images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>
       

  <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Country of visit</label>
  <select className="form-control" id="country">
    <option value="">- Select Country -</option>
    <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
  </select>
</div>

<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Reason for travelling </Form.Label>
      <Form.Control   id="reason" width="60px" type="text" placeholder="Reason for travelling" />
  </Form.Group>

<div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Select Foreign Currency</label>
  <select className="form-control" id="currency">
    <option>- Select Currency -</option>
    <option value="dollar">Dollars</option>
    <option value="pounds">Pounds</option>
   

  </select>
</div>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Amount Requested (in local currency) </Form.Label>
      <Form.Control   id="amountlocal" width="60px" type="number" placeholder="Input amount in local currency" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label class="emaillabel" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Amount Requested (in foreign currency) </Form.Label>
      <Form.Control   id="amountforeign" width="60px" type="number" placeholder="Input amount in foreign currency" />
  </Form.Group>

  <div className="form-group">
  <label htmlFor="sel1" style={{color:"#666666",paddingTop:"20px",paddingBottom:"0px"}}>Loan Duration</label>
  <select className="form-control" id="duration">
  <option value="">- Select Duration -</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>



    <p className="" style={{ color:"#DD3737", fontWeight:"bold",textAlign:"center"}}>{notify}</p>
  <p className="" style={{textAlign:"center"}} >
<button  className="loanbutton" onClick={nextstep2}>Continue 
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>

</button>
</p>
<br/>
<br/>
<br/>
<br/>
</div>

<div className="col-md-5 loanapplystepthree">
<p onClick={gobacktostep2} className="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <Image className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
       
<p  className="loansareavailablenote2 summarynote">Here is a summary of your loan application</p>

<div className="row summarybox">
    <div className="col-md-6 col-6 summarydiv1">
        <p  className="loansareavailablenote2">Loan amount</p>
        <p className="summaryhead">{amount}</p>
        <p  className="loansareavailablenote2">Loan duration</p>
        <p className="summaryhead">{duration} Month(s)</p>
     
        <p  className="loansareavailablenote2">Loan repayment</p>
        <p className="summaryhead">{loanrepayment}</p>
    </div>

    <div className="col-md-6 col-6 summarybox2">
    <p  className="loansareavailablenote2">Loan Type</p>
    <p className="summaryhead">Travel Loan</p>
    <p  className="loansareavailablenote2">Loan interest</p>
        <p className="summaryhead">5.0%</p>
        <p  className="loansareavailablenote2">Processing Fee</p>
        <p className="summaryhead">1,500.00</p>
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
<p onClick={gobacktostep3} className="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <Image className="" src="images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
       
<div className="row">
    <div className="col-md-2 col-4">
    <div className="image-upload empimgupload">
  <label htmlFor="file">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="passport"  width="183" height="100" src={ passport} />
  </label>
  <input type="file" id="file" onChange= {(e)=> setpassport(e.target.files[0])}></input>
</div>
    </div>

    <div className="col-md-2 col-4" style={{marginLeft:"20px"}}>
    <div className="image-upload empimgupload">
  <label htmlFor="file2">
    <Image className="mobileuploadimages" style={{marginBottom:"40px", cursor:"pointer "}} 
     id="additionaldocument"  width="183" height="100" src={additionaldocument} />
  </label>
  <input type="file" id="file2" onChange= {(e)=> setadditionaldocument(e.target.files[0])}></input>

</div>
</div>




</div>
<p  className="loansareavailablenote2">Upload max size: 10MB</p>
  <p  className="loansareavailablenote2">Select an additional document e.g Invitation letter/Admission letter</p>

<p className="mobilenotify" style={{ color:"#DD3737", fontWeight:"bold"}}>{notify}</p>
  <p className="" style={{marginTop:"0px"}} >
<button  className="loanbutton" onClick={submitbutton}>Submit loan application
<div className="spinner-border spinner-border-sm" role="status">
<span className="sr-only">Loading...</span>
</div>
</button>
</p>




</div>

<div className="col-md-5 loanapplystepfive">
{/* <p onClick={gobacktostep2} class="loansareavailable2 goback " style={{paddingLeft:"0px"}}>
                <Image className="" src="images/arrow-left.svg"/> <span class="gobackp">Back</span></p>
        */}
<p  className="bookingnote">Booking received</p>
<hr/>
<div className="row successbox">
    <div className="col-md-2 col-2">
    <Image className="mobilesuccess" src="images/tick-circle.svg"/>
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


export {Travelloan as default}