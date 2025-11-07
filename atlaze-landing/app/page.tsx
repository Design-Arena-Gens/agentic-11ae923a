const signals = [
  { label: "Signals parsed", value: "24M+" },
  { label: "Experiments automated", value: "3.7K" },
  { label: "Markets activated", value: "18" },
  { label: "Avg. lift", value: "32%" },
];

const services = [
  {
    title: "Intelligence Design",
    description:
      "Translate raw telemetry into insight architectures that keep pace with your decisions.",
    pillars: ["Insight Models", "Forecasting Dashboards", "Governance Systems"],
  },
  {
    title: "Experience Engineering",
    description:
      "Build immersive journeys that adapt in real-time to behavioural signals and intent.",
    pillars: ["Omnichannel UX", "Adaptive Interfaces", "Journey Mapping"],
  },
  {
    title: "Growth Automation",
    description:
      "Operationalise experimentation and campaign orchestration with full-funnel automation.",
    pillars: ["Lifecycle Ops", "Performance Labs", "Activation Sprints"],
  },
];

const approach = [
  {
    stage: "Analyse",
    headline: "Decode the signal",
    copy: "We deconstruct your data stack, map the signal flow, and identify the moments that matter.",
  },
  {
    stage: "Act",
    headline: "Design adaptive systems",
    copy: "Our designers and engineers co-create orchestrations that respond to real-time behaviour.",
  },
  {
    stage: "Achieve",
    headline: "Scale what works",
    copy: "Always-on experimentation and intelligence loops compound impact across every channel.",
  },
];

const caseStudies = [
  {
    client: "Nova Commerce",
    impact: "47% increase in conversion velocity",
    summary:
      "Unified siloed touchpoints into a single adaptive commerce layer with predictive merchandising.",
  },
  {
    client: "Flux Mobility",
    impact: "12x faster decision cadence",
    summary:
      "Automated analytics to give regional teams live customer intelligence and scenario planning.",
  },
  {
    client: "Helio BioTech",
    impact: "3.4x ROI on product launch",
    summary:
      "Built a launch control tower aligning demand signals, paid activation, and scientific content.",
  },
];

const recognitions = [
  "Adobe Innovation Council",
  "AWS ISV Accelerate",
  "Figma Enterprise Partner",
  "Gartner Cool Vendor",
];

function GradientBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-1/2 top-[-10%] h-[52rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(111,47,238,0.65),_rgba(16,9,32,0.2)_60%,_transparent)] blur-3xl" />
      <div className="absolute left-[-15%] top-1/3 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(94,23,235,0.55),_rgba(5,1,15,0.15)_60%,_transparent)] blur-3xl" />
      <div className="absolute right-[-20%] top-[40%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(160,242,255,0.28),_rgba(5,1,15,0.05)_70%,_transparent)] blur-[140px]" />
    </div>
  );
}

