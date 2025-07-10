import React, { useState, useEffect } from 'react';
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
  Tag
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'awards', label: 'Awards' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Laksana
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id
                      ? 'text-purple-400 bg-purple-400/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 text-center px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm"></div>
        <div className="relative z-10">
          {/* Profile Image */}
          <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 shadow-lg">
            <img
              src="profile-photo.jpg"
              alt="Laksana Sriharan"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
            Laksana Sriharan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
             Driven by Quality | Focused on Development | Curious in Research
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/laksana-sriharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/laksana-sriharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full hover:bg-gray-800 transition-colors hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://medium.com/@laksana.sriharan"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-600 rounded-full hover:bg-green-700 transition-colors hover:scale-110 transform"
            >
              <FileText size={24} />
            </a>
          </div>

          {/* CV Button */}
          <a
            href="Laksana_CV.pdf"
            download
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-200 hover:scale-105 transform"
          >
            <Download size={20} className="mr-2" />
            Download CV
          </a>

          {/* Stats Board */}
          <div className="mt-16 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* OGPA */}
              <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="bg-purple-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Award size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-purple-200 transition-colors duration-300">3.81</h3>
                <p className="text-gray-400 text-sm mt-1">OGPA (First Class)</p>
              </div>

              {/* Experience */}
              <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="bg-blue-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Calendar size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-blue-200 transition-colors duration-300">1+</h3>
                <p className="text-gray-400 text-sm mt-1">Years Experience</p>
              </div>

              {/* Publications */}
              <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="bg-emerald-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FileText size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-emerald-200 transition-colors duration-300">2</h3>
                <p className="text-gray-400 text-sm mt-1">Publications</p>
              </div>

              {/* Certifications */}
              <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="bg-orange-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Code size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white group-hover:text-orange-200 transition-colors duration-300">5</h3>
                <p className="text-gray-400 text-sm mt-1">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed">
            <p className="mb-6">
              Currently serving as an Instructor at the Faculty of Engineering, University of Sri Jayewardenepura, I actively contribute to innovative research initiatives and academic excellence. My foundation in technology is built on a BSc (Hons) in Computer Science from the University of Jaffna, earned through direct intake, and further strengthened by a Professional Graduate Diploma in IT from BCS, The Chartered Institute for IT.
            </p>
            <p className="mb-6">
             I bring hands-on industry experience from my internship at WSO2, where I worked with the Identity and Access Management (IAM) team. There, I gained practical exposure to enterprise-grade security solutions, DevOps practices, and performance testing in real-world software environments.
            </p>
            <p>
              Driven by a dual passion for research and development, I focus on building robust, scalable solutions while ensuring software quality through end-to-end testing and automation. I am always eager to collaborate with professionals in software development, academic research, and technology innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>

            {[
              {
                title: "Instructor",
                company: "Department of Computer Engineering – University of Sri Jayewardenepura",
                logo: "usj.png",
                link: "https://eng.sjp.ac.lk/computereng/",
                period: "July 2025 – Present",
                description: (
                  <>
                    <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
                      <li>Conducted undergraduate-level modules in Database Systems and Object-Oriented Programming, focusing on foundational theory, hands-on laboratory sessions, and the application of modern software engineering practices. Designed course content, assessments, and delivered lectures aimed at improving student understanding and industry readiness.</li>
                    </ul>
                  </>
                )
                },
              {
                title: "Research Assistant",
                company: "Department of Computer Engineering – University of Sri Jayewardenepura",
                logo: "usj.png",
                link: "https://eng.sjp.ac.lk/computereng/",
                period: "March 2025 - June 2025",
                description: (
                  <>
                    <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
                      <li>Contributed to academic research in software performance engineering. Collaborated with the Faculty of Medicine, University of Sri Jayewardenepura, on an interdisciplinary research project aimed at enhancing healthcare systems through technology.</li>
                    </ul>
                  </>
                )
               
              },
              {
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
                    <ul className="list-disc list-inside text-gray-300 mb-2 space-y-1">
                      <li>Designed and automated performance test flows using JMeter integrated with Azure DevOps pipelines.</li>
                      <li>Scripted data publishing to Google Sheets and GitHub for version-controlled reporting.</li>
                      <li>Created interactive dashboards in Looker Studio for visual insights.</li>
                    </ul>
                    <p className="text-gray-300">
                      <strong>Technologies:</strong> JMeter, Azure DevOps, Google Sheets API, GitHub, Looker Studio, CI/CD Pipelines
                    </p>
                  </>
                )
              }
            ].map((job, index) => (
              <div key={index} className="relative pl-20 pb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-gray-900"></div>

                {/* Experience Card */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors shadow-md">
                  <div className="flex items-start gap-4 mb-4">
                    <a
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                    >
                      <img
                        src={job.logo}
                        alt={job.company}
                        className="w-10 h-10 rounded-full border border-white/20 object-cover hover:scale-105 transition-transform duration-200"
                      />
                    </a>
                    <div>
                      <h3 className="text-xl font-bold text-purple-300">{job.title}</h3>
                      <p className="text-gray-300 text-sm">{job.company}</p>
                      <p className="text-gray-400 text-sm mt-1 flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {job.period}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm leading-relaxed">{job.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Education Section */}
      <section id="education" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                degree: "BSc (Hons) in Computer Science",
                school: "University of Jaffna",
                year: "Sep 2020 - Dec 2024",
                description: "OGPA: 3.81 / 4.00 – First Class Honours",
                logo: "uoj.jpeg"
              },
              {
                degree: "Professional Graduate Diploma in IT (Level 6)",
                school: "BCS – The Chartered Institute for IT",
                year: "November 2021",
                description: "Focused on Software Engineering and Web Technologies",
                logo: "bcs.jpeg"
              },
              {
                degree: "G.C.E. Advanced Level (Mathematics Stream)",
                school: "Hindu Ladies College, Colombo -06",
                year: "August 2018",
                description: (
                <ul>
                  <li>Chemistry - A, Combined Mathematics - B, Physics - C</li> 
                  <li> Z-score: 1.354</li>
                </ul>
                ),
                logo: "school.jpeg"
              },
              {
                degree: "G.C.E. Ordinary Level",
                school: "Hindu Ladies College, Colombo -06",
                year: "December 2014",
                description: 
                (
                <ul>
                  <li>GCE O/L (2014) - 9A </li> 
                  <li>GCE O/L (2015) Sinhala Language - A</li>
                </ul>
                ),
                logo: "school.jpeg"
              }

            ].map((edu, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={edu.logo}
                    alt={edu.school}
                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-purple-300 leading-snug">{edu.degree}</h3>
                    <p className="text-gray-300 text-sm">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-green-400 font-medium mb-3">
                  <Calendar className="mr-2" size={16} />
                  {edu.year}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* Projects Section */}
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {[
            {
              title: "Sri Lankan Currency Recognition for People with Visual Impairments using Convolutional Neural Network",
              description: "Developed a deep learning-based currency recognition system aimed at assisting visually impaired users in identifying banknotes accurately and independently. The system leverages ensemble learning to combine multiple models, improving recognition accuracy under varying conditions such as lighting, note damage, and background clutter. This project combines deep learning, computer vision, and assistive technology to deliver a practical, socially impactful solution.",
              tech: ["Python", "CNN", "YOLOv10"],
              link: "https://www.csc.jfn.ac.lk/wp-content/uploads/2024/10/Laksana.pdf",
              images: [
                {
                  src: "Laksana.png",
                  alt: "Poster",
                  caption: "Poster"
                },
                {
                  src: "research_2.jpg", 
                  alt: "Poster Presentation",
                  caption: "Poster Presentation at the Google ExploreCSR"
                }
              ]
            },
            {
              title: "Point of Sale (POS) system - Book Depot, Colombo",
              description: "Designed and developed a Point of Sale (POS) system tailored for a book depot in Colombo. The system supports sales transactions, inventory tracking, and customer management, streamlining day-to-day operations and improving overall efficiency. Key features include real-time stock updates, automated billing, and a user-friendly interface for staff. This project focused on addressing the practical needs of a retail environment, delivering a reliable solution that enhances both operational workflow and customer service.",
              tech: ["Laravel", "MySQL"],
              link: "https://github.com/Laksana-Sriharan/POS_Book_Depot",
            },
            
          ].map((project, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-purple-400">{project.title}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                    title="View Project"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="px-3 py-1 bg-purple-600/30 rounded-full text-sm text-purple-200">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Images Display */}
              {project.images && (
                <div className="mt-6 border-t border-gray-600 pt-4">
                  <div className="flex items-center gap-2 mb-3">
                    <ImageIcon size={16} className="text-purple-400" />
                    <span className="text-sm font-medium text-purple-300">Project Screenshots</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="bg-gray-900/50 rounded-lg p-2">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-48 object-cover rounded border border-gray-700 hover:scale-105 transition-transform duration-200"
                          loading="lazy"
                        />
                        <p className="text-xs text-gray-400 mt-2 text-center">{image.caption}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Publications Section */}
    <section id="publications" className="py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Publications
        </h2>

        <div className="space-y-10">
          {[
            {
              title: "Exploring the Capabilities of You Only Look Once (YOLO) Algorithm in Object Detection",
              publication:
                "ComSpective Vol. 5, Issue 1 — ICT Technical Magazine, Faculty of Computing, Sabaragamuwa University of Sri Lanka",
              date: "Accepted",
              link: "https://medium.com/@yourusername/article1",
              image: "comspective.png",
              tags: null
            },
            {
              title: "Enhancing Usability in Human-Computer Interaction",
              publication:
                "Kananiyam Vol. 06, Department of Computer Science, University of Jaffna",
              date: "Feb 2025",
              link: "https://www.society.jfn.ac.lk/compsoc/#kananiyam",
              image: "kananiyam.jpg",
              tags: ["UI / UX", "HCI", "Best Practices"]
            }
          ].map((pub, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 hover:border-purple-400/20 transition-all duration-300 hover:shadow-md hover:shadow-purple-500/10"
            >
              {/* Image */}
              <img
                src={pub.image}
                alt={pub.title}
                className="w-full md:w-48 h-40 object-cover rounded-md border border-white/10 shadow-md"
              />

              {/* Text content */}
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg md:text-xl font-semibold text-purple-300">
                    {pub.title}
                  </h3>
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>

                <p className="text-gray-300 text-sm">{pub.publication}</p>

                <div className="inline-block bg-green-500 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  {pub.date}
                </div>

                {pub.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {pub.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-600/30 text-purple-100 text-xs px-2 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Skills Section */}
      <section id="skills" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              category: "Development",
              skills: ["Java", "Python", "OOP", "PHP", "Laravel"]
            },
            {
              category: "Testing & DevOps",
              skills: ["JMeter", "Azure DevOps"]
            },
            {
              category: "Tools & Databases",
              skills: ["Git", "Azure", "MySQL", "MongoDB"]
            },
            {
              category: "Soft Skills",
              skills: [
                "Communication",
                "Teamwork",
                "Problem Solving",
                "Time Management",
                "Adaptability"
              ]
            }
          ].map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/10 hover:border-purple-400/20 hover:shadow-md transition-all duration-300 rounded-xl p-6"
            >
              <div className="flex items-center mb-4">
                <Code className="text-purple-400 mr-3" size={22} />
                <h3 className="text-xl font-semibold text-purple-300">
                  {skillGroup.category}
                </h3>
              </div>

              <ul className="space-y-2 pl-1">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Certificates Section */}
    <section id="certificates" className="py-20 bg-black/20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "WSO2 Certified Identity Server Practitioner -V7",
              issuer: "WSO2 Lanka (Pvt) Ltd",
              date: "June 2025",
              link: "https://certification.wso2.com/certificate/CID-04624018",
              logo: "wso2.png"
            },
            {
              title: "BCS Professional Graduate Diploma in IT",
              issuer: "BCS | The Chartered Institute for IT",
              date: "November 2022",
              link: "https://drive.google.com/file/d/1ugMxBE32s0FfEe51WE0w0uZfwru_wrB5/view?usp=sharing",
              logo: "bcs.jpeg"
            },
            {
              title: "BCS Diploma in IT",
              issuer: "BCS | The Chartered Institute for IT",
              date: "November 2021",
              link: "https://drive.google.com/file/d/1DGWhAOWTfNwK3_KFOG1WIiNvA5T9N_dl/view?usp=sharing",
              logo: "bcs.jpeg"
            },
            {
              title: "BCS Certificate in IT",
              issuer: "BCS | The Chartered Institute for IT",
              date: "2021",
              link: "https://drive.google.com/file/d/1sYkd-k2_L1rzzafYNnoduwFYBQ6Nwfyx/view?usp=sharing",
              logo: "bcs.jpeg"
            },
            {
              title: "Certificate in Web Application Design and Development ",
              issuer: "National Institute of Business Management (NIBM - Sri Lanka)",
              date: "2021",
              link: "https://drive.google.com/file/d/1iOd1m_9OiTIFcNLNPWdshHlh6a6YeZHj/view?usp=sharing",
              logo: "nibm.jpg"
            }
          ].map((cert, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-purple-400/50">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center p-2">
                  <img 
                    src={cert.logo} 
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-full bg-purple-400/30 rounded flex items-center justify-center text-purple-400 text-xs font-bold">' + cert.issuer.split(' ')[0] + '</div>';
                    }}
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{cert.title}</h3>
                  <p className="text-gray-300 mb-1">{cert.issuer}</p>
                  <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
                  
                  {/* Verify Certificate Button */}
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 hover:text-purple-300 rounded-lg transition-all duration-300 border border-purple-400/30 hover:border-purple-400/50 text-sm font-medium"
                  >
                    <ExternalLink size={16} />
                    Verify Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* Awards Section */}
      <section id="awards" className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Awards
          </h2>
          <div className="space-y-8">
            {[
              {
                title: "Dean's List Award - Level 4S",
                organization: "University of Jaffna",
                description:
                  "Recognized in the Dean’s List for outstanding academic performance in BSc (Hons) in Computer Science – Level 4S, 2022, with a GPA of 3.74.",
                date: "March 2025",
                category: "Academic",
                hasImage: false
              },

              {
                title: "Dean's List Award - Level 3S",
                organization: "University of Jaffna",
                description:
                  "Recognized in the Dean’s List for outstanding academic performance in BSc (Hons) in Computer Science – Level 3S, 2021, with a GPA of 3.78.",
                date: "Dec 2024",
                category: "Academic",
                hasImage: false
              },

              {
                title: "David Pieris Best Academic Performance Award",
                organization: "D P Infotech (Pvt) Ltd",
                description:
                  "Received an award for outstanding academic performance at the THALIR Seed Funding and University Talent Recognition event by David Pieris Holdings (Pvt) Ltd.",
                date: "May 2024",
                category: "Innovation",
                images: [
                  "dp_award_1.jpg",
                  "dp_award_2.jpg",
                  "dp_award_3.jpg"
                ],
                hasImage: true
              },
              {
                title: "Dean's List Award - Level 2S",
                organization: "University of Jaffna",
                description:
                  "Recognized in the Dean’s List for outstanding academic performance in BSc (Hons) in Computer Science – Level 2S, 2020, with a GPA of 3.89.",
                date: "Dec 2023",
                category: "Academic",
                hasImage: false
              },
              {
                title: "Dean's List Award - Level 1S",
                organization: "University of Jaffna",
                description:
                  "Recognized in the Dean’s List for outstanding academic performance in BSc (Hons) in Computer Science – Level 1S, 2019, with a GPA of 3.82.",
                date: "Dec 2022",
                category: "Academic",
                hasImage: false
              }
            ].map((award, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-transform duration-300 hover:scale-[1.02] border border-white/20 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20"
              >
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg shadow-lg">
                        <Award className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-purple-300 group-hover:text-white transition-colors">
                          {award.title}
                        </h3>
                        <p className="text-gray-400 font-medium text-sm">{award.organization}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2 min-w-[110px]">
                      <div className="flex items-center bg-green-600/20 backdrop-blur-sm rounded-full px-3 py-1 border border-green-400/50">
                        <Calendar className="text-green-400 mr-2" size={14} />
                        <span className="text-xs text-green-300 font-semibold">{award.date}</span>
                      </div>
                      <div className="flex items-center bg-pink-600/20 backdrop-blur-sm rounded-full px-3 py-1 border border-pink-400/30">
                        <span className="text-xs text-pink-300 font-medium">{award.category}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed pl-14 mb-4">{award.description}</p>

                  {award.hasImage && (
                    <div className="pl-14">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {award.images.map((image, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="group/img rounded-lg overflow-hidden shadow-md border border-white/10 hover:shadow-lg hover:shadow-green-400/40 transition-transform duration-300 hover:scale-105"
                          >
                            <img
                              src={image}
                              alt={`${award.title} - Image ${imgIndex + 1}`}
                              className="w-full h-48 md:h-56 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">laksana.sriharan@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+94 77 036 2516</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="text-purple-400 mr-4" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">86 - 3/1, Fussels Lane, Wellawatte, Colombo - 06</p>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your-email@gmail.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-white/20 border border-gray-600 rounded-md focus:ring-2 focus:ring-purple-400 focus:border-transparent text-white placeholder-gray-400 resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  onClick={() => alert('Contact functionality would be implemented here')}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-200 font-semibold"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Laksana Sriharan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;