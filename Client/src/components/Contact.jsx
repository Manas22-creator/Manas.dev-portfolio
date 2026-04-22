import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const contactLinks = [
    { label: 'GitHub', sub: 'View my repositories', icon: <Github size={20}/>, link: 'https://github.com/Manas22-creator' },
    { label: 'LinkedIn', sub: 'Connect professionally', icon: <Linkedin size={20}/>, link: 'https://www.linkedin.com/in/manas-pandey-24684a255/' },
    { label: 'Email', sub: 'manaswork02@gmail.com', icon: <Mail size={20}/>, link: 'mailto:manaswork02@gmail.com' },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Using environment variables for security
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
          setStatus("success");
          form.current.reset();
      }, (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
      });
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left: Form */}
          <div>
            <p className="text-secondary font-bold uppercase tracking-widest text-xs mb-4">Contact</p>
            <h2 className="text-4xl font-extrabold text-primary mb-4">Get In Touch</h2>
            <p className="text-text-gray mb-10">Have a project in mind or want to discuss opportunities? Reach out.</p>
            
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="user_name" className="block text-sm font-bold text-primary mb-2">
                  Name
                </label>
                <input 
                  type="text" 
                  id="user_name" 
                  name="user_name" // Required for EmailJS and Autofill
                  placeholder="Your name" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all" 
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="user_email" className="block text-sm font-bold text-primary mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="user_email" 
                  name="user_email" // Required for EmailJS and Autofill
                  placeholder="your@email.com" 
                  required 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all" 
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" // Required for EmailJS
                  rows="5" 
                  placeholder="Tell me about your project or opportunity..." 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-100 outline-none bg-white resize-none transition-all"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status === "sending"}
                className="bg-secondary text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-primary transition-all active:scale-95 disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : <><Send size={18} /> Send Message</>}
              </button>

              {status === "success" && <p className="text-green-600 text-sm font-bold mt-2">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-600 text-sm font-bold mt-2">Error sending message. Try again.</p>}
            </form>
          </div>

          {/* Right: Contact Cards */}
          <div className="flex flex-col justify-center gap-4">
            <h3 className="text-xl font-bold text-primary mb-2">Connect with me</h3>
            {contactLinks.map((item, i) => (
              <a key={i} href={item.link} className="flex items-center gap-5 p-6 bg-white border border-slate-100 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-blue-50 group-hover:text-secondary transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{item.label}</h4>
                  <p className="text-xs text-text-gray">{item.sub}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;