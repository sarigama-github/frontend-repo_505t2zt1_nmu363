import React from 'react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.03] p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-semibold">Reserve your seat</h2>
          <p className="mt-3 text-white/80">Cohort‑based, live support, lifetime updates.</p>

          <div className="mt-8 inline-flex items-baseline gap-2">
            <span className="text-5xl font-bold">$399</span>
            <span className="text-white/60">USD</span>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" className="inline-flex justify-center items-center rounded-lg bg-white text-slate-900 px-6 py-3 font-medium shadow/20 shadow-white/10 hover:shadow-white/20 transition">
              Enroll now
            </a>
            <a href="#" className="inline-flex justify-center items-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-white hover:bg-white/10 transition">
              Ask a question
            </a>
          </div>

          <p className="mt-6 text-xs text-white/60">Secure checkout. 7‑day refund if it’s not for you.</p>
        </div>
      </div>
    </section>
  )
}
