// App.js
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  FileText,
  Calendar,
  Award,
  Code,
  Download,
  Menu,
  X,
  ImageIcon,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Star,
  Trophy,
  Medal,
  ChevronRight,
  Building2
} from "lucide-react";

/**
 * Final sleek "Tech Professional" portfolio App.js
 * - Deep rose/black gradient background
 * - Framer Motion for smooth, subtle transitions
 * - Improved stat board, crisp media preview modal (static full-clarity)
 * - All original content preserved
 */

const Modal = ({ open, items = [], index = 0, onClose }) => {
  const [i, setI] = useState(index);

  useEffect(() => {
    if (open) setI(index);
  }, [index, open]);

  useEffect(() => {
    const handler = (e) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setI((p) => Math.max(0, p - 1));
      if (e.key === "ArrowRight") setI((p) => Math.min(items.length - 1, p + 1));
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, items.length, onClose]);

  if (!open || items.length === 0) return null;

  const current = items[i];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6"
      aria-modal="true"
      role="dialog"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl"
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* CONTENT */}
        <div className="relative bg-gradient-to-br from-rose-900/95 via-rose-800/85 to-black/80 rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
          {/* media area */}
          <div className="md:col-span-2 p-6 flex items-center justify-center bg-black/60">
            {current.type === "image" && (
              <img
                src={current.src}
                alt={current.alt || "Preview"}
                className="max-h-[78vh] w-auto max-w-full rounded-md object-contain shadow-lg"
                style={{ imageRendering: "auto" }} // ensures clarity
              />
            )}

            {current.type === "pdf" && (
              <div className="w-full h-[78vh] rounded-md overflow-hidden border border-rose-800">
                <iframe
                  src={current.src}
                  title={current.alt || "Document"}
                  className="w-full h-full"
                  frameBorder="0"
                />
              </div>
            )}

            {current.type === "external" && (
              <div className="w-full h-[78vh] flex items-center justify-center text-rose-100">
                <div className="text-center">
                  <p className="mb-4">Open external link</p>
                  <a
                    href={current.src}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-rose-600 hover:bg-rose-700 rounded-md text-white font-semibold"
                  >
                    Open original <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* sidebar */}
          <div className="p-5 md:p-6 bg-gradient-to-t from-black/20 to-black/10">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-rose-50">
                  {current.caption || current.alt || "Preview"}
                </h3>
                {current.description && (
                  <p className="text-sm text-rose-200 mt-2">{current.description}</p>
                )}
                <div className="mt-3 text-xs text-rose-300">Source: {current.src}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-rose-100"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="mt-6">
              <a
                href={current.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 rounded-md text-white font-semibold"
              >
                Open Original
                <ExternalLink size={14} />
              </a>

              {/* if pdf provide download */}
              {current.type === "pdf" && (
                <a
                  href={current.src}
                  download
                  className="ml-3 inline-flex items-center gap-2 px-3 py-2 border border-rose-700 text-rose-200 rounded-md hover:bg-rose-900/30"
                >
                  <Download size={14} />
                  Download
                </a>
              )}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-xs text-rose-300">
                <div>
                  <span className="font-semibold text-rose-50">{i + 1}</span> / {items.length}
                </div>
                <div>Tip: Esc closes • ← / → navigate</div>
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setI((p) => Math.max(0, p - 1))}
                  disabled={i === 0}
                  className={`px-3 py-2 rounded-md text-sm ${
                    i === 0 ? "bg-black/30 text-rose-500" : "bg-black/50 hover:bg-black/60 text-rose-100"
                  }`}
                >
                  Prev
                </button>
                <button
                  onClick={() => setI((p) => Math.min(items.length - 1, p + 1))}
                  disabled={i === items.length - 1}
                  className={`px-3 py-2 rounded-md text-sm ${
                    i === items.length - 1 ? "bg-black/30 text-rose-500" : "bg-rose-600 hover:bg-rose-700 text-white"
                  }`}
                >
                  Next
                </button>
                <div className="ml-auto text-sm text-rose-300">Quality: Full clarity</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const StatCard = ({ accent, title, value, subtitle, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.36 }}
      className="relative rounded-2xl p-5 bg-gradient-to-br from-black/50 to-black/40 border border-rose-800 shadow-lg"
    >
      <div className="flex items-start gap-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center shadow-inner"
          style={{
            background: `linear-gradient(135deg, ${accent}33, rgba(0,0,0,0.15))`,
            boxShadow: `0 6px 18px ${accent}22`
          }}
        >
          <div className="text-white">{icon}</div>
        </div>

        <div className="flex-1">
          <div className="flex items-baseline gap-3">
            <div className="text-3xl font-extrabold text-rose-50">{value}</div>
            <div className="text-xs text-rose-300 font-medium">{subtitle}</div>
          </div>
          <div className="mt-2 text-sm text-rose-200">{title}</div>

          {/* Decorative thin neon bar */}
          <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-rose-500 via-rose-600 to-rose-400/60" />
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalItems, setModalItems] = useState([]);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMedia = (items, index = 0) => {
    // items: [{ src, alt, caption, description, type }]
    setModalItems(items);
    setModalIndex(index);
    setModalOpen(true);
  };

  const nav = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "publications", label: "Publications" },
    { id: "skills", label: "Skills" },
    { id: "certificates", label: "Certificates" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" }
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen text-rose-50 bg-gradient-to-br from-rose-950 via-black to-rose-900">
      {/* NAV */}
      <nav
        className={`fixed w-full z-40 top-0 left-0 right-0 transition-all ${
          scrollY > 40 ? "backdrop-blur-md bg-black/50 border-b border-rose-900" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tight">Laksana</div>

            <div className="hidden md:flex items-center gap-3">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === n.id ? "text-white bg-rose-800/30" : "text-rose-300 hover:text-white hover:bg-rose-800/10"
                  }`}
                >
                  {n.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setMenuOpen((p) => !p)} className="p-2 rounded-md bg-black/30">
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/50 border-t border-rose-900">
            <div className="px-4 py-3 space-y-1">
              {nav.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="w-full text-left px-3 py-2 rounded-md text-rose-200 hover:bg-rose-800/10"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-5xl w-full px-6">
          <motion.div initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.45 }}>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="relative">
                <div className="w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-rose-700 to-rose-500 shadow-xl">
                  <div className="w-full h-full rounded-full bg-black/60 flex items-center justify-center overflow-hidden">
                    <img src="profile-photo.jpg" alt="Laksana Sriharan" className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <div className="absolute -right-4 -bottom-4 w-8 h-8 bg-rose-500 rounded-full shadow-lg" />
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold">Laksana Sriharan</h1>

              <p className="max-w-3xl text-rose-200">
                <span className="font-medium text-rose-50">Driven by Quality</span> | <span className="font-medium text-rose-50">Focused on Development</span> | <span className="font-medium text-rose-50">Curious in Research</span>
              </p>

              <div className="flex gap-3 items-center">
                <a href="https://linkedin.com/in/laksana-sriharan" className="p-3 rounded-xl bg-black/40 hover:scale-105 transition-transform" target="_blank" rel="noreferrer">
                  <Linkedin size={16} className="text-rose-200" />
                </a>
                <a href="https://github.com/laksana-sriharan" className="p-3 rounded-xl bg-black/40 hover:scale-105 transition-transform" target="_blank" rel="noreferrer">
                  <Github size={16} className="text-rose-200" />
                </a>
                <a href="https://medium.com/@laksana.sriharan" className="p-3 rounded-xl bg-black/40 hover:scale-105 transition-transform" target="_blank" rel="noreferrer">
                  <FileText size={16} className="text-rose-200" />
                </a>
              </div>

              <div className="mt-6 flex gap-4">
                <a href="Laksana_CV.pdf" download className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-semibold shadow">
                  <Download size={16} /> Download CV
                </a>
              </div>
            </div>
          </motion.div>

          {/* STAT BOARD */}
           <div className="mt-12 rounded-3xl bg-gradient-to-br from-pink-900 via-pink-800 to-rose-900 shadow-2xl p-8 max-w-5xl mx-auto border border-pink-700/30 backdrop-blur-sm">
      
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* OGPA */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-700/20 hover:border-amber-400/40 hover:scale-105 transition-all duration-300">
                  <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="goldGrad1" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FCD34D" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                        fill="url(#goldGrad1)"
                        style={{ filter: "drop-shadow(0 0 8px rgba(252,211,77,0.6))" }}
                      />
                    </svg>
                  </div>
                  <span className="text-pink-100 font-semibold text-sm mb-1">OGPA </span>
                  <span className="text-amber-400 font-bold text-3xl mb-1" style={{ textShadow: "0 0 20px rgba(252,211,77,0.5)" }}>3.81</span>
                  <span className="text-amber-400 font-bold text-s">First Class</span>
                </div>
              </div>

              {/* Years Experience */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-700/20 hover:border-amber-400/40 hover:scale-105 transition-all duration-300">
                  <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <defs>
                        <linearGradient id="goldGrad2" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#FCD34D" />
                          <stop offset="100%" stopColor="#F59E0B" />
                        </linearGradient>
                      </defs>
                      <path d="M3 7h18v14H3V7z" stroke="url(#goldGrad2)" strokeWidth="2" fill="none"/>
                      <path d="M16 7V5a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v2" stroke="url(#goldGrad2)" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span className="text-pink-100 font-semibold text-sm mb-1">Years Experience</span>
                  <span className="text-amber-400 font-bold text-3xl mb-1" style={{ textShadow: "0 0 20px rgba(252,211,77,0.5)" }}>1+</span>
                  <span className="text-amber-400 font-bold text-s">Industry / Research</span>
                </div>
              </div>

              {/* Publications */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-700/20 hover:border-amber-400/40 hover:scale-105 transition-all duration-300">
                  <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30">
                    <FileText size={28} className="text-amber-400" style={{ filter: "drop-shadow(0 0 8px rgba(252,211,77,0.6))" }}/>
                  </div>
                  <span className="text-pink-100 font-semibold text-sm mb-1">Publications</span>
                  <span className="text-amber-400 font-bold text-3xl mb-1" style={{ textShadow: "0 0 20px rgba(252,211,77,0.5)" }}>2</span>
                  <span className="text-amber-400 font-bold text-s">Articles & Papers</span>
                </div>
              </div>

              {/* Certifications */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                <div className="relative flex flex-col items-center p-6 bg-black/40 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-700/20 hover:border-amber-400/40 hover:scale-105 transition-all duration-300">
                  <div className="mb-3 p-3 rounded-full bg-gradient-to-br from-amber-400/10 to-yellow-500/10 border border-amber-400/30">
                    <Code size={28} className="text-amber-400" style={{ filter: "drop-shadow(0 0 8px rgba(252,211,77,0.6))" }}/>
                  </div>
                  <span className="text-pink-100 font-semibold text-sm mb-1">Certifications</span>
                  <span className="text-amber-400 font-bold text-3xl mb-1" style={{ textShadow: "0 0 20px rgba(252,211,77,0.5)" }}>5</span>
                  <span className="text-amber-400 font-bold text-s">Professional</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">
            About Me
          </motion.h2>
          <div className="text-rose-200 leading-relaxed text-lg bg-black/40 p-6 rounded-xl border border-rose-800">
            <p className="mb-4">
              Currently serving as an Instructor at the Faculty of Engineering, University of Sri Jayewardenepura, I actively contribute to innovative research initiatives and academic excellence. My foundation in technology is built on a BSc (Hons) in Computer Science from the University of Jaffna, earned through direct intake, and further strengthened by a Professional Graduate Diploma in IT from BCS, The Chartered Institute for IT.
            </p>
            <p className="mb-4">
              I bring hands-on industry experience from my internship at WSO2, where I worked with the Identity and Access Management (IAM) team. There, I gained practical exposure to enterprise-grade security solutions, DevOps practices, and performance testing in real-world software environments.
            </p>
            <p>
              Driven by a dual passion for research and development, I focus on building robust, scalable solutions while ensuring software quality through end-to-end testing and automation. I am always eager to collaborate with professionals in software development, academic research, and technology innovation.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-16 bg-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.36 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">
            Experience
          </motion.h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-rose-800/40" />

            {[{
              title: "Instructor",
              company: "Department of Computer Engineering – University of Sri Jayewardenepura",
              logo: "usj.png",
              link: "https://eng.sjp.ac.lk/computereng/",
              period: "July 2025 – Present",
              description: (
                <>
                  <ul className="list-disc list-inside text-rose-200 mb-2 space-y-1">
                    <li>Conducted undergraduate-level modules in Database Systems and Object-Oriented Programming, focusing on foundational theory, hands-on laboratory sessions, and the application of modern software engineering practices. Designed course content, assessments, and delivered lectures aimed at improving student understanding and industry readiness.</li>
                  </ul>
                </>
              )
            }, {
              title: "Research Assistant",
              company: "Department of Computer Engineering – University of Sri Jayewardenepura",
              logo: "usj.png",
              link: "https://eng.sjp.ac.lk/computereng/",
              period: "March 2025 - June 2025",
              description: (
                <>
                  <ul className="list-disc list-inside text-rose-200 mb-2 space-y-1">
                    <li>Contributed to academic research in software performance engineering. Collaborated with the Faculty of Medicine, University of Sri Jayewardenepura, on an interdisciplinary research project aimed at enhancing healthcare systems through technology.</li>
                  </ul>
                </>
              )
            }, {
              title: "Software Engineer – Intern",
              company: "WSO2",
              logo: "wso2.png",
              link: "https://wso2.com",
              period: "May 2024 – November 2024",
              description: (
                <>
                  <p className="mb-2">
                    <strong>Project:</strong> Performance Testing Automation & Visualization for Private Identity Cloud (PIC)
                  </p>
                  <ul className="list-disc list-inside text-rose-200 mb-2 space-y-1">
                    <li>Designed and automated performance test flows using JMeter integrated with Azure DevOps pipelines.</li>
                    <li>Scripted data publishing to Google Sheets and GitHub for version-controlled reporting.</li>
                    <li>Created interactive dashboards in Looker Studio for visual insights.</li>
                  </ul>
                  <p className="text-rose-200">
                    <strong>Technologies:</strong> JMeter, Azure DevOps, Google Sheets API, GitHub, Looker Studio, CI/CD Pipelines
                  </p>
                </>
              )
            }].map((job, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }} className="relative pl-20 pb-12">
                <div className="absolute left-6 w-4 h-4 bg-rose-600 rounded-full border-4 border-rose-950" />
                <div className="bg-black/40 border border-rose-800 rounded-xl p-6 shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <a href={job.link} target="_blank" rel="noreferrer" className="shrink-0">
                      <img src={job.logo} alt={job.company} className="w-10 h-10 rounded-full border border-rose-800 object-cover" />
                    </a>
                    <div>
                      <h3 className="text-xl font-semibold text-rose-50">{job.title}</h3>
                      <p className="text-rose-300 text-sm">{job.company}</p>
                      <p className="text-rose-400 text-sm mt-1 flex items-center"><Calendar size={14} className="mr-2" />{job.period}</p>
                    </div>
                  </div>
                  <div className="text-rose-200 text-sm leading-relaxed">{job.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">
            Education
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
              degree: "BSc (Hons) in Computer Science",
              school: "University of Jaffna",
              year: "Sep 2020 - Dec 2024",
              description: "OGPA: 3.81 / 4.00 – First Class Honours",
              logo: "uoj.jpeg"
            }, {
              degree: "Professional Graduate Diploma in IT (Level 6)",
              school: "BCS – The Chartered Institute for IT",
              year: "November 2021",
              description: "Focused on Software Engineering and Web Technologies",
              logo: "bcs.jpeg"
            }, {
              degree: "G.C.E. Advanced Level (Mathematics Stream)",
              school: "Hindu Ladies College, Colombo -06",
              year: "August 2018",
              description: (<ul><li>Chemistry - A, Combined Mathematics - B, Physics - C</li><li> Z-score: 1.354</li></ul>),
              logo: "school.jpeg"
            }, {
              degree: "G.C.E. Ordinary Level",
              school: "Hindu Ladies College, Colombo -06",
              year: "December 2014",
              description: (<ul><li>GCE O/L (2014) - 9A </li><li>GCE O/L (2015) Sinhala Language - A</li></ul>),
              logo: "school.jpeg"
            }].map((edu, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }} className="bg-black/40 border border-rose-800 rounded-xl p-5">
                <div className="flex items-start gap-4 mb-3">
                  <img src={edu.logo} alt={edu.school} className="w-12 h-12 rounded-full object-cover border border-rose-800" />
                  <div>
                    <h3 className="text-lg font-semibold text-rose-50">{edu.degree}</h3>
                    <p className="text-rose-300 text-sm">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-300 text-sm mb-3"><Calendar size={14} />{edu.year}</div>
                <div className="text-rose-200 text-sm">{edu.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-16 bg-black/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-center text-rose-50 mb-6">Projects</motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[{
              title: "Sri Lankan Currency Recognition for People with Visual Impairments using Convolutional Neural Network",
              description: "Developed a deep learning-based currency recognition system aimed at assisting visually impaired users in identifying banknotes accurately and independently. The system leverages ensemble learning to combine multiple models, improving recognition accuracy under varying conditions such as lighting, note damage, and background clutter. This project combines deep learning, computer vision, and assistive technology to deliver a practical, socially impactful solution.",
              tech: ["Python", "CNN", "YOLOv10"],
              link: "https://www.csc.jfn.ac.lk/wp-content/uploads/2024/10/Laksana.pdf",
              images: [
                { src: "Laksana.png", alt: "Poster", caption: "Poster", type: "image" },
                { src: "research_2.jpg", alt: "Poster Presentation", caption: "Poster Presentation at the Google ExploreCSR", type: "image" }
              ]
            }, {
              title: "Point of Sale (POS) system - Book Depot, Colombo",
              description: "Designed and developed a Point of Sale (POS) system tailored for a book depot in Colombo. The system supports sales transactions, inventory tracking, and customer management, streamlining day-to-day operations and improving overall efficiency. Key features include real-time stock updates, automated billing, and a user-friendly interface for staff. This project focused on addressing the practical needs of a retail environment, delivering a reliable solution that enhances both operational workflow and customer service.",
              tech: ["Laravel", "MySQL"],
              link: "https://github.com/Laksana-Sriharan/POS_Book_Depot",
            }].map((project, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.06 }} className="bg-black/40 border border-rose-800 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-rose-50 max-w-[75%]">{project.title}</h3>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-rose-300 hover:text-white">
                    <ExternalLink size={18} />
                  </a>
                </div>
                <p className="text-rose-200 mb-3 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech?.map((t, ti) => (
                    <span key={ti} className="px-3 py-1 rounded-full bg-rose-900/40 border border-rose-800 text-rose-200 text-xs">{t}</span>
                  ))}
                </div>

                {/* Images */}
                {project.images && (
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-rose-200"><ImageIcon size={16} /> <span className="text-sm">Project Screenshots</span></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.images.map((im, mIdx) => (
                        <div key={mIdx} className="rounded-md overflow-hidden border border-rose-800 cursor-pointer" onClick={() => openMedia(project.images, mIdx)}>
                          <img src={im.src} alt={im.alt} className="w-full h-44 object-contain bg-black/20" />
                          <div className="p-2 text-xs text-rose-200">{im.caption}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">Publications</motion.h2>

          <div className="space-y-4">
            {[{
              title: "Exploring the Capabilities of You Only Look Once (YOLO) Algorithm in Object Detection",
              publication: "ComSpective Vol. 5, Issue 1 — ICT Technical Magazine, Faculty of Computing, Sabaragamuwa University of Sri Lanka",
              date: "Accepted",
              link: "https://drive.google.com/file/d/1S3tRRFIRxCSB-eO5XZOxtyfR4HzE5msg/view?usp=sharing",
              image: "ComSpective-Vol-5-Issue-I.png",
              tags: null
            }, {
              title: "Enhancing Usability in Human-Computer Interaction",
              publication: "Kananiyam Vol. 06, Department of Computer Science, University of Jaffna",
              date: "Feb 2025",
              link: "https://www.society.jfn.ac.lk/compsoc/#kananiyam",
              image: "kananiyam.jpg",
              tags: ["UI / UX", "HCI", "Best Practices"]
            }].map((pub, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="bg-black/40 border border-rose-800 rounded-xl p-4 flex gap-4">
                <img src={pub.image} alt={pub.title} className="w-36 h-28 object-contain rounded-md border border-rose-800 cursor-pointer" onClick={() => openMedia([{ src: pub.image, alt: pub.title, caption: pub.publication, type: "image" }], 0)} />
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <h3 className="text-lg font-semibold text-rose-50">{pub.title}</h3>
                    <a href={pub.link} target="_blank" rel="noreferrer" className="text-rose-300 hover:text-white"><ExternalLink size={18} /></a>
                  </div>
                  <p className="text-rose-300 text-sm">{pub.publication}</p>
                  <div className="mt-2 inline-block bg-emerald-300 text-black text-xs font-semibold px-3 py-1 rounded-full">{pub.date}</div>

                  {pub.tags && <div className="mt-3 flex gap-2">{pub.tags.map((t, j) => <span key={j} className="text-xs px-2 py-1 bg-rose-900/40 rounded-full text-rose-200">#{t}</span>)}</div>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-16 bg-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">Skills</motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
              category: "Development",
              skills: ["Java", "Python", "OOP", "PHP", "Laravel"]
            }, {
              category: "Testing & DevOps",
              skills: ["JMeter", "Azure DevOps"]
            }, {
              category: "Tools & Databases",
              skills: ["Git", "Azure", "MySQL", "MongoDB"]
            }, {
              category: "Soft Skills",
              skills: ["Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"]
            }].map((g, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }} className="bg-black/40 border border-rose-800 rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Code size={18} className="text-rose-200" />
                  <h3 className="text-lg font-semibold text-rose-50">{g.category}</h3>
                </div>
                <ul className="text-rose-200 text-sm space-y-2">
                  {g.skills.map((s, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-500" />
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATES */}
      <section id="certificates" className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">Certifications</motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[{
              title: "WSO2 Certified Identity Server Practitioner -V7",
              issuer: "WSO2 Lanka (Pvt) Ltd",
              date: "June 2025",
              link: "https://certification.wso2.com/certificate/CID-04624018",
              logo: "wso2.png"
            }, {
              title: "BCS Professional Graduate Diploma in IT",
              issuer: "BCS | The Chartered Institute for IT",
              date: "November 2022",
              link: "https://drive.google.com/file/d/1ugMxBE32s0FfEe51WE0w0uZfwru_wrB5/view?usp=sharing",
              logo: "bcs.jpeg"
            }, {
              title: "BCS Diploma in IT",
              issuer: "BCS | The Chartered Institute for IT",
              date: "November 2021",
              link: "https://drive.google.com/file/d/1DGWhAOWTfNwK3_KFOG1WIiNvA5T9N_dl/view?usp=sharing",
              logo: "bcs.jpeg"
            }, {
              title: "BCS Certificate in IT",
              issuer: "BCS | The Chartered Institute for IT",
              date: "2021",
              link: "https://drive.google.com/file/d/1sYkd-k2_L1rzzafYNnoduwFYBQ6Nwfyx/view?usp=sharing",
              logo: "bcs.jpeg"
            }, {
              title: "Certificate in Web Application Design and Development",
              issuer: "National Institute of Business Management (NIBM - Sri Lanka)",
              date: "2021",
              link: "https://drive.google.com/file/d/1iOd1m_9OiTIFcNLNPWdshHlh6a6YeZHj/view?usp=sharing",
              logo: "nibm.jpg"
            }].map((cert, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.04 }} className="bg-black/40 border border-rose-800 rounded-xl p-4 flex items-start gap-4">
                <div className="w-16 h-16 rounded-lg flex-shrink-0 bg-black/60 flex items-center justify-center border border-rose-800">
                  <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain" onError={(e) => { e.target.style.display = "none"; }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-rose-50">{cert.title}</h3>
                  <div className="text-rose-300 text-sm">{cert.issuer}</div>
                  <div className="text-green-400 text-sm mt-1 flex items-center"><Calendar size={14} className="mr-2" />{cert.date}</div>
                  <div className="mt-3">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-700 hover:from-rose-700 hover:to-rose-800 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Verify Certificate</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section id="awards" className="py-16 bg-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">Awards & Recognition</motion.h2>

          <div className="space-y-4">
            {[{
              title: "Dean's List Award - Level 4S",
              organization: "University of Jaffna",
              description: "Recognized in the Dean's List for outstanding academic performance in BSc (Hons) in Computer Science – Level 4S, 2022, with a GPA of 3.74.",
              date: "March 2025",
              category: "Academic",
              hasImage: false,
              gpa: "3.74"
            }, {
              title: "Dean's List Award - Level 3S",
              organization: "University of Jaffna",
              description: "Recognized in the Dean's List for outstanding academic performance in BSc (Hons) in Computer Science – Level 3S, 2021, with a GPA of 3.78.",
              date: "Dec 2024",
              category: "Academic",
              hasImage: false,
              gpa: "3.78"
            }, {
              title: "David Pieris Best Academic Performance Award",
              organization: "D P Infotech (Pvt) Ltd",
              description: "Received an award for outstanding academic performance at the THALIR Seed Funding and University Talent Recognition event by David Pieris Holdings (Pvt) Ltd.",
              date: "May 2024",
              category: "Innovation",
              images: ["dp_award_1.jpg", "dp_award_2.jpg", "dp_award_3.jpg"],
              hasImage: true,
              special: true
            }, {
              title: "Dean's List Award - Level 2S",
              organization: "University of Jaffna",
              description: "Recognized in the Dean's List for outstanding academic performance in BSc (Hons) in Computer Science – Level 2S, 2020, with a GPA of 3.89.",
              date: "Dec 2023",
              category: "Academic",
              hasImage: false,
              gpa: "3.89"
            }, {
              title: "Dean's List Award - Level 1S",
              organization: "University of Jaffna",
              description: "Recognized in the Dean's List for outstanding academic performance in BSc (Hons) in Computer Science – Level 1S, 2019, with a GPA of 3.82.",
              date: "Dec 2022",
              category: "Academic",
              hasImage: false,
              gpa: "3.82"
            }].map((award, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.03 }} className={`p-4 rounded-xl border ${award.special ? "border-rose-600 bg-gradient-to-r from-rose-900/30 to-black/30" : "border-rose-800 bg-black/40"}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-xl ${award.special ? "bg-rose-600" : "bg-rose-700"}`}>
                      {award.special ? <Star className="text-white" /> : <Medal className="text-white" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-rose-50">{award.title}</h3>
                      <div className="text-rose-300 text-sm">{award.organization} {award.gpa && <span className="text-emerald-300 font-semibold">• GPA: {award.gpa}</span>}</div>
                    </div>
                  </div>

                  <div className="text-sm">
                    <div className="mb-2 flex items-center gap-2 text-green-300"><Calendar size={14} /> <span>{award.date}</span></div>
                    <div className="text-xs bg-black/40 px-3 py-1 rounded-full text-amber-300">{award.category}</div>
                  </div>
                </div>

                <p className="mt-3 text-rose-200">{award.description}</p>

                {award.hasImage && (
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {award.images.map((im, mIdx) => (
                      <div key={mIdx} className="rounded-md overflow-hidden border border-rose-800 cursor-pointer" onClick={() => openMedia(award.images.map(src => ({ src, alt: `${award.title}`, caption: award.title, type: "image" })), mIdx)}>
                        <img src={im} alt={`${award.title} ${mIdx + 1}`} className="w-full h-36 object-contain bg-black/20" />
                        <div className="p-2 text-xs text-rose-200">Award Image {mIdx + 1}</div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl md:text-3xl font-bold text-rose-50 text-center mb-6">Get In Touch</motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-rose-300" />
                <div>
                  <h4 className="text-rose-50 font-semibold">Email</h4>
                  <div className="text-rose-200">laksana.sriharan@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-rose-300" />
                <div>
                  <h4 className="text-rose-50 font-semibold">Phone</h4>
                  <div className="text-rose-200">+94 77 036 2516</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-rose-300" />
                <div>
                  <h4 className="text-rose-50 font-semibold">Location</h4>
                  <div className="text-rose-200">86 - 3/1, Fussels Lane, Wellawatte, Colombo - 06</div>
                </div>
              </div>
            </div>

            <div className="bg-black/40 border border-rose-800 rounded-xl p-4">
              <div className="space-y-3">
                <div>
                  <label className="text-sm text-rose-200">Name</label>
                  <input placeholder="Your Name" className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-rose-800 text-rose-100" />
                </div>
                <div>
                  <label className="text-sm text-rose-200">Email</label>
                  <input placeholder="your-email@gmail.com" className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-rose-800 text-rose-100" />
                </div>
                <div>
                  <label className="text-sm text-rose-200">Message</label>
                  <textarea rows={4} placeholder="Your message..." className="w-full mt-1 px-3 py-2 rounded-md bg-black/30 border border-rose-800 text-rose-100" />
                </div>
                <button onClick={() => alert("Contact functionality would be implemented here")} className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-rose-600 hover:bg-rose-700 text-white font-semibold">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black/30">
        <div className="max-w-4xl mx-auto px-6 text-center text-rose-300">© 2025 Laksana Sriharan. All rights reserved.</div>
      </footer>

      {/* Modal */}
      <Modal open={modalOpen} items={modalItems} index={modalIndex} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Portfolio;
