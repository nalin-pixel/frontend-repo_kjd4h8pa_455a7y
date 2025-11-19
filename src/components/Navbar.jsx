import { Menu, X, Github, Linkedin, Mail } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-blue-500/30 shadow-xl" />
              <span className="font-semibold tracking-tight text-white">leo wahatta</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-200/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="mailto:hello@leowahatta.com" className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>

            <button className="md:hidden p-2 text-white" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-white/10 transition-colors">
                    {item.label}
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-2 mt-3">
                <a href="mailto:hello@leowahatta.com" className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors" aria-label="Email">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 hover:bg-white/10 rounded-lg text-slate-200 transition-colors" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
