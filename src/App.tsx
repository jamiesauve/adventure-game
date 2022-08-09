import type { Component } from 'solid-js';

import Board from './containers/board';
import Chat from './containers/chat';
import Menu from './containers/menu';

import './app.scss';

const App: Component = () => {
  
  // const 

  document.addEventListener("scroll", () => console.log('scrolling'));
  window.addEventListener("scroll", () => console.log('scrolling'));

  return (
    // <Chat />
    <div class="app">
      <Board />

      <Menu />
    </div>

  )
}

export default App;
