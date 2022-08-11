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
    boardDimensions: { height: 8, width: 3 },
    handleClickHex, 
  })
  
  return (

        <div class="board">
          {randomBoard}
        </div>
  )
}
