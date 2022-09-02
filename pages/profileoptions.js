import React, {Fragment} from "react"
import Head from "next/head"
import Profileoptions from "../components/profileoptions"

const ProfileOptionsPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Profile Options | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Profileoptions/>
</Fragment>
   
  )
}

export default ProfileOptionsPage 