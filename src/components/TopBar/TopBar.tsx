import { FC } from 'react';
import styles from './TopBar.module.scss'
import { showLogInPage } from '../../store/fakeStoreSlice';
import { useAppDispatch } from '../../store/hooks';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass, faStore, faUser } from '@fortawesome/free-solid-svg-icons';

const TopBar: FC = () => {
  const dispatch = useAppDispatch();
  const [cookies] = useCookies(['user']);

  return (
    <header className={styles.container}>
      <div className={styles.items}>
        <div className={styles.serch}>
          <input className={styles.input} placeholder={'Serch...'}/>
          <button className={styles.button}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <p className={styles.logo}><FontAwesomeIcon icon={faStore} /> Fake</p>
        <div className={styles.actionContainer}>
          {cookies.user !== undefined && (
            <>
              <button className={styles.ico}><FontAwesomeIcon icon={faUser} /></button>
              <Link className={styles.ico} to={`/cart`}><FontAwesomeIcon icon={faCartShopping} /></Link>
            </>
          )}
          {cookies.user === undefined && (<button onClick={() => (dispatch(showLogInPage()))}>Log in</button>)}
        </div>
      </div>
    </header>
  )
}

export default TopBar;