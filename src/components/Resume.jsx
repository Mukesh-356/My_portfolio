// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';

// const Resume = () => {
//   const resumeRef = useRef(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: resumeRef.current,
//         start: "top 70%",
//         end: "bottom 30%",
//         toggleActions: "play none none reverse"
//       }
//     });

//     // Section animation
//     tl.fromTo(".resume-header",
//       { y: 80, opacity: 0 },
//       { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
//     )
//     .fromTo(".resume-section",
//       { y: 60, opacity: 0, scale: 0.9 },
//       { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.2, ease: "back.out(1.2)" },
//       "-=0.5"
//     )
//     .fromTo(".timeline-item",
//       { x: -50, opacity: 0 },
//       { 
//         x: 0, 
//         opacity: 1, 
//         duration: 0.8, 
//         stagger: 0.15,
//         ease: "power2.out"
//       },
//       "-=0.4"
//     )
//     .fromTo(".skill-bar",
//       { scaleX: 0, transformOrigin: "left" },
//       { 
//         scaleX: 1, 
//         duration: 1.5, 
//         stagger: 0.1,
//         ease: "power3.out"
//       },
//       "-=0.3"
//     );

//     // Floating animation for icons
//     gsap.to(".floating-icon", {
//       y: -10,
//       rotation: 5,
//       duration: 3,
//       repeat: -1,
//       yoyo: true,
//       ease: "sine.inOut",
//       stagger: 0.2
//     });
//   }, []);

//   // Correct Google Drive download link (force download)
//   const resumeLink = "https://drive.google.com/uc?export=download&id=1ZugLfPpdKJZpxFu9qb_INK8T5YHrbVPn";

//   const handleDownloadResume = () => {
//     // Method 1: Direct download
//     const link = document.createElement('a');
//     link.href = resumeLink;
//     link.setAttribute('download', 'Your_Name_Resume.pdf');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
    
//     // Method 2: Fallback - open in new tab
//     setTimeout(() => {
//       window.open("https://drive.google.com/file/d/1ZugLfPpdKJZpxFu9qb_INK8T5YHrbVPn/view?usp=drive_link", '_blank');
//     }, 1000);
//   };

//   const experiences = [
//     {
//       year: "2023 - Present",
//       role: "Senior Frontend Developer",
//       company: "Tech Innovators Inc",
//       description: "Leading frontend development team and implementing modern web applications using React, Next.js, and TypeScript. Improved application performance by 60%.",
//       color: "from-indigo-500 to-purple-500",
//       icon: "🚀"
//     },
//     {
//       year: "2021 - 2023",
//       role: "Full Stack Developer",
//       company: "Startup Ventures",
//       description: "Developed and maintained web applications using React and Node.js. Implemented CI/CD pipelines and improved performance by 40%.",
//       color: "from-teal-400 to-cyan-500",
//       icon: "💻"
//     },
//     {
//       year: "2019 - 2021",
//       role: "Junior Developer",
//       company: "Digital Solutions Agency",
//       description: "Built responsive websites and collaborated with design teams. Gained experience in modern web technologies and agile methodologies.",
//       color: "from-pink-500 to-rose-500",
//       icon: "🎯"
//     }
//   ];

//   const skills = [
//     { name: "React", level: 95, color: "from-blue-500 to-cyan-500" },
//     { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
//     { name: "TypeScript", level: 85, color: "from-blue-600 to-indigo-600" },
//     { name: "Node.js", level: 80, color: "from-green-500 to-emerald-500" },
//     { name: "Tailwind CSS", level: 95, color: "from-teal-400 to-cyan-500" },
//     { name: "MongoDB", level: 75, color: "from-green-600 to-lime-500" },
//     { name: "GraphQL", level: 70, color: "from-pink-500 to-rose-500" },
//     { name: "AWS", level: 65, color: "from-orange-500 to-red-500" }
//   ];

//   const education = [
//     {
//       year: "2015 - 2019",
//       degree: "Bachelor of Computer Science",
//       institution: "University of Technology",
//       description: "Specialized in Software Engineering and Web Technologies",
//       color: "from-purple-500 to-pink-500",
//       icon: "🎓"
//     }
//   ];

//   return (
//     <section id="resume" className="py-24 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 relative overflow-hidden px-6">
//       {/* Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl floating"></div>
//         <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl floating" style={{animationDelay: '2s'}}></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-teal-400 rounded-full blur-3xl floating" style={{animationDelay: '4s'}}></div>
//       </div>

//       <div ref={resumeRef} className="container mx-auto max-w-6xl relative z-10">
//         {/* Header */}
//         <div className="resume-header text-center mb-20">
//           <h2 className="text-6xl md:text-8xl font-black mb-6">
//             <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">My</span>{" "}
//             <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Resume</span>
//           </h2>
//           <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             A journey through my <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-semibold">professional experience</span>, 
//             technical skills, and educational background
//           </p>
//         </div>

//         <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
//           {/* Left Column - Experience & Education */}
//           <div className="space-y-16">
//             {/* Experience */}
//             <div className="resume-section">
//               <h3 className="text-4xl font-black mb-12 text-white flex items-center">
//                 <span className="floating-icon w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mr-6 text-2xl">
//                   💼
//                 </span>
//                 Work Experience
//               </h3>
              
