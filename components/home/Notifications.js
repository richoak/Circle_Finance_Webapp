import React, { useEffect, useState, useReducer} from 'react';
import { Container, Row, Button, Nav, Form, Accordion, Col } from 'react-bootstrap'
import Link from 'next/link';

import Image from 'next/image';
import classes from './Home.module.css'
import $ from 'jquery'



const Homenotifications  = () => {
    const [name, setname]= useState()
    const [ isnotifications, setisnotifications ] = useState(true)

    useEffect(() => {
        setname(localStorage.getItem("firstname") + " " + localStorage.getItem("lastname"))
      },[])

      useEffect(() => {
        var button = document.getElementById('filterbutton');
    
    
    button.addEventListener('click', function(e){
   
        $(".cardcontainer").show();
        var left = $('#card').offset().left;
        $("#card").css({left:left}).animate({"left":"0px"}, "slow");
    });
    button.addEventListener('focusout', function(e){
        $(".cardcontainer").hide();
        var right = $('#card').offset().right;
        $("#card").css({right:right}).animate({"right":"0px"}, "slow");
    });
    
    }, [])

    const notifications = [
        {
            "title":"New Investment Vehicle",
            "body":"Dear Client, we added a new",
            "status":"Unread"
        },

        {
            "title":"Letter from our C.E.O",
            "body":"Dear Client, we added a new",
            "status":"Unread"
        },

        {
            "title":"New Notification",
            "body":"Dear Client, we added a new",
            "status":"Unread"
        },

        {
            "title":"New Notification",
            "body":"Dear Client, we added a new",
            "status":"Unread"
        },
        
    ]



      
    return (
        <>
        <div className={classes.investmentbox}>
        <p className={classes.investmenttitle}>Notifications</p>
        <div style={{marginTop:"10px",  width:"", height:""}}>
        <div className="row">
            

       {   isnotifications &&
       <>
     
       <div className="col-md-12">
            <div className={classes.homenotifications}>

            {
                    notifications.map((item) =>
                    (
                        <>
                            <div className={classes.singlenotification}  id="filterbutton" >
                        <div className="row">
                         
                            <div className="col-md-2">
                        <Image 
                       src="/images/closenotification.svg"
                        // src= {`${item.status == "Unread" ? "/images/closenotification.svg " : "/images/opennotification.svg" }`}
                        layout="intrinsic" width="50" height="50" alt="" />
                            </div>
        
                        <div className="col-md-10">
                        <p className={classes.notificationtitle}>{item.title}</p>
                        <p className={classes.notificationsubtitle}>{item.body}</p>
                        </div>
                            </div>
                
                        </div>  
                        </>
                    
                    ))
            }


 

       

                
                </div>      
                
            </div>

  
            </> 
            }

            {
                !isnotifications && 
                <>
                <div className="col-md-12">
                <div className={classes.nonotificationbox}>
                <p  className={classes.nonotificationtitle}>No new notifications</p>
         
                  </div>
                </div>
                </>
            }


<div className="cardcontainer">
 <div className="card" style={{}} id="card">
 {/* <div className="card-header">Settings</div> */}
 <div className="card-body" style={{paddingTop:"50px", paddingBottom:"50px", borderRadius:"100px"}}>
            <p style={{textAlign:"left", fontWeight: "700", fontSize: "22px"}}>Donec lacus cras mauris risus egestas. Eget vel sit posuere euismod.</p>
        <hr />
        <p style={{color:"#7D8799"}}>
        Gravida parturient aliquet placerat eu vestibulum posuere bibendum faucibus. Sed eget faucibus justo vulputate tortor sed in. Ut risus augue pretium neque potenti sed diam ut vitae. Cursus in non interdum urna elementum lectus. Sed laoreet elit faucibus venenatis egestas amet et mi. Lectus nullam facilisis vitae risus nibh. Ornare massa habitasse quis tincidunt urna. Sit proin lacus nibh turpis sed. Ut porttitor tempus egestas lectus eu morbi mauris est. Mauris morbi lorem nibh posuere venenatis volutpat ultricies ultrices. Faucibus platea mi enim rutrum ante mollis morbi. Enim diam quis nisi lorem gravida eu rhoncus et.
</p>
<p style={{color:"#7D8799"}}>
Adipiscing hac aenean ipsum suscipit egestas amet lorem rhoncus egestas. Amet in sem donec mattis vel cras. Sollicitudin viverra neque morbi sit ut quis iaculis. Ac at volutpat nulla id. Urna ut vulputate odio ultricies donec volutpat neque. Nunc cum ac lorem laoreet ullamcorper egestas eu risus porttitor. Massa congue justo potenti nisl erat. Phasellus eros mi faucibus ut augue enim.
</p>
<p style={{color:"#7D8799"}}>
Elit nec enim volutpat tristique. Et id lorem mattis mi vitae. Fames nulla ultrices amet ut. Nulla amet venenatis sit tristique tempor. Ullamcorper nunc egestas lorem cum. Sed ac tellus donec ut quis duis aliquam cursus. Scelerisque vivamus commodo senectus et.
</p>
<hr />
<p style={{color:"#7D8799", fontWeight:"bold"}}>
March 24, 2023
</p>
 </div>
 </div>
 </div>
        </div>

    
    </div>
        </div>
            
        </>
    )}

    export {Homenotifications as default}