"use client";

import { motion } from "framer-motion";

const journey = [
  {
    year: "2023",
    title: "Mulai Belajar Web Development",
    desc: "Belajar HTML, CSS, JavaScript dan mulai membuat website pertama.",
  },
  {
    year: "2024",
    title: "Belajar React & Tailwind CSS",
    desc: "Membangun berbagai landing page dan UI modern menggunakan React.",
  },
  {
    year: "2025",
    title: "Next.js & Full Stack",
    desc: "Mengembangkan aplikasi dengan Next.js, API, Database, dan Authentication.",
  },
  {
    year: "2026",
    title: "Frontend Developer",
    desc: "Fokus membuat website modern dengan performa tinggi dan UI premium.",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-40 px-8 section-transition">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">

  <p className="uppercase tracking-[8px] text-cyan-400">
    JOURNEY
  </p>

  <h2 className="text-7xl font-black mt-5">
    My Career
    <span className="text-cyan-400"> Timeline</span>
  </h2>

</div>

        <div className="relative">

  {/* Garis Tengah */}
  <div className="absolute left-1/2 top-0 h-full w-[2px] bg-white/10 -translate-x-1/2"></div>

  {journey.map((item, index) => (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative flex items-center mb-24 ${
        index % 2 === 0 ? "justify-start" : "justify-end"
      }`}
    >

      {/* Card */}
      <div className="w-[45%]">

        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl hover:border-cyan-400/40 duration-300">

          <p className="text-cyan-400 font-semibold">
            {item.year}
          </p>

          <h3 className="text-3xl font-bold mt-3">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-6 leading-8">
            {item.desc}
          </p>

        </div>

      </div>

      {/* Titik Timeline */}
      <div className="absolute left-1/2 -translate-x-1/2">

        <div className="w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_30px_#22d3ee] border-4 border-black"></div>

      </div>

    </motion.div>

  ))}

</div>
      </div>
    </section>
  );
}