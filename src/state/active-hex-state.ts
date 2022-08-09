import { createSignal } from "solid-js";

export interface Coordinates {
  row: number;
  cell: number;
}

const [coordinatesOfActiveHex, setCoordinatesOfActiveHex] = createSignal<Coordinates>({row: 0, cell: 0});

export const activeHexState = {
  coordinatesOfActiveHex,
  setCoordinatesOfActiveHex
}
