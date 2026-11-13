/**
 * Pixel-art game screen used inside the device mockups (fictional game).
 * Drawn on a 240×160 grid, the native resolution of a 32-bit handheld.
 */
import type { CSSProperties } from "react";

type R = [x: number, y: number, w: number, h: number, fill: string];

const SKY_1 = "#15214a";
const SKY_2 = "#1c2c5e";
const SKY_3 = "#243a73";
const CITY_DARK = "#1e3360";
const CITY_LIGHT = "#2e4b88";

const scene: R[] = [
  // sky bands
  [0, 0, 240, 29, SKY_1],
  [0, 29, 240, 28, SKY_2],
  [0, 57, 240, 40, SKY_3],
  [0, 97, 240, 18, CITY_DARK],

  // skyline: dark buildings
  [43, 75, 24, 22, CITY_DARK],
  [95, 79, 29, 18, CITY_DARK],
  [211, 81, 29, 16, CITY_DARK],
  [153, 84, 29, 13, CITY_DARK],
  [19, 86, 48, 11, CITY_DARK],
  [67, 88, 28, 9, CITY_DARK],
  [182, 93, 29, 4, CITY_DARK],
  [124, 95, 29, 2, CITY_DARK],

  // skyline: lit blocks
  [0, 83, 19, 14, CITY_LIGHT],
  [19, 83, 24, 3, CITY_LIGHT],
  [67, 83, 28, 5, CITY_LIGHT],
  [124, 83, 29, 12, CITY_LIGHT],
  [153, 83, 29, 1, CITY_LIGHT],
  [182, 83, 29, 10, CITY_LIGHT],

  // ground
  [0, 115, 240, 6, "#3b7a4b"],
  [0, 121, 240, 39, "#2a5a37"],

  // floating platform
  [129, 74, 53, 1, "#f0b46c"],
  [129, 75, 53, 5, "#c9864a"],

  // player platform
  [33, 90, 44, 2, "#f0b46c"],
  [33, 92, 44, 4, "#c9864a"],
];

// player: cap, face, eye, body, legs
const player: R[] = [
  [52, 67, 11, 4, "#5cc8ff"],
  [47, 71, 20, 3, "#5cc8ff"],
  [51, 74, 11, 8, "#f2d7b6"],
  [55, 75, 4, 3, "#141414"],
  [47, 82, 20, 4, "#4c7be0"],
  [51, 86, 4, 4, "#4c7be0"],
  [59, 86, 4, 4, "#4c7be0"],
];

const coins: R[][] = [139, 154, 168].map((x): R[] => [
  [x, 54, 6, 6, "#ffd27a"],
  [x + 4, 55, 2, 5, "#e1a766"],
]);

function Rects({ rects }: { rects: R[] }) {
  return rects.map(([x, y, w, h, fill], i) => (
    <rect key={i} x={x} y={y} width={w} height={h} fill={fill} />
  ));
}

export function GameScene({
  hud = false,
  className = "",
}: {
  /** Show the collectible coins (portrait mockup). */
  hud?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 240 160"
      className={className}
      shapeRendering="crispEdges"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <Rects rects={scene} />
      {hud &&
        coins.map((coin, i) => (
          <g
            key={i}
            className="anim-coin"
            style={{ "--i": i } as CSSProperties}
          >
            <Rects rects={coin} />
          </g>
        ))}
      <g className="anim-hop">
        <Rects rects={player} />
      </g>
      <circle
        className="anim-sun"
        cx="187.3"
        cy="41.6"
        r="18.3"
        fill="#ffd27a"
        shapeRendering="geometricPrecision"
      />
    </svg>
  );
}
