import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Modal, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'
import Image from 'next/image';
import "../js/main.js"
import $ from 'jquery'

import Pageloader from './Pageloader';


const History = () => {

 

  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [loanTypeFilter, setLoanTypeFilter] = useState("")


  useEffect(() => {
    $(".overlay").fadeIn(1);
    $('#records_table').empty()
    if(loanTypeFilter === ""){
      var settingsthree = {
        "url": `https://credisol-main.herokuapp.com/v1/wallet/${localStorage.getItem("providusid")}/virtual_accounts/`,
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
        console.log(responsethree)
  
        if(responsethree != ""){
          $.each(responsethree.transactions, function (i) {
              console.log(responsethree[i])
            var table = document.getElementById('records_table');
            // console.log(table)
            var tr = document.createElement('tr');
            var defaultDates =  responsethree.transactions[i].created_at
            var d = new Date(defaultDates).toString();
            var actualdate = d.split(' ').splice(0, 5).join(' ')
  
            let loantype
            let amount =  responsethree.transactions[i].amount
            let arrow
            let transactiontype
            let remarks

            if (responsethree.transactions[i].remarks === "providus inflow") {
              remarks = "Deposit"
              arrow = "<i class='fas fa-long-arrow-alt-right makegreen'></i>"
            }

            else if (responsethree.transactions[i].remarks === "providus outflow") {
              remarks = "Withdrawal"
              arrow = "<i class='fas fa-long-arrow-alt-left makered'></i>"
            }

            else if (responsethree.transactions[i].remarks === "internal outflow") {
              remarks = "Loan Disbursement"
              arrow = "<i class='fas fa-long-arrow-alt-left makegreen'></i>"
            }

            else if (responsethree.transactions[i].remarks === "internal inflow") {
              remarks = "Loan Repayment"
              arrow = "<i class='fas fa-long-arrow-alt-left makered'></i>"
            }


         
  
            var td1 = document.createElement('td');
            td1.innerHTML = arrow
            var td2 = document.createElement('td');
            td2.innerText = responsethree.transactions[i].id;
            var td3 = document.createElement('td');
            td3.innerHTML = "<span class='loanhistorytype'>" + remarks + "</span> "
            var td4 = document.createElement('td');
            td4.innerHTML = "<span class='loanhistorytype'> " + parseInt(amount).toLocaleString() + "</span> "
            var td5 = document.createElement('td');
            td5.innerHTML = "<span class='loanhistorytype loanstatushistory'>" + actualdate + "</span>";
            // td5.innerHTML = viewstatement        
            
            
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
        
        
      
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
        
         
        }
       
        $(".overlay").fadeOut(0);
   
      })
    }

    else{
      var settingsthree = {
        "url": `https://credisol-main.herokuapp.com/v1/wallet/${localStorage.getItem("providusid")}/virtual_accounts?remarks=` + loanTypeFilter,
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
        console.log(responsethree)
  
        if(responsethree != ""){
          $.each(responsethree.transactions, function (i) {
              console.log(responsethree[i])
            var table = document.getElementById('records_table');
            // console.log(table)
            var tr = document.createElement('tr');
            var defaultDates = responsethree.transactions[i].created_at
            var d = new Date(defaultDates).toString();
            var actualdate = d.split(' ').splice(0, 5).join(' ')
  
            let loantype
            let amount =  responsethree.transactions[i].amount
            let arrow
            let transactiontype
            let remarks

            if (responsethree.transactions[i].remarks === "providus inflow") {
              remarks = "Deposit"
              arrow = "<i class='fas fa-long-arrow-alt-right makegreen'></i>"
            }

            else if (responsethree.transactions[i].remarks === "providus outflow") {
              remarks = "Withdrawal"
              arrow = "<i class='fas fa-long-arrow-alt-left makered'></i>"
            }

            else if (responsethree.transactions[i].remarks === "internal outflow") {
              remarks = "Loan Disbursement"
              arrow = "<i class='fas fa-long-arrow-alt-left makegreen'></i>"
            }

            else if (responsethree.transactions[i].remarks === "internal inflow") {
              remarks = "Loan Repayment"
              arrow = "<i class='fas fa-long-arrow-alt-left makered'></i>"
            }

    

  
            var td1 = document.createElement('td');
            td1.innerHTML = arrow
            var td2 = document.createElement('td');
            td2.innerText = responsethree.transactions[i].id;
            var td3 = document.createElement('td');
            td3.innerHTML = "<span class='loanhistorytype'>" + remarks + "</span> "
            var td4 = document.createElement('td');
            td4.innerHTML = "<span class='loanhistorytype'> " + parseInt(amount).toLocaleString() + "</span> "
            var td5 = document.createElement('td');
            td5.innerHTML = "<span class='loanhistorytype loanstatushistory'>" + actualdate + "</span>";
        
            
            
            
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
        
        
      
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
        
         
        }
       
        $(".overlay").fadeOut(0);
   
      })
    }
 
    
  }, [loanTypeFilter])

  const filterTransaction = (e) => {
    console.log(e.target.value)
    setLoanTypeFilter(e.target.value)
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

              <Link className="goback" href="/loan"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px", cursor:"pointer"}}>
                {/* <Image className="" style={{marginTop:"7px"}} src="/images/arrow-left.svg" height="24" width="24"/>  */}
                <span className=""><i className="fas fa-long-arrow-alt-left" style={{color:"#DD3737"}}></i> Back</span>
                </p>
              </Link>


              <div className="col-md-6">

              <Form.Select onChange={filterTransaction} 
              className="transactionsselect" 
              style={{marginBottom:"30px"}} 
              size="lg"
              width="100px"
              >
                 <option value="">All Transactions</option>
                    <option value="providus inflow">Deposit</option>
                    <option value="providus outflow">Withdrawal</option>
                    <option value="internal outflow">Loan Disbursement</option>
                    <option value="internal inflow">Loan Repayment</option>

</Form.Select>

              <table className="table css-serial historytable" >
            <thead className="thead-dark">
              <tr className="ippisschedulehead">
             
      
                       <th className="ippiscol0" scope="col"></th>
                      <th className="ippiscol0" scope="col"> ID</th>

                      <th className="ippiscol0" scope="col">TRANSACTION TYPE</th>
                      <th className="ippiscol0" scope="col">AMOUNT (&#x20A6;)</th>
                      <th className="ippiscol0" scope="col">DATE</th>
        
            
      
      
      
              </tr>
            </thead>
            <tbody id="records_table">
            </tbody>
          </table>
</div>








                  </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {History as default}