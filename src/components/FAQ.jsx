import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    q: 'Quanto tempo leva para entregar?',
    a: 'Depende do plano. Em média, entre 5 e 10 dias com atualizações frequentes.'
  },
  {
    q: 'Posso pedir revisões?',
    a: 'Claro! Ajustes finos estão incluídos em todos os planos para garantir o melhor resultado.'
  },
  {
    q: 'Vocês integram com ferramentas?',
    a: 'Sim. Configuramos pixel, analytics, CRM, formulários e automações conforme necessário.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(null)
  return (
    <section id="faq" className="relative bg-[#050814] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_35%)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Dúvidas frequentes
        </motion.h2>

        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {items.map((it, i) => (
            <div key={it.q} className="p-4 sm:p-6">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between text-left text-white">
                <span className="text-sm font-medium sm:text-base">{it.q}</span>
                <span className="ml-4 inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-200">{open === i ? '-' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-3 text-sm text-white/70"
                  >
                    {it.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
