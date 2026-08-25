"use client"
import { useEffect, useState } from "react"

import React from 'react'

const CursorGlow = () => {

     const [position, setPosition] = useState({
          x: -200,
          y: -200,
     });

     useEffect(() => {
          const handleMouseMove = (event) => {
               setPosition({
                    x: event.clientX,
                    y: event.clientY,
               });
          };

          window.addEventListener("mousemove", handleMouseMove)

          return () => {
               window.removeEventListener("mousemove", handleMouseMove)
          }
     }, []);

  return (
    <>
    <div className="pointer-events-none fixed z-0 hidden h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full md:block" style={{
     left: position.x, 
     top: position.y,
     background: "radial-gradient(circle, rgba(199, 255, 209, 0.2), transparent 70%)",
    }} />
    </>
  )
}

export default CursorGlow