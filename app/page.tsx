import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import type { CSSProperties } from "react";
import { LandscapeMockup, PhoneMockup } from "./components/Devices";
import { MobileMenu } from "./components/MobileMenu";
import { RevealObserver } from "./components/RevealObserver";

const features: { title: string; body: string }[] = [
  {
    title: "Pixel-perfect scaling",
    body: "Integer scaling keeps every pixel the same size and razor sharp. Nothing ever overlaps the game screen.",
  },
  {
    title: "Save states in two taps",
    body: "Eight slots plus auto-save, each with a screenshot. Quick save and quick load are always two taps away, with undo.",
  },
  {
    title: "Controls you can move",
    body: "Drag and resize every button, with separate portrait and landscape layouts, snap-to-grid and adjustable opacity.",
  },
  {
    title: "Screen filters",
    body: "Original, Smooth, LCD Grid or Scanlines, with a live before/after preview so you can see the difference.",
  },
  {
    title: "Bluetooth controllers",
    body: "Pair a controller, map any button and set shortcuts. Touch controls hide automatically and the screen grows.",
  },
  {
    title: "Cheats that check themselves",
    body: "Paste a code and KRS-32 points to the exact line and character that's wrong before you save it.",
  },
];

const promises: { title: string; body: string }[] = [
  {
    title: "Your games, your files",
    body: "KRS-32 doesn't include, sell or download games or BIOS files. Point it at a folder of ROMs you own and it builds your library.",
  },
  {
    title: "Stays on your device",
    body: "Your library, saves and settings live on your phone. Backups go wherever you choose.",
  },
];

const faqs = [
  {
    q: "Does KRS-32 come with games?",
    a: "No. KRS-32 is only the player. You add ROM files you've legally obtained, for example by backing up cartridges you own.",
  },
  {
    q: "Do I need a BIOS file?",
    a: "No. KRS-32 runs without one. If you have a BIOS dumped from your own hardware, you can point to it in settings for the original boot screen.",
  },
  {
    q: "Can I use a controller?",
    a: "Yes. Pair any Bluetooth controller, map every button and set shortcuts. Touch controls hide automatically while it's connected.",
  },
  {
    q: "How much does it cost?",
    a: "KRS-32 is free to download, with no ads and no account required.",
  },
];

/** Stagger index for `.intro` / `[data-reveal]` delays. */
const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

const container = "mx-auto w-full max-w-[1200px] px-5 sm:px-6";
const eyebrow =
  "font-mono text-[13px] uppercase leading-5 tracking-[0.08em] text-accent-soft";
const h2 =
  "text-[clamp(2.1rem,4vw,2.75rem)] font-semibold leading-[1.14] tracking-[-0.02em] text-ink";
