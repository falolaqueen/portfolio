"use client"
import Link from 'next/link'
import { Menu, X } from "lucide-react";
import { useState } from 'react';
import React from 'react'

const links = [
     {name: "Home", href: "/"},
     {name: "About", href: "/about"},
     {name: "Projects", href: "/projects"},
     {name: "Contact", href: "/contact"},
     // {name: "Home", href: "/"},
]

const Navbar = () => {

     const [open, setOpen] = useState(false);
  return (
    <>
     <header className='fixed left-0 top-0 z-50 w-full px-5 py-5 md:px-10'>
          <nav className='glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3'>
               <a href='/' className='text-2xl font-black tracking-tighter' onClick={() => setOpen(false)}>
               Q<span className='text-pink'>.</span>
               </a>

               <div className='hidden items-center gap-8 md:flex'>
                    {links.map((link) => (
                         <a key={link.href}
                         href={link.href} className='group relative text-sm text-white/60 transition hover:text-white'>
                              {link.name}
                              <span className='absolute -bottom-1 left-0 h-[2px] w-0 bg-pink transition-all duration-300 group-hover:w-full'></span>
                         </a>
                    ))}
               </div>

               <a href="/contact" className='pink-button hidden rounded-full px-5 py-2 text-sm font-bold md:block'>Let's talk</a>
               <button onClick={()=> setOpen(!open)} className='rounded-full p-2 md:hidden' aria-label='Toggle menu'>
                    {open ? <X size={22} /> : <Menu size={22} />}
               </button>
          </nav>

          {open && (
               <div className='glass mx-auto mt-2 max-6-6xl rounded-3xl p-5 md:hidden'>
                    <div className='flex flex-col gap-2'>
                         {links.map((link) => (
                              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className='rounded-2xl px-4 py-4 text-lg transistion hover:bg-white/5 hover:text-pink'>{link.name}</a>
                         ))}
                    </div>
               </div>
          )}
          </header> 
    </>
  )
}

export default Navbar
