import { useState } from 'react'
import { Menu, X, Rocket, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Início', href: '#inicio' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Planos', href: '#planos' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-xl">
          <a href="#inicio" className="group inline-flex items-center gap-2">
            <div className="relative">
              <motion.span
                initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
              >
                <Rocket size={18} />
              </motion.span>
              <Sparkles className="pointer-events-none absolute -right-2 -top-2 text-blue-400/80" size={16} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">BlueLanding</p>
              <p className="text-[10px] text-blue-300/80">Landing pages que convertem</p>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i }}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </motion.a>
            ))}
            <a
              href="#planos"
              className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.03]"
            >
              Começar
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 text-white/80 md:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#planos"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center font-semibold text-white"
              >
                Começar agora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
