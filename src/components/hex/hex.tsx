// SVG Hexagon path from http://stackoverflow.com/a/36842587/507674

import { createSignal } from 'solid-js';

import { Component, createEffect } from 'solid-js';

import styles from './hex.module.css';

import { TerrainType, terrainTypes } from '../terrain/TerrainTypes';

interface HexProps {
  cellIndex: number;
  isActiveHex: boolean;
  onClick?: (e: any) => void; 
  rowIndex: number;
  terrainType: TerrainType;
}

export const Hex: Component<HexProps> = (props) => {
  const [borderColor, setBorderColor] = createSignal("#888");

  
  createEffect(() => {
    console.log({ isActiveHex: props.isActiveHex })

    props.isActiveHex
    ? setBorderColor("#b66")
    : setBorderColor("#888");
  })

  return (
    <div class={`${styles.hexContainer} ${props.isActiveHex ? styles.isActive : ``}`}>
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
          fill={props.terrainType.backgroundColor} 
        /> 
        
        <image 
          href={props.terrainType.svgPath} 
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
          stroke={borderColor()}
          stroke-width="5" 
          fill="transparent"
        />

      </svg>

      <div 
        class={styles.hexOverlay}
        onClick={() => {
          console.log('this hex:', { row: props.rowIndex, cell: props.cellIndex })
          props.onClick?.({
          cellIndex: props.cellIndex,
          rowIndex: props.rowIndex,
          terrainType: props.terrainType
        })}}
      />
    </div>
  )
}