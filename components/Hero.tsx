"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
   <section className="relative min-h-screen overflow-hidden flex items-center pt-36 lg:pt-44  section-transition">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#1b1b1b_1px,transparent_1px),linear-gradient(90deg,#1b1b1b_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* Glow */}
      <div className="absolute right-0 top-0 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[8px] text-cyan-400 text-sm mb-5">
            Frontend Developer
          </p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl lg:text-8xl font-black leading-none"
          >
            Turning Ideas
            <br />
            Into
            <br />

            <span className="text-cyan-400">
              Digital Experiences
            </span>

          </motion.h1>

          <p className="text-gray-400 text-lg leading-9 mt-8 max-w-xl">

            Hi, I'm Ahmad Alrayyan.

            I create responsive websites with beautiful UI,
            smooth animations and clean code.

          </p>

          <div className="flex gap-5 mt-10">

            <button className="px-8 py-4 rounded-full bg-cyan-500 hover:scale-105 duration-300 font-semibold">
              Explore Work
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black duration-300">
              Download CV
            </button>

          </div>

        </div>

        {/* RIGHT */}
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500 blur-[100px] opacity-20 rounded-full" />

            <div className="relative w-[420px] h-[560px] rounded-[35px] overflow-hidden border border-cyan-400/30 shadow-2xl">

              <img
                src="/image/Rayyan3.jpeg"
                alt="Ahmad"
                className="w-full h-full object-cover"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}