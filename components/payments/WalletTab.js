import React, { useEffect, useState, useReducer, useRef} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './HomeTab.module.css'
import jwt from 'jsonwebtoken';
import { useRouter } from 'next/router';
import $ from 'jquery'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import "../js/main.js"


const WalletTab = () => {
  const router = useRouter();
  const notify = () => toast("Account number copied!");
    const startdateRef = useRef() 
    const enddateRef= useRef() 


  const [name, setname]= useState()
  const [ transactionselection , settransactionselection] = useState()
  const [ filteramount , setfilteramount ] = useState()
  const [ filterdate , setfilterdate ] = useState()
  const [ filterdiv , setfilterdiv] = useState()
  const [ sortdiv , setsortdiv] = useState()


  useEffect(() => {
    setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
  },[])

  const copyClipboard = () => {
    notify()
    navigator.clipboard.writeText('0127602360')

  }


// console.log(transactionselection)
   const showFilter = () => {

  
   }

     // $(document).ready(function () {
//    $('html').click(function (e) {
//     console.log(e.target.id)
//     if (e.target.id == 'filterbutton') {
//         $(".cardcontainer").show();
//         var left = $('#card').offset().left;
//         $("#card").css({left:left}).animate({"left":"0px"}, "slow");
//     } else {
//         // $(".cardcontainer").hide();
//         var right = $('#card').offset().right;
//         $("#card").css({left:right}).animate({"left":"0px"}, "slow");
//     }
// });
//    $(".cardcontainer").blur(function(){
//     $(".cardcontainer").hide();
//   });

useEffect(() => {
    var button = document.getElementById('filterbutton');
    var container =  document.getElementById('cardcontainer');



console.log(button)
console.log(container)
button.addEventListener('click', function(e){
    console.log("open div")
    setfilterdiv(true)
    setsortdiv(false)
    $(".cardcontainer").show();
    var left = $('#card').offset().left;
    $("#card").css({left:left}).animate({"left":"0px"}, "slow");
});

button.addEventListener('focusout', function(e){
  console.log("close div")
    $(".cardcontainer").hide();
    var right = $('#card').offset().right;
    $("#card").css({right:right}).animate({"right":"0px"}, "slow");
});

}, [])


useEffect(() => {
    var sortbutton = document.getElementById('sortbutton');
    sortbutton.addEventListener('click', function(e){
        setfilterdiv(false)
        setsortdiv(true)
        $(".cardcontainer").show();
        var left = $('#card').offset().left;
        $("#card").css({left:left}).animate({"left":"0px"}, "slow");
    });
    sortbutton.addEventListener('focusout', function(e){
        $(".cardcontainer").hide();
        var right = $('#card').offset().right;
        $("#card").css({right:right}).animate({"right":"0px"}, "slow");
    });
    
}, [])


const saveChanges = () => {
    $(".cardcontainer").hide();
}


  
  const transactions = [
    {
        "type":"Withdrawal",
        "amount":"420,000",
        "date": "23 March, 2023",
        "description":"Bank transfer"
    },
    {
        "type":"Funding",
        "amount":"300,000",
        "date": "23 January, 2023",
        "description":"Bank transfer"
    },
    {
        "type":"Withdrawal",
        "amount":"410,000",
        "date": "23 March, 2023",
        "description":"Bank transfer"
    },
  ]
// async function submitData() {
//   setLoading(true)
//   let obj = {
//     "firstName": firstnameRef.current.value,
//     "lastName": lastnameRef.current.value,
//     "email": emailRef.current.value,
//     "phoneNumber": phoneRef.current.value,
//     "relationship": relationshipRef.current.value,
//     "gender": genderRef.current.value,
//     "address": addressRef.current.value,
//     "state": stateRef.current.value
// }
  
//   console.log("obj", obj)
//   const privateKey = "3jvtGHNk5HPtDilbacHZCiT2LFxEEd0SLza3hInX9-A"
//   const data = jwt.sign(obj, privateKey)
//   let response
//   let responsedata
//   try{
//     response = await fetch("http://3.209.81.171:8000/api/v1/account/next-of-kin",{
//       method: "POST",
//        body: JSON.stringify({data}),
//       headers: {
//            'Content-Type': 'application/json',
//            'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
//            "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
//           },
//     })
//     responsedata = await response.json()
//           console.log("data",responsedata)
//      if (response.status == "400"){
//       setnotify(responsedata.message)
//       setLoading(false)
//       return
//     }
//     else{
//       setnotify(responsedata.message)
//       router.push(`/account`)
//     }
// } catch (error){
//       // console.log(error)
//     return
//   }
// }


// const saveChanges = () => {
//  if(firstnameRef.current.value == "" 
//  || lastnameRef.current.value == ""
//  || relationshipRef.current.value == ""
//  || genderRef.current.value == ""
//  || emailRef.current.value == ""
//  || phoneRef.current.value == ""
//  || addressRef.current.value == ""
//  || stateRef.current.value == ""
//  ){
//   setnotify("Missing details")
//   setLoading(false)
//   return
//  }
//  setnotify("")
// submitData()
// }

async function loadStatement() {
  let response
  let data

  try{
    response = await fetch('http://3.209.81.171:8000/api/v1/payment/wallet?page=1',{
      method: "GET",     
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'ClientKey':'RHVmtYMS8xWkdZU1hOREpQY3JjRVczVj',
        "Authorization": `Bearer ${localStorage.getItem("accesstoken")}`
          },
    })
    data = await response.json()
    console.log(data)
    // setallsavedcards(data.data.cards)
    // if(data.data.cards.length >0){
    //   setiscarddetails(true)
  
    // }
    // else{
    //   setiscarddetails(false)
    // }


      
  } catch (error){
      console.log(error)
    return
  }

}

