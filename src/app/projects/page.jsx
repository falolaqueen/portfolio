import React from 'react'
import ProjectCard from '@/src/component/ProjectCard'
import Reveal from '@/src/component/Reveal'
import { number } from 'framer-motion'
import { title } from 'framer-motion/client'
import { Palette } from 'lucide-react'

const project = [
     {
          number: "01",
          title: "Creative Portfolio",
          description: "A bold interactive portfolio designed to showcase creative work, skills and personality",
          tags: ["Next.js", "TailwindCSS", "React", "Javascript", "Framer Motion"],
          link: "https://elizabeth-falola.vercel.app",
          Palette: "https://github.com/falolaqueen",
     },

         {
          number: "02",
          title: "Web3 Website",
          description: "A bold and interactive website for a financial operating system built for efficiency and speed.",
          tags: ["Next.js", "TailwindCSS", "React", "Javascript", "Framer Motion"],
          link: "https://tulupay.com",
          Palette: "#",
     },

             {
          number: "03",
          title: "Creative Payout Website",
          description: "A payout website for making payment and financial services",
          tags: ["Next.js", "TailwindCSS", "React", "Javascript", "Framer Motion"],
          link: "https://smartpaygenie.com",
          Palette: "#",
     },
             {
          number: "04",
          title: "Web3 Website",
          description: "A bold and interactive website for a financial operating system",
          tags: ["Next.js", "TailwindCSS", "React", "Javascript", "Framer Motion"],
          link: "https://gateway.tulupay.com",
          Palette: "#",
     },
]
const page = () => {
  return (
    <>
     <main className='grid-background min-h-screen px-5 pb-24 pt-36 md:px-10'>
        <div className='mx-auto max-w-6xl'>
          <Reveal>
            <p className='text-sm font-bold uppercase tracking-[0.3em] text-pink'>Selected Work</p>
            <h1 className='mt-6 max-w-5xl text-6xl font-black tracking-[-0.05em] md:text-9xl'>Things I've <br /> <span className='gradient-text'>built.</span></h1>
            <p className='mt-8 max-w-2xl text-xl leading-relaxed text-white/50'>A collection of websites, experiments, designs and questionable amount of CSS.</p>
          </Reveal>

          <div className='mt-20 grid gap-6 md:grid-cols-2'>
            {project.map((project, index) => (
              <Reveal key={project.number} delay={index * 0.05}>
                <ProjectCard project={project}/>

              </Reveal>
            ))}
          </div>
        </div>
      </main> 
    </>
  )
}

export default page
