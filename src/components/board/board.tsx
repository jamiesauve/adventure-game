import type { Component } from 'solid-js';

import { TerrainType } from '../../data/terrain/terrain-types';

import { generateRandomBoard } from './generate-random-board';

import { activeHexState } from '../../state/active-hex-state';

import './board.scss';

export interface HandleClickHexProps {
  cellIndex: number;
  rowIndex: number;
  terrainType: TerrainType;
}

export const Board: Component = () => {
  const {
    setCoordinatesOfActiveHex
  } = activeHexState;

  const handleClickHex = ((cellData: HandleClickHexProps) => {
    const { cellIndex, rowIndex } = cellData;

    setCoordinatesOfActiveHex({row: rowIndex, cell: cellIndex});
  });

  const randomBoard = generateRandomBoard({ 
    boardDimensions: { height: 30, width: 3 },
    handleClickHex, 
  })
  
  return (

        <div class="board">
          {randomBoard}
          {/* <div class="row">
            <Hex terrainType={terrainTypes.NONE} /> 
            <Hex terrainType={terrainTypes.NONE} /> 
            <Hex terrainType={terrainTypes.NONE} /> 
            <Hex terrainType={terrainTypes.NONE} /> 
          </div>

          <div class="row">
            <Hex onClick={() => console.log("Forest")} terrainType={terrainTypes.FOREST} />
            <Hex onClick={() => console.log("Meadow")} terrainType={terrainTypes.MEADOW} />
            <Hex onClick={() => console.log("Forest")} terrainType={terrainTypes.FOREST} />
            <Hex onClick={() => console.log("Mountains")} terrainType={terrainTypes.MOUNTAINS} />
          </div>
        
          <div class="row">
            <Hex terrainType={terrainTypes.NONE} /> 
            <Hex terrainType={terrainTypes.MEADOW} />
            <Hex terrainType={terrainTypes.MEADOW} />
            <Hex terrainType={terrainTypes.MOUNTAINS} />
            <Hex terrainType={terrainTypes.MOUNTAINS} />
          </div>

          <div class="row">
            <Hex terrainType={terrainTypes.FOREST} />
            <Hex terrainType={terrainTypes.MOUNTAINS} />
            <Hex terrainType={terrainTypes.FOREST} />
            <Hex terrainType={terrainTypes.MEADOW} />
          </div>
          
          <div class="row">
            <Hex terrainType={terrainTypes.NONE} /> 
            <Hex terrainType={terrainTypes.MEADOW} />
            <Hex terrainType={terrainTypes.MOUNTAINS} />
            <Hex terrainType={terrainTypes.WATER} />
            <Hex terrainType={terrainTypes.FOREST} />
          </div>

          <div class="row">
            <Hex terrainType={terrainTypes.FOREST} />
            <Hex terrainType={terrainTypes.MOUNTAINS} />
            <Hex terrainType={terrainTypes.FOREST} />
            <Hex terrainType={terrainTypes.MOUNTAINS} />
          </div>
        
          <div class="row">
            <Hex terrainType={terrainTypes.NONE} /> 
            <Hex terrainType={terrainTypes.MEADOW} />
            <Hex terrainType={terrainTypes.FOREST} />
            <Hex terrainType={terrainTypes.MEADOW} />
            <Hex terrainType={terrainTypes.MEADOW} />
          </div> */}
        </div>
  )
}
