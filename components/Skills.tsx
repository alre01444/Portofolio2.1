"use client";

import {
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";

const skills = [
  { icon: SiHtml5, color: "#E34F26", x: 245, y: 20 },
  { icon: SiJavascript, color: "#F7DF1E", x: 430, y: 90 },
  { icon: SiReact, color: "#61DAFB", x: 70, y: 120 },
  { icon: RiNextjsFill, color: "#ffffff", x: 535, y: 240 },
  { icon: SiTailwindcss, color: "#38BDF8", x: 30, y: 300 },
  { icon: SiTypescript, color: "#3178C6", x: 430, y: 430 },
  { icon: FaNodeJs, color: "#3C873A", x: 120, y: 430 },
  { icon: SiFigma, color: "#A259FF", x: 340, y: 430 },
  { icon: SiGit, color: "#F05032", x: 245, y: 520 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-40 bg-[#050505] overflow-hidden section-transition"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[8px] text-cyan-400">
            SKILLS
          </p>

          <h2 className="text-6xl font-black mt-4">
            Tech Stack
          </h2>
        </div>

      <div className="relative w-[650px] h-[650px] mx-auto mt-24">

  {/* Background Glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="absolute w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse"></div>
  </div>

  {/* SVG */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none"
    viewBox="0 0 650 650"
  >
    <defs>
      <linearGradient
        id="lineGradient"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="50%" stopColor="#67e8f9" />
        <stop offset="100%" stopColor="#22d3ee" />
      </linearGradient>
    </defs>

    {skills.map((item, index) => {

      const startX = 325;
      const startY = 325;

      const endX = item.x + 36;
      const endY = item.y + 36;

      const controlX = (startX + endX) / 2;
      const controlY =
        (startY + endY) / 2 -
        Math.abs(endX - startX) * 0.18;

      return (
        <g key={index}>
          <path
            d={`M ${startX} ${startY}
                Q ${controlX} ${controlY}
                ${endX} ${endY}`}
            className="skill-path"
          />

          <circle
            cx={controlX}
            cy={controlY}
            r="3"
            className="skill-dot"
          />
        </g>
      );
    })}
  </svg>

  {/* FOTO */}
  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">

    <div className="profile w-56 h-56 rounded-full overflow-hidden border border-cyan-400">

      <img
        src="/image/Rayyan3.jpeg"
        alt="Ahmad"
        className="w-full h-full object-cover"
      />

    </div>

  </div>

  {/* ICON */}
   {skills.map((item, index) => {

    const Icon = item.icon;

    return (

      <div
        key={index}
        className="absolute skill-node floating"
        style={{
          left: item.x,
          top: item.y,
          animationDelay: `${index * .2}s`,
        }}
      >

        <div className="skill-circle">

          <div className="skill-glow"></div>

          <Icon
            size={34}
            color={item.color}
          />

        </div>

      </div>

    );

  })}

      </div>

    </div>

  </section>
  );
}