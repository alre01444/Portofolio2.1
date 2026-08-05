"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "E-Commerce Website",
    image: "/ezy-ecommerce-website-template.jpg",
    desc: "Website toko online modern menggunakan Next.js.",
    tech: ["Next.js", "Tailwind", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image: "/Project/Project1.png",
    desc: "Portfolio modern dengan animasi Framer Motion.",
    tech: ["React", "Next.js", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Admin Dashboard",
    image: "/lProject/elaadmin-dashboard-template.avif.avif",
    desc: "Dashboard admin responsive.",
    tech: ["React", "Tailwind", "Firebase"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section
  id="projects"
  className="relative py-36 px-8 overflow-hidden"
>
      <div className="absolute inset-0 bg-[linear-gradient(#181818_1px,transparent_1px),linear-gradient(90deg,#181818_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      <div className="max-w-7xl mx-auto">

      <p className="uppercase tracking-[8px] text-cyan-400">
  SELECTED WORKS
</p>

<h2 className="text-7xl font-black mt-4 leading-none">
  Pembuatan Prokjek
  <br />
  <span className="text-cyan-400">
    With Rayyan.
  </span>
</h2>

<p className="mt-8 text-gray-400 text-lg leading-8 max-w-2xl mb-20">
  Kumpulan project terbaik yang saya bangun menggunakan
  Next.js, React, Tailwind CSS, dan teknologi modern lainnya.
</p>
        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (

            <motion.div
  key={index}
  whileHover={{
    y: -15,
    scale: 1.03,
  }}
  transition={{ duration: 0.3 }}
  className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl hover:border-cyan-400/50 shadow-lg hover:shadow-cyan-500/20"
>
  <div className="overflow-hidden">
    <img
      src="/Project/Project1.png"
      alt="Rayyan"
      className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
    />
  </div>

  <div className="p-7">
    <h3 className="text-2xl font-bold">
      {project.title}
    </h3>

    <p className="mt-4 text-gray-400 leading-7">
      {project.desc}
    </p>

    <div className="flex flex-wrap gap-2 mt-6">
      {project.tech.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm"
        >
          {tech}
        </span>
      ))}
    </div>

    <div className="flex gap-4 mt-8">
      <a
        href={project.demo}
        target="_blank"
        className="flex items-center gap-2 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 duration-300"
      >
        <ArrowUpRight size={18} />
        Demo
      </a>

      <a
        href={project.github}
        target="_blank"
        className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black duration-300"
      >
        <FaGithub size={18} />
        GitHub
      </a>
    </div>
  </div>
</motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}