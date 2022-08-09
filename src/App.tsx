import type { Component } from 'solid-js';

import { ViewArea } from './containers/view-area';
import Chat from './containers/chat';
import Menu from './containers/menu';

import { useKeyboard } from './utils/keyboard-actions/use-keyboard';


import './app.scss';

const App: Component = () => {
  useKeyboard();

  return (
    // <Chat />
    <div class="app">
      <ViewArea />

      <Menu />
    </div>

  )
}

export default App;
