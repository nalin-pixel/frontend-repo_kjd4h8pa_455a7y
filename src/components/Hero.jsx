import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[38rem] h-[38rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute -bottom-24 right-16 w-[28rem] h-[28rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            >
              Halo, saya <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">leo wahatta</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl"
            >
              Frontend Engineer yang fokus pada pengalaman pengguna, desain modern, dan performa.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                Lihat Proyek
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors">
                Kontak Saya
              </a>
            </motion.div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { label: "React", value: "5+ thn" },
                { label: "UI/UX", value: "100+" },
                { label: "Project", value: "30+" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                  <p className="text-xs text-slate-300">{item.label}</p>
                  <p className="text-lg font-semibold text-white mt-1">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-2">
              <div className="h-full w-full rounded-2xl bg-[url('https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=1328&auto=format&fit=crop')] bg-cover bg-center" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white">
              <p className="text-sm">Tersedia untuk freelance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
