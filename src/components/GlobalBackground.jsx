import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

/*
  Global 3D background with rich, layered motion.
  - Persistent Spline scene across the whole site
  - Pointer parallax (translate + tilt)
  - Scroll-reactive depth (scale + glow)
  - Time-based drift for constant subtle motion
  - Click/press "burst" for highlight pulses
  - Gracefully respects prefers-reduced-motion
*/
export default function GlobalBackground() {
  const containerRef = useRef(null)
  const splineRef = useRef(null)
  const stateRef = useRef({ raf: 0, t: 0, reduce: false, boost: 1, scroll: 0 })

  const onLoad = (splineApp) => {
    // Keep a ref to the Spline app in case we want to add deeper hooks later
    splineRef.current = splineApp
  }

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const st = stateRef.current
    st.reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const clamp = (n, min, max) => Math.min(max, Math.max(min, n))

    const onPointer = (x, y) => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      targetX = (x / vw - 0.5) * 2
      targetY = (y / vh - 0.5) * 2
    }

    const onMouseMove = (e) => onPointer(e.clientX, e.clientY)
    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) onPointer(t.clientX, t.clientY)
    }

    const onScroll = () => {
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      st.scroll = window.scrollY / max
    }

    const burst = () => {
      // Visual click burst: amplify motion + flash aurora
      st.boost = 1.8
      const overlay = el.querySelector('.bg-aurora')
      if (overlay) {
        overlay.style.transition = 'opacity 300ms ease, filter 300ms ease'
        overlay.style.opacity = '0.6'
        overlay.style.filter = 'saturate(1.3)'
        setTimeout(() => {
          overlay.style.opacity = ''
          overlay.style.filter = ''
        }, 320)
      }
      setTimeout(() => (st.boost = 1), 400)
    }

    const onKey = (e) => {
      if (e.key === 'Enter' || e.key === ' ') burst()
    }

    // Continuous loop for time-based drift and easing
    const tick = () => {
      st.raf = requestAnimationFrame(tick)
      st.t += 1 / 60

      // Ease pointer parallax
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08

      // Base motion values
      const driftX = Math.sin(st.t * 0.15) * 0.3
      const driftY = Math.cos(st.t * 0.12) * 0.3

      const mixX = currentX + driftX
      const mixY = currentY + driftY

      // Translate based on pointer + drift
      const tx = mixX * 14 * st.boost
      const ty = mixY * 14 * st.boost

      // Tilt for depth
      const rotY = clamp(mixX * 4.5 * st.boost, -6, 6)
      const rotX = clamp(-mixY * 4.5 * st.boost, -6, 6)

      // Scroll depth scale
      const scale = 1 + st.scroll * 0.04

      // Apply composed transform
      if (!st.reduce) {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${scale})`
      }

      // Aurora subtle modulation with scroll + drift
      const overlay = el.querySelector('.bg-aurora')
      if (overlay) {
        const pulse = 0.28 + st.scroll * 0.35 + Math.sin(st.t * 0.6) * 0.05
        overlay.style.opacity = String(clamp(pulse, 0.15, 0.75))
      }

      // Optional: micro brightness vignette based on pointer distance from center
      const dist = Math.hypot(mixX, mixY)
      const vignette = el.querySelector('.bg-vignette')
      if (vignette) {
        vignette.style.opacity = String(clamp(0.5 + dist * 0.25, 0.4, 0.85))
      }
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('mousedown', burst, { passive: true })
    window.addEventListener('touchstart', burst, { passive: true })
    window.addEventListener('keydown', onKey)

    onScroll()
    tick()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('mousedown', burst)
      window.removeEventListener('touchstart', burst)
      window.removeEventListener('keydown', onKey)
      if (st.raf) cancelAnimationFrame(st.raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 will-change-transform perspective-[1200px]" ref={containerRef}>
      <div className="absolute inset-0">
        <Spline onLoad={onLoad} scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Animated aurora overlays for depth and glow */}
      <div className="bg-aurora absolute inset-0 opacity-30 mix-blend-screen">
        <div className="absolute -left-32 top-10 h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-[50vmax] w-[50vmax] animate-aurora-delayed rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),transparent_60%)] blur-3xl" />
      </div>
      {/* subtle vignette */}
      <div className="bg-vignette absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))] opacity-60 transition-opacity duration-300" />
    </div>
  )
}