function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="text-xs uppercase tracking-[0.35em] text-slate-400">
        {kicker}
      </span>
      <h2
        className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      <p className="mt-4 text-balance text-lg text-slate-300/90">{copy}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientBackdrop />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-12 pt-10 md:px-12 lg:px-16">
        <header className="flex items-center justify-between gap-6 rounded-full border border-white/5 bg-[#120a27]/60 px-6 py-4 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[radial-gradient(circle_at_30%_30%,_#6f2fee,_#34145c_75%)] shadow-[0_0_0_6px_rgba(94,23,235,0.25)]" />
            <div>
              <p
                className="text-lg font-semibold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Atlaze
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-400">
                Analyse. Act. Achieve.
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white/80" href="#capabilities">
              Capabilities
            </a>
            <a className="transition hover:text-white/80" href="#method">
              Method
            </a>
            <a className="transition hover:text-white/80" href="#evidence">
              Evidence
            </a>
            <a className="transition hover:text-white/80" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="rounded-full border border-indigo-400/60 bg-gradient-to-r from-[#5e17eb] via-[#6f2fee] to-[#8c57ff] px-5 py-2 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(94,23,235,0.25)] transition hover:shadow-[0_16px_50px_rgba(94,23,235,0.35)]"
            href="#contact"
          >
            Initiate a sprint
          </a>
        </header>

        <main className="relative mt-16 flex flex-1 flex-col gap-24 pb-24">
          <section className="relative isolate overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.05] via-[#120a27]/60 to-[#080414] px-8 py-16 shadow-[0px_60px_160px_-80px_rgba(10,0,40,0.9)] backdrop-blur-3xl md:px-12 lg:px-16">
            <div className="absolute inset-0 -z-10 opacity-70">
              <div className="noise rounded-3xl" />
            </div>
            <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.45em] text-slate-300">
                  <span className="flex h-9 items-center rounded-full border border-white/10 bg-white/5 px-4 tracking-[0.35em] text-[0.7rem]">
                    New digital agency
                  </span>
                  <span className="hidden items-center gap-2 text-white/60 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-[#5e17eb]" />
                    Data-native
                  </span>
                  <span className="hidden items-center gap-2 text-white/60 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-[#a0f2ff]" />
                    Design-led
                  </span>
                </div>
                <h1
                  className="mt-8 text-balance text-5xl font-semibold leading-[1.08] text-white sm:text-6xl lg:text-7xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Where signal-rich insight becomes decisive digital action.
                </h1>
                <p className="mt-6 text-lg text-slate-300/90">
                  Atlaze partners with visionaries to design intelligent brand
                  systems that learn, adapt, and accelerate growth. We architect
                  experiences that feel alive with data and purpose.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#5e17eb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#6f2fee]"
                  >
                    Start a project
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/20 text-[0.65rem]">
                      →
                    </span>
                  </a>
                  <a
                    href="#evidence"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white/80 transition hover:text-white"
                  >
                    View the evidence
                  </a>
                </div>
              </div>
              <div className="relative flex-1">
                <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-[#0b0718]/70 p-6 shadow-[0_40px_80px_-60px_rgba(94,23,235,0.8)] backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-slate-400">
                    <span>Insight Heatmap</span>
                    <span>Live Sync</span>
                  </div>
                  <div className="mt-6 grid grid-cols-4 gap-2 text-center text-[0.65rem] font-medium text-slate-300">
                    {["Awareness", "Engagement", "Intent", "Advocacy"].map(
                      (label) => (
                        <span
                          key={label}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-2"
                        >
                          {label}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="mt-6 grid gap-4">
                    {[64, 48, 77].map((height, idx) => (
                      <div key={idx} className="relative h-28 overflow-hidden">
                        <div className="absolute inset-0 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-[#160c33]/50 to-[#080414]/80 shadow-inner" />
                        <div
                          className="absolute bottom-0 left-0 right-0 mx-3 mb-3 rounded-full bg-gradient-to-r from-[#5e17eb] via-[#6f2fee] to-[#a0f2ff] transition-all duration-700"
                          style={{ height: `${height}%` }}
                        />
                        <div className="absolute inset-0 flex flex-col justify-between p-4 text-xs text-white/60">
                          <span>Signal strength</span>
                          <span className="text-sm font-semibold text-white">
                            {height}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-200">
                    <span className="uppercase tracking-[0.35em] text-white/50">
                      Capsule
                    </span>
                    <p className="text-sm leading-relaxed text-white/80">
                      {`“Atlaze are the architects of our decisioning layer. They turned an ocean of behavioural telemetry into an experience engine that keeps us ahead of the market.”`}
                    </p>
                    <p className="pt-1 text-[0.7rem] uppercase tracking-[0.3em] text-white/40">
                      Chief Growth Officer, Nova Commerce
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 grid gap-4 rounded-3xl border border-white/[0.04] bg-[#0b0718]/60 p-6 backdrop-blur-xl md:grid-cols-4">
              {signals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.06] to-transparent p-4 text-center"
                >
                  <p
                    className="text-3xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {signal.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-400">
                    {signal.label}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="capabilities" className="space-y-16">
            <SectionHeading
              kicker="capabilities"
              title="Every engagement orchestrates intelligence, experience, and growth."
              copy="Atlaze deploys interdisciplinary squads that interlock strategy, creative technology, and growth automation to deliver compounding momentum."
            />
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0720]/70 p-8 transition hover:border-indigo-500/50 hover:shadow-[0_40px_120px_-60px_rgba(94,23,235,0.75)]"
                >
                  <div className="absolute inset-0 -z-10 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(111,47,238,0.45),_transparent_60%)]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <h3
                      className="text-2xl font-semibold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {service.title}
                    </h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-white/60">
                      Atlaze Core
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300/90">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-white/70">
                    {service.pillars.map((pillar) => (
                      <li
                        key={pillar}
                        className="flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.04] px-4 py-2"
                      >
                        <span className="h-2 w-2 rounded-full bg-[#5e17eb]" />
                        <span>{pillar}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#a0f2ff] transition group-hover:translate-x-1">
                    Deploy this squad
                    <span className="text-[0.8rem] group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="method" className="space-y-16">
            <SectionHeading
              kicker="method"
              title="The Atlaze decision engine."
              copy="We integrate with your teams to design an adaptive operating system that ingests signal, simulates options, and deploys action in near-real time."
            />
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
              <div className="space-y-8">
                {approach.map((item, index) => (
                  <div
                    key={item.stage}
                    className="relative rounded-3xl border border-white/10 bg-[#0b0618]/60 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm uppercase tracking-[0.35em] text-white/50">
                        {item.stage}
                      </span>
                      <span className="text-sm text-white/50">0{index + 1}</span>
                    </div>
                    <h3
                      className="mt-6 text-2xl font-semibold text-white"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.headline}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#140a33] via-[#0b051a] to-[#05010f] p-8">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(111,47,238,0.4),_transparent_65%)] opacity-80" />
                <h3
                  className="text-3xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Integrated launch framework
                </h3>
                <p className="mt-4 text-sm text-slate-300">
                  We co-build a command centre inside your organisation, fusing
                  ritual, tooling, and experimentation. The result: decisive
                  clarity and compounding performance.
                </p>
                <div className="mt-8 space-y-6">
                  {[
                    {
                      label: "Signal ingestion",
                      detail:
                        "Event stitching, telemetry translation, quality scoring.",
                    },
                    {
                      label: "Scenario modelling",
                      detail:
                        "Decision mapping, opportunity sizing, predictive loops.",
                    },
                    {
                      label: "Activation orbit",
                      detail:
                        "Launch playbooks, creative systems, performance automation.",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.35em] text-[#a0f2ff]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm text-slate-200">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="evidence" className="space-y-16">
            <SectionHeading
              kicker="evidence"
              title="Proof of velocity."
              copy="We align with teams that are ready to move from intuition-first to insight-infused. Here’s how momentum looks when Atlaze deploys."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.client}
                  className="rounded-3xl border border-white/8 bg-[#0c061b]/70 p-6 shadow-[0_30px_120px_-90px_rgba(160,242,255,0.6)] transition hover:border-[#6f2fee]/40"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
                      {study.client}
                    </span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#a0f2ff]">
                      Signal
                    </span>
                  </div>
                  <p
                    className="mt-6 text-xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {study.impact}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {study.summary}
                  </p>
                  <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/40">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#5e17eb]" />
                    Case intelligence available on request
                  </div>
                </article>
              ))}
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#0c051a] via-[#140a32] to-[#080414] p-8">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Trusted alliances
                  </p>
                  <div
                    className="mt-3 text-3xl font-semibold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Operating with leaders that invent the future.
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {recognitions.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-white/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b0c3f] via-[#0a031f] to-[#05010f] p-10"
          >
            <div className="absolute inset-0 -z-10 opacity-80">
              <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(160,242,255,0.24),_transparent_65%)]" />
            </div>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Contact Atlaze
                </p>
                <h3
                  className="mt-4 text-4xl font-semibold text-white"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Let’s architect your next wave of momentum.
                </h3>
                <p className="mt-3 text-sm text-slate-200">
                  Share your challenge. We’ll respond inside 48 hours with a
                  tailored immersion agenda.
                </p>
              </div>
              <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                  Mission statement
                  <textarea
                    placeholder="Where do you need velocity?"
                    className="mt-3 h-24 w-full resize-none rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-white/90 outline-none transition focus:border-[#6f2fee] focus:ring-2 focus:ring-[#5e17eb]/40"
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                    Name
                    <input
                      placeholder="Your name"
                      className="mt-3 h-11 w-full rounded-full border border-white/10 bg-black/30 px-4 text-sm text-white/90 outline-none transition focus:border-[#6f2fee] focus:ring-2 focus:ring-[#5e17eb]/40"
                    />
                  </label>
                  <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                    Email
                    <input
                      placeholder="you@company.com"
                      className="mt-3 h-11 w-full rounded-full border border-white/10 bg-black/30 px-4 text-sm text-white/90 outline-none transition focus:border-[#6f2fee] focus:ring-2 focus:ring-[#5e17eb]/40"
                    />
                  </label>
                </div>
                <button className="group mt-3 inline-flex items-center justify-center gap-3 rounded-full bg-[#5e17eb] px-6 py-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:bg-[#6f2fee]">
                  Initiate dialogue
                  <span className="text-base group-hover:translate-x-1 transition">
                    ↗
                  </span>
                </button>
              </div>
            </div>
          </section>
        </main>

        <footer className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Atlaze Digital Agency. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 uppercase tracking-[0.35em]">
            <span>Privacy</span>
            <span>Careers</span>
            <span>LinkedIn</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
