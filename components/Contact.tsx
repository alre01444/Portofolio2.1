export default function Contact() {
  return (
    <section id="contact" className="py-32 section-transition">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[8px] text-cyan-400">
            CONTACT
          </p>

          <h2 className="text-6xl font-black mt-5">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Have a project or want to collaborate? Feel free to contact me.
          </p>
        </div>

        {/* Lanyard */}
        <div className="flex justify-center mt-24">
          <div className="lanyard">

            <div className="lanyard-string"></div>

            <div className="lanyard-ring"></div>

            <div className="id-card rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden p-8">

              <img
                src="/image/Rayyan5.jpeg"
                alt="Ahmad Alrayyan"
                className="w-28 h-28 rounded-full mx-auto border-4 border-cyan-400 object-cover"
              />

              <h3 className="text-3xl font-bold text-center mt-5">
                Ahmad Alrayyan
              </h3>

              <p className="text-cyan-400 text-center mt-2">
                Frontend Developer
              </p>

              <div className="mt-8 space-y-4 text-left">
                <p>📧 ahmadalrayyan@gmail.com</p>
                <p>💻 github.com/Alre44</p>
                <p>📍 Palembang, Indonesia</p>
              </div>

              <div className="mt-8 flex justify-center gap-4">

                <a
                  href="https://github.com/USERNAME_KAMU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
                >
                  GitHub
                </a>

                <a
                  href="mailto:ahmadalrayyangg@gmail.com"
                  className="px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
                >
                  Email
                </a>

                <a
                  href="https://www.linkedin.com/in/USERNAME_LINKEDIN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition"
                >
                  LinkedIn
                </a>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}