import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Invest.module.css'

// import "../js/main.js"


const CompletedInvestments  = () => {
  



    return (
  <>
    <div style={{marginTop:"70px", width:"400px"}}>




    <Image style={{}} src="/images/noinvestment.svg" width="100" height="100" layout="intrinsic" alt="" />
    <p  className={classes.noinvestmenttitle}>No investments yet</p>
    <p className={classes.noinvestmentsubtitle}>Choose an investment vehicle to get started</p>
    </div>

    <div style={{marginTop:"60px", width:"700px"}}>
        <p className={classes.trending}>Trending Investments</p>
        <div className="row">
        <Link href="/invest/credit" style={{cursor:"pointer"}}  eventKey="2" >
        <div className="col-md-6">
            <div className={classes.trendinginvestment1}>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <span className={classes.dot}></span>
                </div>
                <div className="col-md-6">
                <p className={classes.trending}>Premium plus</p>
                <p className={classes.trendingname}>Credit Investment</p>
                </div>
                </div>
            </div>
           
            </div>
            </Link>

            <Link className="" href="/invest/credit" style={{cursor:"pointer"}}  eventKey="2" >
            <div className="col-md-6">
            <div className={classes.trendinginvestment2}>
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-2">
                <span className={classes.dot}></span>
                </div>
                <div className="col-md-6">
                <p className={classes.trending}>Premium</p>
                <p className={classes.trendingname}>Credit Investment</p>
                </div>
                </div>
              </div>
            </div>
            </Link>
        </div>
    </div>
  </>
  


    )
    
    
}


export {CompletedInvestments as default}