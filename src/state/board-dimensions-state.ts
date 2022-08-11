import { createSignal } from "solid-js";

export interface BoardDimensions {
  height: number;
  width: number;
}

const [ getBoardDimensions, setBoardDimensions ] = createSignal<BoardDimensions>({ height: 30, width: 3 });

export const boardDimensionsState = {
  getBoardDimensions,
  setBoardDimensions
};