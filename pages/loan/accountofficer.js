import React, {Fragment} from "react"
import Head from "next/head"
import Accountofficer from "../../components/Accountofficer"

const AccountOfficerPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Account Officer | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Accountofficer/>
</Fragment>
   
  )
}

export default AccountOfficerPage
