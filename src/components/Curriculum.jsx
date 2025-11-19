import React from 'react'

const weeks = [
  {
    title: 'Week 1 · Foundations',
    items: ['Story structure for short‑form', 'Prompting for scripts & outlines', 'Voice cloning and narration basics']
  },
  {
    title: 'Week 2 · Visuals',
    items: ['Generating b‑roll and scenes', 'Smart stock + motion graphics', 'Captions that pop']
  },
  {
    title: 'Week 3 · Editing',
    items: ['Timing, pacing, cuts', 'Music, SFX, sound design', 'Polish, color, exports']
  },
  {
    title: 'Week 4 · Publishing',
    items: ['Templates & automation', 'Thumbnails and titles', 'Distribution & analytics']
  },
]

export default function Curriculum() {
  return (
    <section id="curriculum" className="relative py-16 md:py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold">Course curriculum</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {weeks.map((w) => (
              <div key={w.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                <h3 className="font-medium text-white/95">{w.title}</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  {w.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-400 via-blue-400 to-orange-300" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
