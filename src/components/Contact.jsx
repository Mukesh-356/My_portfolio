import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Your actual EmailJS credentials
  const EMAILJS_CONFIG = {
    SERVICE_ID: 'service_tpwhbj2',
    TEMPLATE_ID: 'template_h783sli',
    PUBLIC_KEY: 'lxreuMfkRI5k5dRZA'
  };

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top 70%",
      }
    });

    tl.fromTo(".contact-item", {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: "power3.out"
    });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Send email using EmailJS with your actual credentials
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'mukesh1152006@gmail.com'
        },
        {
          publicKey: EMAILJS_CONFIG.PUBLIC_KEY,
        }
      );

      console.log('✅ Email sent successfully:', result);

      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('❌ Email sending failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "mukesh1152006@gmail.com",
      link: "mailto:mukesh1152006@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 9843142705 ",
      link: "tel:+919843142705"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Salem, Tamil Nadu",
      link: "#"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/mukesh-a-6ba8602a1/", icon: "💼" },
    { name: "GitHub", url: "https://github.com/", icon: "🐙" },
    { name: "Versal", url: "https://vercel.com/mukesh-356s-projects", icon: "🐦" }
  ];

  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-pink-600 rounded-full filter blur-[150px] opacity-10 pointer-events-none"></div>

      <div ref={contactRef} className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
            Let's <span className="text-gradient drop-shadow-lg drop-shadow-pink-500/20">Connect</span>
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto font-light">
            Ready to start your next project? Get in touch and I'll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 perspective-1000">

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="contact-item">
              <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">Get In Touch</h3>

              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.link}
                    className="contact-item flex items-center space-x-6 p-6 glass-panel rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all duration-500 group transform-style-3d hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
                  >
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
                      <span className="text-2xl drop-shadow-md">{method.icon}</span>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm uppercase tracking-[0.15em] font-semibold mb-1">{method.title}</p>
                      <p className="text-white text-lg font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-pink-400 transition-all duration-300">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="contact-item glass-panel rounded-2xl p-8 transform-style-3d hover:-translate-y-1 transition-transform duration-500">
              <h4 className="font-bold text-white text-xl mb-6">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="flex-1 flex flex-col items-center justify-center gap-2 bg-[#0a0a0a] border border-white/10 hover:border-blue-500/50 hover:bg-white/5 text-gray-400 hover:text-white py-5 rounded-xl transition-all duration-300 group shadow-inner"
                  >
                    <span className="text-2xl group-hover:scale-125 group-hover:-translate-y-1 transition-all duration-300 drop-shadow-md">{social.icon}</span>
                    <span className="font-semibold text-xs uppercase tracking-widest">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-item relative premium-card p-[1px] transform-style-3d hover:-translate-y-1 transition-transform duration-500">
            <div className="bg-[#0f0f0f] rounded-[1.4rem] h-full flex flex-col relative z-10 p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)]">
              <h3 className="text-3xl font-bold text-white mb-8">Send a Message</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-[0.2em]">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#050505] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-all duration-300 shadow-inner"
                      placeholder="Your Name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-[0.2em]">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[#050505] border border-white/10 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white transition-all duration-300 shadow-inner"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-[0.2em]">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#050505] border border-white/10 rounded-xl focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 text-white transition-all duration-300 shadow-inner"
                    placeholder="Project Discussion"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-[0.2em]">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#050505] border border-white/10 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-1 focus:ring-pink-500 text-white transition-all duration-300 resize-none shadow-inner"
                    placeholder="Tell me about your project..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/10 border border-green-500/50 rounded-xl text-green-400 text-center font-medium backdrop-blur-sm">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-center font-medium backdrop-blur-sm">
                    ❌ Failed to send message. Please try again or email me directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative group overflow-hidden rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-4 shadow-[0_0_40px_rgba(96,165,250,0.3)] hover:shadow-[0_0_60px_rgba(96,165,250,0.5)]"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative flex items-center justify-center py-4 px-6 text-white text-lg font-bold tracking-wide cursor-pointer">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </div>
                </button>

                <p className="text-gray-500 text-xs text-center font-medium tracking-wide uppercase mt-6">
                  Your message will be sent directly to my email inbox
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;