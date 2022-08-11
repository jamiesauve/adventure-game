// SVGs taken from https://freesvg.org/

import { getRandomNumberUpTo } from "../../utils/get-random-number";

export interface TerrainType {
  label: string;
  svgPath: string;
  backgroundColor: string;
}

enum TerrainName {
  NONE = "NONE",
  FOREST = "FOREST",
  MEADOW = "MEADOW",
  MOUNTAINS = "MOUNTAINS",
  WATER = "WATER",
}

export const terrainTypes: Record<TerrainName, TerrainType> = {
  NONE: {
    label: "None",
    svgPath: "",
    backgroundColor: "black",
  },
  FOREST: {
    label: "Forest",
    svgPath: "./assets/svg/forest-hex.svg",
    backgroundColor: "green",
  },
  MEADOW: {
    label: "Meadow",
    svgPath: "./assets/svg/meadows-hex.svg",
    backgroundColor: "yellow",
  },
  MOUNTAINS: {
    label: "Mountains",
    svgPath: "./assets/svg/mountains-hex.svg",
    backgroundColor: "#bb00ee",
  },
  WATER: {
    label: "Water",
    svgPath: "./assets/svg/water-hex.svg",
    backgroundColor: "#5566ff",
  }
}

const terrainTypesAsArray = Object.values(terrainTypes);
terrainTypesAsArray.shift(); // remove NONE

const numberOfTerrainTypes = terrainTypesAsArray.length;

export const getRandomTerrainType = (): TerrainType => {
  const randomNumber = getRandomNumberUpTo(numberOfTerrainTypes);
  
  return terrainTypesAsArray[randomNumber];
}