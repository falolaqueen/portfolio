"use client"
import { useEffect, useState } from 'react'
import React from 'react'
const words = [
     "websites",
     "experiences",
     "interfaces",
     "cool things",
]

const TextRotate = () => {
     const [wordIndex, setWordIndex] = useState(0)
     // const [display, setDisplay] = useState("")
     const [text, setText] = useState("")
     const [deleting, setDeleting] = useState(false)

     useEffect (() => {
          const currentWord = words[wordIndex];
          const timeout = setTimeout(() => {
               if (!deleting) {
                    setText(currentWord.substring(0, text.length + 1 ))

                    if (text === currentWord) {
                         setDeleting(true);
                    }
               } else {
                    setText(currentWord.substring(0, text.length -1))

                    if (text === "") {
                         setDeleting(false);
                         setWordIndex((prev) => (prev + 1) % words.length) 
                    }
               }
          },
          !deleting && text === currentWord ? 1500 : deleting ? 60 : 100
     );
     return () => clearTimeout(timeout);
     }, [text, deleting, wordIndex]);
  return (
    <>
     <span className='text-pink'> {text}</span> 
     <span className='cursor'>|</span>
    </>
  )
}

export default TextRotate
