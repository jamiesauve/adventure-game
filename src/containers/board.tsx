import type { Component, JSXElement } from 'solid-js';

import { Hex } from '../components/hex';
import { terrainTypes, getRandomTerrainType, TerrainType } from '../components/terrain/TerrainTypes';

import styles from './board.module.css';

interface handleClickHexProps {
  cellIndex: number;
  rowIndex: number;
  terrainType: TerrainType;
}

interface BoardDimensions {
  height: number;
  width: number;
}

const Board: Component = () => {
  const handleClickHex = ((cellData: handleClickHexProps) => {
    const { cellIndex, rowIndex, terrainType } = cellData;

    console.log({ cellIndex, rowIndex, terrainType })
  });

  const generateBoard = ({ height, width }: BoardDimensions): JSXElement => {
    const ROWS_AT_TOP = 1;
    const ROWS_AT_BOTTOM = 2;
    const CELLS_AT_LEFT_AND_RIGHT = 1;

    const rows = Array(height + ROWS_AT_TOP + ROWS_AT_BOTTOM).fill(undefined);
    
    return (
      <>
        {
          rows.map((row, rowIndex) => {
            const cells = Array(width + CELLS_AT_LEFT_AND_RIGHT).fill(undefined);

            return (
              <div class={styles.row}>
                {
                  cells.map((cell, cellIndex) => {
                    const IS_EVEN_ROW = rowIndex % 2 === 0;
                    const IS_ODD_ROW = rowIndex % 2 === 1;

                    const emptyHex = (
                      <Hex
                        cellIndex={-1}
                        rowIndex={-1}
                        terrainType={terrainTypes.NONE}
                      />
                    )

                    if (
                      rowIndex <= (-CELLS_AT_LEFT_AND_RIGHT + ROWS_AT_TOP)
                      || rowIndex >= rows.length - ROWS_AT_BOTTOM
                      || IS_ODD_ROW && cellIndex >= (cells.length - CELLS_AT_LEFT_AND_RIGHT)
                      || IS_EVEN_ROW && cellIndex <= 0
                    ) {
                      return emptyHex;
                    }
                    
                    return (
                      <Hex
                        cellIndex={IS_ODD_ROW ? cellIndex : cellIndex - CELLS_AT_LEFT_AND_RIGHT}
                        onClick={handleClickHex}
                        rowIndex={rowIndex - ROWS_AT_TOP}
                        terrainType={getRandomTerrainType()}
                      />
                    )
                  })
                }
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <div class={styles.board}>
      {generateBoard({ height: 10, width: 4 })}
      {/* <div class={styles.row}>
        <Hex terrainType={terrainTypes.NONE} /> 
        <Hex terrainType={terrainTypes.NONE} /> 
        <Hex terrainType={terrainTypes.NONE} /> 
        <Hex terrainType={terrainTypes.NONE} /> 
      </div>

      <div class={styles.row}>
        <Hex onClick={() => console.log("Forest")} terrainType={terrainTypes.FOREST} />
        <Hex onClick={() => console.log("Meadow")} terrainType={terrainTypes.MEADOW} />
        <Hex onClick={() => console.log("Forest")} terrainType={terrainTypes.FOREST} />
        <Hex onClick={() => console.log("Mountains")} terrainType={terrainTypes.MOUNTAINS} />
      </div>
    
      <div class={styles.row}>
        <Hex terrainType={terrainTypes.NONE} /> 
        <Hex terrainType={terrainTypes.MEADOW} />
        <Hex terrainType={terrainTypes.MEADOW} />
        <Hex terrainType={terrainTypes.MOUNTAINS} />
        <Hex terrainType={terrainTypes.MOUNTAINS} />
      </div>

      <div class={styles.row}>
        <Hex terrainType={terrainTypes.FOREST} />
        <Hex terrainType={terrainTypes.MOUNTAINS} />
        <Hex terrainType={terrainTypes.FOREST} />
        <Hex terrainType={terrainTypes.MEADOW} />
      </div>
      
      <div class={styles.row}>
        <Hex terrainType={terrainTypes.NONE} /> 
        <Hex terrainType={terrainTypes.MEADOW} />
        <Hex terrainType={terrainTypes.MOUNTAINS} />
        <Hex terrainType={terrainTypes.WATER} />
        <Hex terrainType={terrainTypes.FOREST} />
      </div>

      <div class={styles.row}>
        <Hex terrainType={terrainTypes.FOREST} />
        <Hex terrainType={terrainTypes.MOUNTAINS} />
        <Hex terrainType={terrainTypes.FOREST} />
        <Hex terrainType={terrainTypes.MOUNTAINS} />
      </div>
    
      <div class={styles.row}>
        <Hex terrainType={terrainTypes.NONE} /> 
        <Hex terrainType={terrainTypes.MEADOW} />
        <Hex terrainType={terrainTypes.FOREST} />
        <Hex terrainType={terrainTypes.MEADOW} />
        <Hex terrainType={terrainTypes.MEADOW} />
      </div> */}
    </div>
  )
}

export default Board;
