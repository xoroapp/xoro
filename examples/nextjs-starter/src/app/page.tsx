

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] selection:bg-white selection:text-black">
      {/* Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/20 rounded-full blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 sm:p-20">
        {/* Hero Section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium text-gray-300 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            System Operational
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
            Run. Grow. Connect.
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl leading-relaxed">
            Your Next.js application is live on the Xoro Platform. 
            Everything you need to power your transportation business is right here.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
            <a
              href="https://xoro.app/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02]"
            >
              <span className="mr-2">Read Documentation</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a
              href="https://xoro.app/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/30"
            >
              Go to Dashboard
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-24 w-full max-w-5xl">
          {[
            { title: "Edit Code", desc: "Modify src/app/page.tsx to start building.", icon: "📝" },
            { title: "Connect Domain", desc: "Add your custom domain in the dashboard.", icon: "globe" },
            { title: "Scale Up", desc: "Configure auto-scaling and resources.", icon: "chart" }
          ].map((item, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
              <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-xl border border-white/10 group-hover:bg-white/10 transition-colors">
                {item.icon === "globe" ? (
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                ) : item.icon === "chart" ? (
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                ) : (
                  <span className="text-gray-300">/</span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="absolute bottom-6 w-full text-center text-sm text-gray-600">
        <p>Powered by Xoro Platform</p>
      </footer>
    </div>
  );
}
