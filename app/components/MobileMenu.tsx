"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#faq", label: "FAQ" },
];

/** Compact navigation for small screens (hidden from `md` up). */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onPointer = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const mq = window.matchMedia("(min-width: 48rem)");
    const onResize = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    mq.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      mq.removeEventListener("change", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div ref={ref} className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((o) => !o)}
        className="btn-press grid size-11 place-items-center rounded-xl border border-border bg-raised text-ink transition-colors hover:bg-chip"
      >
        {open ? (
          <X size={20} aria-hidden="true" />
        ) : (
          <Menu size={20} aria-hidden="true" />
        )}
      </button>
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        data-open={open}
        inert={!open}
        className="mobile-menu absolute inset-x-0 top-full border-b border-line bg-bg shadow-[0_24px_48px_-12px_rgb(0_0_0/0.6)]"
      >
        <div className="mx-auto w-full max-w-[1200px] px-5 pb-6 pt-2 sm:px-6">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={close}
                  className="block py-4 text-lg text-soft transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            onClick={close}
            className="btn-press btn-icon-bounce mt-6 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-accent px-[22px] text-base font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
          >
            <Download size={18} strokeWidth={2} aria-hidden="true" />
            Download app
          </a>
        </div>
      </nav>
    </div>
  );
}
