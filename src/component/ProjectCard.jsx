"use client"

import { ArrowUpRight, Palette } from "lucide-react"

const ProjectCard = ({ project }) => {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d0d]">

      {/* Preview */}
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[#141414]">

        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,255,104,0.18),transparent_70%)]" />

        {/* Number */}
        <div className="pointer-events-none relative z-10 text-center transition duration-500 group-hover:scale-110">
          <span className="text-7xl font-black text-white/[0.04]">
            {project.number}
          </span>

          <p className="mt-2 text-sm uppercase tracking-[0.3em] text-pink">
            Project
          </p>
        </div>

        {/* Arrow */}
        <div className="pointer-events-none absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20 p-7">

        <p className="text-sm text-pink">
          {project.number}
        </p>

        <h2 className="mt-2 text-3xl font-black">
          {project.title}
        </h2>

        <p className="mt-4 leading-relaxed text-white/50">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="relative z-50 mt-7 flex gap-5">

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 flex cursor-pointer items-center gap-2 font-bold text-pink hover:text-pink-light"
          >
            Live site
            <ArrowUpRight size={16} />
          </a>

          {project.Palette && project.Palette !== "#" && (
            <a
              href={project.Palette}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-50 flex cursor-pointer items-center gap-2 font-bold text-white/60 hover:text-white"
            >
              <Palette size={16} />
              Code
            </a>
          )}

        </div>

      </div>
    </article>
  )
}

export default ProjectCard