function Footer(){
  return (
    <footer className="py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="rounded-3xl bg-slate-900 text-white p-8 md:p-12 shadow-xl border border-white/10">
          <h3 className="text-2xl md:text-3xl font-semibold">旅を続けましょう — Keep exploring</h3>
          <p className="mt-3 text-slate-300">Scroll back up or choose another city from the menu.</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a href="#top" className="px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold">Back to top</a>
            <a href="/test" className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white font-semibold">Backend status</a>
          </div>
        </div>
        <p className="mt-8 text-slate-600 text-sm">Imagery from Unsplash — for demo purposes only.</p>
      </div>
    </footer>
  )
}

export default Footer
