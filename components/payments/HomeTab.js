import React, { useEffect, useState, useReducer} from 'react';
import Link from 'next/link';
import Topbar from '../Topbar';
import Sidebar from '../Sidebar'
import Image from 'next/image';
import classes from './HomeTab.module.css'
import BeneficiariesTab from './BeneficiariesTab'
import DebitcardsTab from './DebitcardsTab'
import WalletTab from './WalletTab'




const HomeTab = () => {
    const [ isWallet, setisWallet ] = useState(true) 
    const [ isBeneficiaries, setisBeneficiaries ] = useState(false) 
    const [ isDebitcards, setisDebitcards ] = useState(false) 
 


const loadWallet = () => {
    setisWallet(true)
    setisBeneficiaries(false)
    setisDebitcards(false)
}

const loadBeneficiaries = () => {
    setisWallet(false)
    setisBeneficiaries(true)
    setisDebitcards(false)

}

const loadDebitCards = () => {
    setisWallet(false)
    setisBeneficiaries(false)
    setisDebitcards(true)
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
                {/* <div className="col-md-1"></div> */}

                <div className="col-md-9">
                <div className="accountbox">
                  
              {/* <div className="row accounttop">
              <div className="col-md-1 col-3">
                <p>
                <Image  className="" src="/images/userface.svg" width="58" height="58"/>

                </p>
              </div>

              <div className="col-md-2 col-4">
              <p > <span className="loansareavailable2 ">John Doe</span> <br/><span  className="accountemail">johndoe@gmail.com</span></p>  
              </div>
              </div> */}
              <div className={classes.goback}>
              {/* <Link className="" href="/account"  eventKey="2" >
              <Image style={{cursor:"pointer"}} src="/images/back.svg" width="20" height="20" layout="intrinsic" alt="" />
              </Link> */}
              </div>
    
    <div className={classes.personalprofileboxes}>
    <button onClick={loadWallet} 
    className={isWallet ? "profiletabbuttonsactive": "profiletabbuttons"}
    > 
    My Wallet
    </button>

    <button onClick={loadBeneficiaries}  
    // className={classes.button}
    className={isBeneficiaries ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Saved Beneficiaries</button>

    <button onClick={loadDebitCards} 
    className={isDebitcards ? "profiletabbuttonsactive": "profiletabbuttons"}
    > Debit Cards</button>
    


    </div>
    

      <div style={{width:"350px"}}>
            {
                isWallet && (
                    <div>
                        <WalletTab/>
                    </div>
                )
            }

            {
                isBeneficiaries && (
                    <div>
                        <BeneficiariesTab/>
                    </div>
                )
            }

            {
                isDebitcards && (
                    <div>
                        <DebitcardsTab/>
                    </div>
                )
            }

{
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


export {HomeTab as default}