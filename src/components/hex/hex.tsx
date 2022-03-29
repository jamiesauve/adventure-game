// SVG Hexagon path from http://stackoverflow.com/a/36842587/507674

import type { Component } from 'solid-js';

import styles from './hex.module.css';

import { TerrainType } from '../terrain/TerrainTypes';

interface HexProps {
  cellIndex: number;
  onClick?: (e: any) => void; 
  rowIndex: number;
  terrainType: TerrainType;
}

export const Hex: Component<HexProps> = ({ 
  cellIndex, 
  onClick, 
  rowIndex, 
  terrainType
 }) => {
  const {svgPath, backgroundColor} = terrainType;

  return (
    <div class={styles.hexContainer}>
      <svg viewBox="0 0 120 100" style="width:120px;height:100px">
        <defs>
          <clipPath id="hexagon_clip">
            <path id="hexagon" d="M38,2 
                L82,2 
                A12,12 0 0,1 94,10 
                L112,44 
                A12,12 0 0,1 112,56
                L94,90       
                A12,12 0 0,1 82,98
                L38,98
                A12,12 0 0,1 26,90
                L8,56
                A12,12 0 0,1 8,44
                L26,10
                A12,12 0 0,1 38,2" />
          </clipPath>
        </defs>

        <use 
          href="#hexagon" 
          x="0" 
          y="0" 
          // @ts-ignore
          fill={backgroundColor} 
        /> 
        
        <image 
          href={svgPath} 
          x="0" 
          y="0" 
          width="120px" 
          height="100px" 
          clip-path="url(#hexagon_clip)"
        />
        
        <use 
          href="#hexagon" 
          x="0" 
          y="0" 
          // @ts-ignore
          stroke="#888" 
          stroke-width="5" 
          fill="transparent"
        />

      </svg>
      
      <div 
        class={styles.hexOverlay}
        onClick={() => onClick?.({
          cellIndex,
          rowIndex,
          terrainType
        })}
      />
    </div>
  )
}