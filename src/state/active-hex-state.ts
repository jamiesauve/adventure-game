import { createSignal } from "solid-js";

export interface Coordinates {
  row: number;
  cell: number;
}

const [getCoordinatesOfActiveHex, setCoordinatesOfActiveHex] = createSignal<Coordinates>({row: 0, cell: 0});

export const activeHexState = {
  getCoordinatesOfActiveHex,
  setCoordinatesOfActiveHex
}
