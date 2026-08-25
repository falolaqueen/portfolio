import React from 'react'
import { Code2, Palette, Icon, icons, Sparkles } from 'lucide-react'

const skills = {
     development: {
          icon: <Code2 size={22}/>,
          title: "Development", 
          text: "Next.js, React, Javascript, Tailwind CSS & enough debugging to question my life choices",
     },

     design: {
          icon: <Palette size={22}/>,
          title: "Design",
          text: "Figma, Visual system, Responsive layouts and an unhealthy appreciation for good typography",
     },

      creative: {
          icon: <Sparkles size={22}/>,
          title: "Creative",
          text: "Branding, content, stroytelling and making ordinary ideas feel a little less ordinary",
     },

}
const SkillCard = ({type}) => {
     const skill = skills[type];

     if (!skill) {
          return null;
     }
  return (
    <>
      <div className='group glass rounded-3xl p-7 transition duration-300 hover:-translate-y-2 hover:border-pink/40'>
          <div className='mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink text-black transition duration-300 group-hover:rotate-6'>
               {skill.icon}
          </div>

          <h3 className='text-2xl font-black'>{skill.title}</h3>
          <p className='mt-3 leading-relaxed text-white/50'>{skill.text}</p>
      </div>
    </>
  )
}

export default SkillCard
