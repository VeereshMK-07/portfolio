import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function App() {
  const [dark, setDark] = useState(true);
  const [showResume, setShowResume] = useState(false);
  const [trigger, setTrigger] = useState(0);
  const { scrollYProgress } = useScroll();

  // ✅ TYPEWRITER CONTROL (ONLY refresh + theme change)
  useEffect(() => {
    setTrigger((prev) => prev + 1);
  }, [dark]);

  // ✅ CURSOR GLOW EFFECT (APPLE STYLE)
  useEffect(() => {
    const glow = document.getElementById("cursor-glow");

    const move = (e) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={dark ? "bg-[#0f0f0f] text-white" : "bg-white text-black"}>

      {/* 🔥 CURSOR GLOW */}
      <div
        id="cursor-glow"
        className={`fixed w-40 h-40 rounded-full blur-3xl pointer-events-none z-0 transition ${
          dark ? "bg-white/10" : "bg-black/10"
        }`}
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* SCROLL BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between px-6 md:px-20 py-4 backdrop-blur-lg bg-white/10 z-40">
        <h1 className="font-bold">Veeresh</h1>

        <div className="flex gap-6 items-center">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>

          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-1 border rounded-lg"
          >
            {dark ? "🌙" : "☀️"}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-24 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* ✅ FIXED TYPEWRITER */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <Typewriter
              key={trigger}
              words={["Hi, I'm Veeresh 👋"]}
              typeSpeed={70}
              deleteSpeed={0}
              delaySpeed={1000}
              loop={false}
            />
          </h1>

          <p
            className={`mt-6 text-lg leading-relaxed max-w-xl ${
              dark ? "text-gray-400" : "text-gray-700"
            }`}
          >
            I build scalable full-stack applications with real-time
            capabilities, focusing on performance, clean architecture, and
            seamless user experience. Passionate about solving real-world
            problems through efficient backend systems and intuitive frontend
            interfaces.
          </p>

          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setShowResume(true)}
              className={`px-6 py-2 rounded-xl font-semibold ${
                dark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              Resume
            </button>

            <a
              href="https://github.com/VeereshMK-07"
              target="_blank"
              className="px-6 py-2 rounded-xl border"
            >
              GitHub
            </a>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.img
          src="/profile.jpg"
          alt="profile"
          className="w-64 h-64 md:w-[350px] md:h-[350px] rounded-full object-cover shadow-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true }}
        />
      </section>

      {/* WHAT I FOCUS ON */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-2xl font-semibold mb-6">What I Focus On</h2>

        <div className="grid md:grid-cols-3 gap-6 text-gray-400">
          <div>⚡ Scalable backend systems</div>
          <div>🔄 Real-time applications</div>
          <div>🎯 Clean UI & UX</div>
        </div>
      </section>

      {/* PROJECTS (UNCHANGED ✅) */}
      <section id="projects" className="py-24 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
            className="bg-white/5 border p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold">Zerodha Platform</h3>

            <p className="mt-3 text-gray-400">
              Built a full-stack trading platform with real-time data flow,
              portfolio tracking, and secure authentication.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap text-sm">
              <span className="border px-2 py-1 rounded">React</span>
              <span className="border px-2 py-1 rounded">Node</span>
              <span className="border px-2 py-1 rounded">MongoDB</span>
              <span className="border px-2 py-1 rounded">Express</span>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="https://zerodha-frontend-dzxz.onrender.com" target="_blank" className="px-4 py-2 bg-white text-black rounded-lg">
                Live
              </a>

              <a href="https://github.com/VeereshMK-07/zerodha-frontend" target="_blank" className="px-4 py-2 border rounded-lg">
                Code
              </a>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ rotateX: 8, rotateY: -8, scale: 1.05 }}
            className="bg-white/5 border p-6 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold">Wanderlust</h3>

            <p className="mt-3 text-gray-400">
              Developed a travel platform with maps, filters, authentication,
              and responsive UI.
            </p>

            <div className="flex gap-2 mt-4 flex-wrap text-sm">
              <span className="border px-2 py-1 rounded">React</span>
              <span className="border px-2 py-1 rounded">Express</span>
              <span className="border px-2 py-1 rounded">MongoDB</span>
              <span className="border px-2 py-1 rounded">Node</span>
              <span className="border px-2 py-1 rounded">Leaflet.js</span>
            </div>

            <div className="mt-6 flex gap-4">
              <a href="https://wander-lust-uyrf.onrender.com/listings" target="_blank" className="px-4 py-2 bg-white text-black rounded-lg">
                Live
              </a>

              <a href="https://github.com/VeereshMK-07/WanderLust" target="_blank" className="px-4 py-2 border rounded-lg">
                Code
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS  */}
      <section id="skills" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "JavaScript",
            "HTML/CSS",
            "Git",
            "REST APIs",
          ].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
              className={`p-4 rounded-xl text-center border transition duration-300 cursor-pointer ${
                dark
                  ? "border-gray-700 hover:bg-white hover:text-black"
                  : "border-gray-300 hover:bg-black hover:text-white"
              }`}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center border-t border-white/10">
        <p className="mb-4">Connect with me</p>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="https://www.linkedin.com/in/veeresh-kakamari/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/veeresh_kakamari07?utm_source=qr" target="_blank">
            <FaInstagram />
          </a>
        </div>

        <p className="mt-4">&copy; Veeresh Kakamari | All rights reserved</p>
      </footer>

      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] h-[90%] rounded-lg p-4 relative">
            <button
              onClick={() => setShowResume(false)}
              className="absolute top-2 right-4 text-black text-xl"
            >
              ✖
            </button>

            <iframe src="/Veeresh Resume.pdf" className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;