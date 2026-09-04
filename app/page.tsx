const services = [
  {
    number: "01",
    title: "Auto Repair",
    description:
      "Professional automotive repair for the issues that keep your vehicle from running the way it should.",
  },
  {
    number: "02",
    title: "Diagnostics",
    description:
      "Troubleshooting and diagnostic service to help identify what's happening before repairs are made.",
  },
  {
    number: "03",
    title: "Brake Service",
    description:
      "Brake inspection and repair for one of the most important safety systems on your vehicle.",
  },
  {
    number: "04",
    title: "A/C Service",
    description:
      "Automotive air-conditioning service for comfort and reliable cooling in Hawaii's climate.",
  },
  {
    number: "05",
    title: "Maintenance",
    description:
      "Routine automotive maintenance designed to help keep your vehicle dependable.",
  },
  {
    number: "06",
    title: "General Repairs",
    description:
      "A practical repair shop for everyday automotive problems and maintenance needs.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f2] text-[#171717]">
      {/* Header */}
      <header className="border-b border-black/10 bg-[#f5f5f2]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#171717] text-sm font-black tracking-tight text-white">
              PT
            </div>
            <div>
              <div className="text-sm font-black uppercase tracking-[0.12em]">
                Pro-Tech
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/50">
                Auto Solutions
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold md:flex">
            <a href="#services" className="transition-opacity hover:opacity-50">
              Services
            </a>
            <a href="#about" className="transition-opacity hover:opacity-50">
              Why Pro-Tech
            </a>
            <a href="#contact" className="transition-opacity hover:opacity-50">
              Contact
            </a>
          </nav>

          <a
            href="tel:+18082380840"
            className="rounded-sm bg-[#e85d2a] px-4 py-2.5 text-xs font-black uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5 sm:px-5"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1.15fr_0.85fr]">
          <div className="px-5 py-20 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#e85d2a]" />
              <span className="text-xs font-black uppercase tracking-[0.2em] text-black/55">
                Kailua-Kona, Hawaii
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
              KEEP YOUR
              <br />
              <span className="text-[#e85d2a]">VEHICLE</span>
              <br />
              MOVING.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/65 sm:text-lg">
              Professional automotive repair, diagnostics, brake service,
              A/C service, maintenance, and general repairs in Kailua-Kona.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+18082380840"
                className="inline-flex items-center justify-center rounded-sm bg-[#171717] px-7 py-4 text-sm font-black uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-0.5 hover:bg-black"
              >
                Call (808) 238-0840
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm border border-black/20 bg-white px-7 py-4 text-sm font-black uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5 hover:border-black"
              >
                Request Service
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] bg-[#171717] lg:block">
            <div className="absolute inset-0 opacity-[0.08]">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, transparent 25%, #fff 25%, #fff 26%, transparent 26%, transparent 74%, #fff 74%, #fff 75%, transparent 75%)",
                  backgroundSize: "72px 72px",
                }}
              />
            </div>

            <div className="absolute bottom-12 left-10 right-10">
              <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/45">
                Pro-Tech Auto Solutions
              </div>
              <div className="h-px w-full bg-white/15" />
              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="text-6xl font-black tracking-[-0.06em] text-white">
                    808
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                    Kona • Hawaii
                  </div>
                </div>
                <div className="mb-2 text-right text-xs font-semibold leading-5 text-white/45">
                  Automotive
                  <br />
                  Repair & Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-black/10 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-black/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className="px-5 py-7 sm:px-8 lg:px-10">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-black/40">
              Local Service
            </div>
            <div className="mt-2 font-bold">Kailua-Kona, Hawaii</div>
          </div>

          <div className="px-5 py-7 sm:px-8 lg:px-10">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-black/40">
              Call Direct
            </div>
            <a
              href="tel:+18082380840"
              className="mt-2 block font-bold hover:text-[#e85d2a]"
            >
              (808) 238-0840
            </a>
          </div>

          <div className="px-5 py-7 sm:px-8 lg:px-10">
            <div className="text-xs font-black uppercase tracking-[0.18em] text-black/40">
              Located At
            </div>
            <div className="mt-2 font-bold">74-5093 Kealakaa St</div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-10 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#e85d2a]">
              What We Do
            </div>
            <h2 className="max-w-2xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              AUTOMOTIVE SERVICE
              <br />
              WITHOUT THE RUNAROUND.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/55">
            From diagnostics to routine maintenance and repairs, Pro-Tech Auto
            Solutions serves drivers in the Kailua-Kona area.
          </p>
        </div>

        <div className="grid border-l border-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group min-h-64 border-b border-r border-black/10 p-7 transition-colors hover:bg-white sm:p-8"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs font-black tracking-[0.15em] text-[#e85d2a]">
                  {service.number}
                </span>
                <span className="text-xl font-light text-black/20 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

              <h3 className="mt-16 text-xl font-black uppercase tracking-[-0.02em]">
                {service.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-black/55">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Why Pro-Tech */}
      <section id="about" className="bg-[#171717] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.8fr_1.2fr]">
          <div className="border-b border-white/10 px-5 py-20 sm:px-8 lg:border-b-0 lg:border-r lg:px-10 lg:py-28">
            <div className="mb-5 text-xs font-black uppercase tracking-[0.2em] text-[#e85d2a]">
              Why Pro-Tech
            </div>

            <h2 className="text-4xl font-black tracking-[-0.04em] sm:text-5xl">
              A LOCAL SHOP
              <br />
              FOR REAL
              <br />
              CAR PROBLEMS.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2">
            <div className="border-b border-white/10 p-8 sm:border-r sm:p-10">
              <div className="text-4xl font-black text-white/15">01</div>
              <h3 className="mt-10 text-lg font-black uppercase">
                Straightforward Service
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                A professional place to bring your vehicle when something
                needs attention, diagnosis, maintenance, or repair.
              </p>
            </div>

            <div className="border-b border-white/10 p-8 sm:p-10">
              <div className="text-4xl font-black text-white/15">02</div>
              <h3 className="mt-10 text-lg font-black uppercase">
                Local & Accessible
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Conveniently located in Kailua-Kona with a direct phone number
                for getting in touch.
              </p>
            </div>

            <div className="p-8 sm:border-r sm:p-10">
              <div className="text-4xl font-black text-white/15">03</div>
              <h3 className="mt-10 text-lg font-black uppercase">
                Broad Repair Needs
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                From brakes and A/C to diagnostics, maintenance, and general
                automotive repairs.
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <div className="text-4xl font-black text-white/15">04</div>
              <h3 className="mt-10 text-lg font-black uppercase">
                Built Around Trust
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Clear information, easy contact, and a professional web
                presence designed around the customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-b border-black/10 bg-[#e85d2a] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="text-xs font-black uppercase tracking-[0.2em] text-white/60">
              Need Service?
            </div>
            <h2 className="mt-5 max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              LET&apos;S GET YOUR
              <br />
              VEHICLE BACK
              <br />
              ON THE ROAD.
            </h2>
          </div>

          <div className="border-t border-white/20 px-5 py-8 sm:px-8 lg:border-l lg:border-t-0 lg:px-10 lg:py-28">
            <a
              href="tel:+18082380840"
              className="block text-2xl font-black underline decoration-white/30 underline-offset-8 transition-colors hover:decoration-white"
            >
              (808) 238-0840
            </a>

            <div className="mt-8 text-sm leading-6 text-white/75">
              Pro-Tech Auto Solutions
              <br />
              74-5093 Kealakaa St
              <br />
              Kailua-Kona, HI 96740
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=74-5093+Kealakaa+St,+Kailua-Kona,+HI+96740"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block text-xs font-black uppercase tracking-[0.16em] underline underline-offset-4"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#171717] px-5 py-10 text-white sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="font-black uppercase tracking-[0.12em]">
              Pro-Tech Auto Solutions
            </div>
            <div className="mt-1 text-white/35">
              Kailua-Kona, Hawaii
            </div>
          </div>

          <div className="text-white/35">
            Demo concept — business details should be confirmed before launch.
          </div>
        </div>
      </footer>
    </main>
  );
}
