import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Credit.module.css'
import { animated, useTransition } from "react-spring";
import Premiumdrawer from './Premiumdrawer'
import Premiumplusdrawer from './Premiumplusdrawer'


const Credit  = () => {

    const [show, setShow] = useState();
    const [showPremiumplus, setShowPremiumplus] = useState();

    const transitions = useTransition(show, null, {

      from: { position: "fixed", opacity: 0, width: 0 },
      enter: { opacity: 1, width: 1000 },
      leave: { opacity: 0, width: 0 }
    });

    const transitionsPremiumplus = useTransition(showPremiumplus, null, {

        from: { position: "fixed", opacity: 0, width: 0 },
        enter: { opacity: 1, width: 1000 },
        leave: { opacity: 0, width: 0 }
      });

    


    return (
  <>





        <div>
          <div className="row thesidebarrow">
          <div className="col-md-2 thesidebar">
          <Sidebar/>
          </div>




              <div className="col-md-10">
              <Topbar/>

              <div className="row">


                <div className="col-md-9">
                <div className="accountbox">

              <div className={classes.goback}>
              <Link className="" href="/invest"  eventKey="2" >
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
              </Link>
              </div>
              <p style={{display:"inline-block", marginTop:"30px"}}>
              <span style={{float:"left", fontWeight:"bold", 
              color:"#A8B0BF"
              }}> Investments </span>
              <span style={{float:"left", paddingLeft:"10px", fontWeight:"bold", 
              color:"#E45E5E"
            }}> &gt; Credit</span>
         
            </p>
    <div style={{marginTop:"0px", width:"400px"}}>

    <div style={{marginTop:"40px", width:"700px"}}>
    
        <div className="row">
        <div className="col-md-12">
        {/* <Link className="" href="/invest/premium"  eventKey="2" > */}
            <div style={{cursor:"pointer"}} onClick={() => setShow((prevState) => !prevState)}>
            <div className={classes.creditbox}>
            <div className="row">
                
                <div className="col-md-2">
                <Image src="/images/premium.svg" style={{borderRadius:"10px"}} width="100" height="100" layout="intrinsic" alt="" />
                </div>
           
                <div className= {`col-md-10 ${classes.innerbox}`}>
             
                    <div className="row">
                             
                        <div className="col-md-4">
                        <p className={classes.vehicletitle}>Premium</p>
                        </div>
                        <div className="col-md-8">
                        <p className={classes.investmentrate}>9.4% Annual Return.</p>
                        </div>

                        <div className="col-md-4">
                        <p className={classes.trendingname}>Investment Type</p>
                        <p className={classes.trending}>Credit</p>
               
                        </div>
                        <div className="col-md-4">
                        <p className={classes.trendingname}>Minimum Amount</p>
                        <p className={classes.trending}>10,000,000.00</p>
                        </div>
                        <div className="col-md-4">
                        <p className={classes.trendingname}>Minimum Duration</p>
                        <p className={classes.trending}>12 Month(s)</p>
                        </div>
                    </div>
                    </div>
                
                </div>
                </div>
            </div>
           {/* </Link> */}
            </div>


            <div style={{marginTop:"30px"}} className="col-md-12">
        {/* <Link className="" href="/invest/premiumplus"  eventKey="2" > */}
            <div style={{cursor:"pointer"}} onClick={() => setShowPremiumplus((prevState) => !prevState)}>
            <div className={classes.creditbox}>
            <div className="row">
                
                <div className="col-md-2">
                <Image src="/images/premiumplus.svg" style={{borderRadius:"10px"}} width="100" height="100" layout="intrinsic" alt="" />
                </div>
           
                <div className= {`col-md-10 ${classes.innerbox}`}>
             
                    <div className="row">
                             
                        <div className="col-md-4">
                        <p className={classes.vehicletitle}>Premium plus</p>
                        </div>
                        <div className="col-md-8">
                        <p className={classes.investmentrate}>9.4% Annual Return.</p>
                        </div>

                        <div className="col-md-4">
                        <p className={classes.trendingname}>Investment Type</p>
                        <p className={classes.trending}>Credit</p>
               
                        </div>
                        <div className="col-md-4">
                        <p className={classes.trendingname}>Minimum Amount</p>
                        <p className={classes.trending}>10,000,000.00</p>
                        </div>
                        <div className="col-md-4">
                        <p className={classes.trendingname}>Minimum Duration</p>
                        <p className={classes.trending}>12 Month(s)</p>
                        </div>
                    </div>
                    </div>
                
                </div>
                </div>
            </div>
           {/* </Link> */}
            </div>

      {transitions?.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            >
              <animated.div style={{ width: props.width }} className="drawer">
                <Premiumdrawer/>                
              </animated.div>
              <div className="fill" onClick={() => setShow(false)} />
            </animated.div>
          )
      )}

{transitionsPremiumplus?.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              style={{ opacity: props.opacity }}
              className="overlay"
            >
              <animated.div style={{ width: props.width }} className="drawer">
                <Premiumplusdrawer/>                
              </animated.div>
              <div className="fill" onClick={() => setShowPremiumplus(false)} />
            </animated.div>
          )
      )}

  
        </div>
    </div>

    
    </div>
    
    </div>
    </div>
    </div>
    </div>
 </div>



 </div>
  </>
  


    )
    
    
}


export {Credit as default}