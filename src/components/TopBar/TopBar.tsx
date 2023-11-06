import { FC } from 'react';
import styles from './TopBar.module.scss'
import { showLogInPage, showSingUpPage } from '../../store/fakeStoreSlice';
import { useAppDispatch } from '../../store/hooks';
import { useCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faCartShopping, faMagnifyingGlass, faStore, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
        <Link to={'/'} className={styles.logo}><FontAwesomeIcon icon={faStore} /> Fake</Link>
        <div className={styles.actionContainer}>
          {cookies.user !== undefined && (
            <>
              <button className={styles.ico}><FontAwesomeIcon icon={faUser} /></button>
              <Link className={styles.ico} to={`/cart`}><FontAwesomeIcon icon={faCartShopping} /></Link>
            </>
          )}
          {cookies.user === undefined && (<button className={styles.ico} onClick={() => (dispatch(showSingUpPage()))}><FontAwesomeIcon icon={faUserPlus} /></button>)}
          {cookies.user === undefined && (<button className={styles.ico} onClick={() => (dispatch(showLogInPage()))}><FontAwesomeIcon icon={faArrowRightToBracket} /></button>)}
        </div>
      </div>
    </header>
  )
}

export default TopBar;