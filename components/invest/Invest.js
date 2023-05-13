import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Invest.module.css'
import Completedinvestments from './Completedinvestments'
import Exploreinvestments from './Exploreinvestments'
import Myinvestments from './Myinvestments'

// import "../js/main.js"


const Invest = () => {
    const [ isMyInvestments, setisMyInvestments ] = useState(true) 
    const [ isExploreInvestments, setisExploreInvestments ] = useState(false) 
    const [ isCompletedInvestments, setisCompletedInvestments ] = useState(false) 



const loadMyInvestments = () => {
    setisMyInvestments(true)
    setisExploreInvestments(false)
    setisCompletedInvestments(false)
}

const loadExploreInvestments = () => {
    setisMyInvestments(false)
    setisExploreInvestments(true)
    setisCompletedInvestments(false)
}

const loadCompletedInvestments = () => {
    setisMyInvestments(false)
    setisExploreInvestments(false)
    setisCompletedInvestments(true)
}


    return (
      
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
                  
     
              {/* <div className={classes.goback}>
              <Link className="" href="/account"  eventKey="2" >
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
              </Link>
              </div> */}

              <div style={{paddingTop:"40px", paddingBottom:"40px", width:"400px"}}>
              <div className="row">
        <div className="col-md-12">
            <div className={classes.summarybox}>
            <div className="row">
                <div className="col-md-1"></div>
             
                <div className="col-md-6">
                <p className={classes.investmentamount}>&#x20A6; 0.00</p>
                <p className={classes.investmentbalance}>Investment Balance</p>
                </div>
                </div>
            </div>
           
            </div>
            </div>
            </div>



    <div className={classes.personalprofileboxes}>
    <button onClick={loadMyInvestments} 
    className={isMyInvestments ? "profiletabbuttonsactive": "profiletabbuttons"}
    > 
    My Investments</button>

    <button onClick={loadExploreInvestments}  
    className={isExploreInvestments ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Explore investments</button>

    <button onClick={loadCompletedInvestments} 
    className={isCompletedInvestments ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Completed investments</button>

    </div>
    

      <div style={{width:"350px"}}>
            {
                isMyInvestments && (
                    <div>
                          <Myinvestments/>
                    </div>
                )
            }

            {
                isExploreInvestments && (
                    <div>
                        <Exploreinvestments/>
                    </div>
                )
            }

            {
                isCompletedInvestments && (
                    <div>
                    
                        <Completedinvestments/>
                    </div>
                )
            }





      </div>

              </div>
                </div>
                <div className="col-md-1"></div>
              </div>




                </div>
          </div>
         
   
 

    </div>

  


    )
    
    
}


export {Invest as default}