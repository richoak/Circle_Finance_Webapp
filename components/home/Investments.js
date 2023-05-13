import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';

import Image from 'next/image';
import classes from './Home.module.css'



const Homeinvestment  = () => {
    const [name, setname]= useState()
    const [ isinvestment, setisinvestment ] = useState(false)

    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])




      
    return (
        <>
        <div className={classes.investmentbox}>
        <p className={classes.investmenttitle}>Investments</p>
        <div style={{marginTop:"10px",  width:""}}>
        <div className="row">
            

       {   isinvestment &&
       <>
     
       <div className="col-md-4">
            <div className={classes.investmentbox2}>
                <div className="row">
                <div className="col-md-9">
                <p className={classes.investmenttitle2}>Credit Investment</p>
                <p className={classes.investmentamount}>
                            <span className={classes.preamount}>N</span>
                            <span className={classes.amount}>2,157,000</span>
                            <span className={classes.preamount}>.56</span>
                        </p>
                </div>
                <div className="col-md-2">
                <Image src="/images/growth.svg" layout="intrinsic" width="30" height="30" alt="" />
                    </div>
                </div>  
                </div>      
                
            </div>

            <div className="col-md-4">
            <div className={classes.investmentbox2}>
                <div className="row">
                <div className="col-md-9">
                <p className={classes.investmenttitle2}>Real Estate</p>
                <p className={classes.investmentamount}>
                            <span className={classes.preamount}>N</span>
                            <span className={classes.amount}>2,157,000</span>
                            <span className={classes.preamount}>.56</span>
                        </p>
                </div>
                <div className="col-md-2">
                <Image src="/images/growth.svg" layout="intrinsic" width="30" height="30" alt="" />
                    </div>
                </div>  
                </div>      
                
            </div>

            <div className="col-md-4">
            <div className={classes.investmentbox2}>
                <div className="row">
                <div className="col-md-9">
                <p className={classes.investmenttitle2}>Agriculture</p>
                <p className={classes.investmentamount}>
                            <span className={classes.preamount}>N</span>
                            <span className={classes.amount}>2,157,000</span>
                            <span className={classes.preamount}>.56</span>
                        </p>
                </div>
                <div className="col-md-2">
                <Image src="/images/growth.svg" layout="intrinsic" width="30" height="30" alt="" />
                    </div>
                </div>  
                </div>      
                
            </div>
            </> 
            }

            {
                !isinvestment && 
                <>
                <div className="col-md-7">
                <div className={classes.noinvestmentbox}>
                    <div className="row">
                        <div className="col-md-9">
                        <p  className={classes.noinvestmenttitle}>You do not have any investment yet</p>
                        <p className={classes.noinvestmentsubtitle}>Click on the button to pick an investment vehicle</p>
                  
                        </div>
                        <Link className="" href="/invest"  eventKey="2" >
                        <div style={{cursor:"pointer"}} className="col-md-3">
                        <Image src="/images/addinvestment.svg" layout="intrinsic" width="60" height="60" alt="" />
                            </div>
                            </Link>
                    </div>
         
                  </div>
                </div>
                </>
            }


        </div>

    
    </div>
        </div>
            
        </>
    )}

    export {Homeinvestment as default}