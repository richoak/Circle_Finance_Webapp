import React, { useEffect, useState, useReducer } from 'react';
import Image from 'next/image'
import Link from 'next/link';

import Topbar from './Topbar';

import "../js/main.js"
import $ from 'jquery'
import Pageloader from './Pageloader';
import Sidebar from './Sidebar'
import useHttp from '../hooks/use-http';

const Accountofficer = () => {

  const { isLoading, error, sendRequest:fetchAccountOfficer }  = useHttp();
  const [name, setName] = useState("")
  const [phone, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")



  useEffect(() => {

    const transformData = ((data) => {
      setName(data.first_name + " " + data.last_name)
      setPhoneNumber(data.phone_number)
      setEmail("mailto:" + data.email)
      $(".overlay").fadeOut(0);
  })


  fetchAccountOfficer({
      url: "https://credisol-app.herokuapp.com/v1/users/" + localStorage.getItem("creditofficer") + "/",
      method: "GET",
      headers: { 
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + localStorage.getItem("access_token")
      }
  }, transformData)
  }, [])

  return (

    <div>
      <Pageloader />
      <div class="row thesidebarrow">
        <div class="col-md-2 thesidebar">
          <Sidebar />
        </div>

        <div class="col-md-10">
          <Topbar />

          <Link className="goback" href="/loan" activeClassName="is-active" >
            <p class="loansareavailable2 " style={{ paddingLeft: "20px", cursor:"pointer" }}><img className="" src="/images/arrow-left.svg" /> <span class="gobackp">Back</span></p>
          </Link>

          <div class="row" style={{ marginLeft: "0px" }}>
            <div class="col-md-3 col-12">
              <p style={{ textAlign: "center" }}>
                <Image className="aoimage"
                  width={132.5} 
                  height={132.5} 
                
                  src="/images/samuel.jpg" /></p>

              <div class="accountofficerdetails">
                <p className="accountofficername">{name}</p>
                <p className='accountofficertitle'>Account Officer</p>
              </div>


              <p class="" style={{ textAlign: "center" }} >
                <a href={phone}>
                  <button className="callbutton">
                    <img className="" src="/images/call.svg" />
                    <span style={{ fontWeight: "bold", paddingLeft: "10px", }}>{phone} </span>

                  </button>
                </a>
              </p>

              <p class="" style={{ textAlign: "center" }} >
                <a href={email}>
                  <button className="emailbutton"><img className="" src="/images/sms.svg" />

                    <span style={{ fontWeight: "bold", paddingLeft: "10px" }}> Send an email

                    </span>
                  </button>
                </a>
              </p>

            </div>
          </div>







        </div>
      </div>




    </div>




  )


}


export { Accountofficer as default }