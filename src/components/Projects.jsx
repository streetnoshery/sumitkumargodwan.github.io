import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Flappy',
    subtitle: 'Social Media Platform',
    description:
      'Scalable social media backend for 10K+ users — authentication, content sharing, and personalized feeds with sub-200ms latency. Deployed on AWS EC2 + S3.',
    highlights: [
      'Personalized feeds under 200ms response time',
      'Auth, content sharing, and user management at scale',
      'Deployed on AWS EC2 + S3 with production-grade reliability',
      'Built with AI-driven development (Kiro) for faster iteration',
    ],
    stack: ['TypeScript', 'Node.js', 'MongoDB', 'AWS EC2', 'AWS S3', 'Kiro'],
    liveUrl: 'https://flappy.co.in',
    githubUrl: 'https://github.com',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 px-6 relative" ref={ref}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent to-violet-500/30" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="section-label">Projects</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Side Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-1 max-w-2xl gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative group rounded-2xl border border-white/8 bg-white/3 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                    <p className="text-violet-400 text-sm font-medium mt-0.5">{project.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                      className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                    >
                      <FiGithub size={15} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live site"
                      className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/40 transition-all"
                    >
                      <FiExternalLink size={15} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, hi) => (
                    <li key={hi} className="flex items-start gap-3 text-slate-400 text-sm">
                      <span className="mt-2 w-1 h-1 rounded-full bg-violet-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech}
                      className="px-2.5 py-1 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
