import { createSignal } from "solid-js";
import { AvatarName } from "../data/avatars/avatars";
import { Coordinates } from "./active-hex-state";

interface BoardOccupant {
  name: string;
  avatarName: AvatarName;
  currentPosition: Coordinates;
}

const [getBoardOccupants, setBoardOccupants] = createSignal([]);

// CRUD for board occupants - don't go too nuts, this will have to move to the server for multiplayer

export const boardOccupantsState = {
  getBoardOccupants,
  setBoardOccupants
};


