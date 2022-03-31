import type { Component, JSXElement } from 'solid-js';
import { createSignal, createEffect, For } from 'solid-js';

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

export interface Coordinates {
  row: number;
  cell: number;
}

const Board: Component = () => {
  const [coordinatesOfActiveHex, setCoordinatesOfActiveHex] = createSignal<Coordinates | null>(null);

  const handleClickHex = ((cellData: handleClickHexProps) => {
    const { cellIndex, rowIndex, terrainType } = cellData;

    setCoordinatesOfActiveHex({row: rowIndex, cell: cellIndex});
  });


  const generateRandomBoard = ({ height, width }: BoardDimensions): JSXElement => {
    const ROWS_AT_TOP = 1;
    const ROWS_AT_BOTTOM = 2;
    const CELLS_AT_LEFT_AND_RIGHT = 1;

    const rows = Array(height + ROWS_AT_TOP + ROWS_AT_BOTTOM).fill(undefined);
    
    return (
      <>
        {
          <For each={rows}>{
            (row, rowIndex) => {
              const cells = Array(width + CELLS_AT_LEFT_AND_RIGHT).fill(undefined);

              return (
                <div class={styles.row}>
                  {
                    <For each={cells}>{
                      (cell, cellIndex) => {
                        const IS_EVEN_ROW = rowIndex() % 2 === 0;
                        const IS_ODD_ROW = rowIndex() % 2 === 1;

                        const emptyHex = (
                          <Hex
                            cellIndex={-1}
                            isActiveHex={false}
                            rowIndex={-1}
                            terrainType={terrainTypes.NONE}
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

                        const isActive = (
                          (coordinatesOfActiveHex()?.row ?? 0) + 1 === rowIndex() 
                          && (coordinatesOfActiveHex()?.cell ?? 0) + 1 === cellIndex()
                        );

                        return (
                          <Hex
                            cellIndex={cellIndex() - CELLS_AT_LEFT_AND_RIGHT}
                            isActiveHex={isActive}
                            onClick={handleClickHex}
                            rowIndex={rowIndex() - ROWS_AT_TOP}
                            terrainType={terrainType}
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

  return (
    <div class={styles.board}>
      {generateRandomBoard({ height: 5, width: 2 })}
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
