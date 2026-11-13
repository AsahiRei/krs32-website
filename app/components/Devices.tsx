import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  FastForward,
  Menu,
} from "lucide-react";
import { GameScene } from "./GameScene";

const key =
  "grid place-items-center border border-border bg-raised font-semibold text-ink";

/**
 * Portrait phone running KRS-32 with on-screen controls.
 * Every measurement is in `em` (1em = 10 design px at full size) and
 * `.phone-scale` sizes the em to the container, so the whole device scales
 * fluidly to whatever width it's given (max 320px).
 */
export function PhoneMockup() {
  return (
    <div className="phone-fit">
      <div
        className="phone-scale relative w-[32em] rounded-[4.6em] border border-border-strong bg-[#1a1a1f] p-[0.7em] shadow-[0_2.4em_6em_-1.6em_rgba(0,0,0,0.7)]"
        role="img"
        aria-label="Phone showing KRS-32 with touch controls below the game screen"
      >
        {/* side buttons */}
        <span className="absolute -right-[0.35em] top-[13em] h-[6em] w-[0.35em] rounded-r-[0.3em] bg-border-strong" />
        <span className="absolute -left-[0.35em] top-[11em] h-[4em] w-[0.35em] rounded-l-[0.3em] bg-border-strong" />
        <span className="absolute -left-[0.35em] top-[16em] h-[4em] w-[0.35em] rounded-l-[0.3em] bg-border-strong" />

        {/* display */}
        <div className="relative flex flex-col overflow-hidden rounded-[3.9em] bg-[#0b0b0d] px-[1.1em] pb-[1.4em] pt-[3.4em]">
          {/* camera */}
          <span className="absolute left-1/2 top-[1.2em] size-[1em] -translate-x-1/2 rounded-full bg-black ring-[0.15em] ring-chip" />

          {/* game screen */}
          <div className="rounded-[1.4em] border border-border bg-[#050506] p-[0.5em]">
            <GameScene hud className="block aspect-[3/2] w-full rounded-[0.3em]" />
          </div>

          {/* info bar */}
          <div className="mt-[0.9em] flex items-center gap-[0.8em] px-[0.5em]">
            <span className={`${key} size-[3.4em] shrink-0 rounded-[1.1em]`}>
              <Menu className="size-[1.6em]" strokeWidth={2} />
            </span>
            <span className="min-w-0 flex-1 text-center">
              <span className="block truncate text-[1.25em] font-semibold leading-[1.3] text-ink">
                Skyline Hopper
              </span>
              <span className="block font-mono text-[0.95em] text-mute">
                60 fps
              </span>
            </span>
            <span className="flex h-[3.4em] w-[6.4em] shrink-0 items-center justify-center gap-[0.5em] rounded-[1.1em] bg-accent text-accent-ink">
              <FastForward className="size-[1.6em]" strokeWidth={2} />
              <span className="text-[1.15em]">2×</span>
            </span>
          </div>

          {/* shoulder buttons */}
          <div className="mt-[4em] flex justify-between">
            <span className={`${key} h-[3.5em] w-[7em] rounded-[1.1em]`}>
              <span className="text-[1.5em]">L</span>
            </span>
            <span className={`${key} h-[3.5em] w-[7em] rounded-[1.1em]`}>
              <span className="text-[1.5em]">R</span>
            </span>
          </div>

          {/* d-pad + face buttons */}
          <div className="mt-[2.6em] flex items-center justify-between">
            <div
              className="relative size-[14em] shrink-0 text-ink"
              aria-hidden="true"
            >
              {/* corner dots */}
              {[
                "left-[2.1em] top-[2.1em]",
                "right-[2.1em] top-[2.1em]",
                "bottom-[2.1em] left-[2.1em]",
                "bottom-[2.1em] right-[2.1em]",
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} size-[0.45em] rounded-full bg-border-strong`}
                />
              ))}
              <span className="absolute inset-y-0 left-[4.7em] w-[4.6em] rounded-[1.1em] border border-border bg-raised" />
              <span className="absolute inset-x-0 top-[4.7em] h-[4.6em] rounded-[1.1em] border border-border bg-raised" />
              <span className="absolute left-[4.75em] top-[4.75em] size-[4.5em] bg-raised" />
              <span className="absolute left-1/2 top-1/2 size-[1.2em] -translate-x-1/2 -translate-y-1/2 rounded-full bg-chip" />
              <ChevronUp className="absolute left-1/2 top-[1em] size-[1.7em] -translate-x-1/2" strokeWidth={2} />
              <ChevronDown className="absolute bottom-[1em] left-1/2 size-[1.7em] -translate-x-1/2" strokeWidth={2} />
              <ChevronLeft className="absolute left-[1em] top-1/2 size-[1.7em] -translate-y-1/2" strokeWidth={2} />
              <ChevronRight className="absolute right-[1em] top-1/2 size-[1.7em] -translate-y-1/2" strokeWidth={2} />
            </div>

            <div className="relative h-[12em] w-[12.4em] shrink-0">
              {/* diagonal well behind A/B */}
              <span className="absolute left-1/2 top-1/2 h-[6.6em] w-[13.4em] -translate-x-1/2 -translate-y-1/2 -rotate-[38deg] rounded-full border border-line bg-[#121215]" />
              <span
                className={`${key} anim-press absolute right-[0.4em] top-[0.6em] size-[5.4em] rounded-full`}
              >
                <span className="text-[1.9em]">A</span>
              </span>
              <span
                className={`${key} absolute bottom-[0.6em] left-[0.4em] size-[5.4em] rounded-full`}
              >
                <span className="text-[1.9em]">B</span>
              </span>
            </div>
          </div>

          {/* select / start */}
          <div className="mt-[2.4em] flex justify-center gap-[1.4em]">
            <span className={`${key} h-[3.2em] w-[6.6em] rounded-full`}>
              <span className="text-[0.95em] tracking-[0.14em]">SELECT</span>
            </span>
            <span className={`${key} h-[3.2em] w-[6.6em] rounded-full`}>
              <span className="text-[0.95em] tracking-[0.14em]">START</span>
            </span>
          </div>

          {/* home indicator */}
          <span className="mx-auto mt-[2.2em] h-[0.4em] w-[10em] rounded-full bg-border-strong" />
        </div>
      </div>
    </div>
  );
}

const overlay =
  "absolute grid place-items-center rounded-full bg-[#141418]/85 font-semibold text-ink";

/**
 * Landscape phone: game centred at full height, controls in the side margins
 * and translucent overlays where they reach the game screen.
 * Designed on a 2000×943 screen; 1em = 10 design px and `.land-scale` sizes
 * the em to the container width.
 */
export function LandscapeMockup() {
  return (
    <div className="land-fit">
      <div
        className="land-scale relative w-[208em] rounded-[9em] border border-border-strong bg-[#1a1a1f] p-[4em] shadow-[0_3em_8em_-2em_rgba(0,0,0,0.7)]"
        role="img"
        aria-label="Phone in landscape with the game centred and controls in the side margins"
      >
        {/* side buttons (top edge in landscape) */}
        <span className="absolute -top-[0.5em] right-[60em] h-[0.5em] w-[16em] rounded-t-[0.4em] bg-border-strong" />
        <span className="absolute -top-[0.5em] left-[52em] h-[0.5em] w-[10em] rounded-t-[0.4em] bg-border-strong" />
        <span className="absolute -top-[0.5em] left-[66em] h-[0.5em] w-[10em] rounded-t-[0.4em] bg-border-strong" />
        {/* camera */}
        <span className="absolute left-[1.3em] top-1/2 size-[1.5em] -translate-y-1/2 rounded-full bg-black ring-[0.25em] ring-chip" />

        {/* display */}
        <div className="relative h-[94.3em] w-[200em] overflow-hidden rounded-[6em] bg-black">
          <GameScene
            hud
            className="absolute left-[29.8em] top-0 h-full w-[141.4em]"
          />

          {/* shoulder buttons */}
          <span
            className={`${key} absolute left-[2em] top-[3.3em] h-[11.4em] w-[27em] rounded-[3em]`}
          >
            <span className="text-[4em]">L</span>
          </span>
          <span
            className={`${key} absolute left-[172em] top-[3.3em] h-[11.4em] w-[27em] rounded-[3em]`}
          >
            <span className="text-[4em]">R</span>
          </span>

          {/* quick load / save */}
          <span
            className={`${key} absolute left-[2.8em] top-[21.5em] h-[10.5em] w-[15.7em] rounded-full`}
          >
            <span className="text-[2.3em]">Quick load</span>
          </span>
          <span
            className={`${key} absolute left-[182.2em] top-[25em] h-[10.5em] w-[15.8em] rounded-full`}
          >
            <span className="text-[2.3em]">Quick save</span>
          </span>

          {/* d-pad: group opacity so the overlapping arms don't double up over the game */}
          <div
            className="absolute left-[2em] top-[48em] h-[41.5em] w-[41.6em] text-ink opacity-90"
            aria-hidden="true"
          >
            <span className="absolute inset-y-0 left-[13.9em] w-[13.9em] rounded-[2em] bg-raised" />
            <span className="absolute inset-x-0 top-[13.8em] h-[13.8em] rounded-[2em] bg-raised" />
            <ChevronUp className="absolute left-1/2 top-[3.6em] size-[5em] -translate-x-1/2" strokeWidth={1.75} />
            <ChevronDown className="absolute bottom-[3.6em] left-1/2 size-[5em] -translate-x-1/2" strokeWidth={1.75} />
            <ChevronLeft className="absolute left-[3.6em] top-1/2 size-[5em] -translate-y-1/2" strokeWidth={1.75} />
            <ChevronRight className="absolute right-[3.6em] top-1/2 size-[5em] -translate-y-1/2" strokeWidth={1.75} />
          </div>

          {/* top overlays */}
          <span className={`${overlay} left-[83em] top-[3.7em] h-[10.6em] w-[16em]`}>
            <span className="flex items-center gap-[1.2em]">
              <FastForward className="size-[4.4em]" strokeWidth={1.75} />
              <span className="text-[2.6em] font-normal">4×</span>
            </span>
          </span>
          <span className={`${overlay} left-[102.2em] top-[3.7em] h-[10.6em] w-[16em]`}>
            <Menu className="size-[4.6em]" strokeWidth={1.75} />
          </span>

          {/* select / start */}
          <span className={`${overlay} left-[82em] top-[80.8em] h-[8.9em] w-[17.3em]`}>
            <span className="text-[2.6em] tracking-[0.14em]">SELECT</span>
          </span>
          <span className={`${overlay} left-[101.7em] top-[80.8em] h-[8.9em] w-[17.3em]`}>
            <span className="text-[2.6em] tracking-[0.14em]">START</span>
          </span>

          {/* turbo A / B */}
          <span className="absolute left-[145.7em] top-[55.2em] grid size-[16em] place-items-center rounded-full border-[0.3em] border-[#d98a8a] bg-[#141418]/80 font-bold text-[#e29a9a]">
            <span className="text-[4.6em]">B</span>
          </span>
          <span className="absolute left-[173.5em] top-[55.2em] grid size-[16em] place-items-center rounded-full border-[0.3em] border-[#d98a8a] bg-[#141418] font-bold text-[#e29a9a]">
            <span className="text-[4.6em]">A</span>
          </span>

          {/* A / B */}
          <span className="absolute left-[145.5em] top-[72.6em] grid size-[16.4em] place-items-center rounded-full bg-raised/90 font-bold text-ink">
            <span className="text-[4.6em]">B</span>
          </span>
          <span className="anim-press absolute left-[173.3em] top-[72.6em] grid size-[16.4em] place-items-center rounded-full bg-raised font-bold text-ink">
            <span className="text-[4.6em]">A</span>
          </span>
        </div>
      </div>
    </div>
  );
}
