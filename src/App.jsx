import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Curriculum from './components/Curriculum'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* subtle grid */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]" />

      {/* Navbar */}
      <header className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-white font-semibold tracking-tight text-lg">AI Video Course</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#curriculum" className="hover:text-white transition">Curriculum</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>
          <a href="#pricing" className="hidden md:inline-flex items-center rounded-lg bg-white text-slate-900 px-4 py-2 text-sm font-medium">Enroll</a>
        </div>
      </header>

      {/* Sections */}
      <main className="relative z-10">
        <Hero />
        <Features />
        <Curriculum />
        <CTA />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8 text-white/70 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <span>© 2025 Your Brand</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
