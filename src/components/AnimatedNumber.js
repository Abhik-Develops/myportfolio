"use client"

import { useRef, useEffect } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";

const AnimatedNumber = ({value}) =>{
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {duration: 3000});
    const isInView = useInView(ref, {once: true});
    
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])

    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0) <= value){
                ref.current.textContent = latest.toFixed(0);
            }
        })
    },[springValue, value])

    return (
        <span ref={ref}>0</span>
    )
}

export default AnimatedNumber