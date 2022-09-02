import React, {Fragment} from "react"
import Head from "next/head"
import Transfertowallet from "../components/Transfertowallet"

const TransferToWalletPage = () => {
  return (
    <Fragment>
    <Head>
    <title>Transfer to wallet | Credisol </title>
    <meta 
    name="description" 
    content="Quick Loans"/>  
    </Head>  
    <Transfertowallet/>
</Fragment>
   
  )
}

export default TransferToWalletPage 