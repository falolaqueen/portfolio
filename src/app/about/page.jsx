import React from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Camera, Code2, Heart, PenIcon } from 'lucide-react'
import Reveal from '@/src/component/Reveal'

const page = () => {
  return (
    <>
     <main className='grid-background min-h-screen px-5 pb-20 pt-36 md:px-10'>
          <div className='mx-auto max-w-6xl'>
               <Reveal>
                    <p className='text-sm font-bold uppercase tracking-[0.3em] text-pink'>About me</p>
                    <h1 className='mt-6 max-w-5xl text-6xl font-black tracking-[-0.05em] md:text9xl'>Developer.
                    <br />
                    <span className='stroke-text'>Creative.</span>
                    <br />
                    Human.
                    </h1>
               </Reveal>

               <div className='mt-24 grid gap-16 md:grid-cols-2'>
                    <Reveal>
                         <div className='text-xl leading-relaxed text-white/60'>
                              <p>I'm Queen, a creative developer who sits somewhere between design, technology and stortrelling.</p>

                              <p className='mt-6'>I love building digital experiences  that feels intentional. Not just a website, something with a personality.</p>

                              <p className='mt-6'>My approach is simple: understand the problem, make it look beautiful, then obsess over the details nobody asked for.</p>
                         </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                         <div className='glass rounded-3xl p-8'>
                              <p className='mb-6 text-sm font-bold uppercase tracking-widest text-pink'>Random Facts</p>

                              <div className='space-y-5'>
                                    <Fact icon={<Code2 size={18}/>} text="I just like writing code as much as I like complaining about bugs."/>
                                   <Fact icon={<Camera size={18}/>} text="I also enjoy photography and visual storytelling"/>
                                    <Fact icon={<BookOpen size={18}/>} text="I read. A lot. Sometimes when I should be sleeping."/>
                                     <Fact icon={<PenIcon size={18}/>} text="Writing is one of my favorite ways to process ideas."/>
                                      <Fact icon={<Heart size={18}/>} text="I care deeply about creating things that have meaning."/>
                              </div>
                         </div>
                        
                    </Reveal>
               </div>

               <section className='mt-32'>
                    <Reveal>
                         <p className='text-sm font-bold uppercase tracking-[0.3em] text-pink'>What I do</p>

                         <div className='mt-8 grid gap-4 md:grid-cols-2'>{[
                              "Frontend Development",
                              "Technical Sales",
                              "Customer support",
                              "Business Development",
                              "Brand and Visual Design",
                              "Digital Experiences"
                         ].map((item, index) => (
                              <div key={item} className='group flex items-center justify-between border-b border-white/10 py-6'>
                                   <div className='flex items-center gap-5'>
                                        <span className='text-sm text-pink'>0{index + 1}</span>
                                        <span className='text-2xl font-bold transition group-hover:translate-x-2'>{item}</span>
                                   </div>

                                   <ArrowRight className='text-white/20 transition group-hover:text-pink'/>
                              </div>
                         ))}</div>
                    </Reveal>
               </section>

               <div className='mt-24'><a href="/projects" className='pink-button inline-flex items-center gap-2 rounded-full px-7 py-4 font-bold '>See what I've built <ArrowRight size={18} /></a>
               </div>
          </div>
          </main> 
    </>
  )
}


function Fact ({icon, text}) {
     return(
          <div className='flex gap-4'>
               <div className='mt-1 text-pink'>
                    {icon}
               </div>
               <p className='text-white/60'>{text}</p>
          </div>
     )
}
export default page
