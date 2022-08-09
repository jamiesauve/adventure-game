import { Board } from '../components/board/board';

import './view-area.scss';

export const ViewArea = () => {
  return (
    <div class="view-area">
      <div className="scrollable-container">
        <Board />
      </div>
    </div>
  )
}