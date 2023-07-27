import { FC } from 'react';
import styles from './TopBar.module.scss'
import { Link } from 'react-router-dom';

const TopBar: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p>Fake store</p>
        <div className={styles.actionContainer}>
          <p>Profile</p>
          <p>Cart</p>
          <Link to={'/singUp'}>Sing up</Link>
          <Link to={'/logIn'}>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default TopBar;