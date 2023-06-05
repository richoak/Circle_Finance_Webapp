import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';

import Image from 'next/image';
import classes from './Home.module.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';



const Homewallet  = () => {
    const [name, setname]= useState()
    const [ istransaction, setistransaction ] = useState(true)
      const notify = () => toast("Account number copied!");

    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])

    const copyClipboard = () => {
           notify()
    navigator.clipboard.writeText('0127602360')
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
        {
            "type":"Funding",
            "amount":"210,000",
            "date": "23 March, 2023",
            "description":"Bank transfer"
        },
        {
            "type":"Withdrawal",
            "amount":"110,000",
            "date": "23 March, 2023",
            "description":"Bank transfer"
        },
      ]

      
    return (
        <>
                <ToastContainer />
        <div className={classes.walletbox}>
        <p className={classes.wallettitle}>Wallet</p>
        <div style={{marginTop:"10px",  width:""}}>
        <div className="row">
            
                <div className={classes.walletdiv}>
                <div className="col-md-12">
                    <div>
                        <div className="row">
                            <div className="col-md-7">
                            <p className={classes.availablebalance}>Available balance</p>

                        <p className={classes.walletamount}>
                            <span className={classes.preamount}>N</span>
                            <span className={classes.amount}>0</span>
                            <span className={classes.preamount}>.00</span>
                        </p>
                       
                            </div>
                            <div className="col-md-5">
                                <div style={{marginLeft:"0px", marginTop:"20px"}}>
                                <p style={{textAlign:"center", }}><Image src="/images/providusbank.svg" layout="intrinsic" width="20" height="20" alt="" /></p> 
                            <p style={{textAlign:"center"}} className={classes.bankname}>PROVIDUS BANK</p>
                                </div>
                        
                            </div>
                        </div>

                      


                        <div style={{marginTop:"45px"}}>
                        <p style={{textTransform:"capitalize"}} className={classes.accountname}>{name} - Circle Finance</p>
                        <p className={classes.accountnumber}>0221117895 <Image className={classes.copyicon} onClick={copyClipboard} src="/images/copy.svg" layout="intrinsic" width="20" height="20" alt=""/></p>
                        </div>
                       
                    </div>
                </div>
            </div>


<div className={classes.wallettransactions}>
<div className="col-md-12">
                <div className="row">
                    <div className="col-md-6">
                        <p className={classes.transactionlist}>Wallet Transactions</p>
                    </div>
                    
                    <div className="col-md-6">

                    </div>
                 
                  { istransaction &&
                    transactions.map((item) =>
                    (
                        <div className="row" key={item.amount}>
                        <div className="col-md-2">
                            <Image  
                            src= {`${item.type == "Withdrawal" ? "/images/withdrawal.svg " : "/images/funding.svg" }`}
                            width="35" height="35" layout="intrinsic" alt=""/>
                        </div>
    
                            <div className="col-md-6">
                            <p className={classes.transactiontype}>{item.type}</p>
                            <p className={classes.transactiondate}>{item.date}</p>
                            </div>
    
                            {/* <div className="col-md-1">
                            </div> */}
    
                            <div className="col-md-4">
                            <p className={classes.transactiontype}>&#x20A6;{item.amount}</p>
                                <p className={classes.transactiondate}>{item.description}</p>
                            </div>
                        </div>
                    ))
                  }

{ !istransaction &&
                     <div className={classes.downloadapp2}>
                     <p  className={classes.downloadapptitle}>No transactions yet</p>
                     <p className={classes.downloadappsubtitle2}>Fund your account to get started</p>
   
                     <p className={classes.download2}>
                     <Image src="/images/notransactions.svg" layout="intrinsic" width="100" height="100" alt="" />
                
                     </p>
               
           </div>
                  }
                  
                </div>

                <div className="cardcontainer">
 <div className="card" id="card">
 {/* <div className="card-header">Settings</div> */}

 </div>
 </div>
 <div>

</div>



                
            </div>

</div>



     
        </div>

       
        <div className={classes.downloadapp}>
                  <p  className={classes.downloadapptitle}>Download our app</p>
                  <p className={classes.downloadappsubtitle}>Maecenas suspendisse velit nibh  
                  <br/>aliquam enim diam adipiscing risus<br/> quis. Velit.</p>

                  <p className={classes.download}>
                  <Image src="/images/appstore.svg" layout="intrinsic" width="100" height="100" alt="" />
                
                  <span style={{marginLeft:"10px"}}>
                  <Image style={{marginLeft:""}} src="/images/playstore.svg" layout="intrinsic" width="100" height="100" alt="" />
                  </span>

                  </p>
            
        </div>




    </div>
        </div>
            
        </>
    )}

    export {Homewallet as default}