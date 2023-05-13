import React, {Fragment} from "react"
import Head from "next/head"
import Travelloan from "../../components/loan/Travelloan"

const TravelloanPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Travel loan | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Travelloan/>
</Fragment>
   
  )
}

export default TravelloanPage 