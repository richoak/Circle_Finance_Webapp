import React, {Fragment} from "react"
import Head from "next/head"
import History from "../../components/History"

const HistoryPage = () => {
  return (
    <Fragment>
    <Head>
    <title>History | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <History/>
</Fragment>
   
  )
}

export default HistoryPage