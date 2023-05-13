import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './Invest.module.css'

// import "../js/main.js"


const ExploreInvestments  = () => {
    const [ isProfile, setisProfile ] = useState(true) 
    const [ isKin, setisKin ] = useState(false) 
    const [ isGovernment, setisGovernment ] = useState(false) 
    const [ isEmployment, setisEmployment ] = useState(false) 


const loadProfile = () => {
    setisProfile(true)
    setisKin(false)
    setisGovernment(false)
    setisEmployment(false)
}

const loadKin = () => {
    setisProfile(false)
    setisKin(true)
    setisGovernment(false)
    setisEmployment(false)
}

const loadGovernment = () => {
    setisProfile(false)
    setisKin(false)
    setisGovernment(true)
    setisEmployment(false)
}

const loadEmployment = () => {
    setisProfile(false)
    setisKin(false)
    setisGovernment(false)
    setisEmployment(true)
}

    return (
  <>
    <div style={{marginTop:"40px", width:"400px"}}>
    <p className={classes.noinvestmentsubtitle}>Choose an investment vehicle to get started</p>
    <div style={{marginTop:"40px", width:"700px"}}>
    
        <div className="row">
        <div className="col-md-6">
        <Link className="" href="/invest/credit"  eventKey="2" >
            <div style={{cursor:"pointer"}} className={classes.investmentvehicle1}>
            <div className="row">
                <div className="col-md-1"></div>
           
                <div className="col-md-10">
                <Image src="/images/credit.svg" width="40" height="40" layout="intrinsic" alt="" />
                <p className={classes.vehicletitle}>Credit</p>
                <p className={classes.trendingname}>Discover the right credit product that suits your need.</p>
                </div>
                </div>
            </div>
           </Link>
            </div>


            <div className="col-md-6">
            <Link className="" href="/invest/agriculture"  eventKey="2" >
            <div style={{cursor:"pointer"}}  className={classes.investmentvehicle2}>
                <div className="row">
                <div className="col-md-1"></div>
         
                <div className="col-md-10">
                <Image src="/images/agriculture.svg" width="40" height="40" layout="intrinsic" alt="" />
                <p className={classes.vehicletitle}>Agriculture</p>
                <p className={classes.trendingname}>learn more about our strides in Agriculture and how to invest</p>
                </div>
                </div>
              </div>
              </Link>
            </div>

            <div className="col-md-6">
            <Link className="" href="/invest/realestate"  eventKey="2" >
            <div style={{cursor:"pointer"}} className={classes.investmentvehicle3}>
            <div className="row">
                <div className="col-md-1"></div>
           
                <div className="col-md-10">
                <Image src="/images/realestate.svg" width="40" height="40" layout="intrinsic" alt="" />
                <p className={classes.vehicletitle}>Real Estate</p>
                <p className={classes.trendingname}>Discover the right credit product that suits your need.</p>
                </div>
                </div>
            </div>
           </Link>
            </div>


            <div className="col-md-6">
            <Link className="" href="/invest/portfolio"  eventKey="2" >
            <div style={{cursor:"pointer"}}  className={classes.investmentvehicle4}>
                <div className="row">
                <div className="col-md-1"></div>
         
                <div className="col-md-10">
                <Image src="/images/portfolio.svg" width="40" height="40" layout="intrinsic" alt="" />
                <p className={classes.vehicletitle}>Diversified Portfolio</p>
                <p className={classes.trendingname}>learn more about our strides in Agriculture and how to invest</p>
                </div>
                </div>
              </div>
              </Link>
            </div>
        </div>
    </div>
    </div>
  </>
  


    )
    
    
}


export {ExploreInvestments as default}