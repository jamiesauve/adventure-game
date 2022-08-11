import { For, JSXElement } from "solid-js";

import { Hex } from "../hex";

import { terrainTypes, getRandomTerrainType } from "../../data/terrain/terrain-types";

import { BoardDimensions, boardDimensionsState } from "../../state/board-dimensions-state";
import { activeHexState } from "../../state/active-hex-state";
import { HandleClickHexProps } from "./board";
import { AvatarName, getRandomAvatar } from "../../data/avatars/avatars";
import { getRandomNumberBetween } from "../../utils/get-random-number";

interface Props {
  boardDimensions: BoardDimensions,
  handleClickHex: (cellData: HandleClickHexProps) => void,
}

export const generateRandomBoard = (props: Props): JSXElement => {
  const { getCoordinatesOfActiveHex, setCoordinatesOfActiveHex } = activeHexState;
  const { getBoardDimensions, setBoardDimensions } = boardDimensionsState;

  setBoardDimensions(props.boardDimensions);

  const { height, width } = getBoardDimensions();

  const ROWS_AT_TOP = 2;
  const ROWS_AT_BOTTOM = 2;
  const CELLS_AT_LEFT_AND_RIGHT = 1;

  const rows = Array(height + ROWS_AT_TOP + ROWS_AT_BOTTOM).fill(undefined);

  const startingOccupants = [
    {
      name: 'thing1',
      avatarName: AvatarName.RABBIT,
      currentPosition: {
        row: getRandomNumberBetween(0, height - 1),
        cell: getRandomNumberBetween(0, width - 1),
      }
    }
  ];
  
  return (
    <>
      {
        <For each={rows}>{
          (row, rowIndex) => {
            const cells = Array(width + CELLS_AT_LEFT_AND_RIGHT).fill(undefined);

            return (
              <div class="row">
                {
                  <For each={cells}>{
                    (cell, cellIndex) => {
                      let avatarNameForHex = AvatarName.NONE;

                      startingOccupants.forEach(startingOccupant => {
                        const position = startingOccupant.currentPosition;

                        if (
                          position.row === (rowIndex() - ROWS_AT_TOP)
                          && position.cell === (cellIndex() - CELLS_AT_LEFT_AND_RIGHT)
                        ) {
                          avatarNameForHex = startingOccupant.avatarName;
                        }
                      })

                      const IS_EVEN_ROW = rowIndex() % 2 === 0;
                      const IS_ODD_ROW = rowIndex() % 2 === 1;

                      const emptyHex = (
                        <Hex
                          cellIndex={-1}
                          isActiveHex={false}
                          rowIndex={-1}
                          terrainType={terrainTypes.NONE}
                          avatarName={AvatarName.NONE}
                        />
                      )

                      if (
                        rowIndex() <= (-CELLS_AT_LEFT_AND_RIGHT + ROWS_AT_TOP)
                        || rowIndex() >= rows.length - ROWS_AT_BOTTOM
                        || IS_ODD_ROW && cellIndex() >= (cells.length - CELLS_AT_LEFT_AND_RIGHT)
                        || IS_EVEN_ROW && cellIndex() <= 0
                      ) {
                        return emptyHex;
                      }

                      const terrainType = getRandomTerrainType();

                      return (
                        <Hex
                          cellIndex={IS_ODD_ROW ? cellIndex() : cellIndex() - CELLS_AT_LEFT_AND_RIGHT}
                          isActiveHex={(
                            getCoordinatesOfActiveHex().row + ROWS_AT_TOP === rowIndex() 
                            && (getCoordinatesOfActiveHex().cell + (IS_ODD_ROW ? 0 : CELLS_AT_LEFT_AND_RIGHT) === cellIndex())
                          )}
                          onClick={props.handleClickHex}
                          rowIndex={rowIndex() - ROWS_AT_TOP}
                          terrainType={terrainType}
                          avatarName={avatarNameForHex}
                        />
                      )
                    }
                  }</For>
                }
              </div>
            )
          }
        }</For>
      }
    </>
  )
}