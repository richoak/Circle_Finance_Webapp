import React, { useEffect, useState, useReducer} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import classes from './Incompleteprofile.module.css'

// import "../js/main.js"


const Incompleteprofile  = () => {
  



    return (
  <>

<div className={classes.investmentbox}>

    <div style={{marginTop:"0px",  width:""}}>
    <div className="row">
        
            <div className="col-md-6">
            <div className={classes.noactivitiesbox}>
                <div className="row">
                <div className="col-md-2">
                    <p style={{textAlign:"center"}}>
                         <Image src="/images/redinfo.svg" layout="intrinsic" width="30" height="30" alt="" /></p>
               
                    </div>
                    <div className="col-md-10">
                    <Link className="" href="/account"  eventKey="2" >
                    <p  className={classes.noinvestmenttitle}>
                   
                    You need to update your <span style={{textTransfrom:"underline"}}>information</span> to start performing transactions 
                        </p>
                        </Link>
                    {/* <p className={classes.noinvestmentsubtitle}>
                        Choose an investment vehicle to get started
                        </p> */}
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


export {Incompleteprofile as default}