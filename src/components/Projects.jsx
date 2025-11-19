const projects = [
  {
    title: "Dashboard Analytics",
    description: "Platform analitik interaktif dengan chart dinamis dan tema gelap.",
    tags: ["React", "Tailwind", "D3"],
    link: "#"
  },
  {
    title: "E-Commerce UI Kit",
    description: "Komponen UI reusable untuk toko online modern.",
    tags: ["React", "Radix", "Design System"],
    link: "#"
  },
  {
    title: "Landing Page SaaS",
    description: "Halaman marketing dengan konversi tinggi dan animasi halus.",
    tags: ["Next.js", "Framer Motion"],
    link: "#"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">Proyek Terpilih</h2>
          <a href="#" className="text-sm text-blue-300 hover:text-white">Lihat semua</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 mb-4" />
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded bg-white/10 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
