import { Mail, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus("Mengirim...")
    try {
      // For now, just simulate sending
      await new Promise((r) => setTimeout(r, 800))
      setStatus("Terkirim! Saya akan segera membalas.")
      setName("")
      setEmail("")
      setMessage("")
    } catch (e) {
      setStatus("Gagal mengirim. Coba lagi.")
    }
  }

  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Mari Bekerja Sama</h2>
            <p className="mt-4 text-slate-300">Tertarik kolaborasi atau punya proyek? Kirim pesan kapan saja.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6 text-slate-200">
              <div className="flex items-center gap-3"><Mail size={18} /><span>hello@leowahatta.com</span></div>
            </div>
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nama" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" required />
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" required />
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Pesan" rows={5} className="px-4 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white outline-none focus:border-blue-400" required />
              <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Send size={16} /> Kirim Pesan
              </button>
              {status && <p className="text-slate-200 text-sm">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
