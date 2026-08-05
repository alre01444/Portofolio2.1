"use client";

const menu = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#journey" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center">

      <nav className="w-[92%] max-w-7xl rounded-full border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-5 flex items-center justify-between shadow-2xl">

        <h1 className="font-bold text-3xl">
          Ahmad<span className="text-cyan-400">.</span>
        </h1>

        <ul className="hidden lg:flex gap-10">
  {menu.map((item) => (
    <li key={item.name}>
      <a
        href={item.href}
        className="hover:text-cyan-400 duration-300"
      >
        {item.name}
      </a>
    </li>
  ))}
</ul>

      </nav>

    </header>
  );
}