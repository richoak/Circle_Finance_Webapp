import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';

import Image from 'next/image';
import classes from './Home.module.css'



const Credittable  = (props) => {
    const [name, setname]= useState()
    // const [ isinvestment, setisinvestment ] = useState(false)
    // const [ transactions, settransactions ] = useState([])


    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])




    //   const transactions = [
    //     {
    //         "type":"Premium",
    //         "amount":"420,000",
    //         "date": "23 March, 2023",
    //         "duration":"5",
    //         "status":"Active"
    //     },
    //     {
    //         "type":"Premium plus",
    //         "amount":"300,000",
    //         "date": "23 January, 2023",
    //         "duration":"2",
    //         "status":"Active"
    //     },
    //     {
    //         "type":"R.E.I.F",
    //         "amount":"410,000",
    //         "date": "23 March, 2023",
    //         "duration":"3",
    //         "status":"Completed"
    //     },
    //     {
    //         "type":"Premium",
    //         "amount":"210,000",
    //         "date": "23 March, 2023",
    //         "duration":"4",
    //         "status":"Completed"
    //     },
    //     {
    //         "type":"Premium plus",
    //         "amount":"110,000",
    //         "date": "23 March, 2023",
    //         "duration":"6",
    //         "status":"Completed"
    //     },
    //   ]




      
    return (
        <>
        <div className={classes.investmentbox}>
    
        <div style={{marginTop:"10px",  width:""}}>
        <div className="row">
            

       {   props.isinvestment &&
       <>
     

            </> 
            }

            {
                !props.isinvestment && 
                <>
                <div className="col-md-7">
                <div className={classes.noactivitiesbox}>
                    <div className="row">
                    <div className="col-md-2">
                    <Image src="/images/notransaction.svg" layout="intrinsic" width="90" height="90" alt="" />
                        </div>
                        <div className="col-md-6">
                        <p  className={classes.noinvestmenttitle}>No transactions yet</p>
                        <p className={classes.noinvestmentsubtitle}>
                            Choose an investment vehicle to get started
                            </p>
                        </div>
            
                    </div>
         
                  </div>
                </div>
                </>
            }

{
                props.isinvestment && 
                <>
                <div className="col-md-11">
                <div className={classes.noactivitiesbox}>
                  
                <div className={classes.tablehead}>
                    <div className="row">
                        <div className="col-md-2">
                        <p className={classes.tableheadinner}>Product</p>
                     </div>

                     <div className="col-md-2">
                        <p className={classes.tableheadinner}>Amount</p>
                     </div>

                     <div className="col-md-2">
                        <p className={classes.tableheadinner}>Date</p>
                     </div>

                     <div className="col-md-2">
                        <p className={classes.tableheadinner}>Duration</p>
                     </div>

                     <div className="col-md-2">
                        <p className={classes.tableheadinner}>Status</p>
                     </div>
                     </div>
                </div>

            {  
            props.transactions.map((item) =>
                    (
                    <>
                    <div className="row">
                    <div className="col-md-2">
                    <p className={classes.tablebodyinner}>{item.type}</p>
                    </div>

                    <div className="col-md-2">
                    <p className={classes.tablebodyinner}>N{item.balance}</p>
                    </div>

                    <div className="col-md-2">
                    <p className={classes.tablebodyinner}>date</p>
                    </div>

                    <div className="col-md-2">
                    <p className={classes.tablebodyinner}>{item.duration} Months</p>
                    </div>

                    <div className="col-md-2">
                    <p className={classes.tablebodyinner}
                        style={{
                            backgroundColor: `${item.status =="pending" ? "#E6F0FF" : item.status =="Active" ? "#EDFFF0" :   "#000"    }`,
                            borderRadius:"24px",
                            paddingBottom:"5px",
                            paddingTop:"5px"
                        }}>
                        <span
                        style={{
                            backgroundColor: `${item.status =="Completed" ? "#4771B0" : item.status =="Active" ? "#10A83B" :   "#000"    }`,
                            marginRight:"6px"
                        }}
                        className={classes.activitiesdot}></span>{item.status}</p>
                    </div>
                  </div>
                  <hr />
                    </>
                 
                  ))}
                    
            
               
         
                  </div>
                </div>
                </>
            }


        </div>

    
    </div>
        </div>
            
        </>
    )}

    export {Credittable as default}