import React, {Fragment} from "react"
import Head from "next/head"
import Adminsignup from "../components/Adminsignup"

const AdminSignupPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Admin Sign Up | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Adminsignup/>
</Fragment>
   
  )
}

export default AdminSignupPage