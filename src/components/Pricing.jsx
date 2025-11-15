import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Start',
    price: 'R$ 790',
    highlight: false,
    features: [
      '1 seção hero + 3 blocos',
      'Animações essenciais',
      'Entrega em 5 dias',
      'Suporte por 7 dias'
    ]
  },
  {
    name: 'Pro',
    price: 'R$ 1.490',
    highlight: true,
    badge: 'Mais popular',
    features: [
      'Página completa até 8 blocos',
      'Animações avançadas e 3D',
      'Copy + UX de conversão',
      'Entrega em 7 dias',
      'Suporte por 30 dias'
    ]
  },
  {
    name: 'Elite',
    price: 'R$ 2.490',
    highlight: false,
    features: [
      'Landing premium sob medida',
      'Integrações e automações',
      'Sessões de estratégia',
      'Entrega em 10 dias',
      'Suporte por 60 dias'
    ]
  }
]

export default function Pricing() {
  return (
    <section id="planos" className="relative bg-[#070B19] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.12),transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Planos feitos para o seu momento
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true, amount: 0.2 }}
              className={`relative overflow-hidden rounded-2xl border ${t.highlight ? 'border-blue-400/40' : 'border-white/10'} bg-gradient-to-b from-white/5 to-white/[0.03] p-6`}
            >
              {t.highlight && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2">
                  <div className="relative mt-3 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1 text-xs font-semibold text-blue-100 backdrop-blur">
                    {t.badge}
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent blur-xl" />
                  </div>
                </div>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm font-medium text-blue-200/80">{t.name}</p>
                <p className="mt-2 text-4xl font-extrabold text-white">{t.price}</p>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-white/80">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-500/20 text-blue-200">
                      <Check size={14} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#contato" className={`block w-full rounded-xl px-4 py-3 text-center font-semibold transition-transform hover:scale-[1.02] ${t.highlight ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30' : 'border border-white/10 bg-white/5 text-white/90'}`}>
                  Escolher {t.name}
                </a>
              </div>

              {t.highlight && (
                <div className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute -inset-20 animate-pulse-slow rounded-full bg-blue-500/10 blur-3xl" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