//               <div className="relative">
//                 {/* Timeline line */}
//                 <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 rounded-full"></div>
                
//                 {experiences.map((exp, index) => (
//                   <div key={index} className="timeline-item relative mb-12 pl-20">
//                     {/* Timeline dot */}
//                     <div className={`absolute left-8 w-6 h-6 bg-gradient-to-r ${exp.color} rounded-full border-4 border-slate-900 transform -translate-x-1/2 shadow-2xl`}></div>
                    
//                     <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500 transition-all duration-300 group">
//                       <span className={`text-sm font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
//                         {exp.year}
//                       </span>
//                       <h4 className="text-2xl font-bold text-white mt-3 mb-2 group-hover:text-cyan-400 transition-all duration-500">
//                         {exp.role}
//                       </h4>
//                       <p className="text-lg text-slate-400 font-semibold mb-4 flex items-center">
//                         <span className="mr-3 text-xl">{exp.icon}</span>
//                         {exp.company}
//                       </p>
//                       <p className="text-slate-300 leading-relaxed text-lg">
//                         {exp.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Education */}
//             <div className="resume-section">
//               <h3 className="text-4xl font-black mb-12 text-white flex items-center">
//                 <span className="floating-icon w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 text-2xl">
//                   🎓
//                 </span>
//                 Education
//               </h3>
              
//               {education.map((edu, index) => (
//                 <div key={index} className="timeline-item bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-purple-500 transition-all duration-300 group">
//                   <span className={`text-sm font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
//                     {edu.year}
//                   </span>
//                   <h4 className="text-2xl font-bold text-white mt-3 mb-2 group-hover:text-purple-400 transition-all duration-500">
//                     {edu.degree}
//                   </h4>
//                   <p className="text-lg text-slate-400 font-semibold mb-4 flex items-center">
//                     <span className="mr-3 text-xl">{edu.icon}</span>
//                     {edu.institution}
//                   </p>
//                   <p className="text-slate-300 leading-relaxed text-lg">
//                     {edu.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Skills */}
//           <div className="space-y-16">
//             <div className="resume-section">
//               <h3 className="text-4xl font-black mb-12 text-white flex items-center">
//                 <span className="floating-icon w-14 h-14 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 text-2xl">
//                   ⚡
//                 </span>
//                 Technical Skills
//               </h3>
              
//               <div className="space-y-8">
//                 {skills.map((skill, index) => (
//                   <div key={index} className="skill-item group">
//                     <div className="flex justify-between items-center mb-4">
//                       <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-all duration-500">
//                         {skill.name}
//                       </span>
//                       <span className={`text-lg font-black bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
//                         {skill.level}%
//                       </span>
//                     </div>
//                     <div className="w-full bg-slate-700/50 rounded-full h-4 overflow-hidden border border-slate-600/50">
//                       <div 
//                         className={`skill-bar h-4 rounded-full bg-gradient-to-r ${skill.color} transform origin-left shadow-lg`}
//                         style={{ transform: `scaleX(${skill.level / 100})` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Download Resume Button */}
//             <div className="resume-section text-center">
//               <button 
//                 onClick={handleDownloadResume}
//                 className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-12 py-6 rounded-2xl transition-all duration-300 w-full shadow-2xl hover:shadow-cyan-500/25"
//               >
//                 <span className="text-2xl font-bold relative z-10 flex items-center justify-center">
//                   📄 Download Resume
//                   <svg className="w-6 h-6 ml-3 transform group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                   </svg>
//                 </span>
//               </button>
              
//               {/* Alternative options */}
//               <div className="mt-4 flex space-x-4 justify-center">
//                 <button 
//                   onClick={() => window.open("https://drive.google.com/file/d/1ZugLfPpdKJZpxFu9qb_INK8T5YHrbVPn/view", '_blank')}
//                   className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
//                 >
//                   View Online
//                 </button>
//                 <span className="text-gray-400">|</span>
//                 <button 
//                   onClick={handleDownloadResume}
//                   className="text-cyan-400 hover:text-cyan-300 text-sm font-medium"
//                 >
//                   Direct Download
//                 </button>
//               </div>
//             </div>

//             {/* Fun Facts */}
//             <div className="resume-section bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50">
//               <h4 className="text-2xl font-black mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent text-center">
//                 🎉 Fun Facts
//               </h4>
//               <div className="grid grid-cols-2 gap-6 text-center">
//                 <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/50">
//                   <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">50+</div>
//                   <div className="text-slate-400 text-sm">Projects Completed</div>
//                 </div>
//                 <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/50">
//                   <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">3+</div>
//                   <div className="text-slate-400 text-sm">Years Experience</div>
//                 </div>
//                 <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/50">
//                   <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">25+</div>
//                   <div className="text-slate-400 text-sm">Happy Clients</div>
//                 </div>
//                 <div className="p-4 bg-slate-700/30 rounded-2xl border border-slate-600/50">
//                   <div className="text-3xl font-bold text-teal-400">99%</div>
//                   <div className="text-slate-400 text-sm">Satisfaction Rate</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;