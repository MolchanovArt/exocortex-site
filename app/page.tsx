export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-zinc-100 flex flex-col items-center justify-center px-6 py-24">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          <span className="text-indigo-400">Exocortex</span> / Exocore
        </h1>
        <p className="text-zinc-300 text-lg leading-relaxed">
          A Personal AI Orchestrator — your digital extension that connects
          thoughts, knowledge, and actions into one intelligent workflow.
        </p>

        <section className="text-left mt-12 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
              Vision
            </h2>
            <p className="text-zinc-400">
              Exocortex is a bridge between your mind and the digital world.
              It transforms ideas into structured goals and executable actions,
              orchestrating specialized agents to complete them.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
              How It Works
            </h2>
            <ol className="list-decimal list-inside space-y-1 text-zinc-400">
              <li>Intent detection — understand what you want to achieve.</li>
              <li>Context retrieval — access your 2nd Brain and memory graph.</li>
              <li>Composition — select and coordinate the right AI agents.</li>
              <li>Execution — deliver results and learn from feedback.</li>
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-300 mb-2">
              Join the Movement
            </h2>
            <p className="text-zinc-400">
              We’re building a new kind of digital ecosystem — one that thinks
              with you. <br />
              Write to us:{" "}
              <a
                href="mailto:info@exocore.cx"
                className="text-indigo-400 hover:underline"
              >
                info@exocore.cx
              </a>
            </p>
          </div>
        </section>

        <footer className="mt-16 text-sm text-zinc-500">
          © {new Date().getFullYear()} Exocore.cx — built for the age of thinking systems.
        </footer>
      </div>
    </main>
  );
}