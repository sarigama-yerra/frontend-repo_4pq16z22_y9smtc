import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Tech SaaS',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Fintech',
    img: 'https://images.unsplash.com/photo-1559526323-cb2f2fe2591e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Educação',
    img: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'E-commerce',
    img: 'https://images.unsplash.com/photo-1515165562835-c3b8c891a3bc?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Showcase() {
  return (
    <section id="portfolio" className="relative bg-[#050814] py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(6,182,212,0.1),transparent_35%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Alguns resultados
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 * i }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-sm font-medium text-white/90">{p.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