const lead = "text-base leading-[1.65] text-soft sm:text-lg sm:leading-7";
const btnPrimary =
  "btn-press btn-icon-bounce inline-flex items-center gap-3 rounded-xl bg-accent px-[22px] font-semibold text-accent-ink transition-colors hover:bg-accent-hover";

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-bg text-ink">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
        <div
          className={`${container} flex h-16 items-center justify-between sm:h-[76px]`}
        >
          <a
            href="#top"
            className="inline-flex items-center gap-1"
            aria-label="KRS-32 home"
          >
            <img src="/assets/images/krs32-icon.png" alt="KRS-32 Icon" className="w-full h-auto max-w-[32px]"/>
            <span className="font-pixel text-lg leading-none tracking-[0.08em] text-ink">
              KRS-32
            </span>
          </a>
          <nav className="flex items-center gap-3 sm:gap-6" aria-label="Main">
            <div className="hidden items-center gap-8 text-base text-soft md:flex">
              <a href="#features" className="transition-colors hover:text-ink">
                Features
              </a>
              <a href="#about" className="transition-colors hover:text-ink">
                About
              </a>
              <a href="#faq" className="transition-colors hover:text-ink">
                FAQ
              </a>
            </div>
            <a
              href="#download"
              className={`${btnPrimary} h-12 text-base max-md:hidden`}
            >
              <Download size={18} strokeWidth={2} aria-hidden="true" />
              Download app
            </a>
            <MobileMenu />
          </nav>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="border-b border-line">
          <div
            className={`${container} grid items-center gap-12 pb-16 pt-12 sm:gap-16 sm:pb-24 sm:pt-[88px] lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-8`}
          >
            <div>
              <h1
                style={stagger(0)}
                className="intro text-[clamp(2.5rem,8vw+0.5rem,5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-ink"
              >
                Your games,
                <br />
                pocket-sized.
              </h1>
              <p
                className={`${lead} intro mt-6 max-w-[530px]`}
                style={stagger(1)}
              >
                KRS-32 plays the handheld ROMs you already own, with pixel-sharp
                scaling, two-tap save states and controls you can move anywhere.
              </p>
              <div
                className="intro mt-8 grid gap-3 min-[480px]:flex min-[480px]:flex-wrap"
                style={stagger(2)}
              >
                <a
                  href="#download"
                  className={`${btnPrimary} h-[52px] justify-center text-base`}
                >
                  <Download size={18} strokeWidth={2} aria-hidden="true" />
                  Download for Android
                </a>
                <a
                  href="#features"
                  className="btn-press inline-flex h-[52px] items-center justify-center rounded-xl border border-border bg-raised px-[22px] text-base font-semibold text-ink transition-colors hover:bg-chip"
                >
                  See features
                </a>
              </div>
            </div>
            <div className="device-intro flex justify-center">
              <div className="float flex w-full justify-center">
                <PhoneMockup />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className={`${container} pb-20 pt-16 sm:pb-[110px] sm:pt-24`}
        >
          <div data-reveal>
            <p className={eyebrow}>Features</p>
            <h2 className={`${h2} mt-3.5 max-w-[690px]`}>
              Built like handheld hardware, not a settings maze.
            </h2>
            <p className={`${lead} mt-4 max-w-[680px]`}>
              Everything you reach for mid-game is one or two taps away.
              Everything else stays out of the way of the screen.
            </p>
          </div>

          <ul className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, body }, i) => (
              <li key={title} data-reveal style={stagger(i % 3)}>
                <div className="card-hover h-full rounded-2xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold leading-[1.3] text-ink">
                    {title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[23px] tracking-[-0.01em] text-soft">
                    {body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Made for thumbs */}
          <div className="mt-20 grid items-center gap-10 sm:mt-24 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,448px)]">
            <div data-reveal>
              <LandscapeMockup />
            </div>
            <div data-reveal style={stagger(1)}>
              <p className={eyebrow}>Made for thumbs</p>
              <h2 className={`${h2} mt-5`}>
                The game screen
                <br />
                comes first.
              </h2>
              <p className={`${lead} mt-[18px]`}>
                Controls sit in the margins, clear of camera cutouts and the
                gesture bar. A and B sit close enough to press together with one
                thumb.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-line bg-gradient-to-b from-[#141418] to-[#111113]"
        >
          <div
            className={`${container} grid gap-10 py-16 sm:gap-14 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,527px)] lg:gap-12`}
          >
            <div data-reveal>
              <p className={eyebrow}>About</p>
              <h2 className={`${h2} mt-3.5`}>
                A small emulator with a big respect for your games.
              </h2>
              <p className={`${lead} mt-5`}>
                KRS-32 is an independent project by An Kurisu. It started from a
                simple wish: an emulator that feels like premium handheld
                software, not a wall of settings.
              </p>
              <p className={`${lead} mt-5`}>
                It&apos;s built Android-first, dark by default and designed to
                meet WCAG AA contrast, with every control at least 48 dp so
                it&apos;s comfortable to use.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {promises.map(({ title, body }, i) => (
                <div key={title} data-reveal style={stagger(i + 1)}>
                  <div className="card-hover rounded-2xl border border-border bg-surface p-6">
                    <h3 className="text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-3.5 text-[15px] leading-[23px] text-soft lg:-mr-4">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className={`${container} grid gap-8 py-16 sm:gap-10 sm:py-24 lg:grid-cols-[minmax(240px,1fr)_minmax(0,704px)] lg:gap-8`}
        >
          <div data-reveal>
            <p className={eyebrow}>FAQ</p>
            <h2 className={`${h2} mt-3.5`}>Good questions.</h2>
          </div>
          <div
            data-reveal
            style={stagger(1)}
            className="border-b border-line pb-5"
          >
            {faqs.map((f, i) => (
              <details
                key={f.q}
                name="faq"
                open={i === 0}
                className="border-t border-line"
              >
                <summary className="flex items-center justify-between gap-4 py-[18px] text-base sm:gap-6 sm:py-[21px] sm:text-[17px] font-semibold leading-[23px] text-ink">
                  {f.q}
                  <ChevronDown
                    size={20}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="shrink-0 text-mute"
                  />
                </summary>
                <p className="-mt-1 pb-1 pr-4 text-[15px] leading-6 text-soft">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          id="download"
          className={`${container} pb-16 pt-28 sm:pb-24 md:pt-24`}
        >
          <div
            data-reveal
            className="dot-grid relative flex flex-col rounded-[22px] border border-border px-6 pb-10 sm:rounded-[28px] sm:px-12 sm:pb-[60px] md:pr-[300px] md:pt-[60px] lg:px-16 lg:pr-[360px]"
          >
            {/* Character: pops out above the card's top edge.
                Mobile: centered at the top. md+: stands on the bottom-right edge. */}
            <Image
              src="/assets/images/kurisu-playing.png"
              alt=""
              width={720}
              height={1456}
              sizes="(min-width: 1024px) 210px, (min-width: 768px) 180px, 140px"
              className="pointer-events-none relative mx-auto -mt-[110px] mb-6 h-[280px] w-auto select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.45)] md:absolute md:bottom-0 md:right-10 md:m-0 md:h-[calc(100%+96px)] md:max-h-[440px] lg:right-16"
            />
            <h2 className={h2}>Ready to play?</h2>
            <p className={`${lead} mt-4 max-w-[560px]`}>
              Download KRS-32 for Android, choose your ROM folder and
              you&apos;re in.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className={`${btnPrimary} h-14 w-full justify-center rounded-[14px] text-[17px] sm:w-auto`}
              >
                <Download size={18} strokeWidth={2} aria-hidden="true" />
                Download app
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1c1c21]">
        <div className={`${container} pb-8 pt-10`}>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <a
              href="#top"
              className="font-pixel text-[13px] tracking-[0.08em] text-ink"
            >
              KRS-32
            </a>
            <nav
              className="flex flex-wrap gap-x-7 gap-y-2 text-sm text-mute"
              aria-label="Footer"
            >
              {["Privacy", "Terms", "Open-source licenses", "Contact"].map(
                (l) => (
                  <a
                    key={l}
                    href="#"
                    className="transition-colors hover:text-ink"
                  >
                    {l}
                  </a>
                ),
              )}
            </nav>
          </div>
          <p className="mt-10 text-[13px] leading-5 text-mute">
            © 2026 KRS-32 by An Kurisu. KRS-32 isn&apos;t affiliated with any
            console maker. All game titles shown are fictional.
          </p>
        </div>
      </footer>
      <RevealObserver />
    </div>
  );
}
