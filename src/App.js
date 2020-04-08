import './App.css';

import { useSpring, animated } from 'react-spring'

import React, { useEffect, useState, useRef } from "react";
import s from "./style.module.scss";

const Test = () => {
  const [state, setState] = useState(0);


  const props =  useSpring({config:{duration:500},to:{ width: state ? state +"%": "0%" },from:{width: "0%"}})
return (
    <div>
      <div className={s.container}>
        <div className={s.baseBlock} >
          <div>ABC</div>
          <div>ABC</div>
        </div>
        <animated.div className={s.dynamic} style={props}>
          <div className={s.colorBackground}>
            <div className={s.leftFloat}>ABC</div>
            <div className={s.rightFloat}>ABC</div>
            <Waves/>
          </div>
        </animated.div>
      </div>
      <button onClick={()=>setState(95)}>1233</button>
    </div>
  );
};

const Waves = (props)=>(
  <div>
    <svg className={s.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
         viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
      <defs>
        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"/>
      </defs>
      <g className={s.parallax}>
        <use xlinkHref="#gentle-wave" x="48" y="1" fill="rgba(255,255,255,0.2)"/>
        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.1)"/>
        <use xlinkHref="#gentle-wave" x="48" y="4" fill="rgba(255,255,255,0.3)"/>
        {/*<use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff"/>*/}
      </g>
    </svg>
  </div>
)
export default Test;