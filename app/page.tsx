export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
        <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] bg-white/5 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[10%] left-[-200px] w-[500px] h-[500px] bg-white/5 blur-[140px] rounded-full"></div>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-neutral-900">
        <div className="px-5 sm:px-6 md:px-14 py-5 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-[0.2em] sm:tracking-[0.25em]">
            VORMEXA
          </h1>

          <div className="hidden md:flex items-center gap-10 text-sm text-neutral-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#process" className="hover:text-white transition">Process</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#systems" className="hover:text-white transition">Systems</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative z-10 px-5 sm:px-6 md:px-14 pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 md:pb-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-neutral-500 tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm mb-6 md:mb-8">
              BIM STUDIO — SWEDEN
            </p>

            <h2 className="text-5xl sm:text-6xl md:text-8xl font-semibold leading-[0.9] break-words">
              Vormexa
            </h2>

            <p className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight mt-8 md:mt-10 max-w-full md:max-w-3xl break-words">
              Intelligent BIM Coordination & Visualization
            </p>

            <p className="text-neutral-400 mt-8 md:mt-10 text-base md:text-lg leading-relaxed max-w-full md:max-w-xl">
              Vormexa is a digital BIM studio focused on intelligent coordination,
              visualization systems, and structured workflows for future-ready
              architectural projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-10 md:mt-14">
              <a
                href="#systems"
                className="px-7 sm:px-8 py-4 sm:py-5 bg-white text-black rounded-full hover:bg-neutral-200 transition text-center"
              >
                Explore Systems
              </a>

              <a
                href="#contact"
                className="px-7 sm:px-8 py-4 sm:py-5 border border-neutral-700 rounded-full hover:border-white transition text-center"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative min-h-[520px] md:h-[700px] rounded-[30px] md:rounded-[40px] overflow-hidden border border-neutral-800 bg-gradient-to-br from-neutral-950 via-black to-neutral-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_35%)]"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.75))]"></div>

              <div className="relative z-10 p-6 md:p-10 flex flex-col justify-between min-h-[520px] md:h-full">
                <div className="flex justify-between items-start gap-6">
                  <div>
                    <p className="text-neutral-500 tracking-[0.3em] text-sm mb-5">
                      VORMEXA SYSTEM
                    </p>

                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight max-w-full md:max-w-lg break-words">
                      Intelligent BIM Coordination Environment
                    </h3>
                  </div>

                  <div className="shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-full border border-neutral-700 flex items-center justify-center text-xs md:text-sm text-neutral-400">
                    BIM
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="rounded-2xl md:rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 md:p-6 backdrop-blur-sm">
                    <p className="text-neutral-500 text-sm mb-3 tracking-[0.3em]">
                      PROJECTS
                    </p>

                    <h4 className="text-2xl md:text-3xl font-semibold">
                      02
                    </h4>
                  </div>

                  <div className="rounded-2xl md:rounded-3xl border border-neutral-800 bg-neutral-950/60 p-5 md:p-6 backdrop-blur-sm">
                    <p className="text-neutral-500 text-sm mb-3 tracking-[0.3em]">
                      LOCATION
                    </p>

                    <h4 className="text-2xl md:text-3xl font-semibold">
                      Sweden
                    </h4>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 md:gap-0">
                  <div>
                    <div className="w-full max-w-[220px] h-[2px] bg-neutral-800 mb-5"></div>

                    <p className="text-neutral-500 tracking-[0.3em] text-sm">
                      CINEMATIC DIGITAL EXPERIENCE
                    </p>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-neutral-500 text-sm mb-2">
                      Scandinavia — 2026
                    </p>

                    <p className="text-neutral-300">
                      Future-ready BIM systems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900 overflow-hidden"
      >
        <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-neutral-800 blur-[160px] opacity-20"></div>

        <p className="text-neutral-500 tracking-[0.3em] text-sm mb-10 relative z-10">
          ABOUT VORMEXA
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-[1.05] max-w-6xl relative z-10 break-words">
          We create intelligent BIM systems for visionary architecture and
          future-ready coordination.
        </h2>

        <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-2xl mt-10 md:mt-16 relative z-10">
          Vormexa combines BIM coordination, visualization and Scandinavian
          design thinking to build efficient digital workflows for modern
          architecture.
        </p>
      </section>

      {/* PROCESS */}
      <section
        id="process"
        className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900"
      >
        <p className="text-neutral-500 tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm mb-10 md:mb-16">
          OUR PROCESS
        </p>

        <div className="space-y-10">
          {[
            [
              "01",
              "Discovery",
              "Understanding project goals, BIM requirements and coordination strategies.",
            ],
            [
              "02",
              "Coordination",
              "Model integration, clash management and intelligent BIM workflows.",
            ],
            [
              "03",
              "Visualization",
              "Architectural cinematic systems and visual storytelling experiences.",
            ],
            [
              "04",
              "Delivery",
              "Structured BIM documentation and scalable future-ready outputs.",
            ],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="group border border-neutral-900 rounded-[28px] md:rounded-[32px] p-6 md:p-10 hover:border-neutral-700 hover:-translate-y-2 transition-all duration-700"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div>
                  <p className="text-neutral-600 text-sm mb-4 tracking-[0.3em]">
                    {number}
                  </p>

                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold break-words">
                    {title}
                  </h3>
                </div>

                <p className="text-neutral-400 max-w-xl leading-relaxed">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900"
      >
        <p className="text-neutral-500 tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm mb-10 md:mb-14">
          SERVICES
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            [
              "BIM",
              "BIM Coordination",
              "Intelligent coordination workflows, clash detection and model integration systems.",
            ],
            [
              "VISUALIZATION",
              "Architectural Visualization",
              "Cinematic architectural visuals and Scandinavian spatial storytelling.",
            ],
            [
              "DIGITAL WORKFLOW",
              "Technical BIM Systems",
              "Smart documentation systems and future-ready BIM processes.",
            ],
          ].map(([label, title, text]) => (
            <div
              key={title}
              className="group rounded-[28px] md:rounded-[35px] border border-neutral-900 bg-neutral-950 p-6 md:p-10 hover:border-neutral-700 hover:-translate-y-2 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/[0.03] opacity-0 group-hover:opacity-100 transition duration-700"></div>

              <div className="relative h-[190px] md:h-[240px] rounded-2xl md:rounded-3xl bg-gradient-to-br from-neutral-900 to-black border border-neutral-800 flex items-center justify-center mb-8 md:mb-10">
                <span className="text-neutral-600 tracking-[0.3em] text-sm">
                  SERVICE IMAGE
                </span>
              </div>

              <p className="relative text-neutral-500 tracking-[0.3em] text-sm mb-4">
                {label}
              </p>

              <h3 className="relative text-2xl md:text-3xl font-semibold mb-5 md:mb-6 break-words">
                {title}
              </h3>

              <p className="relative text-neutral-400 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>
{/* WHY VORMEXA */}

<section className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900">

  <div className="mb-12 md:mb-20">

    <p className="text-neutral-500 tracking-[0.3em] text-sm mb-6">
      WHY VORMEXA
    </p>

    <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold max-w-5xl leading-tight break-words">
      Built for intelligent BIM workflows and modern architectural systems.
    </h2>

  </div>

  <div className="grid md:grid-cols-2 gap-8">

    <div className="group rounded-[28px] md:rounded-[35px] border border-neutral-900 p-6 md:p-10 hover:border-neutral-700 transition-all duration-700">

      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 break-words">
        Intelligent Coordination
      </h3>

      <p className="text-neutral-400 leading-relaxed">
        Structured BIM coordination systems focused on clarity, efficiency and scalable collaboration.
      </p>

    </div>

    <div className="group rounded-[28px] md:rounded-[35px] border border-neutral-900 p-6 md:p-10 hover:border-neutral-700 transition-all duration-700">

      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 break-words">
        Scandinavian Thinking
      </h3>

      <p className="text-neutral-400 leading-relaxed">
        Clean design principles combined with technical BIM workflows and visualization strategies.
      </p>

    </div>

    <div className="group rounded-[28px] md:rounded-[35px] border border-neutral-900 p-6 md:p-10 hover:border-neutral-700 transition-all duration-700">

      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 break-words">
        Future-ready Systems
      </h3>

      <p className="text-neutral-400 leading-relaxed">
        Flexible digital systems designed to evolve with project requirements and technology.
      </p>

    </div>

    <div className="group rounded-[28px] md:rounded-[35px] border border-neutral-900 p-6 md:p-10 hover:border-neutral-700 transition-all duration-700">

      <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-6 break-words">
        Visualization Excellence
      </h3>

      <p className="text-neutral-400 leading-relaxed">
        Architectural storytelling and visual communication focused on quality and impact.
      </p>

    </div>

  </div>

</section>

      {/* CINEMATIC PROJECT */}
      <section className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-500 mb-5">
              PROJECTS
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight max-w-4xl break-words">
              Selected BIM & Visualization Systems
            </h2>
          </div>

          <p className="text-neutral-500 max-w-sm">
            Architectural visualization, BIM coordination and technical workflows
            designed for modern Scandinavian projects.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-[30px] md:rounded-[40px] border border-neutral-900 bg-neutral-950">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

          <div className="h-[420px] md:h-[750px] bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex items-center justify-center">
            <span className="text-neutral-600 tracking-[0.4em] text-sm">
              MAIN PROJECT IMAGE
            </span>
          </div>

          <div className="absolute bottom-0 left-0 z-20 p-6 md:p-16">
            <p className="text-neutral-400 tracking-[0.3em] text-sm mb-4">
              BIM VISUALIZATION
            </p>

            <h3 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-6 break-words">
              Scandinavian Residential Concept
            </h3>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-neutral-700 rounded-full px-6 md:px-7 py-4 hover:bg-white hover:text-black transition duration-500"
            >
              Explore System
            </a>
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900">
        <div className="grid md:grid-cols-4 gap-8">
          {[
            ["SYSTEMS", "BIM", "Intelligent coordination workflows and model systems."],
            ["VISUAL", "CGI", "Architectural visualization and cinematic presentation systems."],
            ["WORKFLOW", "Smart", "Structured documentation and future-ready BIM processes."],
            ["PROJECTS", "Active", "Current BIM systems and architectural developments in progress."],
          ].map(([label, title, text]) => (
            <div
              key={title}
              className="border border-neutral-900 rounded-[28px] md:rounded-[32px] p-6 md:p-10 hover:border-neutral-700 hover:-translate-y-2 transition-all duration-700"
            >
              <p className="text-neutral-600 text-sm tracking-[0.3em] mb-6">
                {label}
              </p>

              <h3 className="text-4xl md:text-5xl font-semibold mb-4 break-words">
                {title}
              </h3>

              <p className="text-neutral-400 leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED SYSTEMS */}
      <section
        id="systems"
        className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900"
      >
        <p className="text-neutral-500 tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm mb-10 md:mb-16">
          FEATURED SYSTEMS
        </p>

        <div className="space-y-20 md:space-y-32">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-neutral-700 blur-[120px] opacity-20"></div>

              <div className="relative h-[350px] md:h-[600px] rounded-[30px] md:rounded-[40px] overflow-hidden border border-neutral-900 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex items-center justify-center hover:scale-[1.01] transition duration-700">
                <span className="text-neutral-600 tracking-[0.4em] text-sm">
                  BIM COORDINATION SYSTEM
                </span>
              </div>
            </div>

            <div>
              <p className="text-neutral-600 tracking-[0.3em] text-sm mb-6">
                DIGITAL COORDINATION
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-[1.05] md:leading-[1] mb-8 md:mb-10 break-words">
                Intelligent BIM workflow architecture
              </h2>

              <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
                Structured BIM systems designed for coordination,
                visualization and scalable architectural collaboration.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <p className="text-neutral-600 tracking-[0.3em] text-sm mb-6">
                VISUALIZATION
              </p>

              <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-[1.05] md:leading-[1] mb-8 md:mb-10 break-words">
                Cinematic presentation environments
              </h2>

              <p className="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
                High-end architectural visualization systems focused on
                Scandinavian minimalism and digital storytelling.
              </p>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-neutral-700 blur-[120px] opacity-20"></div>

              <div className="relative h-[350px] md:h-[600px] rounded-[30px] md:rounded-[40px] overflow-hidden border border-neutral-900 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 flex items-center justify-center hover:scale-[1.01] transition duration-700">
                <span className="text-neutral-600 tracking-[0.4em] text-sm">
                  VISUAL SYSTEM PREVIEW
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="relative z-10 px-5 sm:px-6 md:px-14 py-20 sm:py-24 md:py-32 border-t border-neutral-900"
      >
        <p className="text-neutral-500 tracking-[0.22em] sm:tracking-[0.3em] text-xs sm:text-sm mb-6 md:mb-8">
          CONTACT
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-7xl font-semibold leading-tight max-w-5xl break-words">
          Let’s coordinate intelligent BIM experiences together.
        </h2>

        <div className="mt-10 md:mt-16 flex flex-col gap-4 md:gap-6 text-lg md:text-2xl break-words">
          <a
            href="mailto:vormexa.info.bim@gmail.com"
            className="hover:text-neutral-400 transition"
          >
            vormexa.info.bim@gmail.com
          </a>

          <a
            href="tel:+46724439128"
            className="hover:text-neutral-400 transition"
          >
            +46 72-443 91 28
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 px-5 sm:px-6 md:px-14 py-10 border-t border-neutral-900 flex flex-col sm:flex-row gap-3 sm:gap-0 sm:justify-between text-neutral-500 text-sm">
        <p>vormexa Techno</p>
        <p>Sweden — 2026</p>
      </footer>
    </main>
  );
}
