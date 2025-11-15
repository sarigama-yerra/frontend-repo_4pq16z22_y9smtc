import { motion } from 'framer-motion'
import { Sparkles, Zap, Gauge, Share2, Shield, Palette } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Animações hipnotizantes',
    desc: 'Transições fluidas, microinterações e efeitos 3D para encantar seus visitantes.'
  },
  {
    icon: Zap,
    title: 'Performance absurda',
    desc: 'Carregamento instantâneo e otimizações para manter a conversão lá em cima.'
  },
  {
    icon: Gauge,
    title: 'Foco em conversão',
    desc: 'Estratégias de copy e UX para transformar cliques em clientes.'
  },
  {
    icon: Share2,
    title: 'Integrações fáceis',
    desc: 'Pixel, Analytics, CRM, formulários e automações sem dor de cabeça.'
  },
  {
    icon: Shield,
    title: 'Segurança e estabilidade',
    desc: 'Infra moderna e confiável para você vender 24/7 sem sustos.'
  },
  {
    icon: Palette,
    title: 'Design premium',
    desc: 'Visual dark elegante com detalhes em azul e branco para impacto.'
  },
]

export default function Features() {
  return (
    <section id="vantagens" className="relative bg-[#050814] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.15),transparent_40%),radial-gradient(circle_at_70%_30%,rgba(6,182,212,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl reveal-up"
        >
          Por que escolher a BlueLanding?
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 text-white tilt-hover"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-transform group-hover:scale-150" />
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/20 float-smooth">
                <f.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
