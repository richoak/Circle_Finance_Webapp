import React, {Fragment} from "react"
import Head from "next/head"
import Limited from "../../components/Limited"

const LimitedPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Limited | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Limited/>
</Fragment>
   
  )
}

export default LimitedPage