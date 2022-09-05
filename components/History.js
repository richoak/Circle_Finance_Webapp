import React, { useEffect, useState, useReducer} from 'react';
import {Container, Row,Button, Nav, Form, Accordion, Modal, Col} from 'react-bootstrap'
import Link from 'next/link';

import Topbar from './Topbar';
import Sidebar from './Sidebar'

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
        "url": "https://credisol-app.herokuapp.com/v1/loans/all/",
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
          $.each(responsethree, function (i) {
              console.log(responsethree[i])
            var table = document.getElementById('records_table');
            // console.log(table)
            var tr = document.createElement('tr');
            var defaultDates = responsethree[i].created_at
            var d = new Date(defaultDates).toString();
            var actualdate = d.split(' ').splice(0, 5).join(' ')
  
            let loantype
            let amount
              let viewstatement
  
            if(responsethree[i].offer_code === "RO-VF-PF"){
              loantype = "Travel loan";
            }
  
            else  if(responsethree[i].offer_code === "RO-BL-BL"){
              loantype = "Business loan";
            }

         
  
            var td1 = document.createElement('td');
            td1.innerText = responsethree[i].loan_id;
            var td2 = document.createElement('td');
            td2.innerHTML = "<span className='loanhistorytype'>" + loantype +"</span> "+ "<br/>" +  "<span className='loanhistorydate'>" + actualdate +"</span> "
            var td3 = document.createElement('td');
            td3.innerHTML =    "<span className='loanhistorytype'> &#x20A6;" + parseInt(responsethree[i].principal).toLocaleString()  +"</span> " + "<br/>" + "<span class='loanhistorydate'>" + responsethree[i].duration + " months / " + "4%" +"</span> "
            var td4 = document.createElement('td');
            td4.innerHTML =  "<span className='loanhistorytype loanstatushistory'>"+ responsethree[i].status  +"</span>" ;

            if(responsethree[i].status === "pending"){
              viewstatement = "No statement"
            }
            else{
              viewstatement = `<a target='_blank' href=/statement?loanid=${td1.innerText} className='loanhistorytype statementlink'> View statement</a>`
            }
            var td5 = document.createElement('td');
            td5.innerHTML = viewstatement        
            
            
            
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
        "url": "https://credisol-app.herokuapp.com/v1/loans/all?offer_code=" + loanTypeFilter,
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
          $.each(responsethree, function (i) {
              console.log(responsethree[i])
            var table = document.getElementById('records_table');
            // console.log(table)
            var tr = document.createElement('tr');
            var defaultDates = responsethree[i].created_at
            var d = new Date(defaultDates).toString();
            var actualdate = d.split(' ').splice(0, 5).join(' ')
  
            let loantype
            let amount
            let viewstatement
  
            if(responsethree[i].offer_code === "RO-VF-PF"){
              loantype = "Travel loan";
            }
  
            else  if(responsethree[i].offer_code === "RO-BL-BL"){
              loantype = "Business loan";
            }

    

  
            var td1 = document.createElement('td');
            td1.innerText = responsethree[i].loan_id;
            var td2 = document.createElement('td');
            td2.innerHTML = "<span className='loanhistorytype'>" + loantype +"</span> "+ "<br/>" +  "<span className='loanhistorydate'>" + actualdate +"</span> "
            var td3 = document.createElement('td');
            td3.innerHTML =    "<span className='loanhistorytype'> &#x20A6;" + parseInt(responsethree[i].principal).toLocaleString()  +"</span> " + "<br/>" + "<span class='loanhistorydate'>" + responsethree[i].duration + " months / " + "4%" +"</span> "
            var td4 = document.createElement('td');
            td4.innerHTML =  "<span className='loanhistorytype loanstatushistory'>"+ responsethree[i].status  +"</span>" ;

            if(responsethree[i].status === "pending"){
              viewstatement = "No statement"
            }
            else{
              viewstatement = `<a target='_blank' href=/statement?loanid=${td1.innerText} className='loanhistorytype statementlink'> View statement</a>`
            }
            var td5 = document.createElement('td');
            td5.innerHTML = viewstatement
        
            
            
            
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

              <div class="col-md-10">
              <Topbar/>

              <Link className="goback" href="/loan"  eventKey="2" activeClassName="is-active" >
              <p className="loansareavailable2 " style={{paddingLeft:"20px", cursor:"pointer"}}><Image className="" src="/images/arrow-left.svg"/> <span className="gobackp">Back</span></p>
              </Link>


              <div className="col-md-6">

              <Form.Select onChange={filterTransaction} 
              className="transactionsselect" 
              style={{marginBottom:"30px"}} 
              size="lg"
              width="100px"
              >
              <option value="">All loans</option>
  <option value="RO-VF-PF">Proof of Funds</option>
  <option value="RO-BL-BL">Business Loan</option>

</Form.Select>

              <table className="table css-serial historytable" >
            <thead className="thead-dark">
              <tr className="ippisschedulehead">
             
      
                <th className="ippiscol0" scope="col">ID</th>
      
                <th className="ippiscol0" scope="col">TYPE/DATE</th>
                <th className="ippiscol0" scope="col">AMOUNT/DURATION/INTEREST RATE</th>
                <th className="ippiscol0" scope="col">STATUS</th>
                <th className="ippiscol0" scope="col">STATEMENT</th>
        
            
      
      
      
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