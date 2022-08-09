import { createSignal } from "solid-js";

export interface BoardDimensions {
  height: number;
  width: number;
}

const [ boardDimensions, setBoardDimensions ] = createSignal<BoardDimensions>({ height: 30, width: 3 });

export const boardDimensionsState = {
  boardDimensions,
  setBoardDimensions
};