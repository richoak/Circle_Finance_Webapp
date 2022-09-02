import React, {Fragment} from "react"
import Head from "next/head"
import Settings from "../components/Settings"

const SettingsPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Settings | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Settings/>
</Fragment>
   
  )
}

export default SettingsPage 