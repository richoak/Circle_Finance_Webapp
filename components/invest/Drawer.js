import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
// import "./styles.css";

const Drawer = ({ show }) => {
const [width, setWidth ] = useState()
useEffect(() => {
    setWidth(window.innerWidth);
}, [])

    
    // const windowWidth = useRef(window.innerWidth);

  const props = useSpring({
    
    left: show ? 655 - 300 : 1680,
    position: "absolute",
    top: 0,
    // backgroundColor: "#806290",
    height: "100vh",
    width: "2000px"
  });

  return (
    <animated.div style={props}>
      <div className="drawer">
 
        <div className="row">
            <div className="col-md-6">
            Animated Drawer
            </div>

            <div className="col-md-6">
            Animated Drawer!
                </div>
        </div>
        </div>
    </animated.div>
  );
};

export default Drawer;
