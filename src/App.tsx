import type { Component } from 'solid-js';

import Board from './containers/board';
import Chat from './containers/chat';
import Menu from './containers/menu';

import styles from './app.module.css';
import { style } from 'solid-js/web';

const App: Component = () => {
  
  // const 

  document.addEventListener("scroll", () => console.log('scrolling'));
  window.addEventListener("scroll", () => console.log('scrolling'));

  return (
    // <Chat />
    <div class={styles.app}>
      <Board />

      <Menu />
    </div>

  )
}

export default App;
