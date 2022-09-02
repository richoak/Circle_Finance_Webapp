import React, {Fragment} from "react"
import Head from "next/head"
import Profile from "../components/Profile"

const ProfilePage = () => {
  return (
    <Fragment>
    <Head>
    <title>Profile | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Profile/>
</Fragment>
   
  )
}

export default ProfilePage 