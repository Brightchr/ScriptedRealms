// ============================================================
// @scripted-realms/shared — core game types
// This file is the package's front door: everything exported
// here is what the client and server will import.
// ============================================================

/** A position on the battle grid, in grid squares (not pixels). */
export interface GridPosition {
  x: number;
  y: number;
}

/** Anything sitting on the map: a player character, a monster, an object. */
export interface GridToken {
  id: string;
  name: string;
  position: GridPosition;
  speed: number;
}

/** Straight-line distance between two grid positions, in squares. */
export function distance(a: GridPosition, b: GridPosition): number {
  const dx = a.x - b.x;
  const dy = a.y - b.y;
  return Math.sqrt(dx * dx + dy * dy);
}