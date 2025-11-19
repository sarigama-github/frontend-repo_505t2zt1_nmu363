import React from 'react'

const items = [
  {
    title: 'Script to Screen',
    desc: 'Turn raw ideas into polished videos using LLM prompting, voice cloning, and visual generation.',
  },
  {
    title: 'Hands‑on Projects',
    desc: 'Weekly assignments build a portfolio: explainer, product demo, and faceless YouTube short.',
  },
  {
    title: 'Pro Workflow',
    desc: 'Asset management, versioning, b‑roll sourcing, captions, and delivery best practices.',
  },
  {
    title: 'Tool Agnostic',
    desc: 'CapCut, Runway, Pika, ElevenLabs, Stable Video, Premiere — learn the concepts, not just buttons.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_10%,rgba(147,51,234,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.08),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f) => (
            <div key={f.title} className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/90 hover:bg-white/[0.08] transition">
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/75 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
