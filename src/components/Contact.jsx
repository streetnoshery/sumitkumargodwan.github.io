import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiMapPin, FiCheckCircle } from 'react-icons/fi'

const contactLinks = [
  { icon: <FiMail size={16} />, label: 'Email', value: 'sumitgod510@gmail.com', href: 'mailto:sumitgod510@gmail.com' },
  { icon: <FiLinkedin size={16} />, label: 'LinkedIn', value: 'linkedin.com/in/sumit-godwan', href: 'https://linkedin.com' },
  { icon: <FiGithub size={16} />, label: 'GitHub', value: 'github.com/sumit-godwan', href: 'https://github.com' },
  { icon: <FiMapPin size={16} />, label: 'Location', value: 'Bengaluru, India', href: null },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`)
    const body = encodeURIComponent(form.message)
    const a = document.createElement('a')
    a.href = `mailto:sumitgod510@gmail.com?subject=${subject}&body=${body}&reply-to=${encodeURIComponent(form.email)}`
    a.click()
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    // Re-enable the button after 3 seconds
    setTimeout(() => setStatus(null), 3000)
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500/60 focus:bg-violet-500/5 transition-all duration-200 text-sm"

  return (
    <section id="contact" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let's work together</h2>
          <p className="text-slate-400 mt-3 max-w-lg">
            Open to Backend / SDE roles and interesting collaborations. Drop a message and I'll get back to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left — links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3"
          >
            {contactLinks.map((link) => (
              <div key={link.label}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/8 bg-white/3 hover:border-violet-500/25 hover:bg-violet-500/5 transition-all duration-200"
              >
                <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                  {link.icon}
                </div>
                <div>
                  <div className="text-slate-600 text-xs uppercase tracking-wide font-medium">{link.label}</div>
                  {link.href ? (
                    <a href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-violet-400 transition-colors text-sm font-medium"
                    >
                      {link.value}
                    </a>
                  ) : (
                    <span className="text-slate-300 text-sm font-medium">{link.value}</span>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div>
                <label htmlFor="name" className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">Name</label>
                <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">Email</label>
                <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="block text-slate-400 text-xs font-semibold uppercase tracking-wide mb-2">Message</label>
                <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="What's on your mind?" className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-violet-900/30 hover:shadow-violet-700/30 hover:-translate-y-0.5"
              >
                <FiSend size={15} />
                Send Message
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-4 py-3"
                >
                  <FiCheckCircle size={15} className="shrink-0" />
                  Mail client opened — I'll get back to you soon!
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 text-xs">
        <span>© {new Date().getFullYear()} Sumit Kumar Godwan</span>
        <span>Built with React · Tailwind CSS · Framer Motion</span>
      </div>
    </section>
  )
}
