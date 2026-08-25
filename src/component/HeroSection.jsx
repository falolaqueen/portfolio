"use client"
import React from 'react'
import { useState, useEffect } from 'react'
const words = ["Frontend developer", "Creative designer", "Problem solver", "Research analyst",]

const heroSection = () => {

     // export default function Typewriter () {

     // }
     const [wordIndex, setWordIndex] = useState(0)
     const [text, setText] = useState("")
     const [isDeleting, setIsDeleting] = useState(false)

     useEffect (() =>{
          const currentWord = words[wordIndex];
          const typingSpeed = isDeleting ? 50 : 100;
          const timer = setTimeout (() => {
               if (!isDeleting) {
               setText(currentWord.substring(0, text.length + 1));

               if (text === currentWord) {
                    setTimeout(() => setIsDeleting(true), 1200);

               }
               }
               else setText(currentWord.substring(0, text.length - 1));
               if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length); 
               }
          }, typingSpeed)

           return () => clearTimeout(timer)
     }, [text, isDeleting, wordIndex]);

    
  return (
    <>
    <section className='flex flex-col h-[50vh] justify-center items-center text-center'>
     <div className='flex justify-center items-center text-center'>
        <span className='font-medium text-[2rem]'>My name is <h1 className='font-bold text-[#f61c7e] text-[5rem]'>Queen-Elizabeth Falola</h1></span>
     </div>
     <div>
          <h3>I am a</h3>
          {text}
     </div>
    </section>
    </>
  )
}

export default heroSection
