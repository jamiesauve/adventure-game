import { activeHexState, Coordinates } from "../../state/active-hex-state";
import { boardDimensionsState } from "../../state/board-dimensions-state";

export type KeyboardKey = "2" | "q" | "w" | "a" | "s" | "z"; // TODO: move this elsewhere

export const reactToKeyUp = (key: KeyboardKey) => {
  const { getCoordinatesOfActiveHex, setCoordinatesOfActiveHex } = activeHexState;
  const currentRowOfActiveHex = getCoordinatesOfActiveHex().row;
  const currentCellOfActiveHex = getCoordinatesOfActiveHex().cell;
  const boardDimensions = boardDimensionsState.getBoardDimensions();

  let newRowOfActiveHex;
  let newCellOfActiveHex;
  let newCoordinates: Coordinates;

  switch(key) {
    // up left
    case "q": {
      newRowOfActiveHex = currentRowOfActiveHex - 1;
      newCellOfActiveHex = (currentRowOfActiveHex % 2 === 0)
        ? currentCellOfActiveHex
        : currentCellOfActiveHex - 1;
        
      newCoordinates = {
        row: newRowOfActiveHex,
        cell: newCellOfActiveHex
      }

      break;
    }

    // up right
    case "w": {
      newRowOfActiveHex = currentRowOfActiveHex - 1;
      newCellOfActiveHex = (currentRowOfActiveHex % 2 === 0)
        ? currentCellOfActiveHex + 1
        : currentCellOfActiveHex;
        
      newCoordinates = {
        row: newRowOfActiveHex,
        cell: newCellOfActiveHex
      }

      break;
    }

    // up
    case "2": {
      newRowOfActiveHex = currentRowOfActiveHex - 2;
      newCellOfActiveHex = currentCellOfActiveHex;
        
      newCoordinates = {
        row: newRowOfActiveHex,
        cell: newCellOfActiveHex
      }

      break;
    }

    // down
    case "z": {
      newRowOfActiveHex = currentRowOfActiveHex + 2;
      newCellOfActiveHex = currentCellOfActiveHex;
        
      newCoordinates = {
        row: newRowOfActiveHex,
        cell: newCellOfActiveHex
      }

      break;
    }

    // down left
    case "a": {
      newRowOfActiveHex = currentRowOfActiveHex + 1;
      newCellOfActiveHex = (currentRowOfActiveHex % 2 === 0)
        ? currentCellOfActiveHex
        : currentCellOfActiveHex - 1;
        
      newCoordinates = {
        row: newRowOfActiveHex,
        cell: newCellOfActiveHex
      }

      break;
    }

    // down right
    case "s": {
      newRowOfActiveHex = currentRowOfActiveHex + 1;
      newCellOfActiveHex = (currentRowOfActiveHex % 2 === 0)
        ? currentCellOfActiveHex + 1
        : currentCellOfActiveHex;
        
      newCoordinates = {
        row: newRowOfActiveHex,
        cell: newCellOfActiveHex
      }

      break;
    }

    default: {
      newCoordinates = getCoordinatesOfActiveHex();
    }

  }
  
  if (
    newCoordinates.row >= 0
    && newCoordinates.row < boardDimensions.height
    && newCoordinates.cell >= 0
    && newCoordinates.cell < boardDimensions.width
  ) {
    setCoordinatesOfActiveHex(newCoordinates);
  }
}