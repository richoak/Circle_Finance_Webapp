import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Invest.module.css'

// import "../js/main.js"


const CompletedInvestments  = () => {
    const [ detailsbox, setdetailsbox ] = useState(true) 
    const [ showdetails, setshowdetails ] = useState(false) 




const showDetails = () => {
    setdetailsbox(false)
    setshowdetails(true)

}

const goback = () => {
    setdetailsbox(true)
    setshowdetails(false)
}



    return (
  <>
      <div style={{marginTop:"40px", width:"400px"}}>

<div style={{marginTop:"40px", width:"700px"}}>

    <div className="row">
    <div className="col-md-12">

        <div style={{cursor:"pointer"}}>
        <div className={classes.creditbox}>
        <div className="row">
            
       
            <div className= {`col-md-10 ${classes.innerbox}`}>

                <div className="row">
 { detailsbox &&          
 <div className="col-md-6">
                    <div className={classes.completedinvestmentbox} onClick={showDetails}>
               <div className="col-md-12">
                    <Image src="/images/pplus.svg" style={{borderRadius:"10px"}} width="300" height="200" layout="intrinsic" alt="" />
                    <p className={classes.vehicletitle}>Premium plus</p>
                   
                    </div>
                    <div className="col-md-10">
                    <p className={classes.completedinvestmentrate}>9.4% Annual Return</p>  

                    <div className="row">
                <div className="col-md-6">
                    <p className={classes.trending}>N10,000,000</p>       
                    </div>
                    <div className="col-md-6">
                    <p className={classes.completedinvestmentduration}>12 Month(s)</p>
                    </div>
                </div>
                    </div>            
                </div>        
                    </div>   
                      }


                    
        {   showdetails &&  
        <>
     
                    <div>
                    <div style={{marginBottom:"30px"}} className={classes.goback} onClick={goback}>
      
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
      
              </div>
                    <p  className={classes.moretitle}>Limited Partnership 
                    <span className={classes.statuspan} style={{}}>
                    <span >  
                        <Image src="/images/completed.svg"width="10" height="10" layout="intrinsic" alt="" /> 
                      </span>
                       <span className={classes.status} >
                        Completed
                    </span>
                    </span>
                
                    </p>
                    <p className={classes.moresubtitle}>This investment plan is targeted at HNIs with a goal to optimizing value from their finances. This product is ideal for clients seeking wealth management, cash flow management and specialized financial advisory services.</p>
                    <hr />
                    <p  className={classes.moretitle2}>Investment Summary</p>

  <div className="row summarybox">
    <div className="col-md-6 col-6 summarydiv1">
        <p  className="loansareavailablenote2">Investment amount</p>
        <p className="summaryhead">N300,000</p>

        <p  className="loansareavailablenote2">Investment rate</p>
        <p className="summaryhead">16% per annum</p>
     
        <p  className="loansareavailablenote2">Total payout balance</p>
        <p className="summaryhead">N5,000,000</p>

        <p  className="loansareavailablenote2">Monthly interest</p>
        <p className="summaryhead">N56,045,300.12</p>
    </div>

    <div className="col-md-6 col-6 summarybox2">
    <p  className="loansareavailablenote2">Investment amount</p>
        <p className="summaryhead">N300,000</p>

        <p  className="loansareavailablenote2">Investment rate</p>
        <p className="summaryhead">16% per annum</p>
     
        <p  className="loansareavailablenote2">Total payout balance</p>
        <p className="summaryhead">N5,000,000</p>

        <p  className="loansareavailablenote2">Monthly interest</p>
        <p className="summaryhead">N56,045,300.12</p>
        </div>
</div>
</div>  
</>
}
              
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


export {CompletedInvestments as default}