useEffect(() => {
  loadStatement()
}, [])






    return (
      <>
         <div style={{marginTop:"40px", width:"900px"}}>
        <div className="row">
            <div className="col-md-6">
                <div>
                    <div className={classes.walletdiv}>
                        <div className="row">
                            <div className="col-md-6">
                            <p className={classes.availablebalance}>Available balance</p>
                        <p className={classes.walletamount}>
                            <span className={classes.preamount}>N</span>
                            <span className={classes.amount}>0</span>
                            <span className={classes.preamount}>.00</span>
                        </p>
                            </div>
                            <div className="col-md-6">
                              <div className={classes.bank}>
                              <p style={{textAlign:"center"}}><Image src="/images/providusbank.svg" layout="intrinsic" width="20" height="20" alt="" /></p> 
                            <p style={{textAlign:"center"}} className={classes.bankname}>PROVIDUS BANK</p>
                              </div>
                          
                            </div>
                        </div>

                      


                        <div className={classes.walletname}>
                        <p style={{textTransform:"capitalize"}} className={classes.accountname}>{name} - Circle Finance</p>
                        <p className={classes.accountnumber}>0221117895 <Image className={classes.copyicon} onClick={copyClipboard} src="/images/copy.svg" layout="intrinsic" width="20" height="20" alt=""/></p>
                        </div>
                       
                    </div>

                    <div>
        
        <ToastContainer />
      </div>
                </div>
            </div>

            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-6">
                        <p className={classes.transactionlist}>Transaction List</p>
                    </div>
                    
                    <div className="col-md-6">
                        <div className={classes.controller}>
                        <button className={classes.sortbutton} style={{marginRight:"7px", marginTop:"0px"}}  id="sortbutton" >
                    <Image style={{cursor:"pointer", paddingTop:"0px"}} src="/images/sort.svg" width="20" height="20" layout="intrinsic" alt="" />
                    </button>
                   
                    <span style={{marginRight:"10px"}}>
                    <Image style={{cursor:"pointer"}} src="/images/seperator.svg" width="10" height="10" layout="intrinsic" alt="" />
                    </span>
                               
                    <button id="filterbutton" className={classes.filterbutton}>Filter By
                      <span style={{marginLeft:"10px"}}>
                      <Image src="/images/reddown.svg" layout="intrinsic" style={{}} width="12" height="12" alt="" />
                      </span>
                              
                    </button>
                        </div>
           

                    
                    </div>
                    <hr style={{marginTop:"18px", marginBottom:"20px"}}/>
                  {
                    transactions.map((item) =>
                    (
                        <div className="row" key={item.amount}>
                        <div className="col-md-2">
                            <Image  src= {`${item.type == "Withdrawal" ? "/images/withdrawal.svg " : "/images/funding.svg" }`}
                            width="35" height="35" layout="intrinsic" alt=""/>
                        </div>
    
                            <div className="col-md-4">
                            <p className={classes.transactiontype}>{item.type}</p>
                            <p className={classes.transactiondate}>{item.date}</p>
                            </div>
    
                            <div className="col-md-1">
                            </div>
    
                            <div className="col-md-5">
                            <p className={classes.transactiontype}>&#x20A6;{item.amount}</p>
                                <p className={classes.transactiondate}>{item.description}</p>
                            </div>
                        </div>
                    ))
                  }
                  
                </div>

                <div className="cardcontainer" id="cardcontainer">
 <div className="card" id="card">
 {/* <div className="card-header">Settings</div> */}
 <div className="card-body" style={{paddingTop:"50px", paddingBottom:"50px", borderRadius:"100px"}}>
            {  filterdiv && (    <div>
                    <p className={classes.transactionmethod}>Select a date period</p>
                    <div className="row">
                        <div className="col-md-6">
                        <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Date of Birth</Form.Label>
                        <Form.Control ref={startdateRef} type="date"  placeholder=""/>
                        </div>
                        <div className="col-md-6">
                        <Form.Label className="emaillabel" style={{ color: "#7D8799", paddingTop: "5px", paddingBottom: "0px" }}>Date of Birth</Form.Label>
                        <Form.Control ref={enddateRef} type="date"  placeholder=""/>
                        </div>
                    </div>

                  <hr className={classes.filterhr}/>

                  <p className={classes.transactionmethod}>Transaction method</p>
                  <p 
                  className={classes.filteroptions} 
                  style={{
                    color: transactionselection == "Funding - Bank Transfer" ? "#DD3737" : "#808080"
                  }}
                  onClick = {()=>(
                    settransactionselection("Funding - Bank Transfer") 
                   
                    )}>Funding - Bank Transfer</p>
                  <hr/>

                  <p className={classes.filteroptions}
                     style={{
                        color: `${transactionselection == "Funding - Debit Card" ? "#DD3737" : "#808080"}`
                      }}
                  onClick = {()=>(settransactionselection("Funding - Debit Card"))}>Funding - Debit Card</p>
                  <hr/>
                  <p className={classes.filteroptions} 
                     style={{
                        color: `${transactionselection == "Withdrawal - Bank Transfer" ? "#DD3737" : "#808080"}`
                      }}
                  onClick = {()=>(settransactionselection("Withdrawal - Bank Transfer"))}>Withdrawal - Bank Transfer</p>
                  <hr/>
                  <p className={classes.filteroptions} 
                     style={{
                        color: `${transactionselection == "Withdrawal - Debit Card" ? "#DD3737" : "#808080"}`
                      }}
                  onClick = {()=>(settransactionselection("Withdrawal - Debit Card"))}>Withdrawal - Debit Card</p>


                  <button onClick={saveChanges}   className={classes.continuebutton}>Update Filter

         </button>
                  </div>)}


                  {  sortdiv && (    <div>
                    <p className={classes.transactionmethod}>Amount</p>
                    <p 
                  className={classes.filteroptions} 
                  style={{
                    color: filteramount == "Smallest" ? "#DD3737" : "#808080"
                  }}
                  onClick = {()=>(
                    setfilteramount("Smallest") 
                    )}>Smallest</p>
                  <hr/>

                  <p className={classes.filteroptions}
                     style={{
                        color: `${filteramount == "Largest" ? "#DD3737" : "#808080"}`
                      }}
                      onClick = {()=>(
                        setfilteramount("Largest") 
                        )}>Largest</p>
                
        
    
                    <hr className={classes.filterhr}/>
                  <p className={classes.transactionmethod}>Date</p>
                  <p 
                  className={classes.filteroptions} 
                  style={{
                    color: filteramount == "Earliest" ? "#DD3737" : "#808080"
                  }}
                  onClick = {()=>(
                    setfilteramount("Earliest") 
                    )}>Earliest</p>
                  <hr/>

                  <p className={classes.filteroptions}
                     style={{
                        color: `${filteramount == "Latest" ? "#DD3737" : "#808080"}`
                      }}
                  onClick = {()=>(
                    setfilteramount("Latest") 
                    )}>Latest</p>
                
        
    


                  <button onClick={saveChanges}   className={classes.continuebutton}>Update Filter

         </button>
                  </div>)}
 </div>
 </div>
 </div>
 <div>

</div>



                
            </div>
        </div>

    </div>
      </>
   
    )
    
    
}


export {WalletTab as default}