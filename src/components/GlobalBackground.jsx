import { useEffect, useRef } from 'react'
import Spline from '@splinetool/react-spline'

/*
  Global 3D background that persists across the entire site.
  - Fixed full-viewport Spline scene
  - Parallax reacts to mouse/touch and scroll
  - Smooth CSS animated aurora overlays
*/
export default function GlobalBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const onPointer = (x, y) => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      // Normalize -1..1
      targetX = (x / vw - 0.5) * 2
      targetY = (y / vh - 0.5) * 2
      loop()
    }

    const onMouseMove = (e) => onPointer(e.clientX, e.clientY)
    const onTouchMove = (e) => {
      const t = e.touches[0]
      if (t) onPointer(t.clientX, t.clientY)
    }

    const onScroll = () => {
      // Subtle depth parallax based on scroll progress
      const max = Math.max(1, document.body.scrollHeight - window.innerHeight)
      const p = window.scrollY / max
      el.style.setProperty('--scroll', p.toString())
      loop()
    }

    const loop = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        // ease current towards target
        currentX += (targetX - currentX) * 0.08
        currentY += (targetY - currentY) * 0.08
        const tx = currentX * 12 // px
        const ty = currentY * 12
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
        // Also modulate overlay brightness subtly with scroll
        const overlay = el.querySelector('.bg-aurora')
        if (overlay) {
          const s = parseFloat(getComputedStyle(el).getPropertyValue('--scroll') || '0')
          overlay.style.opacity = (0.3 + s * 0.3).toString()
        }
      })
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 will-change-transform" ref={containerRef}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/rvFZ5oikmZSIbmGQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Animated aurora overlays for depth and glow */}
      <div className="bg-aurora absolute inset-0 opacity-30 mix-blend-screen">
        <div className="absolute -left-32 top-10 h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.35),transparent_60%)] blur-3xl" />
        <div className="absolute -right-40 bottom-10 h-[50vmax] w-[50vmax] animate-aurora-delayed rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.35),transparent_60%)] blur-3xl" />
      </div>
      {/* subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,rgba(0,0,0,0.6))]" />
    </div>
  )
}
