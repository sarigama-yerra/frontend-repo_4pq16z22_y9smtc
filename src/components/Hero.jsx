import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0A0F1C]">
      {/* Extra gradient wash over the global background for contrast in hero */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.16),transparent_35%)]" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-blue-200 backdrop-blur float-smooth"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Mais conversão. Mais impacto. Mais vendas.
        </motion.span>
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="reveal-up bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Landing pages incríveis que
          <span className="text-cyan-400 glow-pulse"> vendem</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 max-w-2xl text-balance text-base text-blue-100/80 sm:text-lg reveal-up"
          style={{ animationDelay: '120ms' }}
        >
          Sites ultra-rápidos com animações de alto impacto e design premium para elevar sua marca e multiplicar conversões.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="pointer-events-auto mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#planos" className="group tilt-hover inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition-transform hover:scale-[1.03]">
            Começar agora
            <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a href="#portfolio" className="tilt-hover inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white/80 backdrop-blur transition-colors hover:bg-white/10">
            Ver portfólio
          </a>
        </motion.div>
      </div>
    </section>
  )
}
