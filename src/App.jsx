import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <footer className="py-10 border-t border-white/10">
          <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} leo wahatta. All rights reserved.</p>
            <a href="/test" className="hover:text-white">Halaman Test</a>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
