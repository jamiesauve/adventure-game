import type { Component } from 'solid-js';

import Board from './containers/board';
import Chat from './containers/chat';
import { BattleManager } from './containers/BattleManager';

import styles from './app.module.css';
import { style } from 'solid-js/web';

const App: Component = () => {
  return (
    // <Chat />
    <div class={styles.app}>
      <Board />

      <BattleManager />
    </div>

  )
}

export default App;
