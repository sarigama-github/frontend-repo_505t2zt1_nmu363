import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient aura matching the Spline theme */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-40 blur-3xl" style={{
          background: 'radial-gradient(closest-side, rgba(168,85,247,0.35), rgba(59,130,246,0.25), rgba(249,115,22,0.15), transparent 70%)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-10 md:pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-orange-400 animate-pulse" />
              Cohort 3 starts next month — limited seats
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Master AI Video Production
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-blue-400 to-orange-300"> in 4 weeks</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-white/80 leading-relaxed max-w-xl">
              Learn a modern workflow to plan, script, voice, generate, edit and ship studio‑quality videos using AI tools. No prior editing experience required.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center rounded-lg bg-white text-slate-900 px-5 py-3 font-medium shadow/20 shadow-white/10 hover:shadow-white/20 transition">
                Enroll now
              </a>
              <a href="#curriculum" className="inline-flex justify-center items-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-white hover:bg-white/10 transition">
                See curriculum
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-white/70">
              <div className="text-sm">8+ hours of lessons</div>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="text-sm">Templates & checklists included</div>
              <div className="h-1 w-1 rounded-full bg-white/40" />
              <div className="text-sm">Community access</div>
            </div>
          </div>

          {/* Spline visual */}
          <div className="relative h-[420px] md:h-[560px] rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
