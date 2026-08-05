"use client";

import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen py-40 px-8 overflow-hidden section-transition"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle,#00ffff22_1px,transparent_1px)] bg-[size:28px_28px]" />

      <div className="max-w-7xl mx-auto">

        {/* Judul */}
        <div className="text-center mb-24">

          <p className="uppercase tracking-[8px] text-cyan-400">
            ABOUT ME
          </p>

          <h2 className="text-7xl font-black mt-4">
            Building
            <span className="text-cyan-400">
              {" "}Modern
            </span>
            <br />
            Digital Experiences
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}
          <motion.div
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
          >

            <p className="text-cyan-400 uppercase tracking-[5px]">
              My Journey
            </p>

            <h3 className="text-3xl font-bold mt-5">
              Frontend Developer
            </h3>

            <p className="mt-6 text-gray-400 leading-8">
              Saya adalah Frontend Developer yang fokus membuat
              website modern menggunakan React, Next.js,
              Tailwind CSS, serta animasi interaktif.
            </p>

            <div className="mt-10 space-y-4">

              <div>✔ Responsive Website</div>

              <div>✔ Modern UI Design</div>

              <div>✔ Fast Performance</div>

              <div>✔ Clean Code</div>

            </div>

          </motion.div>

          {/* Center */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full" />

              <img
                src="/image/Rayyan4.jpeg"
                className="relative w-[340px] rounded-[35px] border border-cyan-400/30"
              />

            </div>

          </motion.div>

          {/* Right */}
          <div className="space-y-8">

            {/* Connect */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8"
            >

              <p className="text-cyan-400 uppercase tracking-[5px]">
                Find Me
              </p>

              <h3 className="text-3xl font-bold mt-4">
                Let's Connect
              </h3>

              <div className="flex gap-5 mt-8 text-3xl">

                <FaGithub className="cursor-pointer hover:text-cyan-400 duration-300"/>

                <FaLinkedin className="cursor-pointer hover:text-cyan-400 duration-300"/>

                <FaInstagram className="cursor-pointer hover:text-cyan-400 duration-300"/>

              </div>

            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">

              <div className="rounded-3xl border border-cyan-500/30 bg-white/5 p-8">

                <div className="text-5xl font-black">
                  10+
                </div>

                <div className="text-cyan-400 mt-3">
                  Projects
                </div>

              </div>

              <div className="rounded-3xl border border-cyan-500/30 bg-white/5 p-8">

                <div className="text-5xl font-black">
                  2+
                </div>

                <div className="text-cyan-400 mt-3">
                  Years
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}