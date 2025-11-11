export default function Page() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container row">
          <a className="logo" href="/" aria-label="Exocortex home">Exocortex</a>
          <div className="links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#modules">Modules</a>
            <a href="#usecases">Use cases</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#join" className="badge">Join</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="container">
          <div className="hero-wrap">
            <div className="badge">Personal AI Orchestrator</div>
            <h1>Goals → tasks → agents → results</h1>
            <p className="hero-sub">
              Exocortex is your external brain. It understands intent, pulls the right context
              from your 2nd Brain, assembles the right AI agents, and ships outcomes — with
              logging, feedback loops, and smart time planning.
            </p>
            <div className="cta">
              <a href="#join" className="btn">Join waitlist</a>
              <a href="#features" className="btn secondary">See features</a>
            </div>
          </div>
        </div>
      </header>

      {/* VALUE PILLARS */}
      <section id="features" className="section">
        <div className="container">
          <h2>Why Exocortex</h2>
          <p className="lead">
            We shorten the path from idea to shipped outcome — tuned to your context, time, and goals.
          </p>
          <div className="grid cols-3" style={{ marginTop: 18 }}>
            <div className="card">
              <h3>Intent → Plan</h3>
              <p>Understands your goal, drafts a plan, and breaks it into actionable tasks.</p>
            </div>
            <div className="card">
              <h3>2nd Brain integration</h3>
              <p>Works with your memory — notes, files, knowledge graph — no copy-paste.</p>
            </div>
            <div className="card">
              <h3>Agent orchestration</h3>
              <p>Selects and coordinates specialized agents to execute each step.</p>
            </div>
            <div className="card">
              <h3>Auto-scheduling</h3>
              <p>Respects your calendar, proposes slots, and balances priorities.</p>
            </div>
            <div className="card">
              <h3>Learning loop</h3>
              <p>Captures feedback and improves the next iteration automatically.</p>
            </div>
            <div className="card">
              <h3>Privacy by design</h3>
              <p>Local-first mindset with explicit permissions. You choose what to connect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>How it works</h2>
          <p className="lead">Minimal magic. Maximum transparency.</p>
          <div
            className="grid cols-4"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 18 }}
          >
            {[
              ["Intent detection", "Clarify the objective and the definition of done."],
              ["Context retriever", "Pull the relevant pieces from your 2nd Brain and the web."],
              ["Composer-0", "Assemble the best action chain from modules and agents."],
              ["Execute + Log", "Run steps, log artifacts, collect feedback, adapt the plan."]
            ].map(([t, d]) => (
              <div key={t} className="card">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="card" style={{ marginTop: 18 }}>
            <div className="kbd">Tip</div>
            <p style={{ marginTop: 6 }}>
              Exocortex removes friction between thinking and doing: stop hunting for tools —
              the system picks the right agents and wires them to your context.
            </p>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="section">
        <div className="container">
          <h2>Core modules</h2>
          <p className="lead">The foundation for the MVP and the growing ecosystem.</p>
          <div className="grid cols-3" style={{ marginTop: 18 }}>
            <div className="card">
              <h3>2nd Brain (Knowledge Graph)</h3>
              <p>A living graph of ideas, tasks, links, and sources.</p>
            </div>
            <div className="card">
              <h3>Composer-0</h3>
              <p>Planner & orchestrator: builds pipelines from agents and tools.</p>
            </div>
            <div className="card">
              <h3>Context retriever</h3>
              <p>Grabs the right context from notes, calendar, files, and the web.</p>
            </div>
            <div className="card">
              <h3>Task processor</h3>
              <p>Executes steps, manages statuses, logs, and artifacts.</p>
            </div>
            <div className="card">
              <h3>FreeMinder</h3>
              <p>Goals & planning: prioritization, time slots, and focus mode.</p>
            </div>
            <div className="card">
              <h3>Agent marketplace (next)</h3>
              <p>Plug external micro-capabilities with ratings and incentives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases" className="section">
        <div className="container">
          <h2>Use cases</h2>
          <p className="lead">Designed for tech-savvy professionals.</p>
          <div className="grid cols-3" style={{ marginTop: 18 }}>
            <div className="card">
              <h3>Research → Plan → Deliver</h3>
              <p>Gather sources, synthesize, plan, and ship the final artifacts.</p>
            </div>
            <div className="card">
              <h3>Content pipeline</h3>
              <p>Brief → drafts → editorial → publishing schedule → outcomes.</p>
            </div>
            <div className="card">
              <h3>Product ops</h3>
              <p>Backlog → decomposition → agent orchestration → calendar integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section">
        <div className="container">
          <h2>Roadmap</h2>
          <div className="grid cols-2" style={{ marginTop: 18 }}>
            <div className="card">
              <h3>MVP</h3>
              <p>Landing + waitlist, basic task orchestration, 2nd Brain integration, calendar slots, artifact logging.</p>
            </div>
            <div className="card">
              <h3>Beta</h3>
              <p>Agent marketplace, personal profiles, improved retrieval, pipeline templates, private instances.</p>
            </div>
            <div className="card">
              <h3>Public</h3>
              <p>Open module ecosystem, DAO/economy for agent authors, SDK and docs.</p>
            </div>
            <div className="card">
              <h3>Vision+</h3>
              <p>Thinking OS: a personal task bus, multi-agent scenarios, a live knowledge graph, and self-learning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="section" style={{ paddingBottom: 72 }}>
        <div className="container">
          <h2>Join the waitlist</h2>
          <p className="lead">
            Become an early user/builder — get invites, updates, and access to private builds.
          </p>
          <form
            className="form"
            action="https://formspree.io/f/your_form_id" // ← replace with your Formspree endpoint
            method="POST"
          >
            <input className="input" name="email" type="email" required placeholder="your@email"/>
            <input className="input" name="role" placeholder="your role (e.g., ML Engineer / PM)"/>
            <input type="hidden" name="_redirect" value="https://exocore.cx/thanks" />
            <button className="btn" type="submit">Request access</button>
          </form>
          <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 10 }}>
            Or email us at <a href="mailto:info@exocore.cx">info@exocore.cx</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>© {new Date().getFullYear()} Exocore.cx</div>
          <div style={{ display: "flex", gap: 14 }}>
            <a href="https://exocore.cx">Home</a>
            <a href="#roadmap">Roadmap</a>
            <a href="mailto:info@exocore.cx">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}