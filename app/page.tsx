"use client";

import Link from "next/link";
import RoadmapTimeline from "./components/RoadmapTimeline";
import HowDiagram from "./components/HowDiagram";
import useReveal from "./components/useReveal";

export default function Page() {
  useReveal();
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container row">
          <Link className="logo" href="/" aria-label="Exocortex home">Exocortex</Link>
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
          <HowDiagram />
          <div className="card" style={{ marginTop: 18 }}>
            <div className="kbd">Tip</div>
            <p style={{ marginTop: 6 }}>
              Exocortex removes friction between thinking and doing: the system picks the right agents
              and wires them to your context — you keep control over each step.
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

      {/* DEEP DIVE */}
      <section id="deepdive" className="section">
        <div className="container">
          <h2>Deep dive</h2>
          <p className="lead">More context for who it helps and what you actually get.</p>
          <div className="grid cols-2" style={{marginTop:18}}>
            <div className="card">
              <h3>Who it's for</h3>
              <ul style={{margin:"8px 0 0", paddingLeft:18, lineHeight:1.7, opacity:.9}}>
                <li>Builders who ship (PMs, ML/AI engineers, indie hackers).</li>
                <li>People juggling research, writing, planning, and delivery.</li>
                <li>Teams that want reusable, transparent agent pipelines.</li>
              </ul>
            </div>
            <div className="card">
              <h3>What you get</h3>
              <ul style={{margin:"8px 0 0", paddingLeft:18, lineHeight:1.7, opacity:.9}}>
                <li>Faster path from intent → finished artifact.</li>
                <li>Memory graph (2nd Brain) so you don't repeat yourself.</li>
                <li>Calendar-aware "next best action" and clean logs/artifacts.</li>
              </ul>
            </div>
          </div>
          <div className="card" style={{marginTop:18}}>
            <h3 style={{marginTop:0}}>Example pipeline: Research → Outline → Draft → Refine</h3>
            <ol style={{margin:"8px 0 0", paddingLeft:18, lineHeight:1.7, opacity:.9}}>
              <li><b>Intent</b>: "Write a 1-page brief on X." Definition of done set.</li>
              <li><b>Context</b>: pull prior notes/sources from 2nd Brain + fresh web cites.</li>
              <li><b>Compose</b>: Composer-0 chooses agents (summarize, outline, draft, polish).</li>
              <li><b>Execute</b>: steps run with artifacts saved (sources, outline, drafts).</li>
              <li><b>Schedule</b>: slot offered for review/edit based on your calendar.</li>
              <li><b>Review</b>: quick feedback; final PDF/markdown shared with provenance.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* MODULE DETAILS (expandables) */}
      <section id="details" className="section">
        <div className="container">
          <h2>Module details</h2>
          <p className="lead">Precise roles and I/O so the system stays understandable.</p>
          <div className="grid cols-2" style={{marginTop:18}}>
            {[
              {
                t: "Preminer (intake & triage)",
                d: "Single inbox for thoughts/notes/commands. Classifies (task, note, idea) and routes.",
                io: [
                  "Inputs: free text, voice, labels",
                  "Outputs: tasks to plan, notes to 2nd Brain, pipeline requests to Composer-0"
                ]
              },
              {
                t: "2nd Brain (knowledge graph)",
                d: "Living graph for People/Projects/Tasks/Notes/Sources with timeline + semantic search.",
                io: [
                  "Ops: add/merge entities, link relations, attach artifacts",
                  "Retrieval: hybrid graph walk + dense search with citations"
                ]
              },
              {
                t: "Context Retriever",
                d: "Fetches precise, permissioned context from 2nd Brain + calendar/files/web.",
                io: [
                  "Typed queries; freshness/quality scoring",
                  "Returns snippets + citations; scope-aware"
                ]
              },
              {
                t: "Composer-0 (planner & orchestrator)",
                d: "Turns intent into an agent pipeline with steps, deps, and acceptance criteria.",
                io: [
                  "Templates for research/content/code",
                  "Chooses agents/tools; keeps it observable"
                ]
              },
              {
                t: "Task Processor",
                d: "Executes steps, retries safely, logs everything, collects artifacts.",
                io: [
                  "Idempotent runner; event log",
                  "Artifacts vault (files/links) with provenance"
                ]
              },
              {
                t: "Planning System",
                d: "Suggests time slots respecting work hours, soft blocks, and energy profile.",
                io: [
                  "Models: WorkHours, TimeBlock, EnergyProfileEntry",
                  "API: suggest_slots() → ranked windows"
                ]
              },
              {
                t: "Agent Layer / Marketplace",
                d: "Pluggable micro-agents with typed I/O, ratings, budgets, and permissions.",
                io: [
                  "Clear scopes & resource caps",
                  "Future: community agents with governance"
                ]
              }
            ].map((m) => (
              <details key={m.t} className="card accordion">
                <summary><b>{m.t}</b></summary>
                <p style={{margin:"8px 0 0", opacity:.85}}>{m.d}</p>
                <ul style={{margin:"6px 0 0", paddingLeft:18, lineHeight:1.7, opacity:.85}}>
                  {m.io.map((x) => <li key={x}>{x}</li>)}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / PRIVACY */}
      <section id="faq" className="section">
        <div className="container">
          <h2>FAQ & privacy</h2>
          <div className="grid cols-2" style={{marginTop:18}}>
            <details className="card accordion">
              <summary><b>How is this different from a task manager?</b></summary>
              <p>It composes agent pipelines from your intent and context, executes steps, and logs artifacts. Tasks are the by-product, not the product.</p>
            </details>
            <details className="card accordion">
              <summary><b>Where does my data live?</b></summary>
              <p>You explicitly connect sources. 2nd Brain keeps a permissioned memory graph with citations and an audit trail.</p>
            </details>
            <details className="card accordion">
              <summary><b>Can I plug custom agents?</b></summary>
              <p>Yes—an Agent API is planned for beta. Agents have typed I/O, scopes, and budgets.</p>
            </details>
            <details className="card accordion">
              <summary><b>Can it schedule for me?</b></summary>
              <p>The Planning System proposes slots that respect your work hours, soft blocks, and energy patterns.</p>
            </details>
            <details className="card accordion">
              <summary><b>What do I get in the beta?</b></summary>
              <p>Saved pipelines (research/content), artifact vault, calendar-aware execution, and early access to the Agent API.</p>
            </details>
            <details className="card accordion">
              <summary><b>Pricing?</b></summary>
              <p>Early beta is free for waitlist users. Paid tiers will reflect agent usage and collaboration features.</p>
            </details>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="section">
        <div className="container">
          <h2>Roadmap</h2>
          <RoadmapTimeline
            items={[
              { title: "MVP",    desc: "Landing + waitlist, basic task orchestration, 2nd Brain integration, calendar slots, artifact logging.", status: "done" },
              { title: "Beta",   desc: "Agent marketplace, personal profiles, improved retrieval, pipeline templates, private instances.", status: "active" },
              { title: "Public", desc: "Open module ecosystem, DAO/economy for agent authors, SDK and docs.", status: "next" },
              { title: "Vision+",desc: "Thinking OS: personal task bus, multi-agent scenarios, live knowledge graph, self-learning.", status: "future" },
            ]}
          />
        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="section" style={{ paddingBottom: 72 }}>
        <div className="container">
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
            <h2>Join the waitlist</h2>
            <p className="lead">
              Become an early user/builder — get invites, updates, and access to private builds.
            </p>
          </div>
          <form
            className="form"
            action={process.env.NEXT_PUBLIC_FORMSPREE || "https://formspree.io/f/your_form_id"}
            method="POST"
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              className="input"
              name="email"
              type="email"
              required
              placeholder="your@email"
              aria-label="Email address"
            />
            <label htmlFor="role" className="sr-only">Your role</label>
            <input
              id="role"
              className="input"
              name="role"
              placeholder="your role (e.g., ML Engineer / PM)"
              aria-label="Your role (optional)"
            />
            <input type="hidden" name="_redirect" value="https://exocore.cx/thanks" />
            <button className="btn" type="submit">Request access</button>
          </form>
          <p style={{ color: "var(--muted)", fontSize: 14, marginTop: 10, textAlign: 'center' }}>
            Or email us at <a href="mailto:info@exocore.cx">info@exocore.cx</a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div>© {new Date().getFullYear()} Exocore.cx</div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/">Home</Link>
            <a href="#deepdive">Deep dive</a>
            <Link href="/manifesto">Manifesto</Link>
            <Link href="/updates">Updates</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <a href="mailto:info@exocore.cx">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}