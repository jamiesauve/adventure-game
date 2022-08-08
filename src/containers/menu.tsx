import { BattleManager } from './BattleManager';
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.menu}>
      <BattleManager />
    </div>
  )
}

export default Menu;