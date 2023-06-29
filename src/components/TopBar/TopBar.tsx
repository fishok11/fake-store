import { FC } from 'react';
import styles from './TopBar.module.scss'

const TopBar: FC = () => {
  return (
    <div>
      <div className={styles.container}>Fake store</div>
    </div>
  )
}

export default TopBar;