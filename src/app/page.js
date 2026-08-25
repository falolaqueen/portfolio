"use client"
import Link from "next/link"
import {
  ArrowDownRight, ArrowRight, Code2, Figma, Github, Sparkles,
} from "lucide-react"
import TextRotate from "../component/TextRotate";
import Reveal from "../component/Reveal";
import SkillCard from "../component/SkillCard";

export default function Home() {
  return (
    <>
    <main className="grid-background min-h-screen overflow-hidden">
      <section className="relative flex min-h-screen items-center px-5 pb-20 pt-32 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-8 flex items-center gap-3 text-sm text-white/50">
            <span className="h-2 w-2 rounded-full bg-pink pulse-pink">
            </span>
            Available for interesting projects
          </div>

          <h1 className="max-w-5xl text-[15vw] font-black leading-[0.82] tracking-[-0.08rem]md:text-[9rem]">
            Hi, I'm 
            <br />
            <span className="gradient-text">Queen.</span>
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-10 md:flex-row md:items-end">
            <div>
              <p className="max-w-xl text-xl leading-relaxed text-white/60 md:text-2xl">
              I design & build
               <TextRotate /> that looks good, feel good and - most importantly - actually work.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/projects" className="pink-button flex items-center gap-2 rounded-full px-6 py-3 font-bold">See my work <ArrowRight size={18}/></a>
                <a href="/about" className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-bold transition hover:border-pink hover:text-pink">More about me</a>
              </div>
            </div>
            
            <div className="float hidden text-right md:block">
                <div className="text-7xl">.</div>
                <p className="text-sm text-white/40">pixels & caffine
                <br />
                keeping the internet interesting
                </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 ">
        <ArrowDownRight size={28}/>
        </div>
      </section>

      <section className="overflow-hidden border-y border-white/10 bg-pink py-4 text-black">
        <div className="marquee pulse-pink flex w-max whitespace-nowrap">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center gap-8 px-4 text-2xl font-black uppercase md:text-4xl">
              <span>Creative Developer</span>
              <span>✦</span>
              <span>Creative Designer</span>
              <span>✦</span>
              <span>Problem Solver</span>
              <span>✦</span>
              <span>Professional Overthinker</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-32 md:px-10">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <Reveal>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-pink">A little context</p>

          <h2 className="text-5xl font-black tracking-tight md:text-7xl">I like making the internet <span className="gradient-text">less boring.</span></h2>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="text-lg leading-relaxed text-white/60">
              <p>I'm a creative developer who enjoys turning ideas into digital experiences that people actually want to interact with.</p>

              <p className="mt-6">I care about good and responsive design, clean code, tiny details and interfaces that make someone say, <span className="text-white">"Wait...this is actually really cool."</span></p>

              <a href="/about" className="mt-8 inline-flex items-center gap-2 font-bold text-pink">Get to know me <ArrowRight size={18}/></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-32 md:px-10">
       <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-pink">My toolkit</p>

          <div className="grid gap-4 md:grid-cols-3">
             <SkillCard type="development"   />
             <SkillCard type="design"   />
             <SkillCard type="creative"   />
          </div>
        </Reveal>
       </div>
      </section>

      <section className="px-5 pb-32 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-pink p-8 text-black md:p-16">
            <div className="relative z-10">
              <p className="mb-5 font-bold uppercase tracking-[0.3em]">Have an idea?</p>

              <h2 className="max-w-3xl text-5xl font-black leading-none tracking-tight md:text-8xl">Let's make something ridiculous.</h2>

              <a href="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full b-black px-7 py-4 font-bold text-[#ffffff] transition hover:scale-105">Start a conversation <ArrowRight size={18}/></a>
            </div>

            <div className="absolute -right-20 text-[20rem] leading-none opacity-10">
              .
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </>
  );
}


function Footer() {
  return (
    <>
    <footer className="border-t border-white/10 px-5 py-10 md:px-10">
    <div className="mx-auto flex max-w-6xl flex-col justify-between gap-5 text-sm text-white.40 md:flex-row">
      <p> 2026 Queen. Made with questionable amounts of caffeine</p>

      <div className="flex gap-5">
        <a href="https://github.com/falolaqueen" target="blank" className="transition hover:text-pink">Github</a>
      </div>
    </div>
    </footer>
    </>
  )
}