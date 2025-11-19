export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Tentang Saya</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              Saya leo wahatta, seorang Frontend Engineer yang terbiasa membangun antarmuka modern,
              aksesibel, dan berperforma tinggi. Fokus saya adalah menciptakan pengalaman pengguna yang
              menyenangkan dengan desain bersih dan detail.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["JavaScript (ES6+)", "React & Vite", "Tailwind CSS", "Framer Motion", "Radix UI", "REST API"].map((skill) => (
                <div key={skill} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-white font-semibold">Highlight</h3>
            <ul className="mt-3 space-y-2 text-slate-300 text-sm">
              <li>• 5+ tahun membangun produk digital</li>
              <li>• Kolaborasi lintas tim (design, backend, PM)</li>
              <li>• Fokus pada aksesibilitas dan performa</li>
              <li>• Tertarik pada micro-interactions dan motion</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
