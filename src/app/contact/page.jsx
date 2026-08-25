"use client"

import { ArrowUpRight, Mail, MapPin, Send, CheckCircle} from "lucide-react"
import { useState } from "react"
import Reveal from "@/src/component/Reveal"


const page = () => {
     const [status, setStatus] = useState("idle")
     const [sent, setSent] = useState(false);
     const handleSubmit = async (event) => {
          event.preventDefault();
          setStatus("sending");

          const form = event.currentTarget;
          const formData = new FormData(form);
          const data = {
               name: formData.get("name"),
               email: formData.get("email"),
               subject: formData.get("subject"),
               message: formData.get("message"),
          }

          try {
               const response = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                         "Content-type": "application/json",
                    },
                    body: JSON.stringify(data),
               });

               const result = await response.json();
               if (!response.ok) {
                    throw new Error(result.message || "Something went wrong")
               }
                   setStatus("success"); 
                    form.reset();
          }

          catch (error) {
          console.error(error);
          setStatus("error");
     }
     } 
  return (
    <>
     <main className="grid-background min-h-screen px-5 pb-24 pt-36 md:px-10">
          <div className="mx-auto max-w-6xl">
               <Reveal>
                    <p className="text-sm font-bold uppercase tracking-[0.3em] text-pink">Contact</p>

                    <h1 className="mt-6 max-w-5xl text-6xl font-black tracking-[-0.05em] md:text-9xl">Let's <br /><span className="gradient-text">talk.</span></h1>
                    <p className="mt-8 max-w-xl leading-relaxed text-white/50">Have a project, collaboration, job opportunity or just a really interesting idea? <br /><span className="text-white">My inbox is less scary, I don't bite.</span></p>
               </Reveal>

               <div className="mt-20 grid gap-16 md:grid-cols-[0.8fr_1.2fr]">
                    <Reveal>
                         <div className="space-y-8">
                              <ContactItem 
                                   icon={<Mail />}
                                   title={"Email"}
                                   value={"falolaelizabeth093@gmail.com"}
                                   href={"mailto:falolaelizabeth093@gmail.com"}
                              />
                                <ContactItem 
                                   icon={<Send />}
                                   title={"Social"}
                                   value={"@thefalolaqueen"}
                                   href={"https://www.instagram.com/thefalololaqueen?igsi=MW5rbDljY29Idw%3D%3D&utm_source=qr"}
                              />
                         </div>
                    </Reveal>

                    <Reveal delay={0.15}>
                         <form action="" onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-10">
                              <div className="grid gap-6 md:grid-cols-2">
                                   <input placeholder="Jane Doe" label="Your name" name="name" className="focus:border-pink border border-transparent outline-none rounded"/>

                                   <input type="email" placeholder="Janedoe@email.com" label="Your email" name="email" className="focus:border-pink border border-transparent outline-none rounded"/>
                              </div>

                              <div className="mt-6">
                                   <input placeholder="I have a brilliant idea..." label="Subject" name="subject" className="focus:border-pink border border-transparent outline-none rounded" />
                              </div>

                              <div className="mt-6"><label htmlFor="" className="mb-2 block text-sm font-bold text-white/70">Tell me everything!</label>

                              <textarea name="message" required rows={7} placeholder="The more context, the better..." className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-pink" id=""></textarea>
                              </div>

                              <button type="submit" disabled={status === "sending"} className="pink-button mt-6 flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-bold">
                                   {status === "idle" && (
                                        <>
                                             Send Message
                                             <ArrowUpRight size={18}/>
                                        </>
                                   )}

                                   {status === "sending" && (
                                        <>
                                        Sending...
                                        </>
                                   )}

                                   {status === "success" && (
                                        <>
                                        Message sent!
                                        <CheckCircle size={18}/>
                                        </>
                                   )}

                                   {status === "error" && (
                                        <>
                                        Try again
                                        <ArrowUpRight size={18}/>
                                        </>
                                   )}
                              </button>

                              {status === "success" && (
                                   <p className="mt-4 text-center text-sm text-pink">Your message has landed safely in my inbox. Now, we pretend I'm not refreshing my inbox every 30 seconds.</p>
                              )}

                              {status === "error" && (
                                   <p className="mt-4 text-center text-sm text-red-400">Something went wrong; you're probably not done. Please try again.</p>
                              )}
                         </form>
                    </Reveal>
               </div>
          </div>
          </main> 
    </>
  )
}


function Input ({
     label, name, placeholder, type="text", required = true,
}) {
     return( 
          <div>
               <label htmlFor={name} className="mb-2 block text-sm font-bold text-white/70">{label}</label>

               <input type={type} name={name} id={name} required placeholder={placeholder} className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-white outline-none transition placeholder:text-white/20 focus:border-pink" />
          </div>
     )
}

function ContactItem ({icon, title, value, href}) {
     const content = (
          <div className="flex items-center gap-5">
               <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-black ">
                    {icon}
               </div>
               <div>
                    <p className="text-sm text-white/30">{title}</p>
                    <p className="mt-1 font-bold">{value}</p>
               </div>
          </div>
     );

     if (href) {
          return (
               <a href={href} className="group block transition hover:text-pink">{content}</a>
          )
     }
     return content;
}
export default page
