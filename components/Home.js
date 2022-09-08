import React, { useEffect, useState, useContext } from 'react';
import { Nav, Form } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from './Topbar';
import Sidebar from './Sidebar'
import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
import useHttp from '../hooks/use-http';

import Image from 'next/image';
import LoanContext from '../store/loan-context';




const Home = (props) => {

//   if (typeof window !== 'undefined') {
//   console.log('You are on the browser')
// const token = localStorage.getItem("access_token")
// const loanCtx = useContext(LoanContext)
// loanCtx.getLoans(token)
// } else {
//   console.log('You are on the server')
// }
// const token = localStorage.getItem("access_token")
// const loanCtx = useContext(LoanContext)
// loanCtx.getLoans(token)

// console.log(localStorage.getItem("accesstoken"))
// Get 


  const [notify, setnotify] = useState("")
  const [notify2, setnotify2] = useState("")
  const [notify3, setnotify3] = useState("")
  const [email, setemail] = useState("")
  const [loantype, setloantype] = useState("")
  const [duedate, setduedate] = useState("")
  const [loanstatus, setloanstatus] = useState("")
  const [loanamount, setloanamount] = useState(0)
  const [loanrequestdate, setloanrequestdate] = useState("DD/MM/YYYY")
  const [paymentsFilter, setPaymentsFilter] = useState("")
  const [currentLoanId, setCurrentLoanId] = useState("")
  const [ walletBalance, setWalletBalance] = useState(0)


  // GET WALLET DETAILS
  const { sendRequest:fetchWallet }  = useHttp();
  useEffect(() => {
    // document.getElementById("transferbutton").disabled = true;
    const providusid = localStorage.getItem("providusid")
    $(".overlay").fadeIn(1);
    const transformWallet = ((data) => {
      console.log(data)
      setWalletBalance(data.balance)
 
      $(".overlay").fadeOut(0);

  })


  fetchWallet({
      url: `https://credisol-app.herokuapp.com/v1/wallet/${providusid}/virtual_accounts/`,
      method: "GET",
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
  }, transformWallet)
  }, [])
  // GET WALLET DETAILS


  // GET LOANS
  const { isLoading, error, sendRequest:fetchLoans }  = useHttp();
  useEffect(() => {
    // document.getElementById("transferbutton").disabled = true;
    $(".overlay").fadeIn(1);
    const transformLoans = ((data) => {
      console.log(data)
      if (data != "" && data[0].status !== "cleared") {
        $(".boxc").css({ 'display': 'inline-block' });
        $(".boxb").css({ 'display': 'none' });

        // setloanstatus("Pending")

        if (data[0].offer_code === "RO-VF-POF") {
          setloantype("Travel loan")
          let amount = parseInt(data[0].principal).toLocaleString()
          setloanamount(amount)

          var defaultDates = data[0].created_at
          var d = new Date(defaultDates).toString();
          var actualdate = d.split(' ').splice(0, 5).join(' ')
          var status = (data[0].status).toUpperCase();
          setloanrequestdate(actualdate)
          setloanstatus(status)
          setCurrentLoanId("/repay/?id=" + data[0].loan_id)
        }

        else if (data[0].offer_code === "RO-BL-BL") {
          setloantype("Business loan")
          let amount = parseInt(data[0].principal).toLocaleString()
          setloanamount(amount)

          var defaultDates = data[0].created_at
          var d = new Date(defaultDates).toString();
          var actualdate = d.split(' ').splice(0, 5).join(' ')
          var status = (data[0].status).toUpperCase();
          setloanrequestdate(actualdate)
          setloanstatus(status)
          setCurrentLoanId("/repay/?id=" + data[0].loan_id)
        }
      }
      $(".overlay").fadeOut(0);

  })


  fetchLoans({
      url: 'https://credisol-app.herokuapp.com/v1/loans/all/',
      method: "GET",
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
  }, transformLoans)
  }, [])
  // GET LOANS

  // FILTER TRANSACTIONS
  const filterTransaction = (e) => {
    console.log(e.target.value)
    setPaymentsFilter(e.target.value)
  }
    // FILTER TRANSACTIONS

  // GET TRANSACTIONS
  useEffect(() => {
    $(".overlay").fadeIn(1);
    $('#records_table').empty()

    if (paymentsFilter === "") {
      var settingsthree = {
        "url": `https://credisol-app.herokuapp.com/v1/wallet/${localStorage.getItem("providusid")}/virtual_accounts?remarks=` + paymentsFilter,
        "method": "GET",
        "timeout": 0,

        "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token") },
        error: function (xhr, status, error) {
          console.log(xhr)

        },
      }

      $.ajax(settingsthree).done(function (responsethree) {
        if (responsethree != "") {
          console.log(responsethree)
          $(".homepagenotransactions").css({ 'display': 'none' });
          $(".homepagetransactions").css({ 'display': 'block' });

          $.each(responsethree.transactions, function (i) {
            console.log(responsethree.transactions[i])
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
            // var td5 = document.createElement('td');
            // td5.innerHTML = "<span class='loanhistorytype'> View more</span>" 




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
          $(".overlay").fadeOut(0);
          // TRANSACTIONS
        }

        else {
          $(".homepagenotransactions").css({ 'display': 'block' });
          $(".homepagetransactions").css({ 'display': 'none' });
        }



        $(".overlay").fadeOut(0);


      })

    }

    else {
      var settingsthree = {
        "url": `https://credisol-app.herokuapp.com/v1/wallet/${localStorage.getItem("providusid")}/virtual_accounts?remarks=` + paymentsFilter,
        "method": "GET",
        "timeout": 0,

        "headers": { "Authorization": "Bearer " + localStorage.getItem("access_token") },
        error: function (xhr, status, error) {
          console.log(xhr)

        },
      }

      $.ajax(settingsthree).done(function (responsethree) {
        console.log(responsethree)
        if (responsethree != "") {

          $(".homepagenotransactions").css({ 'display': 'none' });
          $(".homepagetransactions").css({ 'display': 'block' });

          $.each(responsethree.transactions, function (i) {

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
            // var td5 = document.createElement('td');
            // td5.innerHTML = "<span class='loanhistorytype'> View more</span>" 




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

          // TRANSACTIONS
        }

        else {
          $(".homepagenotransactions").css({ 'display': 'block' });
          $(".homepagetransactions").css({ 'display': 'none' });
        }



        $(".overlay").fadeOut(0);


      })

    }



  }, [paymentsFilter])
  // GET TRANSACTIONS


  return (

    <div>
      <Pageloader />
      <div className="row thesidebarrow">
        <div className="col-md-2 thesidebar">
          <Sidebar/>
        </div>

        <div className="col-md-10 thesidebarrow">
          <Topbar />


          {/* <div className="row ">
              <div className="col-md-1">
                  </div>

                  <div className="col-md-3 boxa">
                  <p class="loansareavailable">Loans are available </p>
                <p className="loansareavailablenote">You have loans waiting for you. Book a loan<br/> and get disbursed in few minutes</p>
               <p style={{textAlign:"center"}}><Image className="" src="images/addloan.svg"/></p>
               
                  </div>

                  <div className="col-md-1">
                  </div>

                  <div className="col-md-3 boxa">
                  <p class="loansareavailable">Loans are available </p>
                <p className="loansareavailablenote">You have loans waiting for you. Book a loan<br/> and get disbursed in few minutes</p>
               <p style={{textAlign:"center"}}><Image className="" src="images/addloan.svg"/></p>
                  </div>

                  <div className="col-md-1">
                  </div>

                  <div className="col-md-3 boxa">
                  <p class="loansareavailable">Loans are available </p>
                <p className="loansareavailablenote">You have loans waiting for you. Book a loan<br/> and get disbursed in few minutes</p>
               <p style={{textAlign:"center"}}><Image className="" src="images/addloan.svg"/></p>
                  </div>


              </div> */}

          <div className="outer">
            <div className="boxa">
              <p className="loansareavailable2" style={{ paddingLeft: "20px" }}>Wallet </p>
              <div style={{ marginTop: "20px" }}>
                <p className="amount" style={{ color: "#000", paddingLeft: "20px" }}>&#8358; {walletBalance}</p>
              </div>
              <Link href="/transfer" className="homepagetransferbutton" eventKey="10">
                <button id="transferbutton" className="bookaloanbutton" style={{ marginLeft: "20px", marginTop: "27px", marginBottom: "20px" }}>Transfer <i className="fas fa-long-arrow-alt-right"></i></button>
              </Link>

            </div>



            <div className="boxb">
              <p className="loansareavailable2" style={{ paddingLeft: "20px" }}>Loans are available </p>
              <p className="loansareavailablenote2" style={{ paddingLeft: "20px" }}>You have loans waiting for you. Apply for a loan<br /> and get disbursed in few minutes</p>
              <Link href="/loan" eventKey="10">
                <button className="bookaloanbutton" style={{ marginLeft: "20px", marginTop: "27px" }}>Apply for a loan <i className="fas fa-long-arrow-alt-right"></i></button>
              </Link>

            </div>


            <div className="boxc" id="boxc">
              <div className="row" style={{ marginTop: "24px" }}>
                <div className="col-md-4 col-4">
                  <p style={{ color: "#FFF", textAlign: "center", fontSize: "12px" }}>{loanstatus}</p>
                </div>
                <div className="col-md-4 col-4">
                  <p style={{ color: "#FFF", textAlign: "center", fontSize: "12px" }}>{duedate}</p>
                </div>
                <div className="col-md-4 col-4">
                  <p style={{ color: "#FFF", textAlign: "center", fontSize: "12px" }}>{loantype}</p>
                </div>
              </div>
              <div style={{ marginTop: "20px" }}>
                <p className="amount" style={{ color: "#FFF", paddingLeft: "20px" }}>&#8358; {loanamount}</p>
              </div>

              <div style={{ marginTop: "40px" }}>
                <p style={{ color: "#FFF", paddingLeft: "20px", fontSize: "12px" }}> {loanrequestdate}

                  <span style={{ float: "right" }}>

                    <Link className="" href={currentLoanId} eventKey="6" activeClassName="is-active" >
                      <button className="paynowbutton" style={{ float: "right" }}>Repay <i className="fas fa-long-arrow-alt-right"></i></button>
                    </Link>


                  </span>
                </p>
              </div>
            </div>


          </div>
          <hr style={{ marginTop: "60px" }} />


          <div className="row">
            <div className="col-md-6 quickservicesrow">
              <p className="quickservices">Quick Services</p>
              <div className="row">


                <div className="col-md-2 col-3 qloan1">
                  <p style={{ textAlign: "center" }}>
                    <Image className="" src="/images/quickloan.svg" width="24" height="24"/></p>
                  <Link href="/loan" eventKey="10" style={{cursor:"pointer"}}>
                    <p style={{cursor:"pointer"}} className="quickloan">Quick Loan</p>
                  </Link>
                </div>




                {/* <div className="col-md-2 col-3 qloan2">
    <p style={{textAlign:"center"}}><Image className="" src="images/addpayment.svg"/></p>
    <Nav.Link as={Link} to="/transfer" eventKey="10">
    <p className="quickloan">Transfer</p>
    </Nav.Link>
    </div> */}




                <div className="col-md-2 col-3 qloan3">
                <p className="quickloan" style={{ textAlign: "center" }}>
                <Image className="" src="/images/support2.svg" width="24" height="24"/>
                </p>
                  <Link href="/support" eventKey="10">
                  <p  className="quickloan" style={{ textAlign: "center", cursor:"pointer" }}>
                       Support
                    
                       </p>
                  </Link>
               
                </div>




                <div className="col-md-2 col-3 qloan4">
                <p className="quickloan" style={{ textAlign: "center" }}>
                <Image className="" src="/images/loanhistory.svg" width="24" height="24"/>
                </p>
                  <Link href="/loan/history" eventKey="10">
                    <p className="quickloan" style={{ textAlign: "center", cursor:"pointer" }}>
                      History
                      </p>

                  </Link>
                </div>


              </div>
              <hr style={{ marginTop: "60px" }} />

              <div className="">
                {/* <Row>
<div className="col-md-6 col-6 homepage1box2">
<Image className='img-fluid' style={{width:"", height:""}} src="images/phoneimg.svg" alt="" />
</div>

                  <div className="col-md-6 col-6">
                      <h1 class="box7herotitle">
                      Credisol coming soon to your<br/>
                      mobile devices.
                      </h1>


</div>
                  


                </Row> */}
              </div>
            </div>

            <div className="col-md-6">
              <div className="row">
                <div className="col-md-2 col-4">
                  <p className="quickservices transactionsmobile">Transactions </p>
                </div>

                <div style={{ marginTop: "30px" }} className="col-md-4 col-4 homeallloansbar">

                  <Form.Select className="transactionsselect" size="lg" onChange={filterTransaction}>
                    <option value="">All Transactions</option>
                    <option value="providus inflow">Deposit</option>
                    <option value="providus outflow">Withdrawal</option>
                    <option value="internal outflow">Loan Disbursement</option>
                    <option value="internal inflow">Loan Repayment</option>

                  </Form.Select>

                </div>

                <div className="col-md-4"></div>
              </div>
              <div className='homepagenotransactions'>
                <p style={{ textAlign: "center" }}><Image className="" src="/images/noloan.svg" width="104" height="105"/></p>
                <p className="loansareavailable">You dont have any<br />transaction yet</p>
                <p className="loansareavailablenote">Access any of our available loans at very low <br />interest rate to begin</p>
              </div>

              <div className='homepagetransactions'>
                <table className="table css-serial homepagetransactionstable" >
                  <thead className="thead-dark">
                    <tr className="ippisschedulehead">

                      <th className="ippiscol0" scope="col"></th>
                      <th className="ippiscol0" scope="col"> ID</th>

                      <th className="ippiscol0" scope="col">TRANSACTION TYPE</th>
                      <th className="ippiscol0" scope="col">AMOUNT (&#x20A6;)</th>
                      <th className="ippiscol0" scope="col">DATE</th>
                      {/* <th class="ippiscol0" scope="col">ACTION</th> */}





                    </tr>
                  </thead>
                  <tbody id="records_table">
                  </tbody>
                </table>
              </div>


            </div>

          </div>

        </div>
      </div>




    </div>




  )


}


export { Home as default }