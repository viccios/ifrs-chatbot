import { SunMoon } from 'lucide-react';
import ifrsLogo from '../../assets/ifrs.svg';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          src={ifrsLogo}
          alt="Logotipo IFRS"
          width={50}
          height={65}
          draggable="false"
        />
        <SunMoon className={styles.sunMoonIcon} />
      </aside>
    </>
  );
}

export default Sidebar;
