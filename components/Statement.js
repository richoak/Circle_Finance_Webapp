import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Modal, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'
// import "../stylesheets/style.css"
import "../js/main.js"
import $ from 'jquery'
import Image from 'next/image';

import Pageloader from './Pageloader';

// import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    // orientation: 'landscape',
    // unit: 'in',
    // format: [4,2]
};

const Statement = () => {

 

  const [statementDate, setStatementDate] = useState("")
  const [accountName, setAccountName] = useState("")
  const [openingBalance, setOpeningBalance] = useState("")
  const [numberOfTransactions, setNumberOfTransactions] = useState("")
  const [totalAmountPaid, setTotalAmountPaid] = useState("")


//   console.log(date.toLocaleString())

  useEffect(() => {
    var thedate= new Date()
    var thedate2 = thedate.toLocaleString()
    console.log(thedate2)
    setStatementDate(thedate2)
  


    var pathname = window.location.href;
    let params = (new URL(pathname)).searchParams;
    var loanid = params.get('loanid')
    console.log(loanid)
    $(".overlay").fadeIn(1);
    var settingsthree = {
      "url": "https://credisol-app.herokuapp.com/v1/payments?loan_id=" + loanid,
      "method": "GET",
      "timeout": 0,
      
      "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token")},
      error: function (xhr, status, error) {
        console.log(xhr)
        // if(xhr.status === 401){
        //   window.location.replace("/");
        // }
      },
      
    }
    
    $.ajax(settingsthree).done(function (responsethree) {
 

// Remove disbursement
let finalarray = responsethree.slice(0,-1)

// Calculate total amount paid
const sum = finalarray.reduce((accumulator, object) => {
    return accumulator + parseInt(object.amount);
  }, 0);
  console.log(sum); 
  var totalsum = "N" + parseInt(sum).toLocaleString()
  setTotalAmountPaid(totalsum)

  
    
      var openingbalance = parseInt(responsethree.slice(-1)[0].amount).toLocaleString()
      var ob = "N" + openingbalance
      setAccountName(responsethree[0].payer_name)
      setNumberOfTransactions(responsethree.length)
      setOpeningBalance( ob)

      $.each(responsethree, function (i) {
   
      var table = document.getElementById('records_table');
      // console.log(table)
      var tr = document.createElement('tr');
      var defaultDates = responsethree[i].transaction_date
      var d = new Date(defaultDates).toString();
      var actualdate = d.split(' ').splice(0, 5).join(' ')

      let loantype
      let amount

      if(responsethree[i].offer_code === "RO-VF-PF"){
        loantype = "Travel loan";
      }

      else  if(responsethree[i].offer_code === "RO-BL-BL"){
        loantype = "Business loan";
      }

      var td1 = document.createElement('td');
      td1.innerText = actualdate;

      var td2 = document.createElement('td');
      td2.innerHTML = (responsethree[i].purpose).toUpperCase();

      var td3 = document.createElement('td');
      td3.innerHTML = "CS/22/0" + responsethree[i].id;

      var td4 = document.createElement('td');
      td4.innerHTML ="&#x20A6;" + parseInt(responsethree[i].amount).toLocaleString() 


    //   var td2 = document.createElement('td');
    //   td2.innerHTML = "<span class='loanhistorytype'>" + loantype +"</span> "+ "<br/>" +  "<span class='loanhistorydate'>" + actualdate +"</span> "
    //   var td3 = document.createElement('td');
    //   td3.innerHTML =    "<span class='loanhistorytype'> &#x20A6;" + parseInt(responsethree[i].principal).toLocaleString()  +"</span> " + "<br/>" + "<span class='loanhistorydate'>" + responsethree[i].duration + " months / " + "4%" +"</span> "
    //   var td4 = document.createElement('td');
    //   td4.innerHTML =  "<span class='loanhistorytype loanstatushistory'>"+ responsethree[i].status  +"</span>" ;
    //   var td5 = document.createElement('td');
    //   td5.innerHTML = `<a target='_blank' href=/statement?loanid=${td1.innerText} class='loanhistorytype statementlink'> View statement</a>`
  
      
      
      
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
    //   tr.appendChild(td5);
  
  

      table.appendChild(tr);
      
      
      
    //   td6.onclick = function () {
      
        // setViewShow(true)
        // setUserId(td1.innerText)
        // setUserName(td2.innerText)
    //   };
      
    //   td7.onclick = function () {
      
        // setEditShow(true)
        // setUserId(td1.innerText)
        // setUserName(td2.innerText)
    //   };
          });
     
      $(".overlay").fadeOut(0);
 
    })
    
  }, [])



  
    return (
      
      <div>
                <Pageloader/>
        
          <div className="row">
              <div className="col-md-3">
              </div>
           
              <div style={{marginLeft:"70px"}} className="col-md-5"  ref={ref}>
              <p className=""> <Image className="brandlogo navbarlogostatement" src="/images/logo.svg" width="100" height="90"/>
              <br/>
              <span className= "statementdescription">Plot 1072</span>
              <br/>
              <span className="statementdescription">Grand Pela Street</span>
              <br/>
              <p className="statementdescription">Federal Capital Territory, Abuja <span className="statementpagetitle">STATEMENT OF ACCOUNT</span></p>
               </p>

            <p className= "statementdescription">Account Name: {accountName}
            <br/>
                <span className= "statementdescription">Statement Date: {statementDate}</span>
                <br/>
                <span className= "statementdescription">Opening balance: {openingBalance}</span>
            </p>
          

            <p className="statementfloatright statementdescription">
            Total Amount Paid: {totalAmountPaid}
            <br/>
            <span className= "statementdescription">Account Type: Loan Account</span>
            <br/>
            <span className= "statementdescription">Number of Transactions: {numberOfTransactions}</span>
            </p>
            {/* <p className="statementfloatright"></p>
            <p className="statementfloatright">Number of Transactions: </p> */}
       
        
              <table className="table css-serial historytable" >
            <thead className="thead-dark">
              <tr className="ippisschedulehead">
             
              <th className="ippiscol0" scope="col">DATE</th>
              <th className="ippiscol0" scope="col">DESCRIPTION</th>
                <th className="ippiscol0" scope="col">TRANSACTION ID</th>
               
                <th className="ippiscol0" scope="col">AMOUNT</th>
               
                {/* <th class="ippiscol0" scope="col">STATEMENT</th> */}
        
            
      
      
      
              </tr>
            </thead>
            <tbody id="records_table">
            </tbody>
          </table>

          {/* <Pdf targetRef={ref} filename="Credisol Statement.pdf">
        {({ toPdf }) => <button className="bookaloanbutton" onClick={toPdf}>Download Pdf <i style={{marginLeft:"10px"}} className="fas fa-download"></i></button>}
      </Pdf> */}
                </div>

                <div className="col-md-3">
            
                  </div>
          </div>
         
   

    </div>

  


    )
    
    
}


export {Statement as default}