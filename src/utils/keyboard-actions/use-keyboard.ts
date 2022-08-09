import { KeyboardKey, reactToKeyUp } from './react-to-key-up';
  
export const useKeyboard = () => {
  document.addEventListener("keyup", (e) => {

    reactToKeyUp(e.key as KeyboardKey);
  })
}
